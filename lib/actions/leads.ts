import { Lead } from "@/lib/types";
import { siteConfig } from "@/lib/site-config";
import type { FormMetadata } from "@/lib/form-metadata";

export type LeadSubmission = Omit<Lead, "id" | "createdAt" | "status">;

const firebaseProjectId = "portfolio-project-14a25";

function normalizeLeadInput(
  data: LeadSubmission,
  metadata: Partial<FormMetadata> | undefined,
  serverTimestampVal: any
): Record<string, unknown> {
  const name = data.name?.trim() ?? "";
  const email = data.email?.trim() ?? "";
  const phone = data.phone?.trim() ?? "";

  if (!name) throw new Error("Name is required.");
  if (!phone && !email) throw new Error("Phone or email is required.");

  return {
    name,
    email,
    phone,
    service: (data.service?.trim() || "General inquiry").slice(0, 200),
    message: (data.message?.trim() || "").slice(0, 5000),
    zip: data.zip?.trim() || "",
    type: data.type ?? "contact",
    status: "new",
    createdAt: new Date().toISOString(),
    submittedAt: serverTimestampVal,
    sourceUrl: metadata?.sourceUrl?.slice(0, 500) ?? "",
    referrer: metadata?.referrer?.slice(0, 500) ?? "",
    userAgent: metadata?.userAgent?.slice(0, 500) ?? "",
    projectId: firebaseProjectId,
  };
}

export async function createLead(
  data: LeadSubmission,
  metadata?: Partial<FormMetadata>
): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    // Dynamically import Firebase only when user submits a form
    const { db } = await import("@/lib/firebase");
    const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");

    const leadData = normalizeLeadInput(data, metadata, serverTimestamp());

    if (process.env.NODE_ENV === "development") {
      console.info("[createLead] Writing to Firestore project:", firebaseProjectId);
    }

    const docRef = await addDoc(collection(db, "leads"), leadData);

    try {
      await addDoc(collection(db, "mail"), {
        to: siteConfig.email,
        message: {
          subject: `New ${data.type === "quote" ? "Quote Request" : data.type === "newsletter" ? "Newsletter Signup" : "Contact Form"}: ${leadData.name}`,
          html: `
            <h3>New Lead Received</h3>
            <p><strong>Type:</strong> ${leadData.type}</p>
            <p><strong>Name:</strong> ${leadData.name}</p>
            <p><strong>Phone:</strong> ${leadData.phone}</p>
            <p><strong>Email:</strong> ${leadData.email}</p>
            ${leadData.zip ? `<p><strong>ZIP Code:</strong> ${leadData.zip}</p>` : ""}
            <p><strong>Service:</strong> ${leadData.service}</p>
            <p><strong>Message:</strong> ${leadData.message}</p>
            <p><strong>Source:</strong> ${leadData.sourceUrl}</p>
            <hr />
            <p>View in admin: <a href="${siteConfig.url}/admin/leads">${siteConfig.url}/admin/leads</a></p>
          `,
        },
      });
    } catch (mailError) {
      console.warn("[createLead] Lead saved; email queue write failed:", mailError);
    }

    return { success: true, id: docRef.id };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error saving lead";
    console.error("[createLead] Firestore write failed:", error);
    return { success: false, error: message };
  }
}

export async function createNewsletterLead(
  email: string,
  metadata?: Partial<FormMetadata>
): Promise<{ success: boolean; id?: string; error?: string }> {
  return createLead(
    {
      name: "Newsletter Subscriber",
      email: email.trim(),
      phone: "",
      service: "Newsletter",
      message: "Blog newsletter signup",
      type: "newsletter",
    },
    metadata
  );
}

export async function updateLeadStatus(
  id: string,
  status: Lead["status"]
): Promise<{ success: boolean; error?: string }> {
  try {
    const { db } = await import("@/lib/firebase");
    const { doc, updateDoc, serverTimestamp } = await import("firebase/firestore");
    await updateDoc(doc(db, "leads", id), { status, updatedAt: serverTimestamp() });
    return { success: true };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Update failed";
    console.error("[updateLeadStatus] Failed:", error);
    return { success: false, error: message };
  }
}

export async function deleteLead(
  id: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const { db } = await import("@/lib/firebase");
    const { doc, deleteDoc } = await import("firebase/firestore");
    await deleteDoc(doc(db, "leads", id));
    return { success: true };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Delete failed";
    console.error("[deleteLead] Failed:", error);
    return { success: false, error: message };
  }
}

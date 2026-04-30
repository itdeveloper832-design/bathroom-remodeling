import { Lead } from "@/lib/types";
import { siteConfig } from "@/lib/site-config";

// ─── PUBLIC: Submit a lead (addDoc only, no reads) ───────────────────────────

export async function createLead(
  data: Omit<Lead, "id" | "createdAt" | "status">
): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    const { db } = await import("@/lib/firebase");
    const { collection, addDoc } = await import("firebase/firestore");

    const leadData = {
      ...data,
      status: "new" as const,
      createdAt: new Date().toISOString(),
    };

    const docRef = await addDoc(collection(db, "leads"), leadData);

    // Trigger email notification via Firebase Trigger Email extension
    await addDoc(collection(db, "mail"), {
      to: siteConfig.email,
      message: {
        subject: `New ${data.type === "quote" ? "Quote Request" : "Contact Form"}: ${data.name}`,
        html: `
          <h3>New Lead Received</h3>
          <p><strong>Type:</strong> ${data.type === "quote" ? "Quote Request" : "Contact Form"}</p>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.zip ? `<p><strong>ZIP Code:</strong> ${data.zip}</p>` : ""}
          <p><strong>Service:</strong> ${data.service}</p>
          <p><strong>Message:</strong> ${data.message}</p>
          <hr />
          <p>This lead has been saved to your admin dashboard at <a href="${siteConfig.url}/admin/leads">${siteConfig.url}/admin/leads</a></p>
        `,
      },
    });

    return { success: true, id: docRef.id };
  } catch (error: any) {
    console.error("Error creating lead:", error);
    return { success: false, error: error.message };
  }
}

// ─── ADMIN: Update / Delete (client SDK writes — allowed by Firestore rules) ──

export async function updateLeadStatus(
  id: string,
  status: Lead["status"]
): Promise<{ success: boolean; error?: string }> {
  try {
    const { db } = await import("@/lib/firebase");
    const { doc, updateDoc } = await import("firebase/firestore");
    await updateDoc(doc(db, "leads", id), { status });
    return { success: true };
  } catch (error: any) {
    console.error("Error updating lead status:", error);
    return { success: false, error: error.message };
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
  } catch (error: any) {
    console.error("Error deleting lead:", error);
    return { success: false, error: error.message };
  }
}

import { Lead } from "@/lib/types";
import { db } from "@/lib/firebase";
import { collection, doc, updateDoc, deleteDoc, getDocs, query, orderBy, limit, addDoc } from "firebase/firestore";

import { siteConfig } from "@/lib/site-config";

export async function createLead(
  data: Omit<Lead, "id" | "createdAt" | "status">
): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
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
        subject: `New ${data.type === 'quote' ? 'Quote Request' : 'Contact Form'}: ${data.name}`,
        html: `
          <h3>New Lead Received</h3>
          <p><strong>Type:</strong> ${data.type === 'quote' ? 'Quote Request' : 'Contact Form'}</p>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.zip ? `<p><strong>ZIP Code:</strong> ${data.zip}</p>` : ''}
          <p><strong>Service:</strong> ${data.service}</p>
          <p><strong>Message:</strong> ${data.message}</p>
          <hr />
          <p>This lead has been saved to your admin dashboard.</p>
        `,
      },
    });

    return { success: true, id: docRef.id };
  } catch (error: any) {
    console.error("Error creating lead:", error);
    return { success: false, error: error.message };
  }
}

export async function updateLeadStatus(
  id: string,
  status: Lead["status"]
): Promise<{ success: boolean; error?: string }> {
  try {
    const leadRef = doc(db, "leads", id);
    await updateDoc(leadRef, { status });
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function deleteLead(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    const leadRef = doc(db, "leads", id);
    await deleteDoc(leadRef);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// Keeping these for legacy/server components if needed, though real-time is preferred on client
export async function getLeads(): Promise<Lead[]> {
  try {
    const q = query(collection(db, "leads"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Lead));
  } catch (error) {
    return [];
  }
}

export const getAllLeads = getLeads;

export async function getLeadsCount(): Promise<number> {
  const leads = await getLeads();
  return leads.length;
}

export async function getRecentLeads(maxLeads: number = 5): Promise<Lead[]> {
  try {
    const q = query(collection(db, "leads"), orderBy("createdAt", "desc"), limit(maxLeads));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Lead));
  } catch (error) {
    return [];
  }
}

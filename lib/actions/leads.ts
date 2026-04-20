"use server";

import { Lead } from "@/lib/types";

let inMemoryLeads: Lead[] = [];

export async function getLeads(): Promise<Lead[]> {
  return [...inMemoryLeads].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}

export async function createLead(
  data: Omit<Lead, "id" | "createdAt" | "status">
): Promise<{ success: boolean; id?: string; error?: string }> {
  const id = `lead-${Date.now()}`;
  inMemoryLeads.push({
    id,
    ...data,
    status: "new",
    createdAt: new Date(),
  });
  return { success: true, id };
}

export async function updateLeadStatus(
  id: string,
  status: Lead["status"]
): Promise<{ success: boolean; error?: string }> {
  inMemoryLeads = inMemoryLeads.map((lead) =>
    lead.id === id ? { ...lead, status } : lead
  );
  return { success: true };
}

export async function deleteLead(id: string): Promise<{ success: boolean; error?: string }> {
  inMemoryLeads = inMemoryLeads.filter((lead) => lead.id !== id);
  return { success: true };
}

// Aliases for admin pages
export const getAllLeads = getLeads;

export async function getLeadsCount(): Promise<number> {
  return inMemoryLeads.length;
}

export async function getRecentLeads(maxLeads: number = 5): Promise<Lead[]> {
  return (await getLeads()).slice(0, maxLeads);
}

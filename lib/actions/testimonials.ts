"use server";

import { Testimonial } from "@/lib/types";

let inMemoryTestimonials: Testimonial[] = [];

export async function getTestimonials(): Promise<Testimonial[]> {
  return [...inMemoryTestimonials].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}

export async function createTestimonial(
  data: Omit<Testimonial, "id" | "createdAt">
): Promise<{ success: boolean; id?: string; error?: string }> {
  const id = `testimonial-${Date.now()}`;
  inMemoryTestimonials.push({
    id,
    ...data,
    createdAt: new Date(),
  });
  return { success: true, id };
}

export async function updateTestimonial(
  id: string,
  data: Partial<Omit<Testimonial, "id" | "createdAt">>
): Promise<{ success: boolean; error?: string }> {
  inMemoryTestimonials = inMemoryTestimonials.map((item) =>
    item.id === id ? { ...item, ...data } : item
  );
  return { success: true };
}

export async function deleteTestimonial(id: string): Promise<{ success: boolean; error?: string }> {
  inMemoryTestimonials = inMemoryTestimonials.filter((item) => item.id !== id);
  return { success: true };
}

export async function getTestimonialsCount(): Promise<number> {
  return inMemoryTestimonials.length;
}

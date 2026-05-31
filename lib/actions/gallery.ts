import { GalleryItem } from "@/lib/types";
import { defaultGalleryItems } from "@/lib/seed-blog";
import { submitToIndexNow } from "@/lib/indexnow";

let inMemoryGallery: GalleryItem[] = defaultGalleryItems.map((item, index) => ({
  id: `gallery-${index + 1}`,
  title: item.title,
  category: item.category,
  imageUrl: item.imageUrl,
  description: item.description,
  featured: item.featured,
  beforeImage: (item as any).beforeImage,
  afterImage: (item as any).afterImage,
  createdAt: new Date(),
}));

export async function getGalleryItems(): Promise<GalleryItem[]> {
  return [...inMemoryGallery].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}

export async function getGalleryItemsByCategory(
  category: "bathroom" | "shower" | "vanity"
): Promise<GalleryItem[]> {
  return (await getGalleryItems()).filter((item) => item.category === category);
}

export async function createGalleryItem(
  data: Omit<GalleryItem, "id" | "createdAt">
): Promise<{ success: boolean; id?: string; error?: string }> {
  const id = `gallery-${Date.now()}`;
  inMemoryGallery.push({
    id,
    ...data,
    createdAt: new Date(),
  });
  
  // IndexNow: Submit the gallery page
  submitToIndexNow("/gallery");
  
  return { success: true, id };
}

export async function updateGalleryItem(
  id: string,
  data: Partial<Omit<GalleryItem, "id" | "createdAt">>
): Promise<{ success: boolean; error?: string }> {
  inMemoryGallery = inMemoryGallery.map((item) =>
    item.id === id ? { ...item, ...data } : item
  );
  
  // IndexNow: Submit the gallery page
  submitToIndexNow("/gallery");
  
  return { success: true };
}

export async function deleteGalleryItem(id: string): Promise<{ success: boolean; error?: string }> {
  inMemoryGallery = inMemoryGallery.filter((item) => item.id !== id);
  
  // IndexNow: Submit the gallery page
  submitToIndexNow("/gallery");
  
  return { success: true };
}

export async function uploadGalleryImage(
  file: File,
  type: "before" | "after"
): Promise<{ success: boolean; url?: string; error?: string }> {
  void file;
  void type;
  return {
    success: false,
    error: "Image upload is disabled because Firebase has been removed.",
  };
}

export async function getFeaturedGalleryItems(): Promise<GalleryItem[]> {
  const featured = (await getGalleryItems()).filter((item) => item.featured);
  return featured.length > 0 ? featured : getGalleryItems();
}

export async function getGalleryCount(): Promise<number> {
  return inMemoryGallery.length;
}

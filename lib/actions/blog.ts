import type { BlogPost, Category } from "@/lib/types";
import { 
  post_1,
  post_2,
  post_3,
  post_4,
  post_5,
  post_6,
  post_7,
  post_8,
  post_9,
  post_10
} from "@/lib/seed-blog";
import { submitToIndexNow } from "@/lib/indexnow";

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

const basePosts: BlogPost[] = [
  post_1,
  post_2,
  post_3,
  post_4,
  post_5,
  post_6,
  post_7,
  post_8,
  post_9,
  post_10
].map((post, index) => ({
  id: `post-${index + 1}`,
  title: post.title,
  slug: post.slug,
  content: post.content,
  excerpt: post.excerpt,
  featuredImage: post.featuredImage,
  category: post.category,
  author: post.author,
  status: post.status,
  metaTitle: post.metaTitle,
  metaDescription: post.metaDescription,
  keywords: post.tags || [],
  tags: post.tags,
  readTime: index === 0 ? 12 : index === 1 ? 8 : index === 2 ? 5 : 10,
  publishedAt: post.publishedAt,
  createdAt: post.createdAt,
  updatedAt: post.updatedAt,
}));

let inMemoryPosts: BlogPost[] = [...basePosts];
let inMemoryCategories: Category[] = [
  { id: "cat-1", name: "Bathroom Remodeling", slug: "bathroom-remodeling", description: "Bathroom remodeling guides and advice." },
  { id: "cat-2", name: "Design Trends", slug: "design-trends", description: "Latest design trends and inspiration." },
  { id: "cat-3", name: "Costs & Budget", slug: "costs-budget", description: "Detailed pricing guides for Chandler bathroom remodels." },
  { id: "cat-4", name: "Materials", slug: "materials", description: "Expert advice on tile, fixtures, and surfaces." },
  { id: "cat-5", name: "Home Value", slug: "home-value", description: "ROI analysis and equity-building tips." },
];

export async function getPosts(): Promise<BlogPost[]> {
  return [...inMemoryPosts].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  return (await getPosts()).filter((post) => post.status === "published");
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return inMemoryPosts.find((post) => post.slug === slug) ?? null;
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  return inMemoryPosts.find((post) => post.id === id) ?? null;
}

export async function getRelatedPosts(category: string, excludeId: string, maxPosts: number = 3): Promise<BlogPost[]> {
  return (await getPublishedPosts())
    .filter((post) => post.category === category && post.id !== excludeId)
    .slice(0, maxPosts);
}

export async function createPost(
  data: Omit<BlogPost, "id" | "createdAt" | "updatedAt">
): Promise<{ success: boolean; id?: string; error?: string }> {
  const slug = data.slug || generateSlug(data.title);
  const existing = await getPostBySlug(slug);
  if (existing) {
    return { success: false, error: "A post with this slug already exists" };
  }
  const id = `post-${Date.now()}`;
  const now = new Date().toISOString();
  inMemoryPosts.push({
    ...(data as BlogPost),
    id,
    slug,
    createdAt: now,
    updatedAt: now,
    publishedAt: data.status === "published" ? now : null,
  });

  // IndexNow: Submit if published
  if (data.status === "published") {
    submitToIndexNow([`/blog/${slug}`, "/blog"]);
  }

  return { success: true, id };
}

export async function updatePost(
  id: string,
  data: Partial<Omit<BlogPost, "id" | "createdAt">>
): Promise<{ success: boolean; error?: string }> {
  const post = inMemoryPosts.find(p => p.id === id);
  if (post && post.status === "published") {
    submitToIndexNow([`/blog/${post.slug}`, "/blog"]);
  }

  inMemoryPosts = inMemoryPosts.map((post) =>
    post.id === id ? { ...post, ...data, updatedAt: new Date().toISOString() } : post
  );
  return { success: true };
}

export async function deletePost(id: string): Promise<{ success: boolean; error?: string }> {
  const post = inMemoryPosts.find(p => p.id === id);
  if (post && post.status === "published") {
    // Note: Technically for delete, some search engines want the URL submitted to signify it's gone
    submitToIndexNow([`/blog/${post.slug}`, "/blog"]);
  }
  
  inMemoryPosts = inMemoryPosts.filter((post) => post.id !== id);
  return { success: true };
}

export const getAllPosts = getPosts;

export async function updatePostStatus(
  id: string,
  status: "draft" | "published"
): Promise<{ success: boolean; error?: string }> {
  const post = inMemoryPosts.find(p => p.id === id);
  
  inMemoryPosts = inMemoryPosts.map((post) =>
    post.id === id
      ? {
          ...post,
          status,
          updatedAt: new Date().toISOString(),
          publishedAt: status === "published" ? new Date().toISOString() : null,
        }
      : post
  );

  // IndexNow: Submit if newly published or updated while published
  if (status === "published" && post) {
    submitToIndexNow([`/blog/${post.slug}`, "/blog"]);
  }

  return { success: true };
}

export async function getPostsCount(): Promise<number> {
  return inMemoryPosts.length;
}

export async function getRecentPosts(maxPosts: number = 5): Promise<BlogPost[]> {
  return (await getPosts()).slice(0, maxPosts);
}

export async function getCategories(): Promise<Category[]> {
  return [...inMemoryCategories];
}

export async function createCategory(
  data: Omit<Category, "id">
): Promise<{ success: boolean; id?: string; error?: string }> {
  const id = `cat-${Date.now()}`;
  inMemoryCategories.push({ id, ...data });
  return { success: true, id };
}

export async function updateCategory(
  id: string,
  data: Partial<Omit<Category, "id">>
): Promise<{ success: boolean; error?: string }> {
  inMemoryCategories = inMemoryCategories.map((category) =>
    category.id === id ? { ...category, ...data } : category
  );
  return { success: true };
}

export async function deleteCategory(id: string): Promise<{ success: boolean; error?: string }> {
  inMemoryCategories = inMemoryCategories.filter((category) => category.id !== id);
  return { success: true };
}

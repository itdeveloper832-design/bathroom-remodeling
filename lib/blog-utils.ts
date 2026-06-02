import { marked } from 'marked';

export async function parseMarkdown(markdown: string) {
  // Convert markdown to HTML
  const html = await marked.parse(markdown);
  // Demote any H1 headings inside the post content to H2 to ensure there is only one H1 per page
  return html.replace(/<h1([\s>])/gi, '<h2$1').replace(/<\/h1>/gi, '</h2>');
}

export function extractHeadings(markdown: string) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length; // 2 for ##, 3 for ###
    const text = match[2];
    const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    headings.push({ level, text, id });
  }

  return headings;
}

export function calculateReadTime(content: string) {
  const wordsPerMinute = 200;
  const noOfWords = content.split(/\s+/g).length;
  const minutes = noOfWords / wordsPerMinute;
  return Math.ceil(minutes);
}

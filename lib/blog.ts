import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = join(process.cwd(), 'essays');
const worksDirectory = join(process.cwd(), 'works');

export function getEssaySlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getWorkSlugs() {
  return fs.readdirSync(worksDirectory);
}

interface Essay {
  slug?: string;
  title?: string;
  description?: string;
  image?: string;
  date?: string;
  content?: string;
  tag?: string;
}

export function getEssayBySlug(
  slug: string,
  fields: (keyof Essay)[] = []
): Essay {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: Partial<Essay> = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    } else if (field === 'content') {
      items[field] = content;
    } else if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllEssays(fields: (keyof Essay)[] = []): Essay[] {
  const slugs = getEssaySlugs();
  const posts = slugs
    .map((slug) => getEssayBySlug(slug, fields))
    .sort((a, b) => {
      const dateA = a.date || '0000-00-00';
      const dateB = b.date || '0000-00-00';
      return dateA > dateB ? -1 : 1;
    });

  return posts;
}

export function getWorkBySlug(
  slug: string,
  fields: (keyof Essay)[] = []
): Essay {
  try {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(worksDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const items: Partial<Essay> = {};

    fields.forEach((field) => {
      if (field === 'slug') {
        items[field] = realSlug;
      } else if (field === 'content') {
        items[field] = content;
      } else if (data[field]) {
        items[field] = data[field];
      }
    });

    return items;
  } catch (error) {
    throw new Error('Error getting work by slug');
    return {};
  }
}

export function getAllWorks(fields: (keyof Essay)[] = []): Essay[] {
  const slugs = getWorkSlugs();
  const posts = slugs
    .map((slug) => getWorkBySlug(slug, fields))
    .sort((a, b) => {
      const dateA = a.date || '0000-00-00';
      const dateB = b.date || '0000-00-00';
      return dateA > dateB ? -1 : 1;
    });

  return posts;
}

export async function convertMarkdownToHtml(markdown: string): Promise<string> {
  try {
    const result = await remark()
      .use(html, { sanitize: false })
      .process(markdown);
    return result.toString();
  } catch (error) {
    throw new Error('Error converting Markdown to HTML');
  }
}

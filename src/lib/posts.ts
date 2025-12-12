import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostData {
    id: string;
    slug: string;
    date: string;
    title: string;
    description?: string;
    excerpt?: string;
    contentHtml?: string;
}

function slugify(text: string): string {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')        // Replace spaces with -
        .replace(/[^\w\-]+/g, '')    // Remove all non-word chars
        .replace(/\-\-+/g, '-');     // Replace multiple - with single -
}

export function getSortedPostsData(): PostData[] {
    // Get file names under /posts
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Generate slug from title, fallback to id
        const title = matterResult.data.title || id;
        const slug = slugify(title);

        // Generate excerpt
        let excerpt = matterResult.data.description;
        if (!excerpt) {
            // Generate excerpt from content if description is missing
            const content = matterResult.content;
            // Strip markdown basics (very simple approach) and take first few chars
            // Remove headers
            const plainText = content.replace(/^#+\s+.*$/gm, '')
                // Remove bold/italic/links
                .replace(/[#*`_\[\]]/g, '')
                // Collapse whitespace
                .replace(/\s+/g, ' ')
                .trim();

            excerpt = plainText.substring(0, 160) + (plainText.length > 160 ? '...' : '');
        }

        // Combine the data with the id
        return {
            id,
            slug,
            excerpt,
            ...(matterResult.data as { date: string; title: string; description?: string }),
        };
    });
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getPostData(slug: string): Promise<PostData> {
    const allPosts = getSortedPostsData();
    const post = allPosts.find(p => p.slug === slug);

    if (!post) {
        throw new Error(`Post not found for slug: ${slug}`);
    }

    const fullPath = path.join(postsDirectory, `${post.id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
        ...post,
        contentHtml,
    };
}

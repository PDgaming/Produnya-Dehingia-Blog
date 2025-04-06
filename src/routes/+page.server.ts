import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import { error } from '@sveltejs/kit';
import { marked } from 'marked';

export async function load() {
    try {
        const postsDir = join(process.cwd(), 'src/posts/Blog Posts');
        const files = await readdir(postsDir);

        const posts = await Promise.all(
            files
                .filter(file => file.endsWith('.md'))
                .map(async (file) => {
                    const content = await readFile(join(postsDir, file), 'utf-8');
                    const slug = file.replace(/\.md$/, '');
                    const { title, date } = extractFrontmatter(content);

                    return {
                        slug,
                        title: title || slug,
                        date: date || new Date().toISOString(),
                        content: marked(content)
                    };
                })
        );

        // Sort posts by date, newest first
        posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        return {
            posts
        };
    } catch (err) {
        throw error(500, 'Failed to load blog posts');
    }
}

function extractFrontmatter(content: string) {
    const metadata: { [key: string]: string } = {};
    const commentMatch = content.match(/<!--\s*({[\s\S]*?})\s*-->/);

    if (commentMatch) {
        try {
            const metadataStr = commentMatch[1];
            const parsed = JSON.parse(metadataStr);
            return parsed;
        } catch (err) {
            console.error('Failed to parse metadata:', err);
            return {};
        }
    }

    return metadata;
} 
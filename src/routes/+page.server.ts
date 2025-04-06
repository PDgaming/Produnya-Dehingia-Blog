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
                    const metadata = extractMetadata(content)

                    return {
                        metadata,
                        content: marked(content)
                    };
                })
        );

        // Sort posts by date, newest first
        posts.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

        return {
            posts
        };
    } catch (err) {
        throw error(500, 'Failed to load blog posts');
    }
}

function extractMetadata(content: string) {
    const metadata: { [key: string]: string } = {};
    const commentMatch = content.match(/<!--\s*({[\s\S]*?})\s*-->/);

    if (commentMatch) {
        try {
            const metadataStr = commentMatch[1];
            return JSON.parse(metadataStr);
        } catch (err) {
            console.error('Failed to parse metadata:', err);
            return {};
        }
    }

    return metadata;
} 
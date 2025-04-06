import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import { extractMetadata } from '$lib/utils/extractMetadata';

export async function load() {
    try {
        const allPostFiles = import.meta.glob("/src/posts/Blog-Posts/*.md", { eager: true, query: "raw" })
        const posts = Object.entries(allPostFiles).map(([path, mod]: any) => {
            const content = mod.default;
            const metadata = extractMetadata(content);

            return {
                content: marked(content),
                metadata
            }
        })

        // Sort posts by date, newest first
        posts.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

        return {
            posts
        };
    } catch (err) {
        throw error(500, 'Failed to load blog posts');
    }
}
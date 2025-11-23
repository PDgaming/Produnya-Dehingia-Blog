import { readFileSync } from 'fs';
import { join } from 'path';
import { marked } from 'marked';
import { extractMetadata } from '$lib/utils/extractMetadata';
import { error } from "@sveltejs/kit"

export async function load({ params }: { params: { slug: string } }) {
    const { slug } = params;
    try {
        const allPostFiles: Record<string, { default: string }> = import.meta.glob("/src/posts/Blog-Posts/*.md", { eager: true, query: "raw" })
        const post = Object.entries(allPostFiles).find(([path, mod]: [string, { default: string }]) => {
            const content = mod.default;
            const metadata = extractMetadata(content);
            return metadata.slug === slug;
        });

        if (!post) {
            throw error(404, 'Blog post not found');
        }

        const [_, mod] = post;
        const content = mod.default;
        const metadata = extractMetadata(content);

        return {
            post: {
                content: marked(content),
                metadata
            }
        };
    } catch (err) {
        throw error(500, 'Failed to load blog post');
    }
}
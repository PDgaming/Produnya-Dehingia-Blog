import { readFileSync } from 'fs';
import { join } from 'path';
import { marked } from 'marked';

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

export async function load({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const filePath = join('src/posts/Blog Posts', `${slug}.md`);
    const content = readFileSync(filePath, 'utf-8');
    const metadata = extractMetadata(content);

    return {
        content: marked(content),
        metadata
    };
}
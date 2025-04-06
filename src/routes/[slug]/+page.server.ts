import { readFileSync } from 'fs';
import { join } from 'path';
import { marked } from 'marked';
import { extractMetadata } from '$lib/utils/extractMetadata';

export async function load({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const filePath = join('src/posts/Blog-Posts', `${slug}.md`);
    const content = readFileSync(filePath, 'utf-8');
    const metadata = extractMetadata(content);

    return {
        content: marked(content),
        metadata
    };
}
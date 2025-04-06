import { readFileSync } from 'fs';
import { join } from 'path';
import { marked } from 'marked';

export async function load({ params }) {
    const { slug } = params;
    const filePath = join('src/posts/Blog Posts', `${slug}.md`);
    const content = readFileSync(filePath, 'utf-8');

    return {
        content: marked(content)
    };
}
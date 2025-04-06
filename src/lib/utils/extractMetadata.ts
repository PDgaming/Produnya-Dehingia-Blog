export function extractMetadata(content: string) {
    const match = content.match(/<!--\s*({[\s\S]*?})\s*-->/);
    if (match) {
        try {
            return JSON.parse(match[1]);
        } catch (e) {
            console.error('Invalid metadata JSON:', e);
        }
    }
    return {};
}
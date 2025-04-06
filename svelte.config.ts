import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-bash';

const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx', '.md'],
			remarkPlugins: [],
			rehypePlugins: [],
			smartypants: true,
			extension: '.md',
			highlight: {
				highlighter: (code: string, lang: string) => {
					if (lang && Prism.languages[lang]) {
						return `<pre class="language-${lang}"><code>${Prism.highlight(code, Prism.languages[lang], lang)}</code></pre>`;
					}
					return `<pre><code>${code}</code></pre>`;
				}
			}
		})
	],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.svx', '.md']
};

export default config;

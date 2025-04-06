import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript.js';
import 'prismjs/components/prism-javascript.js';
import 'prismjs/components/prism-markdown.js';
import 'prismjs/components/prism-bash.js';

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
				highlighter: (code, lang) => {
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

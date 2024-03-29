import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import svelte from "@astrojs/svelte";
import { remarkReadingTime } from './remark-reading-time.mjs';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: "https://blog.adamworley.com/",
	integrations: [mdx(), sitemap(), svelte()],
	markdown: {
		remarkPlugins: [remarkReadingTime],
	  },
});

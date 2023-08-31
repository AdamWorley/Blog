import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: "https://blog.adamworley.com/",
  integrations: [mdx(), svelte()],
  markdown: {
    shikiConfig: {
      theme: "nord",
    },
    rehypePlugins: [
      [rehypeExternalLinks,
      {
        target: "_blank",
      }],
    ],
  },
});

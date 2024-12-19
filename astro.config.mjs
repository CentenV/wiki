// @ts-check
import { defineConfig } from 'astro/config';
import { rehypeHeadingIds } from "@astrojs/markdown-remark"
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://wiki.centen.dev",
  base: "/",
  integrations: [mdx(), tailwind({ applyBaseStyles: false }), react()],
});
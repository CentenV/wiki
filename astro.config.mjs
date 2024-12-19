// @ts-check
import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://wiki.centen.dev",
  base: "/",
  integrations: [mdx(), tailwind()],
});
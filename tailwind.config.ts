import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "wiki-sidebar-full": "16rem",
        "wiki-logo": "10%"
      }
    },
    colors: {
      "wiki-background-color": "#000000",
      "wiki-foreground-color": "#151515",
      "wiki-hud-elements-color": "#353535",
      "wiki-border-color": "#FFFFFF",
      "wiki-hud-border-color": "#717171"
    },
    borderRadius: {
      "wiki": "0.4rem"
    },
    borderWidth: {
      "wiki": "1px"
    },
  },
  plugins: [],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
}

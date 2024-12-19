/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing: {
				"wiki-sidebar-full": "16rem",
				"wiki-logo": "10%"
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: "100%"
					}
				}
			}
		},
		colors: {
			"wiki-background-color": "#121212",
			"wiki-hud-elements-color": "#353535",
			"wiki-hud-border-color": "#717171"
		},
		borderRadius: {
			"wiki": "0.5rem"
		},
		borderWidth: {
			"wiki-default": "1px",
			"wiki-h2": "1px",
		},
	},
	plugins: [
		require("@tailwindcss/typography")
	],
}

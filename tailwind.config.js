/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        "wiki-top-bar": "4rem",
        "wiki-sidebar-full": "18rem",
        "wiki-logo": "10%"
      }
    },
    colors: {
      "wiki-background-color": "#121212",
      "wiki-foreground-color": "#3f3f3f",
      "wiki-border-color": "#717171",
    },
    borderRadius: {
      "wiki": "0.4rem"
    },
    borderWidth: {
      "wiki": "2px"
    },
  },
  plugins: [],
}


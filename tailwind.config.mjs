/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",                    // <<<<<< WICHTIG
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        card: "0 10px 20px rgba(0,0,0,.06), 0 6px 6px rgba(0,0,0,.04)",
      },
      borderRadius: { xl: "0.9rem", "2xl": "1.25rem" },
    },
  },
  plugins: [],
};

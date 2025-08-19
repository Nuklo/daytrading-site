import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb",   // Blau
          light: "#3b82f6",
          dark: "#1e40af",
        },
        accent: {
          DEFAULT: "#10b981",   // Grün
          dark: "#059669",
        },
        neutral: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          700: "#334155",
          900: "#0f172a",
        },
      },
      boxShadow: {
        card: "0 10px 20px rgba(0,0,0,.06), 0 6px 6px rgba(0,0,0,.04)",
      },
      borderRadius: {
        xl: "0.9rem",
        "2xl": "1.25rem",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: { color: theme("colors.primary.DEFAULT"), "text-decoration": "none" },
            "a:hover": { color: theme("colors.primary.dark") },
            h1: { color: theme("colors.neutral.900") },
            h2: { color: theme("colors.neutral.900") },
            h3: { color: theme("colors.neutral.900") },
            code: { backgroundColor: theme("colors.neutral.100"), padding: "0.15rem 0.35rem", borderRadius: "0.375rem" },
          },
        },
      }),
    },
  },
  plugins: [typography()],
};

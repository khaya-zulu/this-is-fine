import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ["0.75rem", "1rem"],
        base: ["0.875rem", "1.25rem"],
        lg: ["1rem", "1.5rem"],
        xl: ["1.125rem", "1.75rem"],
      },
      fontFamily: {
        playpen: ["var(--font-playpen)"],
      },
      colors: {
        iris: {
          10: "#F9F9FF",
          200: "#ECEEFD",
          400: "#B4BCF6",
          800: "#6878ED",
        },
      },
    },
  },
  plugins: [],
};
export default config;

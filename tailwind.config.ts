import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        background: "#F9F9F9",
        foreground: "#1c1917",
        divider: "#E0E0E0",
        accent: {
          blue: "#00D1FF",
          coffee: "#3E2723",
        },
      },
      boxShadow: {
        'bento': '0 8px 30px rgba(0, 0, 0, 0.04)',
        'bento-hover': '0 20px 40px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'bento': '24px',
      },
      spacing: {
        'bento-gap': '1.5rem',
      },
    },
  },
  plugins: [],
};
export default config;

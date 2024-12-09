import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          950: "hsla(0, 0%, 100%, 0.7);",
          951: "hsla(0, 0%, 100%, 0.4);",
          952: "#373b64",
        },
      },
      backgroundImage: {
        gradient: "url('/static/bg.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;

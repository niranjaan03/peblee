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
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          "Inter",
          "sans-serif",
        ],
      },
      colors: {
        peblee: {
          blue: "#6F97D7",
          "blue-dark": "#5B84C9",
        },
      },
    },
  },
  plugins: [],
};

export default config;

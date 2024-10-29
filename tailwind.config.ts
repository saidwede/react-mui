import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      colors: {
        primary: "#007BFF",
        tertiary: '#FD7E14',
        "border-highlight": "#FD7E1433",
        "dark-primary": "#212529",
        "dark-secondary": "#6C757D",
        "dark-dark": "#4A4C4D",
        "gray-light-1": "#F0F0F0",
        "border-primary": "#E9ECEF"
      },
    },
  },
  plugins: [],
};
export default config;

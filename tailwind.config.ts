import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'entrance': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        'ping-once': 'ping 1s linear 1',
        'entrance': 'entrance 1s linear 1'
      },
      
      backgroundImage: {
        hero: `url('/images/Landscape Background.jpg')`,
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'main-blue': {
          light: "#CFEAF2",
          default: "#A0D5E4",
          dark: "#6BA2AF",
        },
        'main-brown': {
          light: "#FFE4C7",
          default: "#FFD1A1",
          dark: "#E6A778",
        },
        "main-green": {
          light: "#D3E7C7",
          default: "#B2D3A8",
          dark: "#8BA37A",
        },
      },
    },
  },
  plugins: [],
};
export default config;

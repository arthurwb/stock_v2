import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      orange: "#f08f4f",
      red: "#E05858FF",
      black: "#000000",
      white: "#FFFFFF",
      lightgrey: "#686868FF",
      grey: "#222222FF",
      darkgrey: "#111111",
      transparent: "#00000000",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      mono: ['Courier New', 'monospace']
    }
  },
  plugins: [],
};
export default config;
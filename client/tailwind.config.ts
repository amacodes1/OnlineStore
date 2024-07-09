// import { Work_Sans } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    colors: {
      white: "#FFFFFF",
      white25: "#FFFFFF40",
      white0: "#FFFFFF00",
      black20: "#00000033",
      black30: "#0000004D",
      dark: "#28303F",
      dark50: "#E6E7E6",
      dark300: "#545D59",
      dark400: "#333D39",
      dark500: "#000D07",
      gray50: "#FBFBFB",
      gray100: "#F3F5F6",
      gray150: "#F3F5F7",
      gray200: "#EEEEEE",
      gray300: "#E6E6E6",
      gray500: "#D9D9D9",
      gray600: "#C5C5C5",
      gray700: "#9A9A9A",
      gray800: "#777777",
      green50: "#EBFAF3",
      green100: "#C1EFDA",
      green200: "#A3E7C9",
      green400: "#60D5A1",
      green500: "#38CB89",
      green600: "#33B97D",
      green800: "#1F704B",
      gold: "#FFB800",
    },

    fontFamily: {
      Work_Sans: ["Work Sans", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;

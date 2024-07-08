import { Work_Sans } from "next/font/google";
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
      dark: "#28303F",
      dark50: "#E6E7E6",
      dark400: "#333D39",
      gray50: "#FBFBFB",
      gray100: "#F3F5F6",
      gray200: "#EEEEEE",
      gray800: "#777777",
      paleGreen: "#C1EFDA",
      green50: "#EBFAF3",
      green500: "#38CB89",
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

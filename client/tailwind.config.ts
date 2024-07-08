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
      paleGreen: "#C1EFDA",
      dark400: "#333D39",
      dark: "#28303F",
      dark50: "#E6E7E6",
      white: "#FFFFFF",
      gray100: "#F3F5F6",
      green50: "#EBFAF3",
      green500: "#38CB89",
    },

    fontFamily: {
      Work_Sans: ["Work Sans", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;

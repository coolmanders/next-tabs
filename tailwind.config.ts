import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
      },
      minWidth: {
        "15p": "15%",
      },
      fontSize: {
        xs: "12px",
      },
      borderRadius: {
        tab: "10px",
        active: "6px",
      },
      colors: {
        "tab-background": "#151414",
        "tab-text": "#9A9696",
        "active-background": "#282626",
        "active-text": "#D1CFCF",
      },
    },
  },
};
export default config;

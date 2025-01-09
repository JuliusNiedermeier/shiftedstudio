import type { Config } from "tailwindcss";

// Figma line height calculation https://help.figma.com/hc/en-us/articles/360039956634-Explore-text-properties#line-height
// Figma tracking calculation https://help.figma.com/hc/en-us/articles/360039956634-Explore-text-properties#letter-spacing

const rfs = 16; // Root font size
const pxRem = (px: number) => px / rfs;

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "background-primary": "#F2F2F2",
      "background-secondary": "#FFFFFF",
      "foreground-primary": "#282828",
      "foreground-secondary": "#808080",
    },
    fontFamily: {
      sans: ["var(--font-switzer)"],
      serif: ["var(--font-tiempos-headline)"],
      "sans-variant": ["var(--font-syne)"],
      "serif-numeric": ["var(--font-novar)"],
    },
    fontWeight: {},
    fontSize: {
      "label-primary": [
        `${pxRem(16)}rem`,
        {
          fontWeight: "600",
          lineHeight: `${pxRem(18)}rem`,
          letterSpacing: "-.002em",
        },
      ],
      "label-secondary": [
        `${pxRem(16)}rem`,
        {
          fontWeight: "400",
          lineHeight: `${pxRem(18)}rem`,
          letterSpacing: "-.002em",
        },
      ],
      body: [
        `${pxRem(24)}rem`,
        {
          fontWeight: "600",
          lineHeight: `${pxRem(32)}rem`,
          letterSpacing: "0em",
        },
      ],
      heading: [
        `${pxRem(36)}rem`,
        {
          fontWeight: "700",
          lineHeight: `${pxRem(42)}rem`,
          letterSpacing: "-.002em",
        },
      ],
      "heading-lg": [
        `${pxRem(64)}rem`,
        {
          fontWeight: "700",
          lineHeight: `${pxRem(80)}rem`,
          letterSpacing: "-.002em",
        },
      ],
      display: [
        `${pxRem(128)}rem`,
        {
          fontWeight: "400",
          lineHeight: `${pxRem(140)}rem`,
          letterSpacing: "-.002em",
        },
      ],
      "display-lg": [
        `${pxRem(400)}rem`,
        {
          fontWeight: "700",
          lineHeight: `${pxRem(360)}rem`,
          letterSpacing: "-.002em",
        },
      ],
    },
  },
  plugins: [],
} satisfies Config;

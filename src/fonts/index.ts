import localFont from "next/font/local";

export const switzer = localFont({
  src: [
    {
      path: "./switzer/switzer-regular.woff2",
      weight: "400", // Regular or Normal
    },
    {
      path: "./switzer/switzer-semibold.woff2",
      weight: "600", // Semibold
    },
    {
      path: "./switzer/switzer-bold.woff2",
      weight: "bold", // Bold
    },
  ],
  display: "swap",
  variable: "--font-switzer",
});

export const syne = localFont({
  src: [
    {
      path: "./syne/syne-bold.woff2",
      weight: "700", // Bold
    },
  ],
  display: "swap",
  variable: "--font-syne",
});

export const novar = localFont({
  src: [
    {
      path: "./novar/novar.woff2",
      weight: "400", // Regular or Normal
    },
  ],
  display: "swap",
  variable: "--font-novar",
});

export const tiemposHeadline = localFont({
  src: [
    {
      path: "./tiempos-headline/tiempos-headline-regular.woff2",
      weight: "400", // Regular or Normal
    },
  ],
  display: "swap",
  variable: "--font-tiempos-headline",
});

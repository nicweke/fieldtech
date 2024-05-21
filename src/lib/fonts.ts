import localFont from "next/font/local";

export const Outfit = localFont({
  src: "../fonts/outfit.ttf",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
  variable: "--font-sans",
});
export const Reddit = localFont({
  src: "../fonts/RedditV.ttf",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
  variable: "--font-sans",
});

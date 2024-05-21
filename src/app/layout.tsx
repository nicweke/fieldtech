import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reddit, Outfit } from "@/lib/fonts";
import Head from "next/head";

//const font = Outfit({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Fieldtech Systems (K) Limited",
    template: "%s - Fieldtech Systems (K) Limited",
  },
  description: " We deliver results, reliability and rock solid dependability",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head> */}
      <body className={cn("max-h-full", Reddit.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

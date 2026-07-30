import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Pattern Issue — The Sequin Corset Dress",
  description:
    "A made-to-measure crochet pattern with written instructions and step-by-step video tutorials. Join the waitlist for Issue No. 001.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=melodrama@400,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

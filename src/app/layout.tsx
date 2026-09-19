import type { Metadata } from "next";
import { Outfit, Bebas_Neue } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Aditya Kumar — Photographer & Videographer",
  description:
    "Cinematic photography and video for brands that move — showrooms, bikes, and stories in motion. Portfolio of Aditya Kumar.",
  openGraph: {
    title: "Aditya Kumar — Photographer & Videographer",
    description:
      "Cinematic photography and video for brands that move — showrooms, bikes, and stories in motion.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${bebas.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

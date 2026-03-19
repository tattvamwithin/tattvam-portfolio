import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["300", "400", "500", "600"] });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", weight: ["400", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Tattvam | Premium Portfolio",
  description: "Senior Full Stack IT Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}

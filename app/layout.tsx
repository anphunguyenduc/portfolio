import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "An Phu Nguyen Duc — Portfolio",
  description:
    "RMIT Bachelor of Business (Finance & Economics) scholarship portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="bg-bg text-text-primary min-h-screen">
        <Nav />
        <main className="lg:ml-[220px] min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

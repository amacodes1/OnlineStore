import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import InfoBar from "@/components/InfoBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/components/CartProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online Store",
  description: "Generated by Mercy Ezihe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-x-hidden h-[100%] w-[100%] flex flex-col min-h-screen relative `}
      >
        <CartProvider>
          <InfoBar />
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

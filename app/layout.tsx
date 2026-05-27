import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "PROSPECT KSA | Industrial Excellence",
  description: "Leading provider of equipment rental, manpower solutions, coating, blasting, infrastructure, and industrial contracting services across Saudi Arabia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className="font-sans antialiased bg-brand-gray text-brand-navy"
      >
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";

const font = Rethink_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: "StraTech | Smart Digital Solutions for Startups & Businesses",
  description:
    "StraTech is a modern startup platform providing innovative digital solutions — from strategy and design to business, ecommerce, and tech development.",
  keywords: [
    "StraTech",
    "startup website",
    "business solutions",
    "digital strategy",
    "tech development",
    "Next.js",
    "Tailwind CSS",
  ],
  authors: [{ name: "StraTech Team", url: "https://stratech-startup.vercel.app" }],
  openGraph: {
    title: "StraTech | Smart Digital Solutions for Startups & Businesses",
    description:
      "Empowering startups and businesses with next-gen digital solutions. Explore StraTech’s services in design, ecommerce, and strategic innovation.",
    url: "https://stratech.com",
    siteName: "StraTech"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

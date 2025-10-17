import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
  authors: [{ name: "StraTech Team", url: "https://stratech.com" }],
  openGraph: {
    title: "StraTech | Smart Digital Solutions for Startups & Businesses",
    description:
      "Empowering startups and businesses with next-gen digital solutions. Explore StraTech’s services in design, ecommerce, and strategic innovation.",
    url: "https://stratech.com",
    siteName: "StraTech",
    images: [
      {
        url: "/og-image.jpg", // replace later with your actual OG image path
        width: 1200,
        height: 630,
        alt: "StraTech Startup Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StraTech | Smart Digital Solutions for Startups & Businesses",
    description:
      "Modern startup platform offering web design, ecommerce, and digital strategy solutions.",
    images: ["/og-image.jpg"],
    creator: "@stratech", // optional
  },
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

import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "OffshoreXports | Global Export Services for Quality Products",
  description:
    "OffshoreXports specializes in exporting high-quality food, electronics, and machinery to global markets. With expertise in international trade and logistics, we provide tailored export solutions for your business needs. Contact us today for reliable export services.",
  keywords:
    "global export services, quality export products, international trade, export solutions, offshore exports",
  "og:title": "OffshoreXports | Global Export Services",
  "og:description":
    "Export high-quality food, electronics, and machinery worldwide. Contact us for tailored export solutions.",
  "og:type": "website",
  "og:url": "https://www.offshorexports.com",
  "og:image": "/images/og-image.jpg",
  "twitter:card": "summary_large_image",
  canonical: "https://www.offshorexports.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Lumax Results | Online Marketing Agency",
  description:
    "Lumax Results is an online marketing agency that becomes your Huntsville business's marketing department on-demand. Get found on Google and turn visibility into revenue.",
  keywords: ["Huntsville SEO", "local marketing Huntsville", "Google rankings Alabama", "Lumax Results"],
  authors: [{ name: "Lumax Results" }],
  openGraph: {
    title: "Lumax Results | Online Marketing Agency",
    description:
      "Lumax Results is an online marketing agency that becomes your Huntsville business's marketing department on-demand.",
    type: "website",
    locale: "en_US",
    siteName: "Lumax Results",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumax Results | Online Marketing Agency",
    description: "Get your Huntsville business to the top of Google. Free tips — no technical knowledge needed.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}

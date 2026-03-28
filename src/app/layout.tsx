import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rupa Kumari | Frontend Developer",
  description:
    "Frontend Developer portfolio of Rupa Kumari. Building modern, scalable and user-friendly web applications with React and Next.js.",
  keywords: ["Rupa Kumari", "Frontend Developer", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Rupa Kumari" }],
  openGraph: {
    title: "Rupa Kumari | Frontend Developer",
    description: "Building modern, scalable and user-friendly web applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} dark`} suppressHydrationWarning>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-[var(--font-body)] antialiased">
        {children}
      </body>
    </html>
  );
}

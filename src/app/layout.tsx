import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/providers/ThemeProvider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sahil Patel | Full-Stack Developer",
  description:
    "Software Developer and Project Coordinator based in Melbourne, Australia. Building scalable full-stack applications with Next.js, FastAPI, and AWS.",
  keywords: ["Sahil Patel", "Full-Stack Developer", "Melbourne", "Next.js", "FastAPI", "React", "TypeScript"],
  authors: [{ name: "Sahil Patel" }],
  openGraph: {
    title: "Sahil Patel | Full-Stack Developer",
    description: "Software Developer and Project Coordinator based in Melbourne, Australia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="bg-background text-foreground antialiased min-h-screen flex flex-col"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import { Nav } from "@/components/Nav";
import Footer from "@/components/Footer";

const quickSand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aryan Thakur | Full Stack Developer",
  description: "I am a full stack web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={quickSand.className}>
        <ThemeProvider>
          <Nav />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

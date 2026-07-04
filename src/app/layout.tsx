import type { Metadata } from "next";
import { Sora, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Navigations, PageLoader } from "@/components";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yusuf - Frontend Engineer",
  description: "Portfolio of Yusuf Firmansyah, a Frontend Engineer specializing in React.js and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${geistMono.variable} antialiased`}>
        <PageLoader />
        <Header />
        <main className="pb-24">
          {children}
        </main>
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <Navigations />
        </div>
      </body>
    </html>
  );
}

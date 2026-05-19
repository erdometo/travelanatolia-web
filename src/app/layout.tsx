import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TravelAnatolia — Magical AI-Driven Identity Tourism",
  description: "Step into historical identities to explore Turkey like a Roman scholar, Ottoman artisan, or Silk Road merchant. Powered by autonomous agentic travel intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-brand-primary/30 selection:text-white">
        {/* Glow meshes */}
        <div className="glow-mesh">
          <div className="glow-circle-1" />
          <div className="glow-circle-2" />
          <div className="glow-circle-3" />
        </div>

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow pt-28 pb-16 z-10 px-4 md:px-8 max-w-7xl mx-auto w-full relative">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-500 z-10">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} TravelAnatolia. Almost magical experiences.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Anatolia Foundation</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

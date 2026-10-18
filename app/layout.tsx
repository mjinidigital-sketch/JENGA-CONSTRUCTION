import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import FooterSubscribe from "@/components/blocks/marketing/footers/subscribe";
import { Navbar35 } from "@/components/navbar35";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JENGA CONSTRUCTION LTD | CONSTRUCTION COMPANY IN KENYA",
  description:
    "Top construction company in Kenya delivering premier commercial, residential, civil engineering, and infrastructure projects.",
  keywords: [
    "JENGA Construction Ltd",
    "Construction company in Kenya",
    "NCA 1 registered contractor",
    "Nairobi commercial building contractor",
    "Civil engineering Kenya",
    "Building contractors East Africa",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};


import { Suspense } from "react";
import { RouteProgressBar } from "@/components/route-progress-bar";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ScrollRevealProvider } from "@/components/scroll-reveal-provider";
import { FloatingContact } from "@/components/floating-contact";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col relative">
        <Suspense fallback={null}>
          <RouteProgressBar />
        </Suspense>
        <Navbar35 />
        <ScrollRevealProvider>
          <main className="flex-1">{children}</main>
        </ScrollRevealProvider>
        <FooterSubscribe />
        <ScrollToTop />
        <FloatingContact />
      </body>
    </html>
  );
}

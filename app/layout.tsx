import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Phuriphat Hemakul | Flagship Developer Portfolio & Bio Hub (CAI PIM)",
  description: "Digital Resume & Engineering Portfolio of Phuriphat Hemakul (PhuriphatTyPeZ3r0) — 3rd Year Computer Engineering and Artificial Intelligence Student at Panyapiwat Institute of Management (PIM). GPAX 3.59.",
  keywords: ["Phuriphat Hemakul", "PhuriphatTyPeZ3r0", "Portfolio", "Computer Engineering", "Artificial Intelligence", "PIM", "Next.js", "React 19", "Three.js"],
  authors: [{ name: "Phuriphat Hemakul", url: "https://github.com/PhuriphatTyPeZ3r0" }],
  openGraph: {
    title: "Phuriphat Hemakul | Flagship Developer Portfolio & Bio Hub",
    description: "3rd Year Computer Engineering and AI Student at PIM. GPAX 3.59. Explore 28+ projects, live demos, and 3D WebGL scenes.",
    url: "https://resume-phuriphat-hemakul.vercel.app",
    siteName: "Phuriphat Hemakul Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-[#020617] text-[#f8fafc]">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

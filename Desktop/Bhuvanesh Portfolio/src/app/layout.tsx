import type { Metadata } from "next";
import "./globals.css";
import NoiseTexture from "@/components/NoiseTexture";
import CustomCursor from "@/components/CustomCursor";
import ParticleBackground from "@/components/ParticleBackground";

export const metadata: Metadata = {
  title: "Bhuvanesh | Premium Full Stack Architect & UI/UX Designer",
  description:
    "Portfolio of Bhuvanesh, an award-winning Full Stack Web Developer, UI/UX Designer, and AI Automation Engineer crafting luxurious high-performance digital spaces.",
  keywords: [
    "Bhuvanesh Portfolio",
    "Full Stack Developer",
    "UI/UX Designer",
    "AI Automation Engineer",
    "Next.js Developer",
    "GSAP Animations",
    "Linear UI Design",
  ],
  authors: [{ name: "Bhuvanesh" }],
  creator: "Bhuvanesh",
  robots: "index, follow",
};

export const viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-500 relative">
        {/* Global Cinematic Effects */}
        <NoiseTexture />
        <CustomCursor />
        <ParticleBackground />

        {/* Core Layout */}
        <div className="flex flex-col flex-1 relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}

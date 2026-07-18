"use client";

import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyChooseMe from "@/components/WhyChooseMe";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Smooth scrolling via Lenis
  useEffect(() => {
    if (!isLoaded) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Disable system zoom / handle accessibility double tap
    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };
    document.addEventListener("touchstart", handleTouch, { passive: false });

    return () => {
      lenis.destroy();
      document.removeEventListener("touchstart", handleTouch);
    };
  }, [isLoaded]);

  // Lock scroll during loading
  useEffect(() => {
    if (!isLoaded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoaded]);

  return (
    <>
      {/* Cinematic Entrance Loader */}
      {!isLoaded && <PageLoader onComplete={() => setIsLoaded(true)} />}

      {/* Main Page Layout */}
      {isLoaded && (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <About />
            <Services />
            <Projects />
            <Process />
            <Skills />
            <WhyChooseMe />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import gsap from "gsap";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Handle scroll detection and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for sections
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // triggers when section covers middle of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    // Theme initialization
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    if (initialTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Magnetic Button Effect helper
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 px-4 md:px-8 py-4 ${
          isScrolled ? "pt-4" : "pt-6 md:pt-8"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
            isScrolled
              ? "glass-panel bg-background/50 shadow-lg shadow-black/10 border-border-color"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 font-sans font-extrabold text-xl tracking-tight text-foreground hover:opacity-80 transition-opacity"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-primary to-accent-secondary flex items-center justify-center text-white text-sm font-black shadow-[0_0_15px_rgba(108,99,255,0.4)]">
              B
            </span>
            <span className="hidden sm:inline">BHUVANESH</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 font-mono text-xs font-medium">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-2 rounded-full transition-colors hover:text-foreground ${
                    isActive ? "text-foreground" : "text-text-secondary"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-highlight glow-text-blue" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border-color bg-card-bg hover:bg-foreground/5 text-foreground transition-all duration-300 cursor-none"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Hire Me Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-foreground text-background font-mono text-xs font-bold transition-all duration-300 hover:scale-105 glow-btn shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-none"
            >
              HIRE ME
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-border-color bg-card-bg text-foreground cursor-none"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-full border border-border-color bg-card-bg text-foreground cursor-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 z-30 bg-background/95 backdrop-blur-2xl lg:hidden flex flex-col justify-center items-center gap-6 transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none translate-y-10"
        }`}
      >
        <nav className="flex flex-col gap-6 text-center font-sans text-2xl font-bold">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`transition-colors py-2 ${
                  isActive ? "text-accent-primary glow-text-purple" : "text-text-secondary hover:text-foreground"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="mt-4 px-8 py-3.5 rounded-full bg-foreground text-background font-bold text-sm shadow-xl flex items-center gap-2 cursor-none"
        >
          HIRE ME
          <ArrowUpRight size={16} />
        </a>
      </div>
    </>
  );
}

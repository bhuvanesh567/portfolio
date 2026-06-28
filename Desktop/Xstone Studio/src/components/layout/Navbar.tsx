"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-[#030712]/75 backdrop-blur-md border-white/5 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-2.5 group">
          <div className="w-8.5 h-8.5 rounded-lg bg-gradient-to-br from-electric-cyan to-primary-blue flex items-center justify-center shadow-md shadow-electric-cyan/20 group-hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-4.5 h-4.5 text-black" />
          </div>
          <span className="font-space font-bold text-lg text-white tracking-wider">
            XSTONE <span className="text-electric-cyan">STUDIO</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-space text-xs font-bold tracking-widest uppercase transition-colors duration-300 group py-1 ${
                  isActive ? "text-white" : "text-gray hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                <span
                  className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-electric-cyan origin-left transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/contact"
            className="relative group px-5 py-2.5 rounded-lg font-space text-xs font-semibold tracking-wider text-white bg-white/5 border border-white/10 hover:border-electric-cyan/50 hover:bg-white/10 transition-all duration-300 shadow-inner"
          >
            <span className="flex items-center space-x-1">
              <span>START YOUR PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-electric-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </span>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray hover:text-white transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[73px] bg-[#030712] border-t border-white/5 z-40 transition-transform duration-500 md:hidden flex flex-col justify-between p-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="space-y-6 flex flex-col pt-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-space text-lg font-bold tracking-widest text-gray hover:text-white uppercase"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="space-y-4 pb-8">
          <Link
            href="/contact"
            className="block w-full text-center py-4 bg-gradient-to-r from-electric-cyan to-primary-blue text-black font-space text-xs font-bold rounded-lg hover:opacity-90"
          >
            START YOUR PROJECT
          </Link>
        </div>
      </div>
    </nav>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Send, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-white/5 bg-[#030712] text-gray pt-20 pb-10 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/5 pb-16">
        
        {/* Brand block */}
        <div className="md:col-span-4 space-y-6">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-cyan to-primary-blue flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-black" />
            </div>
            <span className="font-space font-bold text-base text-white tracking-wider">
              XSTONE STUDIO
            </span>
          </div>
          <p className="text-xs leading-relaxed max-w-sm">
            Digitally transforming local businesses, retail shops, and commercial service storefronts using Next.js 15 platforms and n8n webhook automations.
          </p>
          <div className="space-y-2 pt-2 text-[11px] text-gray">
            <p className="hover:text-white transition-colors duration-300 flex items-center gap-2">
              <span>📧</span>
              <span>kamathambhuvanesh@gmail.com</span>
            </p>
            <p className="hover:text-white transition-colors duration-300 flex items-center gap-2">
              <span>📞</span>
              <span>+91 7382112779</span>
            </p>
          </div>
        </div>

        {/* Navigation link block */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-space text-xs font-bold text-white uppercase tracking-widest">Company</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/" className="hover:text-white transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition-colors duration-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-white transition-colors duration-300">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-white transition-colors duration-300">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Services block */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-space text-xs font-bold text-white uppercase tracking-widest">Capabilities</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/services" className="hover:text-white transition-colors duration-300">
                The Digital Storefront
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition-colors duration-300">
                The Booking Machine
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition-colors duration-300">
                The AI Employee
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition-colors duration-300">
                Local Dominance (SEO)
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter block */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-space text-xs font-bold text-white uppercase tracking-widest">Newsletter</h4>
          <p className="text-xs leading-relaxed">
            Subscribe to receive insights on automation and SEO updates.
          </p>
          {!subscribed ? (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                className="flex-grow px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-electric-cyan/50"
              />
              <button
                type="submit"
                className="p-2.5 bg-electric-cyan text-black rounded-lg hover:opacity-90 transition-opacity"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          ) : (
            <div className="flex items-center space-x-2 text-xs text-green-400 font-space font-semibold bg-green-500/10 border border-green-500/25 p-2 rounded-lg">
              <Check className="w-4 h-4" />
              <span>SUBSCRIBED SUCCESSFULLY</span>
            </div>
          )}
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
        <span>© {new Date().getFullYear()} Xstone Studio. All rights reserved.</span>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="https://github.com/bhuvanesh567?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/bhuvanesh-kamatham-923681270" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

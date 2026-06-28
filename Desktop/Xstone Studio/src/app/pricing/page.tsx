"use client";

import React, { useState } from "react";
import { Sparkles, Check, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Growth Kickstart",
    price: "₹10,000",
    term: "per project",
    desc: "A custom NextJS single page or 5-page micro-site for high-growth teams.",
    features: [
      "Custom Next.js & Tailwind setup",
      "Framer Motion animations",
      "Contact form with basic Zod validation",
      "Vercel Edge deploy integration",
      "Standard Schema.org markup",
      "2-week launch timeline"
    ]
  },
  {
    name: "Business Engine",
    price: "₹25,000",
    term: "per project",
    desc: "A fully custom web application with automated integrations and mock dashboards.",
    features: [
      "Up to 12 custom pages & design",
      "n8n CRM and webhook integrations",
      "Client Dashboard layout",
      "Interactive 3D/Canvas visuals",
      "Lighthouse performance optimization (95+)",
      "Dedicated Slack project updates channel"
    ],
    recommended: true
  },
  {
    name: "Enterprise Automation",
    price: "₹65,000",
    term: "or milestone-based",
    desc: "Complex architectures, custom SaaS platforms, and enterprise system migrations.",
    features: [
      "Unlimited custom page count",
      "Advanced n8n integrations & workflow design",
      "Secure database architecture (Supabase/Postgres)",
      "Dedicated senior developer SLA support",
      "SEO Core Web Vitals performance tuning",
      "Custom admin portals & analytics suites"
    ]
  }
];

export default function Pricing() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-32 space-y-16">
      
      {/* Header */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
          <Sparkles className="w-4 h-4 text-electric-cyan" />
          <span className="text-xs font-space font-medium tracking-wider text-gray uppercase">OUR PACKAGES</span>
        </div>
        <h1 className="font-space font-extrabold text-4xl md:text-6xl text-white leading-tight">
          Flexible Pricing, <span className="gradient-text-blue-cyan">Commercial Scales.</span>
        </h1>
        <p className="text-gray text-lg leading-relaxed">
          Select a transparent milestone-based package tailored to your storefront complexity or operational automation goals.
        </p>
      </section>

      {/* Pricing Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`glass-card p-8 flex flex-col justify-between relative ${
              plan.recommended
                ? "border-electric-cyan/45 bg-white/[0.02] shadow-xl shadow-electric-cyan/5"
                : "border-white/5"
            }`}
          >
            {plan.recommended && (
              <span className="absolute -top-3 right-6 px-3 py-1 bg-electric-cyan rounded-full text-black font-space text-[9px] font-bold uppercase tracking-widest">
                RECOMMENDED
              </span>
            )}
            <div className="space-y-6">
              <div>
                <span className="font-space text-xs font-bold text-gray uppercase tracking-widest">{plan.name}</span>
                <div className="flex items-baseline space-x-1 mt-2">
                  <h3 className="font-space text-4xl font-extrabold text-white">{plan.price}</h3>
                  <span className="text-xs text-gray">/ {plan.term}</span>
                </div>
              </div>
              <p className="text-xs text-gray leading-relaxed">{plan.desc}</p>
              <hr className="border-white/5" />
              <ul className="space-y-3 text-xs text-gray">
                {plan.features.map((feat, fidx) => (
                  <li key={fidx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-electric-cyan flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/contact"
              className={`mt-8 w-full text-center py-3.5 rounded-lg font-space text-xs font-bold transition-all ${
                plan.recommended
                  ? "bg-gradient-to-r from-electric-cyan to-primary-blue text-black hover:opacity-95"
                  : "border border-white/10 text-white hover:bg-white/5"
              }`}
            >
              START YOUR PROJECT
            </Link>
          </div>
        ))}
      </section>

    </div>
  );
}

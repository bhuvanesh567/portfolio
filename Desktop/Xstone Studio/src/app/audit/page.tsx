"use client";

import React, { useState } from "react";
import { Sparkles, Cpu, Gauge, Search, FileText, CheckCircle2, AlertTriangle, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Audit() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [industry, setIndustry] = useState("E-commerce");
  const [scanning, setScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [report, setReport] = useState<any>(null);

  const scanSteps = [
    "Establishing connection to sitemaps and servers...",
    "Measuring Core Web Vitals (LCP, FID, CLS)...",
    "Analyzing semantic heading hierarchy & meta tags...",
    "Scanning Google Maps schema profiles & local citation sync...",
    "Running conversion rate optimization tests (CTA accessibility)...",
    "Generating custom SEO & performance report..."
  ];

  const handleScanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !email) return;

    setScanning(true);
    setScanStep(0);
    setReport(null);

    // Simulate scanning pipeline
    const interval = setInterval(() => {
      setScanStep((prev) => {
        if (prev >= scanSteps.length - 1) {
          clearInterval(interval);
          setScanning(false);
          setReport({
            perfScore: 54,
            seoScore: 48,
            convScore: 35,
            bottlenecks: [
              "Outdated Wordpress theme/template with bulky JS scripts delaying hydration.",
              "Missing structural LocalBusiness JSON-LD schemas preventing local SEO indexing.",
              "Bulky uncompressed product/hero images slowing Largest Contentful Paint (LCP) to 4.2s.",
              "Non-functional checkout buttons requiring multiple taps on mobile layouts.",
              "No real-time automated scheduler or chatbot alerts to capture after-hours leads."
            ]
          });
          return prev;
        }
        return prev + 1;
      });
    }, 1200);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-6 py-32 space-y-16">
      
      {/* Header */}
      <section className="text-center space-y-6 max-w-2xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
          <Gauge className="w-4 h-4 text-electric-cyan" />
          <span className="text-xs font-space font-medium tracking-wider text-gray uppercase">SEO & SPEED AUDIT TOOL</span>
        </div>
        <h1 className="font-space font-extrabold text-4xl md:text-5xl text-white leading-tight">
          Benchmark Your <span className="gradient-text-blue-cyan">Digital Storefront.</span>
        </h1>
        <p className="text-gray text-base leading-relaxed">
          Input your business details to trigger a custom digital audit scanning local search authority, conversion leaks, and load metrics.
        </p>
      </section>

      {/* Main scanner container */}
      <section className="glass-card p-8 border-white/10 bg-slate-900/10">
        {!scanning && !report && (
          <form onSubmit={handleScanSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-space text-gray uppercase block tracking-wider">WEBSITE URL</label>
                <input
                  type="url"
                  required
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full px-4 py-3.5 glass-input text-sm text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-space text-gray uppercase block tracking-wider">BUSINESS INDUSTRY</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-3.5 bg-slate-950 text-white border border-white/10 rounded-lg text-sm"
                >
                  <option value="E-commerce">E-commerce / Retail</option>
                  <option value="Medical">Medical / Clinics</option>
                  <option value="Restaurant">Restaurant / Food</option>
                  <option value="Real Estate">Real Estate / Listings</option>
                  <option value="Gym">Fitness / Gyms</option>
                  <option value="Corporate">Law Firm / Corporate</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-space text-gray uppercase block tracking-wider">EMAIL ADDRESS (FOR REPORT COPY)</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full px-4 py-3.5 glass-input text-sm text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-electric-cyan to-primary-blue text-black font-space text-xs font-bold rounded-lg hover:opacity-90 transition-opacity uppercase tracking-widest"
            >
              RUN PERFORMANCE AUDIT
            </button>
          </form>
        )}

        {/* Scanning animations */}
        {scanning && (
          <div className="py-12 flex flex-col items-center justify-center space-y-6 text-center animate-pulse">
            <Cpu className="w-10 h-10 text-electric-cyan animate-spin" />
            <div className="space-y-2">
              <h3 className="font-space text-sm font-bold text-white uppercase tracking-wider">
                SCANNING: {url}
              </h3>
              <p className="text-xs text-gray max-w-md mx-auto leading-relaxed">
                {scanSteps[scanStep]}
              </p>
            </div>
            <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-electric-cyan to-primary-blue transition-all duration-700" 
                style={{ width: `${((scanStep + 1) / scanSteps.length) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Audit Results Report Card */}
        {report && (
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div>
                <span className="text-[9px] font-space text-accent-gold uppercase font-bold tracking-wider">DIAGNOSTIC REPORT GENERATED</span>
                <h3 className="font-space text-lg font-bold text-white mt-0.5">{url}</h3>
              </div>
              <button 
                onClick={() => { setReport(null); setUrl(""); setEmail(""); }}
                className="text-xs text-electric-cyan font-space font-bold hover:underline flex items-center space-x-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>NEW SCAN</span>
              </button>
            </div>

            {/* Score Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 bg-white/5 rounded-lg border border-red-500/20 text-center">
                <div className="text-3xl font-space font-extrabold text-red-500">{report.perfScore} / 100</div>
                <div className="text-[9px] font-space text-gray uppercase mt-1">Lighthouse Performance</div>
              </div>
              <div className="p-5 bg-white/5 rounded-lg border border-red-500/20 text-center">
                <div className="text-3xl font-space font-extrabold text-red-500">{report.seoScore} / 100</div>
                <div className="text-[9px] font-space text-gray uppercase mt-1">SEO Visibility Score</div>
              </div>
              <div className="p-5 bg-white/5 rounded-lg border border-red-500/20 text-center">
                <div className="text-3xl font-space font-extrabold text-red-500">{report.convScore}%</div>
                <div className="text-[9px] font-space text-gray uppercase mt-1">Conversion Efficiency</div>
              </div>
            </div>

            {/* Core Bottlenecks checklist */}
            <div className="space-y-4">
              <h4 className="text-xs font-space font-bold text-gray uppercase tracking-widest flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-accent-gold" />
                <span>IDENTIFIED BOTTLENECKS</span>
              </h4>
              <ul className="space-y-3 text-xs text-gray">
                {report.bottlenecks.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-white/[0.01] p-3 border border-white/5 rounded">
                    <span className="text-red-500 font-bold font-mono flex-shrink-0">⚠️</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <hr className="border-white/5" />

            {/* CTA action */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-electric-cyan/5 p-6 rounded-xl border border-electric-cyan/20 gap-4">
              <div className="text-center md:text-left space-y-1">
                <h4 className="font-space text-sm font-bold text-white">We Solve These Bottlenecks Globally.</h4>
                <p className="text-xs text-gray">Let&apos;s map an action plan to restore your Core Web Vitals to 99+.</p>
              </div>
              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-electric-cyan to-primary-blue text-black font-space text-xs font-bold rounded-lg hover:opacity-90 flex items-center space-x-1 flex-shrink-0"
              >
                <span>BOOK RESOLUTION CALL</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </section>

    </div>
  );
}

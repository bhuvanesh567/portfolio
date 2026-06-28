"use client";

import React, { useState } from "react";
import { Sparkles, Mail, Phone, MapPin, CheckCircle2, ChevronRight } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message })
      });
    } catch (error) {
      console.error("Failed to forward automated email payload:", error);
    }

    setSubmitted(true);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-32 space-y-16">
      
      {/* Header */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
          <Mail className="w-4 h-4 text-electric-cyan" />
          <span className="text-xs font-space font-medium tracking-wider text-gray uppercase">GET IN TOUCH</span>
        </div>
        <h1 className="font-space font-extrabold text-4xl md:text-6xl text-white leading-tight">
          Let&apos;s Build Your <span className="gradient-text-blue-cyan">Next Platform.</span>
        </h1>
        <p className="text-gray text-lg leading-relaxed">
          Reach out today to discuss custom storefront layout setups, n8n automations, or maps configurations.
        </p>
      </section>

      {/* Grid: Details & Form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Contact details */}
        <div className="lg:col-span-5 space-y-8">
          <div className="glass-card p-8 border-white/5 space-y-6">
            <h3 className="font-space text-lg font-bold text-white">Contact Information</h3>
            <div className="space-y-4 text-xs text-gray">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail className="w-4 h-4 text-electric-cyan" />
                </div>
                <span>kamathambhuvanesh@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                  <Phone className="w-4 h-4 text-electric-cyan" />
                </div>
                <span>+91 7382112779</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin className="w-4 h-4 text-electric-cyan" />
                </div>
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7">
          <div className="glass-card p-8 border-white/10 bg-slate-900/10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-space text-gray uppercase block tracking-wider">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3.5 glass-input text-sm text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-space text-gray uppercase block tracking-wider">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3.5 glass-input text-sm text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-space text-gray uppercase block tracking-wider">COMPANY NAME</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Inc"
                    className="w-full px-4 py-3.5 glass-input text-sm text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-space text-gray uppercase block tracking-wider">PROJECT DESCRIPTION</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe your objectives, target timeline, or pain points..."
                    className="w-full px-4 py-3.5 glass-input text-sm text-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-electric-cyan to-primary-blue text-black font-space text-xs font-bold rounded-lg hover:opacity-90 transition-opacity uppercase tracking-widest"
                >
                  SEND INQUIRY
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto" />
                <h3 className="font-space text-lg font-bold text-white uppercase tracking-wider">
                  Inquiry Dispatched
                </h3>
                <p className="text-xs text-gray max-w-md mx-auto leading-relaxed">
                  Thank you, {name}. Your details have been qualified and logged to our CRM. A senior engineer will review your inquiry and connect via email.
                </p>
              </div>
            )}
          </div>
        </div>

      </section>

    </div>
  );
}

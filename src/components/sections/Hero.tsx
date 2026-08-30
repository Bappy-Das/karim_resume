"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Copy, Check, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { ResumeModal } from "@/components/ui/ResumeModal";
import {
  LinkedinBrandIcon,
  GithubBrandIcon,
  GoogleScholarBrandIcon,
  KaggleBrandIcon,
  WhatsappBrandIcon,
} from "@/components/icons/TechIcons";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-8 sm:pt-12 md:pt-16 pb-12 overflow-hidden">
      {/* Background glowing ambient spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 lg:gap-14">
          {/* Left Column: Bio & Intro */}
          <div className="flex-1 text-center md:text-left space-y-5">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium tracking-wide shadow-sm shadow-emerald-950">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>AVAILABLE • DATA & BI ROLES</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-tech tracking-tight text-white uppercase">
                {portfolioData.personal.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-blue-400 tracking-tight">{portfolioData.personal.role}</p>
              <p className="text-xs sm:text-sm font-mono text-gray-400">
                MBA in Business Analytics • BSc in Computer Science Engineering
              </p>
            </div>

            {/* Bio */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">{portfolioData.personal.bio}</p>

            {/* Location & Quick Contact */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-mono text-gray-400 pt-1">
              <span className="flex items-center gap-1.5 text-gray-300">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                {portfolioData.personal.location}
              </span>
              <span className="hidden sm:inline text-gray-600">•</span>
              <span className="flex items-center gap-1.5 text-gray-300">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                {portfolioData.personal.phone}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center md:items-start gap-4">
              <button
                onClick={() => scrollToSection("experience")}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#0e172a] hover:bg-[#1e293b] border border-slate-700 hover:border-slate-500 text-white text-xs font-mono font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md group cursor-pointer"
              >
                <span>EXPLORE EXPERIENCE & RESEARCH</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Interactive Email Bar */}
            <div className="pt-1">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-mono text-gray-300 transition-colors group cursor-pointer"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-gray-400 uppercase">EMAIL :</span>
                <span className="text-blue-300 group-hover:text-blue-200 font-medium select-all">
                  {portfolioData.personal.email}
                </span>
                <span className="ml-1 p-1 rounded bg-white/5 group-hover:bg-white/10 text-gray-400">
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </span>
              </button>
              {copied && <span className="ml-2 text-[11px] font-mono text-emerald-400 animate-fadeIn">Copied to clipboard!</span>}
            </div>
          </div>

          {/* Right Column: Profile Photo Card & Socials */}
          <div className="w-full max-w-[280px] sm:max-w-[320px] flex flex-col items-center">
            {/* Profile Image with subtle glowing container */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-white/10 bg-[#0d1424] shadow-2xl shadow-blue-950/60 group">
              <Image
                src={portfolioData.personal.profileImage}
                alt={portfolioData.personal.name}
                fill
                priority
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 280px, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070a11]/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Blue Gradient "Get Resume ↗" Button */}
            <button
              onClick={() => setShowResumeModal(true)}
              className="w-full mt-3.5 py-3 px-5 rounded-xl btn-primary-gradient text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 group cursor-pointer"
            >
              <span>View Full Resume / CV</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Social Icons Strip */}
            <div className="w-full grid grid-cols-5 gap-2 mt-3">
              {/* LinkedIn */}
              <a
                href={portfolioData.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn Profile"
                className="h-10 rounded-lg bg-[#0077B5] hover:bg-[#00669c] text-white flex items-center justify-center shadow-md transition-transform hover:-translate-y-0.5"
              >
                <LinkedinBrandIcon className="w-4 h-4" />
              </a>

              {/* GitHub */}
              <a
                href={portfolioData.personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub Profile"
                className="h-10 rounded-lg bg-[#24292e] hover:bg-[#1b1f23] text-white flex items-center justify-center shadow-md border border-white/10 transition-transform hover:-translate-y-0.5"
              >
                <GithubBrandIcon className="w-4 h-4" />
              </a>

              {/* Google Scholar */}
              <a
                href={portfolioData.personal.socials.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Scholar"
                title="Google Scholar Publications"
                className="h-10 rounded-lg bg-[#4285F4] hover:bg-[#3367d6] text-white flex items-center justify-center shadow-md transition-transform hover:-translate-y-0.5"
              >
                <GoogleScholarBrandIcon className="w-4 h-4" />
              </a>

              {/* Kaggle */}
              <a
                href={portfolioData.personal.socials.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kaggle"
                title="Kaggle Profile"
                className="h-10 rounded-lg bg-[#20BEFF] hover:bg-[#0099e6] text-white flex items-center justify-center shadow-md transition-transform hover:-translate-y-0.5"
              >
                <KaggleBrandIcon className="w-4 h-4" />
              </a>

              {/* WhatsApp */}
              <a
                href={portfolioData.personal.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp Direct Contact"
                className="h-10 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-md transition-transform hover:-translate-y-0.5"
              >
                <WhatsappBrandIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={showResumeModal} onClose={() => setShowResumeModal(false)} />
    </section>
  );
}

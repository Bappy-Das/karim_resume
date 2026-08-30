"use client";

import React from "react";
import { Mail, Phone, MapPin, ArrowUpRight, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { LinkedinBrandIcon, GithubBrandIcon, YoutubeBrandIcon, WhatsappBrandIcon } from "@/components/icons/TechIcons";

export function Contact() {
  return (
    <section id="contact" className="py-14 sm:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-tech tracking-tight text-white mb-1">Get in Touch</h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mb-3" />
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl">
            Open for full-time Data Analytics / Business Intelligence roles, research collaborations, and consulting
            opportunities.
          </p>
        </div>

        {/* 3 Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {/* Email */}
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="p-5 rounded-2xl glass-card relative overflow-hidden group hover:border-red-500/30 flex flex-col justify-between transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-red-400 transition-colors" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-gray-400 uppercase">Email</div>
              <div className="text-xs sm:text-sm font-mono font-medium text-gray-200 group-hover:text-white truncate mt-0.5">
                {portfolioData.personal.email}
              </div>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${portfolioData.personal.phone.replace(/[^0-9+]/g, "")}`}
            className="p-5 rounded-2xl glass-card relative overflow-hidden group hover:border-cyan-500/30 flex flex-col justify-between transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-gray-400 uppercase">Phone</div>
              <div className="text-xs sm:text-sm font-mono font-medium text-gray-200 group-hover:text-white truncate mt-0.5">
                {portfolioData.personal.phone}
              </div>
            </div>
          </a>

          {/* Location */}
          <div className="p-5 rounded-2xl glass-card relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5">
                EST
              </span>
            </div>
            <div>
              <div className="text-[11px] font-mono text-gray-400 uppercase">Location</div>
              <div className="text-xs sm:text-sm font-mono font-medium text-gray-200 truncate mt-0.5">
                {portfolioData.personal.location}
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Bar */}
        <div className="p-5 sm:p-6 rounded-2xl glass-card flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-sm font-bold text-white tracking-tight">Connect with me</div>
            <div className="text-xs text-gray-400 font-mono">Available on professional networks & coding platforms</div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={portfolioData.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl bg-[#0077B5] text-white flex items-center justify-center hover:opacity-90 transition-transform hover:-translate-y-0.5 shadow-sm"
              title="LinkedIn"
            >
              <LinkedinBrandIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl bg-[#24292e] text-white flex items-center justify-center border border-white/10 hover:opacity-90 transition-transform hover:-translate-y-0.5 shadow-sm"
              title="GitHub"
            >
              <GithubBrandIcon className="w-4 h-4" />
            </a>
            {/* <a
              href={portfolioData.personal.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-10 h-10 rounded-xl bg-[#FF0000] text-white flex items-center justify-center hover:opacity-90 transition-transform hover:-translate-y-0.5 shadow-sm"
              title="YouTube"
            >
              <YoutubeBrandIcon className="w-4 h-4" />
            </a> */}
            <a
              href={portfolioData.personal.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="w-10 h-10 rounded-xl bg-[#FFA116] text-black flex items-center justify-center hover:opacity-90 transition-transform hover:-translate-y-0.5 shadow-sm"
              title="LeetCode"
            >
              <Code2 className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-transform hover:-translate-y-0.5 shadow-sm"
              title="WhatsApp"
            >
              <WhatsappBrandIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

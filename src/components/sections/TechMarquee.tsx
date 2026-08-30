"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { TechIcon } from "@/components/icons/TechIcons";

export function TechMarquee() {
  return (
    <section className="py-6 border-y border-white/5 bg-[#060a12]/50 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-widest text-gray-400 uppercase">
            ANALYTICS & TECHNICAL STACK:
          </span>
        </div>

        {/* Tech Grid / Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {portfolioData.frequentTech.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0e1628]/70 border border-white/10 hover:border-blue-500/30 hover:bg-[#131f38] transition-all group cursor-default shadow-sm"
            >
              <TechIcon name={tech.icon} className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
              <span className="text-xs font-mono font-medium text-gray-300 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

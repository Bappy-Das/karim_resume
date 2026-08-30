"use client";

import React from "react";
import { Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import {
  LinkedinBrandIcon,
  GithubBrandIcon,
  GoogleScholarBrandIcon,
  KaggleBrandIcon,
  WhatsappBrandIcon,
} from "@/components/icons/TechIcons";

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-[#050810] text-gray-400 text-xs">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Left copyright */}
          <div className="space-y-1">
            <div className="font-mono text-gray-300">
              © 2024-2026 <span className="text-white font-semibold">{portfolioData.personal.name}</span>. All Rights Reserved.
            </div>
            <div className="text-[11px] text-gray-500 font-mono flex items-center justify-center sm:justify-start gap-1">
              <span>
                {portfolioData.personal.role} • {portfolioData.personal.location}
              </span>
            </div>
          </div>

          {/* Right social circle icons */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2">
            <a
              href={portfolioData.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="w-8 h-8 rounded-full bg-[#0077B5]/20 text-[#0077B5] hover:bg-[#0077B5] hover:text-white flex items-center justify-center transition-colors border border-[#0077B5]/30"
            >
              <LinkedinBrandIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href={portfolioData.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="w-8 h-8 rounded-full bg-white/5 text-gray-300 hover:bg-white/20 hover:text-white flex items-center justify-center transition-colors border border-white/10"
            >
              <GithubBrandIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href={portfolioData.personal.socials.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Scholar"
              title="Google Scholar"
              className="w-8 h-8 rounded-full bg-[#4285F4]/20 text-[#4285F4] hover:bg-[#4285F4] hover:text-white flex items-center justify-center transition-colors border border-[#4285F4]/30"
            >
              <GoogleScholarBrandIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href={portfolioData.personal.socials.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kaggle"
              title="Kaggle"
              className="w-8 h-8 rounded-full bg-[#20BEFF]/20 text-[#20BEFF] hover:bg-[#20BEFF] hover:text-white flex items-center justify-center transition-colors border border-[#20BEFF]/30"
            >
              <KaggleBrandIcon className="w-3.5 h-3.5" />
            </a>

            {/* <a
              href={portfolioData.personal.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Coding Profile"
              title="LeetCode"
              className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-500 hover:bg-amber-500 hover:text-black flex items-center justify-center transition-colors border border-amber-500/30"
            >
              <Code2 className="w-3.5 h-3.5" />
            </a> */}

            <a
              href={portfolioData.personal.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
              className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white flex items-center justify-center transition-colors border border-emerald-500/30"
            >
              <WhatsappBrandIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

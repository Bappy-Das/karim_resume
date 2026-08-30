"use client";

import React, { useState } from "react";
import { Share2, ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import {
  GithubBrandIcon,
  LinkedinBrandIcon,
  GoogleScholarBrandIcon,
  KaggleBrandIcon,
} from "@/components/icons/TechIcons";

export function FloatingDock() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${portfolioData.personal.name} — ${portfolioData.personal.role}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-2 p-1.5 rounded-full bg-[#0d1424]/80 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/60">
      <button
        onClick={handleShare}
        title={copied ? "Link Copied!" : "Share Profile"}
        className="relative p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors group cursor-pointer"
      >
        <Share2 className="w-4 h-4" />
        {copied && (
          <span className="absolute left-full ml-2 px-2 py-1 bg-blue-600 text-white text-[10px] font-mono rounded whitespace-nowrap">
            Copied!
          </span>
        )}
      </button>

      <a
        href={portfolioData.personal.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
        className="p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
      >
        <GithubBrandIcon className="w-4 h-4" />
      </a>

      <a
        href={portfolioData.personal.socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
        className="p-2.5 rounded-full text-gray-400 hover:text-blue-400 hover:bg-white/10 transition-colors"
      >
        <LinkedinBrandIcon className="w-4 h-4" />
      </a>

      <a
        href={portfolioData.personal.socials.googleScholar}
        target="_blank"
        rel="noopener noreferrer"
        title="Google Scholar"
        className="p-2.5 rounded-full text-gray-400 hover:text-[#4285F4] hover:bg-white/10 transition-colors"
      >
        <GoogleScholarBrandIcon className="w-4 h-4" />
      </a>

      <a
        href={portfolioData.personal.socials.kaggle}
        target="_blank"
        rel="noopener noreferrer"
        title="Kaggle"
        className="p-2.5 rounded-full text-gray-400 hover:text-[#20BEFF] hover:bg-white/10 transition-colors"
      >
        <KaggleBrandIcon className="w-4 h-4" />
      </a>

      <div className="w-4 h-[1px] bg-white/15 my-1" />

      <button
        onClick={scrollToTop}
        title="Back to Top"
        className="p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}

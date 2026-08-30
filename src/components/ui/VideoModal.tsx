"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Clock, Eye, Play, BookOpen, ExternalLink } from "lucide-react";
import { Publication } from "@/data/portfolioData";
import { YoutubeBrandIcon } from "@/components/icons/TechIcons";

interface VideoModalProps {
  publication?: Publication | null;
  tutorial?: any;
  onClose: () => void;
}

export function VideoModal({ publication, tutorial, onClose }: VideoModalProps) {
  const item = publication || tutorial;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-3xl bg-[#0c1220] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0c1220] border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-md bg-amber-500/20 text-amber-400">
              <BookOpen className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono font-medium text-gray-300">{item.tag || item.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Preview Banner */}
        <div className="relative aspect-video w-full bg-black group">
          <Image
            src={item.thumbnail || item.image}
            alt={item.title}
            fill
            className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            sizes="(max-width: 1024px) 100vw, 768px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] via-transparent to-transparent" />
        </div>

        {/* Details */}
        <div className="p-6 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">{item.title}</h2>
          <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs text-gray-400">
            <div className="flex items-center gap-4">
              <span className="text-amber-400 font-mono">
                {item.authors || "Fazle Karim, et al."}
              </span>
              <span>{item.year || "Peer-Reviewed Research"}</span>
            </div>
            <a
              href="https://linkedin.com/in/mpemu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-medium flex items-center gap-2 transition-colors cursor-pointer border border-amber-500/30"
            >
              <ExternalLink className="w-4 h-4" />
              View Academic Research Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

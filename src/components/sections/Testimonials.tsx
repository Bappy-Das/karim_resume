"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Quote, ArrowRight, CheckCircle2, MessageSquareQuote } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function Testimonials() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="testimonials" className="py-14 sm:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-tech tracking-tight text-white mb-1">
              What Learners Say
            </h2>
            <div className="w-12 h-1 bg-blue-500 rounded-full mb-2" />
            <p className="text-xs sm:text-sm text-gray-400 font-mono">
              Real feedback from students and viewers on LinkedIn and YouTube
            </p>
          </div>
          <a
            href={portfolioData.personal.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-mono text-gray-400 hover:text-blue-400 flex items-center gap-1.5 transition-colors group shrink-0"
          >
            <span>All Reviews on YouTube</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 2x3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioData.testimonials.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className="p-5 rounded-2xl glass-card relative flex flex-col justify-between overflow-hidden group hover:border-blue-500/30"
              >
                {/* Translucent Quote Mark in Top Right */}
                <div className="absolute top-4 right-4 text-white/5 group-hover:text-blue-500/10 transition-colors pointer-events-none">
                  <Quote className="w-10 h-10 rotate-180" />
                </div>

                {/* User Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1">
                      <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                      {item.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      )}
                    </div>
                    <p className="text-[11px] font-mono text-gray-400 truncate">{item.role}</p>
                  </div>
                </div>

                {/* Review Text */}
                <div className="text-xs sm:text-sm text-gray-300 leading-relaxed relative">
                  <p className={!isExpanded ? "line-clamp-3" : ""}>{item.quote}</p>
                  {item.quote.length > 90 && (
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="text-[11px] font-mono text-blue-400 hover:text-blue-300 mt-2 font-medium cursor-pointer"
                    >
                      {isExpanded ? "Show less" : "Read more..."}
                    </button>
                  )}
                </div>

                {/* Platform tag footer */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500">
                  <span>Verified Student</span>
                  <span className="text-gray-400">via {item.platform}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

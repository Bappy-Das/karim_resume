"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function LearnFromMe() {
  return (
    <section id="publications" className="py-14 sm:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-tech tracking-tight text-white mb-1">Research & Publications</h2>
            <div className="w-12 h-1 bg-blue-500 rounded-full mb-3" />
            <p className="text-sm sm:text-base text-gray-400 font-normal">
              Papers I’ve contributed to during university and my professional career.
            </p>
          </div>
          <a
            href={portfolioData.personal.socials.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-mono text-gray-400 hover:text-amber-400 flex items-center gap-1.5 transition-colors group shrink-0"
          >
            <span>View Scholar Profiles</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Publications Vertical Stack */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {portfolioData.publications.map((pub, idx) => {
            return (
              <div
                key={pub.id || idx}
                className="relative p-5 sm:p-7 rounded-2xl transition-all duration-300 group bg-[#0B1120]/60 border border-slate-800/80 hover:border-slate-700 hover:bg-[#0B1120]/80"
              >
                {/* 2-Column Content Layout: Index Number + Publication Details */}
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Index Number */}
                  <div className="shrink-0 pt-0.5">
                    <span className="text-xs sm:text-sm font-mono font-bold text-blue-500">{pub.number || `0${idx + 1}`}</span>
                  </div>

                  {/* Publication Content */}
                  <div className="flex-1 min-w-0">
                    {/* Header Row: Title */}
                    <div>
                      {pub.link ? (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-1.5"
                        >
                          <h3 className="text-base sm:text-lg font-bold leading-snug tracking-tight text-white group-hover/link:text-amber-300 transition-colors">
                            {pub.title}
                          </h3>
                        </a>
                      ) : (
                        <h3 className="text-base sm:text-lg font-bold leading-snug tracking-tight text-white">{pub.title}</h3>
                      )}
                    </div>

                    {/* Metadata Row: Journal/Conference · Date */}
                    <div className="text-xs sm:text-sm text-gray-400 font-mono flex flex-wrap items-center gap-1.5 mt-2 mb-2.5">
                      <span>{pub.journalOrConference}</span>
                      <span className="text-gray-500 font-bold">·</span>
                      <span>{pub.date || pub.year}</span>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">{pub.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function Certificates() {
  return (
    <section id="certificates" className="py-14 sm:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-tech tracking-tight text-white mb-1">
              Certificates & Awards
            </h2>
            <div className="w-12 h-1 bg-cyan-500 rounded-full mb-3" />
            <p className="text-sm sm:text-base text-gray-400 font-normal">
              Industry-recognized credentials, specialized AI accreditations, and professional awards.
            </p>
          </div>
          <a
            href={portfolioData.personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-mono text-gray-400 hover:text-cyan-400 flex items-center gap-1.5 transition-colors group shrink-0"
          >
            <span>View Verified Credentials</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Certificates Vertical Stack */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {portfolioData.certificates.map((cert, idx) => {
            return (
              <div
                key={cert.id || idx}
                className="relative p-5 sm:p-7 rounded-2xl transition-all duration-300 group bg-[#0B1120]/60 border border-slate-800/80 hover:border-slate-700 hover:bg-[#0B1120]/80"
              >
                {/* 2-Column Content Layout: Index Number + Certificate Details */}
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Index Number */}
                  <div className="shrink-0 pt-0.5">
                    <span className="text-xs sm:text-sm font-mono font-bold text-cyan-400">
                      {cert.number || `0${idx + 1}`}
                    </span>
                  </div>

                  {/* Certificate Content */}
                  <div className="flex-1 min-w-0">
                    {/* Header Row: Title */}
                    <div>
                      {cert.link ? (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-1.5"
                        >
                          <h3 className="text-base sm:text-lg font-bold leading-snug tracking-tight text-white group-hover/link:text-cyan-300 transition-colors">
                            {cert.title}
                          </h3>
                        </a>
                      ) : (
                        <h3 className="text-base sm:text-lg font-bold leading-snug tracking-tight text-white">
                          {cert.title}
                        </h3>
                      )}
                    </div>

                    {/* Metadata Row: Issuer · Date/Credential */}
                    <div className="text-xs sm:text-sm text-gray-400 font-mono flex flex-wrap items-center gap-1.5 mt-2 mb-2.5">
                      <span>{cert.issuer}</span>
                      <span className="text-gray-500 font-bold">·</span>
                      <span>{cert.date}</span>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                      {cert.description}
                    </p>
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

"use client";

import React from "react";
import { GraduationCap, Calendar, BookOpen, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function Education() {
  return (
    <section id="education" className="py-14 sm:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-tech tracking-tight text-white mb-1">
            Education & Academic Background
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full" />
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl glass-card relative overflow-hidden group hover:border-blue-500/30 flex flex-col justify-between"
            >
              {/* Glow Accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 blur-[60px] pointer-events-none" />

              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    {edu.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">{edu.degree}</h3>
                  <p className="text-xs sm:text-sm font-semibold text-blue-500 mt-1 font-mono">{edu.institution}</p>
                </div>

                {edu.details && <p className="text-xs sm:text-sm text-gray-400 leading-relaxed pt-1">{edu.details}</p>}
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-500">
                <span className="flex items-center gap-1 text-gray-400">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  Verified Degree
                </span>
                <span>Graduated with Honors</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

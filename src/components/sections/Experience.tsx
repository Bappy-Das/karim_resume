"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { TechIcon } from "@/components/icons/TechIcons";

export function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-2xl sm:text-3xl font-bold font-tech tracking-tight text-white">
              Professional Experience
            </h2>
          </div>
          <div className="w-12 h-1 bg-blue-500 rounded-full" />
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {portfolioData.experience.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl glass-card relative overflow-hidden group"
            >
              {/* Top ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[80px] pointer-events-none" />

              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {exp.badge}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-300 mt-1 font-mono">
                    <span className="text-blue-300 font-semibold">
                      {exp.company}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 shrink-0 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="space-y-2.5 mb-6">
                {exp.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-2" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-mono text-gray-400 mr-1">Skills & Tools:</span>
                {exp.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/80 border border-white/10 text-xs font-mono text-gray-300"
                  >
                    <TechIcon name={tech} className="w-3.5 h-3.5" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

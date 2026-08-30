"use client";

import React from "react";
import { BarChart3, Database, Award, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { TechIcon } from "@/components/icons/TechIcons";

export function Skills() {
  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case "layout":
        return <BarChart3 className="w-4 h-4 text-blue-400" />;
      case "server":
        return <Database className="w-4 h-4 text-emerald-400" />;
      case "cloud":
        return <Award className="w-4 h-4 text-cyan-400" />;
      case "wrench":
        return <Sparkles className="w-4 h-4 text-purple-400" />;
      default:
        return <BarChart3 className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-14 sm:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-tech tracking-tight text-white mb-1">
            Skills & Certifications
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full" />
        </div>

        {/* 2x2 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl glass-card relative overflow-hidden group hover:border-blue-500/30"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold font-tech text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-gray-400">
                  {category.skills.length} Areas
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#0b111e]/90 border border-white/5 hover:border-blue-500/30 hover:bg-[#10182b] transition-all group/item shadow-sm"
                  >
                    <div className="shrink-0 transition-transform group-hover/item:scale-110">
                      <TechIcon name={skill.iconName} className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-medium text-gray-300 group-hover/item:text-white truncate">
                      {skill.name}
                    </span>
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

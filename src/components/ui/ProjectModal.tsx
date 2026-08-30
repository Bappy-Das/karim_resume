"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, CheckCircle2, Layers, Cpu } from "lucide-react";
import { Project } from "@/data/portfolioData";
import { GithubBrandIcon } from "@/components/icons/TechIcons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0c1220] border border-white/15 rounded-2xl shadow-2xl shadow-blue-950/50 flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0c1220]/95 backdrop-blur border-b border-white/10">
          <div>
            <span className="text-xs font-tech font-semibold text-blue-400 uppercase tracking-wider">
              Project Details
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Image preview with browser frame */}
          <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40 shadow-lg">
            <div className="px-4 py-2 bg-slate-900/90 border-b border-white/10 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs font-mono text-gray-400 ml-2 truncate">{project.liveUrl}</span>
            </div>
            <div className="relative aspect-video w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 850px"
              />
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono font-medium rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h3 className="text-sm font-tech uppercase text-gray-400 font-semibold tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-400" />
              Overview
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{project.longDescription}</p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-sm font-tech uppercase text-gray-400 font-semibold tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-400" />
              Key Features & Architectural Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.03] border border-white/5 text-xs sm:text-sm text-gray-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats if available */}
          {project.stats && (
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-indigo-950/40 border border-blue-500/20">
              {project.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-lg sm:text-2xl font-bold font-tech text-blue-400">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Action links */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[160px] flex items-center justify-center gap-2 py-3 px-5 rounded-xl btn-primary-gradient text-white font-medium text-sm shadow-lg shadow-blue-600/30 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Live Platform
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-gray-200 font-medium text-sm transition-colors cursor-pointer"
            >
              <GithubBrandIcon className="w-4 h-4" />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

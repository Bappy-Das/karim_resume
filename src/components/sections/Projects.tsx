"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, ArrowRight, BarChart3 } from "lucide-react";
import { portfolioData, Project } from "@/data/portfolioData";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { GithubBrandIcon } from "@/components/icons/TechIcons";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-14 sm:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-tech tracking-tight text-white mb-1">
              Analytics & BI Projects
            </h2>
            <div className="w-12 h-1 bg-blue-500 rounded-full" />
          </div>
          <a
            href={portfolioData.personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-mono text-gray-400 hover:text-blue-400 flex items-center gap-1.5 transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 3-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-2xl glass-card overflow-hidden group hover:border-blue-500/40"
            >
              {/* Card Image / Preview */}
              <div className="relative aspect-video w-full overflow-hidden bg-black/50 border-b border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-transparent to-transparent opacity-60" />
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white tracking-tight line-clamp-1 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-gray-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* GitHub & Live Demo Mini Links */}
                <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-white/5 text-gray-400">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <GithubBrandIcon className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 flex items-center gap-1 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Dashboard
                  </a>
                </div>

                {/* View Details Button (Blue Gradient) */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl btn-primary-gradient text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/25 group/btn cursor-pointer"
                >
                  <span>View Case Study</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform">&gt;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

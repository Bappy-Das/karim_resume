"use client";

import React, { useEffect } from "react";
import { X, Download, FileText, Briefcase, GraduationCap, Code, Award, BookOpen } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    const element = document.createElement("a");
    const resumeText = `FAZLE KARIM
${portfolioData.personal.location}
Phone: ${portfolioData.personal.phone} | Email: ${portfolioData.personal.email} | LinkedIn: ${portfolioData.personal.socials.linkedin}

SUMMARY:
${portfolioData.personal.bio}

PROFESSIONAL EXPERIENCE:
1. Business Intelligence Analyst | Storage Parts Direct | Florida, USA (February 2021 – February 2022)
- Design intuitive dashboards using Power BI and SQL to visualize Key Performance Indicators (KPIs) and support data-driven decision-making.
- Collaborate with cross-functional technical teams to define business requirements, metrics, and actionable goals to improve data architecture.

2. Data Analyst (OPT)
- Collaborated with stakeholders to gather business requirements, analyze data, and document functional IT needs.
- Improved business processes, supported technical project delivery, and performed rigorous user acceptance testing (UAT).
- Created complex reports and interactive dashboards using Excel, SQL, and Power BI while recommending data-driven technical solutions.

3. Information Technology Support (CPT)
- Assisted in managing and deploying content across various digital platforms, including websites and multimedia systems.
- Conducted digital research and analyzed audience engagement metrics to support data outreach strategies.
- Collaborated on multimedia IT projects, ensuring cohesive messaging and effective digital deployment.

4. Information Technology Executive
- Managed IT infrastructure and supported technical operations to ensure seamless data flow and systems reliability.

EDUCATION:
- Master of Business Administration (MBA), Business Analytics | International American University (Jan 2024 – May 2025)
- Bachelor of Science (BSc), Computer Science and Engineering | Daffodil International University (Sep 2014 – Jan 2019)

SKILLS & CERTIFICATIONS:
- Core Competencies: Data Analysis, Data Visualization, Business Intelligence, Statistical Modeling, Predictive Analytics
- Technical Tools: Python, SQL, Tableau, Power BI, Excel
- Certifications: Microsoft Business Analyst Professional, DataCamp Data Analyst, AI in Healthcare Specialization

PUBLICATIONS:
1. Analyzing Neuroimaging Epiphenomena: Machine Learning Approaches in Alzheimer's Prognostication
2. Aspect-based sentiment analysis of amazon product reviews using machine learning models and hybrid feature engineering
3. Real-Time, Multi-Modal Artificial Intelligence For Medicare Fraud Detection: An Integrated Framework Combining Claims, Electronic Health Records, And Provider Behavioral Signals
`;
    const file = new Blob([resumeText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "Fazle_Karim_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0c1220] border border-white/15 rounded-2xl shadow-2xl flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0c1220]/95 backdrop-blur border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white uppercase">{portfolioData.personal.name} — Resume</h2>
              <p className="text-xs text-gray-400 font-mono">IT & Data Analytics Professional</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg btn-primary-gradient text-white text-xs font-semibold shadow-md cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Download
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content */}
        <div className="p-6 sm:p-8 space-y-6 text-gray-300 text-sm">
          {/* Header Info */}
          <div className="border-b border-white/10 pb-4">
            <h1 className="text-2xl font-bold font-tech text-white uppercase">{portfolioData.personal.name}</h1>
            <p className="text-blue-400 font-medium text-base">{portfolioData.personal.role}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400 mt-2 font-mono">
              <span>✉ {portfolioData.personal.email}</span>
              <span>📞 {portfolioData.personal.phone}</span>
              <span>📍 {portfolioData.personal.location}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-tech uppercase tracking-wider text-blue-400 font-semibold mb-1.5">
              Professional Summary
            </h3>
            <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">{portfolioData.personal.bio}</p>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-xs font-tech uppercase tracking-wider text-blue-400 font-semibold mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Professional Experience
            </h3>
            <div className="space-y-3">
              {portfolioData.experience.map((exp) => (
                <div key={exp.id} className="space-y-2 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h4 className="font-semibold text-white text-sm">{exp.role}</h4>
                    <span className="text-xs font-mono text-gray-400">{exp.period}</span>
                  </div>
                  <div className="text-xs text-blue-300">{exp.company} • {exp.location}</div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-gray-300 mt-2">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="leading-relaxed">{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-tech uppercase tracking-wider text-emerald-400 font-semibold mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </h3>
            <div className="space-y-2">
              {portfolioData.education.map((edu, i) => (
                <div key={i} className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <div className="font-semibold text-white text-xs sm:text-sm">{edu.degree}</div>
                    <span className="text-xs font-mono text-gray-400">{edu.period}</span>
                  </div>
                  <div className="text-xs text-emerald-400">{edu.institution}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Skills & Certifications */}
          <div>
            <h3 className="text-xs font-tech uppercase tracking-wider text-cyan-400 font-semibold mb-2 flex items-center gap-2">
              <Award className="w-4 h-4" />
              Skills & Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="font-semibold text-gray-200">Core Competencies:</span> Data Analysis, Data Visualization, Business Intelligence, Statistical Modeling, Predictive Analytics
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="font-semibold text-gray-200">Technical Tools:</span> Python, SQL, Tableau, Power BI, Excel
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 sm:col-span-2">
                <span className="font-semibold text-gray-200">Certifications:</span> Microsoft Business Analyst Professional, DataCamp Data Analyst, AI in Healthcare Specialization
              </div>
            </div>
          </div>

          {/* Publications */}
          <div>
            <h3 className="text-xs font-tech uppercase tracking-wider text-amber-400 font-semibold mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Academic Research & Publications
            </h3>
            <div className="space-y-2 text-xs">
              {portfolioData.publications.map((pub, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="font-semibold text-white">{pub.title}</div>
                  <div className="text-xs text-amber-400/90 mt-0.5">{pub.category} • {pub.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0a0f1c] border-t border-white/10 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-medium cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={handleDownload}
            className="px-5 py-2 rounded-lg btn-primary-gradient text-white text-xs font-medium flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            Download Resume (TXT / Print)
          </button>
        </div>
      </div>
    </div>
  );
}

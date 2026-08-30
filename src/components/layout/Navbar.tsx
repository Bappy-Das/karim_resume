"use client";

import React, { useState, useEffect } from "react";
import { Home, Briefcase, Cpu, BookOpen, GraduationCap, Award, Mail, Moon, Sun, Menu, X } from "lucide-react";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const navItems = [
    { name: "HOME", href: "#home", icon: Home, color: "text-purple-400" },
    { name: "EXPERIENCE", href: "#experience", icon: Briefcase, color: "text-blue-400" },
    { name: "SKILLS", href: "#skills", icon: Cpu, color: "text-cyan-400" },
    { name: "RESEARCH", href: "#publications", icon: BookOpen, color: "text-amber-400" },
    { name: "EDUCATION", href: "#education", icon: GraduationCap, color: "text-emerald-400" },
    { name: "AWARDS", href: "#certificates", icon: Award, color: "text-cyan-400" },
    { name: "CONTACT", href: "#contact", icon: Mail, color: "text-red-400" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "skills", "publications", "education", "certificates", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = href.replace("#", "");
    if (target === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-3.5 sm:top-5 z-40 max-w-[1200px] mx-auto px-4 sm:px-6">
      <nav className="relative flex items-center justify-between px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-[#0b111e]/90 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/80">
        {/* Brand Logo */}
        <button
          onClick={() => scrollTo("#home")}
          className="text-base sm:text-lg font-bold font-tech text-white tracking-tight hover:text-blue-400 transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <span>fazlekarim.dev</span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.name.toLowerCase();
            return (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className={`flex items-center gap-1.5 text-xs font-mono font-semibold tracking-wider transition-all cursor-pointer ${
                  isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${item.color}`} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Right Action: Theme Toggle & Mobile Menu Trigger */}
        <div className="flex items-center gap-2">
          {/* Moon / Theme Toggle Button */}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Theme toggle"
            title="Theme mode"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#060a12] border border-white/10 hover:border-cyan-500/40 text-cyan-400 flex items-center justify-center transition-all hover:scale-105 shadow-inner cursor-pointer"
          >
            {isDark ? (
              <Moon className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg bg-white/5 text-gray-300 hover:text-white border border-white/10"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-gray-300" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl bg-[#0b111e]/98 backdrop-blur-lg border border-white/15 shadow-2xl flex flex-col gap-3 md:hidden animate-fadeIn">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 text-xs font-mono font-semibold tracking-wider text-gray-300 hover:text-white transition-colors"
                >
                  <Icon className={`w-4 h-4 ${item.color}`} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}

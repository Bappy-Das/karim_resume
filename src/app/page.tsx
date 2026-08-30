"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { LearnFromMe } from "@/components/sections/LearnFromMe";
import { Education } from "@/components/sections/Education";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { FloatingDock } from "@/components/ui/FloatingDock";
import { ChatWidget } from "@/components/ui/ChatWidget";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#070a11] bg-spotlight grid-pattern text-gray-100 selection:bg-blue-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Floating Vertical Social / Nav Dock on Left */}
      <FloatingDock />

      {/* Main Container */}
      <div className="relative z-10">
        <Hero />
        <TechMarquee />
        <Experience />
        <Skills />
        {/* <Projects /> */}
        <LearnFromMe />
        <Education />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </div>

      {/* Floating Interactive Chat Widget on Bottom-Right */}
      <ChatWidget />
    </main>
  );
}

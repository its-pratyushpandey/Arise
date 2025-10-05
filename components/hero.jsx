"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import PortfolioGeneratorDashboard from "@/app/(main)/dashboard/_component/portfolio-generator-dashboard";
const HeroSection = () => {
  const imageRef = useRef(null);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  useEffect(() => {
    const imageElement = imageRef.current;  
    gsap.fromTo(
      ".build-resume-cta",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    );

    // Existing scroll effect
    const handleScroll = () => {
      if (!imageElement) return;
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-4">
            Accelerate Your Career with AI
          </h1>
          <p className="text-lg md:text-xl text-blue-700">
            Boost your career prospects with <span className="font-bold text-blue-700">AI-driven resumes</span>, <span className="font-bold text-blue-700">tailored cover letters</span>, and <span className="font-bold text-blue-700">mock test analytics</span>.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-4xl mx-auto">
          {/* Create Resume */}
          <Link href="/resume" className="w-full">
            <div className="group build-resume-cta bg-white border border-blue-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center h-full">
              <svg className="w-10 h-10 mb-3 text-blue-700 group-hover:text-blue-800 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6M23 11h-6"/></svg>
              <span className="font-bold text-lg text-blue-900 mb-1">Create Resume</span>
              <span className="text-gray-500 text-sm">AI-optimized, ATS-friendly</span>
            </div>
          </Link>
          {/* Generate Cover Letter */}
          <Link href="/ai-cover-letter" className="w-full">
            <div className="group bg-white border border-blue-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center h-full">
              <svg className="w-10 h-10 mb-3 text-blue-700 group-hover:text-blue-800 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2z"/><path d="M7 10h10M7 14h5"/></svg>
              <span className="font-bold text-lg text-blue-900 mb-1">Generate Cover Letter</span>
              <span className="text-gray-500 text-sm">Personalized for every job</span>
            </div>
          </Link>
          {/* Mock Preparation App */}
          <Link href="/interview/mock" className="w-full">
            <div className="group bg-white border border-blue-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center h-full">
              <svg className="w-10 h-10 mb-3 text-blue-700 group-hover:text-blue-800 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2h5"/><circle cx="12" cy="7" r="4"/></svg>
              <span className="font-bold text-lg text-blue-900 mb-1">Mock Preparation App</span>
              <span className="text-gray-500 text-sm">Practice with real interview questions</span>
            </div>
          </Link>
          {/* GitHub Readme Generator */}
          <Link href="/readme-generator" className="w-full">
            <div className="group bg-white border border-blue-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center h-full">
              <svg className="w-10 h-10 mb-3 text-blue-700 group-hover:text-blue-800 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M12 4h9"/><rect x="3" y="8" width="13" height="8" rx="2"/></svg>
              <span className="font-bold text-lg text-blue-900 mb-1">GitHub Readme Generator</span>
              <span className="text-gray-500 text-sm">Showcase your skills & projects</span>
            </div>
          </Link>
          {/* Portfolio Generator */}
          <button
            className="group w-full bg-white border border-blue-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center h-full"
            onClick={() => setPortfolioOpen(true)}
          >
            <svg className="w-10 h-10 mb-3 text-blue-700 group-hover:text-blue-800 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 22H3"/><path d="M12 16v6"/></svg>
            <span className="font-bold text-lg text-blue-900 mb-1">Portfolio Generator</span>
            <span className="text-gray-500 text-sm">Build & showcase your portfolio</span>
          </button>
          {/* ATS Score Checker */}
          <button
            className="group w-full bg-white border border-blue-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center h-full"
            onClick={() => {
              if (typeof window !== 'undefined') {
                const event = new CustomEvent('open-ats-modal');
                window.dispatchEvent(event);
              }
            }}
          >
            <svg className="w-10 h-10 mb-3 text-blue-700 group-hover:text-blue-800 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-6M12 4v6m0 0l3-3m-3 3l-3-3"/></svg>
            <span className="font-bold text-lg text-blue-900 mb-1">ATS Score Checker</span>
            <span className="text-gray-500 text-sm">Instant feedback & download</span>
          </button>
        </div>
      </div>
      {/* Portfolio Generator Modal */}
      <Dialog open={portfolioOpen} onOpenChange={setPortfolioOpen}>
        <DialogContent className="max-w-5xl w-full p-0 bg-white border-blue-200 z-[9999]">
          <DialogHeader>
            <DialogTitle className="text-blue-700 text-2xl">Portfolio Generator</DialogTitle>
            <DialogDescription>
              Build and showcase your portfolio with AI.
            </DialogDescription>
          </DialogHeader>
          <div className="p-4">
            <PortfolioGeneratorDashboard />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;

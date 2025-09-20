"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Import GSAP if needed for advanced effects
// import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

const templateStyles = [
  "Minimal", "Dark Mode", "Gradient Glow", "Glassmorphism", "Neumorphism", "Corporate", "Creative", "Classic", "Tech Modern", "Bold Premium"
];

export default function PortfolioGeneratorDashboard() {
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [customization, setCustomization] = useState({ color: "#112240", font: "sans", layout: "default" });
  const [analytics, setAnalytics] = useState({ projects: 0, skillMatch: 0, atsScore: 0 });

  // Dummy preview for now
  const PreviewPanel = () => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      className="rounded-xl shadow-lg bg-white/80 p-6 min-h-[400px] flex flex-col justify-center items-center"
    >
      <h2 className="text-2xl font-bold mb-2">Portfolio Preview</h2>
      <p className="mb-4">Template: {templateStyles[selectedTemplate]}</p>
      <div className="w-full h-64 bg-gradient-to-br from-blue-100 via-white to-blue-300 rounded-lg flex items-center justify-center">
        <span className="text-lg text-gray-700">[Portfolio Sections Render Here]</span>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-5xl mx-auto mt-10 mb-10 p-8 bg-[#112240] rounded-2xl shadow-2xl text-[#e6f1ff]"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl font-extrabold text-center mb-8 text-[#64ffda] drop-shadow-lg"
      >
        Portfolio Generator
      </motion.h1>
      {/* Template Selector */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
        {templateStyles.map((style, idx) => (
          <motion.div
            key={style}
            whileHover={{ scale: 1.08, rotate: 2 }}
            className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${selectedTemplate === idx ? "border-[#64ffda] bg-[#0a192f]" : "border-[#233554] bg-[#112240]"}`}
            onClick={() => setSelectedTemplate(idx)}
          >
            <span className="font-semibold text-lg">{style}</span>
          </motion.div>
        ))}
      </div>
      {/* Live Preview Panel */}
      <div className="mb-8">
        <Button onClick={() => setShowPreview(!showPreview)} variant="secondary" className="mb-4">
          {showPreview ? "Hide Preview" : "Show Live Preview"}
        </Button>
        <AnimatePresence>{showPreview && <PreviewPanel />}</AnimatePresence>
      </div>
      {/* Customization Options */}
      <div className="mb-8 flex flex-col md:flex-row gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-medium">Primary Color</label>
          <input type="color" value={customization.color} onChange={e => setCustomization({ ...customization, color: e.target.value })} className="w-12 h-12 border-none rounded-full" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Font</label>
          <select value={customization.font} onChange={e => setCustomization({ ...customization, font: e.target.value })} className="rounded-lg px-3 py-1">
            <option value="sans">Sans Serif</option>
            <option value="serif">Serif</option>
            <option value="mono">Monospace</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Layout</label>
          <select value={customization.layout} onChange={e => setCustomization({ ...customization, layout: e.target.value })} className="rounded-lg px-3 py-1">
            <option value="default">Default</option>
            <option value="compact">Compact</option>
            <option value="timeline">Timeline</option>
          </select>
        </div>
      </div>
      {/* Export Options */}
      <div className="mb-8 flex gap-4 flex-wrap">
        <Button variant="outline">Download HTML/ZIP</Button>
        <Button variant="outline">Deploy Online</Button>
        <Button variant="outline">Copy Code</Button>
      </div>
      {/* Analytics Panel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-[#233554] rounded-xl p-6 flex flex-col md:flex-row gap-8 items-center justify-between"
      >
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-[#64ffda]">{analytics.projects}</span>
          <span className="text-base">Projects</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-[#64ffda]">{analytics.skillMatch}%</span>
          <span className="text-base">Skill Match</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-[#64ffda]">{analytics.atsScore}</span>
          <span className="text-base">ATS Score</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
"use client";
import React, { useState, useRef, useEffect } from "react";
import Logo from "@/components/Logo";
import Link from "next/link";
import { createPortal } from "react-dom";
import {
  TerminalSquare, GitBranch, Figma, Github, Cloud, Server, Zap, Package2, Database, Settings2, BookOpen, Palette, Sparkle, Wrench, Rocket, Layers, Cpu, BarChart2, FileText, Smartphone, Monitor, ShieldCheck, PenTool, Eye, Award, BarChart, Star, Flame, Twitter, User
} from "lucide-react";
import { toolsPlatforms } from "@/data/toolsPlatforms";
import { frameworks } from "@/data/frameworks";
import { deploymentPlatforms } from "@/data/deploymentPlatforms";
import { databasePlatforms } from "@/data/databasePlatforms";
import { languageIcons, fallbackLanguageIcon } from "./muiLanguageIcons";
import { skilliconsMap } from "./skilliconsMap";
import { skilliconsSocialMap } from "./skilliconsSocialMap";
import { moreSocials } from "./moreSocials";
import { Toaster, toast } from "sonner";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

// Parallax background effect with GSAP floating particles
import { useLayoutEffect } from "react";
function ParallaxBg() {
  const particleCount = 8;
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Only run on client
    const arr = Array.from({ length: particleCount }).map(() => ({
      width: 60 + Math.random() * 80,
      height: 60 + Math.random() * 80,
      background: `rgba(59,130,246,${0.08 + Math.random() * 0.12})`,
      top: Math.random() * 80,
      left: Math.random() * 80,
    }));
    setParticles(arr);
  }, []);

  useLayoutEffect(() => {
    if (typeof window !== "undefined" && window.gsap) {
      gsap.utils.toArray('.gsap-particle').forEach((el, i) => {
        gsap.to(el, {
          y: `random(-40,40)`,
          x: `random(-40,40)`,
          scale: `random(0.8,1.2)`,
          opacity: `random(0.2,0.5)`,
          duration: gsap.utils.random(8, 16),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.7
        });
      });
    }
  }, [particles]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-full bg-gradient-to-br from-blue-100 via-blue-200 to-blue-50 animate-gradient-move"
        style={{ backgroundSize: '200% 200%' }}
      />
      {particles.map((p, i) => (
        <div
          key={i}
          className="gsap-particle absolute rounded-full blur-2xl pointer-events-none"
          style={{
            width: `${p.width}px`,
            height: `${p.height}px`,
            background: p.background,
            top: `${p.top}%`,
            left: `${p.left}%`,
            zIndex: -1
          }}
        />
      ))}
    </div>
  );
}


const SKILL_GROUPS = [
  {
    label: "Languages",
    skills: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "Java" },
      { name: "C" },
      { name: "C++" },
      { name: "C#" },
      { name: "TypeScript" },
      { name: "Go (Golang)" },
      { name: "Ruby" },
      { name: "PHP" },
      { name: "Swift" },
      { name: "Kotlin" },
      { name: "Rust" },
      { name: "Scala" },
    ],
  },
  {
    label: "Frameworks & Libraries",
    skills: frameworks.map(({ name, icon }) => ({ name, icon })),
  },
  {
    label: "Deployment & Hosting",
    skills: [
      ...deploymentPlatforms,
     
    ],
  },
  {
    label: "Databases",
    skills: [
      ...databasePlatforms,
     
    ],
  },
  {
    label: "Tools & Platforms",
    skills: [
      ...toolsPlatforms,
      { name: "Git", icon: GitBranch },

    ],
  },
];

const initialState = {
  name: "",
  role: "",
  subtitle: "",
  work: "",
  workLink: "",
  collaborate: "",
  collaborateLink: "",
  learning: "",
  askMe: "",
  reachMe: "",
  projects: "",
  blog: "",
  experiences: "",
  funFact: "",
  skills: "",
  skillIcons: [],
  github: "",
  twitter: "",
  linkedin: "",
  email: "",
  social: {},
  addons: {},
};

function generateMarkdown(form) {
  let md = `# Hi \u{1F44B}, I'm ${form.name}\n\n${form.subtitle ? form.subtitle + "\n" : ""}`;
  md += form.role ? `**${form.role}**\n\n` : "";
  md += form.work ? `🔭 I’m currently working on\n${form.work}\n${form.workLink ? form.workLink + "\n" : ""}` : "";
  md += form.collaborate ? `👯 I’m looking to collaborate on\n${form.collaborate}\n${form.collaborateLink ? form.collaborateLink + "\n" : ""}` : "";
  md += form.learning ? `🌱 I’m currently learning\n${form.learning}\n` : "";
  md += form.askMe ? `💬 Ask me about\n${form.askMe}\n` : "";
  md += form.reachMe ? `📫 How to reach me\n${form.reachMe}\n` : "";
  md += form.projects ? `👨‍💻 All of my projects are available at\n${form.projects}\n` : "";
  md += form.blog ? `📝 Blog\n${form.blog}\n` : "";
  md += form.experiences ? `📄 Know about my experiences\n${form.experiences}\n` : "";
  md += form.funFact ? `⚡ Fun fact\n${form.funFact}\n` : "";
  // Add skill icons block using skillicons.dev
  let allSkills = form.skills ? form.skills.split(",").map(s => s.trim()).filter(Boolean) : [];
  if (form.skillIcons && form.skillIcons.length > 0) {
    allSkills = [...allSkills, ...form.skillIcons];
  }
  // Remove duplicates
  allSkills = [...new Set(allSkills)];
  // Map to skillicons.dev IDs
  const skillicons = allSkills.map(skill => skilliconsMap[skill] || "").filter(Boolean);
  if (skillicons.length > 0) {
    md += `\n## 🚀 Skill Icons\n`;
    md += `[![My Skills](https://skillicons.dev/icons?i=${skillicons.join(",")})](https://skillicons.dev)\n`;
    md += `\n`;
    md += `\n##  Skills (Text)\n`;
    allSkills.forEach(skill => {
      md += `- ${skill}\n`;
    });
  }
  md += `\n\n## 🌐 Connect with me\n`;
  // Social icons row
  const baseSocialLinks = [
    { key: "github", label: "GitHub", url: form.github ? `https://github.com/${form.github}` : "", value: form.github },
    { key: "twitter", label: "Twitter", url: form.twitter ? `https://twitter.com/${form.twitter}` : "", value: form.twitter },
    { key: "linkedin", label: "LinkedIn", url: form.linkedin ? `https://linkedin.com/in/${form.linkedin}` : "", value: form.linkedin },
    { key: "email", label: "Email", url: form.email ? `mailto:${form.email}` : "", value: form.email },
  ];
  // Add all socials from form.social (old and new)
  const allSocialKeys = [
    ...Object.keys(form.social || {}),
    ...moreSocials.map(s => s.name)
  ];
  // Remove duplicates
  const uniqueSocialKeys = [...new Set(allSocialKeys)];
  const moreSocialLinks = uniqueSocialKeys
    .map(key => {
      const value = form.social?.[key] || "";
      if (!value) return null;
      let url = "";
      if (key === "email") url = `mailto:${value}`;
      else if (key === "whatsapp" || key === "signal") url = `https://wa.me/${value}`;
      else if (key === "telegram") url = `https://t.me/${value}`;
      else if (key === "discord") url = `https://discord.com/users/${value}`;
      else if (key === "skype") url = `skype:${value}?chat`;
      else if (key === "reddit") url = `https://reddit.com/u/${value}`;
      else if (key === "stackoverflow") url = `https://stackoverflow.com/users/${value}`;
      else if (key === "facebookmessenger") url = `https://m.me/${value}`;
      else if (key === "wechat" || key === "line") url = ""; // No public profile URL
      else if (key === "mastodon") url = value.startsWith("@") ? `https://mastodon.social/${value.slice(1)}` : value;
      else url = `https://${key}.com/${value}`;
      return { key, label: key.charAt(0).toUpperCase() + key.slice(1), url, value };
    })
    .filter(Boolean);
  const allLinks = [...baseSocialLinks, ...moreSocialLinks].filter(l => l && l.value);
  if (allLinks.length > 0) {
    md += `<p align="left">\n`;
    allLinks.forEach(({ key, label, url, value }) => {
      const iconId = skilliconsSocialMap[key] || skilliconsMap[key] || key;
      if (iconId) {
        md += `<a href=\"${url}\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"margin-right:10px\">`;
        md += `<img src=\"https://skillicons.dev/icons?i=${iconId}\" width=\"32\" height=\"32\" alt=\"${label}\" style=\"vertical-align:middle\" />`;
        md += `</a>`;
      }
    });
    md += `</p>\n`;
  }
  // Addons and badges
  if (form.addons.visitorsBadge) md += `![Visitors](https://komarev.com/ghpvc/?username=${form.github}&label=Profile%20views&color=0e75b6&style=flat)\n`;
  if (form.addons.githubTrophy) md += `![Github Trophy](https://github-profile-trophy.vercel.app/?username=${form.github})\n`;
  if (form.addons.profileStats) md += `![GitHub stats](https://github-readme-stats.vercel.app/api?username=${form.github}&show_icons=true)\n`;
  if (form.addons.topSkills) md += `![Top Skills](https://github-readme-stats.vercel.app/api/top-langs/?username=${form.github})\n`;
  if (form.addons.streakStats) md += `![GitHub streak stats](https://github-readme-streak-stats.herokuapp.com/?user=${form.github})\n`;
  if (form.addons.twitterBadge && form.twitter) md += `![Twitter Badge](https://img.shields.io/twitter/follow/${form.twitter}?style=social)\n`;
  // Support
  if (form.addons.buyMeACoffee) md += `\n[![Buy Me A Coffee](https://img.shields.io/badge/-Buy%20me%20a%20coffee-ffdd00?style=flat&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/${form.addons.buyMeACoffee})\n`;
  if (form.addons.koFi) md += `\n[![Ko-fi](https://img.shields.io/badge/-Ko--fi-29abe0?style=flat&logo=ko-fi&logoColor=white)](https://ko-fi.com/${form.addons.koFi})\n`;
  return md;
}


const ReadmeGenerator = () => {
  const [form, setForm] = useState(initialState);
  const [markdown, setMarkdown] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [loading, setLoading] = useState(false);
  const previewRef = useRef(null);
  const skillRefs = useRef({});

  useEffect(() => {
    if (showPreview && previewRef.current) {
      gsap.fromTo(
        previewRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      );
    }
  }, [showPreview]);

  // Animate skill select/deselect
  useEffect(() => {
    form.skillIcons.forEach(skill => {
      if (skillRefs.current[skill]) {
        gsap.fromTo(
          skillRefs.current[skill],
          { scale: 0.85, boxShadow: "0 0 0 0 rgba(59,130,246,0.08)" },
          { scale: 1.08, boxShadow: "0 4px 16px rgba(59,130,246,0.18)", duration: 0.3, ease: "power2.out" }
        );
        gsap.to(skillRefs.current[skill], { scale: 1, boxShadow: "0 0 0 0 rgba(59,130,246,0.08)", delay: 0.3, duration: 0.2 });
      }
    });
  }, [form.skillIcons]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSkillClick = name => {
    setForm(f => {
      const already = f.skillIcons.includes(name);
      return {
        ...f,
        skillIcons: already ? f.skillIcons.filter(s => s !== name) : [...f.skillIcons, name]
      };
    });
  };

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setMarkdown(generateMarkdown(form));
      setShowPreview(true);
      setLoading(false);
      setTimeout(() => {
        if (previewRef.current) {
          previewRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 200);
    }, 900); // Simulate loading for animation
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(markdown);
    toast.success("Copied to clipboard!");
  };

  const handleDownload = () => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Download started!");
  };

  return (
    <>
      <Toaster richColors position="top-center" />
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-50 overflow-x-hidden">
        <ParallaxBg />
        {/* Navbar with Logo */}
  <nav className="w-full flex items-center justify-between px-4 py-3 md:px-8 bg-white/70 shadow-sm fixed top-0 left-0 z-30 border-b border-blue-100 backdrop-blur-md">
          <Link href="/" className="flex items-center gap-2 group" prefetch={false} aria-label="Go to Home">
            <Logo />
            <span className="sr-only">Home</span>
          </Link>
        </nav>
        <div className="h-16 md:h-20" />
        <motion.h1
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.7, type: 'spring' }}
          className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2 drop-shadow-lg text-center tracking-tight mt-8"
        >
          <motion.span
            initial={{ rotate: -20, scale: 0.7, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7, type: 'spring' }}
            className="inline-block align-middle mr-2"
          >
            <Sparkle className="inline w-8 h-8 text-blue-400 animate-spin-slow" />
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7, type: 'spring' }}
            className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-400 bg-clip-text text-transparent animate-gradient-text"
          >
            Github README Generator
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, type: 'spring' }}
          className="text-lg md:text-xl text-blue-700 mb-8 text-center max-w-2xl"
        >
          Instantly create a <span className="font-bold text-blue-900">stunning, professional</span> GitHub README profile with icons, badges, and all your links.<br />Responsive, animated, and easy to use.
        </motion.p>
        <form
          className="w-full max-w-6xl flex flex-col gap-8 px-2 pb-8"
          onSubmit={e => { e.preventDefault(); handleGenerate(); }}
          autoComplete="off"
          aria-label="README Generator Form"
        >
          {/* Top: Personal Info (left) and Socials (right) */}
          <div className="w-full flex flex-col md:flex-row gap-6">
            {/* Personal Info Card - left */}
            <div className="flex-1">
              <Card className="w-full bg-white/80 shadow-xl rounded-2xl border border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900"><User className="w-5 h-5 text-blue-400" /> Personal Info</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <Input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
                  <Input name="role" placeholder="Role/Title" value={form.role} onChange={handleChange} required />
                  <Input name="subtitle" placeholder="Subtitle" value={form.subtitle} onChange={handleChange} />
                  <Input name="work" placeholder="Currently working on" value={form.work} onChange={handleChange} />
                  <Input name="workLink" placeholder="Work Link" value={form.workLink} onChange={handleChange} />
                  <Input name="collaborate" placeholder="Looking to collaborate on" value={form.collaborate} onChange={handleChange} />
                  <Input name="collaborateLink" placeholder="Collaboration Link" value={form.collaborateLink} onChange={handleChange} />
                  <Input name="learning" placeholder="Currently learning" value={form.learning} onChange={handleChange} />
                  <Input name="askMe" placeholder="Ask me about" value={form.askMe} onChange={handleChange} />
                  <Input name="reachMe" placeholder="How to reach me" value={form.reachMe} onChange={handleChange} />
                  <Input name="projects" placeholder="Projects URL" value={form.projects} onChange={handleChange} />
                  <Input name="blog" placeholder="Blog Link" value={form.blog} onChange={handleChange} />
                  <Input name="funFact" placeholder="Fun Fact" value={form.funFact} onChange={handleChange} />
                </CardContent>
              </Card>
            </div>
            {/* Socials Card - right */}
            <div className="flex-1">
              <Card className="w-full bg-white/80 shadow-xl rounded-2xl border border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900"><Github className="w-5 h-5 text-blue-400" /> Socials</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <Input name="github" placeholder="GitHub Username" value={form.github} onChange={handleChange} required />
                  <Input name="twitter" placeholder="Twitter Username" value={form.twitter} onChange={handleChange} />
                  <Input name="linkedin" placeholder="LinkedIn Username" value={form.linkedin} onChange={handleChange} />
                  <Input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                    {(() => {
                      const socialsList = [
                        { name: "instagram", label: "Instagram Username" },
                        { name: "facebook", label: "Facebook Username" },
                        { name: "devto", label: "Dev.to Username" },
                        { name: "stackoverflow", label: "StackOverflow User ID" },
                        { name: "youtube", label: "YouTube Username" },
                        { name: "medium", label: "Medium Username" },
                        { name: "codechef", label: "Codechef Username" },
                        { name: "hackerrank", label: "Hackerrank Username" },
                        { name: "codeforces", label: "Codeforces Username" },
                        { name: "leetcode", label: "Leetcode Username" },
                        { name: "hackerearth", label: "Hackerearth Username" },
                        { name: "geeksforgeeks", label: "GeeksforGeeks Username" },
                        ...moreSocials
                      ];
                      const seen = new Set();
                      const uniqueSocials = socialsList.filter(({ name }) => {
                        if (seen.has(name)) return false;
                        seen.add(name);
                        return true;
                      });
                      return uniqueSocials.map(({ name, label }) => (
                        <div key={name} className="flex items-center gap-2">
                          {(skilliconsSocialMap[name] || skilliconsMap[name]) && (
                            <img src={`https://skillicons.dev/icons?i=${skilliconsSocialMap[name] || skilliconsMap[name] || name}`} alt={label} width={22} height={22} className="inline-block" />
                          )}
                          <Input
                            name={name}
                            placeholder={label}
                            value={form.social[name] || ""}
                            onChange={e => setForm(f => ({ ...f, social: { ...f.social, [name]: e.target.value } }))}
                            className="rounded-lg bg-white text-black placeholder-blue-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border border-blue-200 shadow-sm flex-1 transition-all duration-200 hover:scale-[1.03] focus:scale-105"
                            aria-label={label}
                          />
                        </div>
                      ));
                    })()}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* Skills Card - full width below */}
          <Card className="w-full bg-white/80 shadow-xl rounded-2xl border border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900"><Sparkle className="w-5 h-5 text-blue-400" /> Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Input name="skills" placeholder="Skills (comma separated)" value={form.skills} onChange={handleChange} />
              <div className="font-semibold mb-1 text-blue-800 flex items-center gap-2">
                <Sparkle className="w-5 h-5 text-blue-400 animate-pulse" /> Pick your skills visually:
              </div>
              <div className="flex flex-col gap-6 mt-2">
                {SKILL_GROUPS.map((group, gi) => (
                  <div key={group.label} className="w-full">
                    <h3 className="text-base md:text-lg font-bold text-blue-700 mb-2 flex items-center gap-2">
                      <span className="inline-block"><Sparkle className="w-4 h-4 text-blue-400" /></span>
                      {group.label}
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-3">
                      {group.skills.map(({ name }, i) => {
                        const skilliconId = skilliconsMap[name];
                        return (
                          <button
                            type="button"
                            key={name}
                            ref={el => (skillRefs.current[name] = el)}
                            className={`flex flex-col items-center justify-center p-2 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-200 shadow-md ${form.skillIcons.includes(name)
                              ? 'bg-blue-600 border-blue-700 text-white shadow-lg scale-110 ring-2 ring-blue-400'
                              : 'bg-blue-50 border-blue-200 text-blue-700 hover:text-blue-900'}
                              `}
                            aria-pressed={form.skillIcons.includes(name)}
                            aria-label={name}
                            onClick={() => handleSkillClick(name)}
                          >
                            {skilliconId ? (
                              <img src={`https://skillicons.dev/icons?i=${skilliconId}`} alt={name} width={32} height={32} className="mb-1" />
                            ) : (
                              <span className="w-8 h-8 mb-1 flex items-center justify-center bg-blue-200 rounded">?</span>
                            )}
                            <span className={`text-xs font-medium text-center leading-tight ${form.skillIcons.includes(name) ? 'text-white' : 'text-blue-800'}`}>{name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              {form.skillIcons.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {form.skillIcons.map(skill => {
                    const skilliconId = skilliconsMap[skill];
                    return (
                      <span key={skill} className="inline-flex items-center gap-1 px-2 py-1 bg-blue-600 text-white rounded text-xs font-semibold border border-blue-700 shadow">
                        {skilliconId && <img src={`https://skillicons.dev/icons?i=${skilliconId}`} alt={skill} width={18} height={18} className="inline-block align-middle" />} {skill}
                      </span>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
          {/* Generate README Button - visible, centered, professional */}
          <div className="w-full flex justify-center mt-4">
            <Button
              type="submit"
              className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white font-semibold rounded-xl px-8 py-3 shadow-xl text-lg tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200 animate-bounce-once w-full max-w-xs"
              aria-label="Generate README"
            >
              <Sparkle className="inline w-6 h-6 mr-2 animate-spin-slow" /> Generate README
            </Button>
          </div>
          {/* Badges Card and Preview remain below as before */}
          <Card className="w-full bg-white/80 shadow-xl rounded-2xl border border-blue-200 mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900"><Award className="w-5 h-5 text-blue-500" /> Professional Badges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <label className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 shadow-sm hover:bg-blue-100 transition-colors cursor-pointer">
                  <input type="checkbox" checked={form.addons.visitorsBadge||false} onChange={e=>setForm(f=>({...f,addons:{...f.addons,visitorsBadge:e.target.checked}}))} className="accent-blue-600 w-4 h-4" />
                  <Eye className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-900 font-medium text-sm">Visitors Count Badge</span>
                </label>
                <label className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 shadow-sm hover:bg-blue-100 transition-colors cursor-pointer">
                  <input type="checkbox" checked={form.addons.githubTrophy||false} onChange={e=>setForm(f=>({...f,addons:{...f.addons,githubTrophy:e.target.checked}}))} className="accent-blue-600 w-4 h-4" />
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span className="text-blue-900 font-medium text-sm">Github Trophy</span>
                </label>
                <label className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 shadow-sm hover:bg-blue-100 transition-colors cursor-pointer">
                  <input type="checkbox" checked={form.addons.profileStats||false} onChange={e=>setForm(f=>({...f,addons:{...f.addons,profileStats:e.target.checked}}))} className="accent-blue-600 w-4 h-4" />
                  <BarChart className="w-4 h-4 text-green-500" />
                  <span className="text-blue-900 font-medium text-sm">Profile Stats Card</span>
                </label>
                <label className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 shadow-sm hover:bg-blue-100 transition-colors cursor-pointer">
                  <input type="checkbox" checked={form.addons.topSkills||false} onChange={e=>setForm(f=>({...f,addons:{...f.addons,topSkills:e.target.checked}}))} className="accent-blue-600 w-4 h-4" />
                  <Star className="w-4 h-4 text-orange-400" />
                  <span className="text-blue-900 font-medium text-sm">Top Skills Card</span>
                </label>
                <label className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 shadow-sm hover:bg-blue-100 transition-colors cursor-pointer">
                  <input type="checkbox" checked={form.addons.streakStats||false} onChange={e=>setForm(f=>({...f,addons:{...f.addons,streakStats:e.target.checked}}))} className="accent-blue-600 w-4 h-4" />
                  <Flame className="w-4 h-4 text-red-500" />
                  <span className="text-blue-900 font-medium text-sm">Streak Stats</span>
                </label>
                <label className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 shadow-sm hover:bg-blue-100 transition-colors cursor-pointer">
                  <input type="checkbox" checked={form.addons.twitterBadge||false} onChange={e=>setForm(f=>({...f,addons:{...f.addons,twitterBadge:e.target.checked}}))} className="accent-blue-600 w-4 h-4" />
                  <Twitter className="w-4 h-4 text-sky-500" />
                  <span className="text-blue-900 font-medium text-sm">Twitter Badge</span>
                </label>
              </div>
            </CardContent>
          </Card>
          {/* Markdown Preview remains below as before */}
          <div className="flex flex-col gap-6 items-center justify-start min-w-[320px]">
            <AnimatePresence>
              {loading && createPortal(
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.7, opacity: 0 }}
                    transition={{ duration: 0.4, type: 'spring' }}
                    className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-2xl border border-blue-200"
                  >
                    <span className="text-blue-700 text-lg font-semibold">Generating Markdown...</span>
                    <motion.div
                      className="w-12 h-12 rounded-full border-4 border-blue-400 border-t-transparent animate-spin"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    />
                  </motion.div>
                </div>,
                document.body
              )}
              {showPreview && (
                <motion.section
                  ref={previewRef}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, type: 'spring' }}
                  className="w-full max-w-xl mt-2"
                >
                  <motion.div
                    initial={{ scale: 0.98, boxShadow: '0 0 0 0 rgba(59,130,246,0.08)' }}
                    animate={{ scale: 1, boxShadow: '0 8px 32px 0 rgba(59,130,246,0.12)' }}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl shadow-2xl bg-gradient-to-br from-white via-blue-50 to-blue-100 border border-blue-200 backdrop-blur-md"
                  >
                    <div className="flex items-center gap-2 px-6 pt-6 pb-2">
                      <Sparkle className="w-5 h-5 text-blue-400 animate-pulse" />
                      <h2 className="text-xl font-bold text-blue-900">Markdown Preview</h2>
                    </div>
                    <div className="px-6 pb-4">
                      <pre className="whitespace-pre-wrap text-sm bg-blue-50 p-4 rounded-lg border border-blue-200 overflow-x-auto text-blue-900">
                        {markdown}
                      </pre>
                      <div className="flex gap-2 justify-end flex-wrap mt-2">
                        <Button type="button" onClick={handleCopy} className="hover:bg-blue-200 hover:scale-105 min-w-[100px] text-blue-900" aria-label="Copy Markdown">
                          Copy
                        </Button>
                        <Button type="button" onClick={handleDownload} className="hover:bg-green-200 hover:scale-105 min-w-[100px] text-blue-900" aria-label="Download Markdown">
                          Download
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReadmeGenerator;
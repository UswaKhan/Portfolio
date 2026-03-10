"use client";

// HeroSection.jsx
// Place this in your Next.js project under components/HeroSection.jsx

import { useEffect, useState } from "react";

const navItems = ["Home", "Services", "Skills", "About", "Contact"];

export default function HeroSection() {
  const [activeSection, setActiveSection] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = ["home", "services", "skills", "about", "contact"];

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollY = window.scrollY + 120; // offset for fixed navbar

      let current = "Home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id.charAt(0).toUpperCase() + id.slice(1);
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-violet-50 overflow-hidden flex flex-col">

      {/* ── Subtle background pattern ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Soft radial blobs */}
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-violet-200 opacity-30 blur-3xl" />
        <div className="absolute bottom-[-60px] left-[-100px] w-[400px] h-[400px] rounded-full bg-purple-200 opacity-30 blur-3xl" />
        <div className="absolute bottom-[-60px] right-[-100px] w-[400px] h-[400px] rounded-full bg-violet-200 opacity-30 blur-3xl" />

        {/* Dot grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#7c3aed" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        {/* Decorative rings */}
        <div className="absolute top-[12%] left-[6%] w-24 h-24 rounded-full border border-violet-200 opacity-50" />
        <div className="absolute top-[10%] left-[6.8%] w-14 h-14 rounded-full border border-violet-300 opacity-40" />
        <div className="absolute bottom-[15%] right-[6%] w-32 h-32 rounded-full border border-violet-200 opacity-40" />
        <div className="absolute bottom-[18%] right-[7.5%] w-16 h-16 rounded-full border border-violet-300 opacity-30" />

        {/* Small floating diamonds */}
        <svg className="absolute top-[20%] right-[12%] opacity-20" width="18" height="18" viewBox="0 0 18 18"><rect x="4" y="4" width="10" height="10" rx="2" transform="rotate(45 9 9)" fill="#7c3aed"/></svg>
        <svg className="absolute top-[55%] left-[8%] opacity-15" width="14" height="14" viewBox="0 0 14 14"><rect x="3" y="3" width="8" height="8" rx="1" transform="rotate(45 7 7)" fill="#7c3aed"/></svg>
        <svg className="absolute bottom-[25%] left-[18%] opacity-10" width="22" height="22" viewBox="0 0 22 22"><rect x="5" y="5" width="12" height="12" rx="2" transform="rotate(45 11 11)" fill="#7c3aed"/></svg>
      </div>

      {/* ── NAV ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 md:px-16 lg:px-20 py-4 md:py-5 transition-all duration-500 ease-in-out
        ${scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100"
          : "bg-transparent border-b border-transparent"
        }`}>
        <span
          className="text-3xl sm:text-4xl font-semibold text-gray-900"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          Uswa<span className="text-violet-600">.</span>
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10 list-none m-0 p-0">
          {navItems.map((item) => {
            const isActive = activeSection === item;
            return (
              <li key={item}>
                <a
                  href={item === "Home" ? "#home" : `#${item.toLowerCase()}`}
                  className={`text-[17px] transition-colors duration-200 no-underline font-medium pb-0.5
                    ${isActive
                      ? "text-violet-700 border-b-2 border-violet-500"
                      : "text-gray-500 hover:text-violet-700"
                    }`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed top-[65px] left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64 py-4" : "max-h-0"}`}>
        <div className="flex flex-col gap-4 px-5">
          {navItems.map((item) => {
            const isActive = activeSection === item;
            return (
              <a
                key={item}
                href={item === "Home" ? "#home" : `#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`text-base font-medium no-underline transition-colors duration-200
                  ${isActive ? "text-violet-700" : "text-gray-500"}`}
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>

      {/* ── HERO CONTENT ── */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-5 sm:px-10 md:px-16 pt-28 pb-16 md:pt-32 md:pb-20">

        {/* Tagline badge */}
        <div className="inline-flex items-center gap-2 bg-white text-violet-700 text-sm font-medium tracking-wider px-5 py-2 rounded-full border border-violet-200 mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-violet-500 inline-block" />
          CRM &amp; Workflow Automation Specialist
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl text-gray-900 leading-[1.1] tracking-tight mb-5"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          Hi, I&apos;m{" "}
          <span className="relative inline-block">
            <em className="text-violet-700 not-italic">Uswa Khan</em>
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M2 8 Q75 2 150 7 Q225 12 298 5" stroke="#a78bfa" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-500 font-light mb-6 max-w-xl">
          Automation Specialist | CRM & Workflow Automation
        </p>

        {/* Bio */}
        <p className="text-lg sm:text-xl text-gray-500 font-light leading-relaxed mb-10 max-w-2xl">
          I help businesses streamline operations through powerful CRM and workflow automation. Using tools like <span className="text-gray-800 font-medium">GHL &amp; N8N</span>, I design automated systems that capture leads, send follow-ups, and connect business tools to save time and improve efficiency.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-14">
          <a
            href="https://www.upwork.com/freelancers/~012a9db1aef745e442"
            className="bg-violet-700 hover:bg-violet-800 text-white text-base font-medium px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-violet-200 hover:shadow-violet-300 hover:-translate-y-0.5 no-underline"
          >
            Start a Project →
          </a>
          <a
            href="#services"
            className="text-violet-700 text-base font-medium flex items-center gap-2 hover:gap-3 transition-all duration-200 py-3.5 px-6 border border-violet-200 rounded-full hover:bg-white no-underline"
          >
            View Services →
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 w-full max-w-2xl mb-8">
          <div className="flex-1 h-px bg-violet-200" />
          <span className="text-xs text-gray-400 uppercase tracking-widest font-medium whitespace-nowrap">Automation Tools & Platforms</span>
          <div className="flex-1 h-px bg-violet-200" />
        </div>

        {/* Tool pills */}
        <div className="flex items-center justify-center gap-4 flex-wrap">

          {/* GHL */}
          <div className="flex items-center gap-3 bg-white border border-violet-100 rounded-2xl px-5 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[10px] font-bold">GHL</span>
            </div>
            <span className="text-base text-gray-700 font-medium">GoHighLevel</span>
          </div>

          {/* N8N */}
          <div className="flex items-center gap-3 bg-white border border-violet-100 rounded-2xl px-5 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <div className="w-8 h-8 rounded-lg bg-[#ea4b71] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[11px] font-bold">n8n</span>
            </div>
            <span className="text-base text-gray-700 font-medium">N8N</span>
          </div>

          {/* Notion */}
          <div className="flex items-center gap-3 bg-white border border-violet-100 rounded-2xl px-5 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[13px] font-bold">N</span>
            </div>
            <span className="text-base text-gray-700 font-medium">Notion</span>
          </div>

          {/* Slack */}
          <div className="flex items-center gap-3 bg-white border border-violet-100 rounded-2xl px-5 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <div className="w-8 h-8 rounded-lg bg-[#4a154b] flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
              </svg>
            </div>
            <span className="text-base text-gray-700 font-medium">Slack</span>
          </div>

          {/* Google Sheets */}
          <div className="flex items-center gap-3 bg-white border border-violet-100 rounded-2xl px-5 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <div className="w-8 h-8 rounded-lg bg-[#0f9d58] flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.186 0H4.814C2.155 0 0 2.155 0 4.814v14.372C0 21.845 2.155 24 4.814 24h14.372C21.845 24 24 21.845 24 19.186V4.814C24 2.155 21.845 0 19.186 0zM9.6 18H6V6h3.6v12zm8.4 0H12V6h6v12z"/>
              </svg>
            </div>
            <span className="text-base text-gray-700 font-medium">Google Sheets</span>
          </div>

          {/* Gmail */}
          <div className="flex items-center gap-3 bg-white border border-violet-100 rounded-2xl px-5 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
              </svg>
            </div>
            <span className="text-base text-gray-700 font-medium">Gmail</span>
          </div>

        </div>
      </div>

    </section>
  );
}
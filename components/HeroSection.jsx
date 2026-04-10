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
          Full-Stack Developer &amp; AI Builder
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
          Full-Stack Developer | AI-Powered Products
        </p>

        {/* Bio */}
        <p className="text-lg sm:text-xl text-gray-500 font-light leading-relaxed mb-10 max-w-2xl">
          I build and ship full-stack web applications powered by AI. From scalable backends to pixel-perfect frontends, I turn complex ideas into real, production-ready products that solve real business problems.
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
          <span className="text-xs text-gray-400 uppercase tracking-widest font-medium whitespace-nowrap">Tools & Platforms</span>
          <div className="flex-1 h-px bg-violet-200" />
        </div>

        {/* Tool pills */}
        <div className="flex items-center justify-center gap-4 flex-wrap">

          {/* Python */}
          <div className="flex items-center gap-3 bg-white border border-violet-100 rounded-2xl px-5 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <div className="w-8 h-8 rounded-lg bg-[#3776AB] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 256 255" xmlns="http://www.w3.org/2000/svg">
                <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" fill="#fff"/>
                <path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z" fill="#fff"/>
              </svg>
            </div>
            <span className="text-base text-gray-700 font-medium">Python</span>
          </div>

          {/* React.js */}
          <div className="flex items-center gap-3 bg-white border border-violet-100 rounded-2xl px-5 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <div className="w-8 h-8 rounded-lg bg-[#20232a] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#61DAFB" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="2.139"/>
                <path fill="none" stroke="#61DAFB" strokeWidth="1" d="M12 6.042c3.858 0 7.26.78 9.403 1.998C23.542 9.258 24.5 10.632 24.5 12s-.958 2.742-3.097 3.96C19.26 17.178 15.858 17.958 12 17.958s-7.26-.78-9.403-1.998C.358 14.742-.6 13.368-.6 12s.958-2.742 3.097-3.96C4.74 6.822 8.142 6.042 12 6.042z" transform="rotate(0 12 12)"/>
                <path fill="none" stroke="#61DAFB" strokeWidth="1" d="M12 6.042c3.858 0 7.26.78 9.403 1.998C23.542 9.258 24.5 10.632 24.5 12s-.958 2.742-3.097 3.96C19.26 17.178 15.858 17.958 12 17.958s-7.26-.78-9.403-1.998C.358 14.742-.6 13.368-.6 12s.958-2.742 3.097-3.96C4.74 6.822 8.142 6.042 12 6.042z" transform="rotate(60 12 12)"/>
                <path fill="none" stroke="#61DAFB" strokeWidth="1" d="M12 6.042c3.858 0 7.26.78 9.403 1.998C23.542 9.258 24.5 10.632 24.5 12s-.958 2.742-3.097 3.96C19.26 17.178 15.858 17.958 12 17.958s-7.26-.78-9.403-1.998C.358 14.742-.6 13.368-.6 12s.958-2.742 3.097-3.96C4.74 6.822 8.142 6.042 12 6.042z" transform="rotate(120 12 12)"/>
              </svg>
            </div>
            <span className="text-base text-gray-700 font-medium">React.js</span>
          </div>

          {/* Next.js */}
          <div className="flex items-center gap-3 bg-white border border-violet-100 rounded-2xl px-5 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
                <mask id="nMask" x="0" y="0" maskUnits="userSpaceOnUse" style={{maskType: "alpha"}}>
                  <circle cx="90" cy="90" r="90" fill="white"/>
                </mask>
                <g mask="url(#nMask)">
                  <path d="M149.508 157.52L69.142 54H54V125.97H66.116V69.384L139.999 164.845C143.396 162.614 146.568 160.165 149.508 157.52Z" fill="url(#nGrad1)"/>
                  <rect x="115" y="54" width="12" height="72" fill="url(#nGrad2)"/>
                </g>
                <defs>
                  <linearGradient id="nGrad1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/><stop offset="1" stopColor="white" stopOpacity="0"/>
                  </linearGradient>
                  <linearGradient id="nGrad2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/><stop offset="1" stopColor="white" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="text-base text-gray-700 font-medium">Next.js</span>
          </div>

          {/* Claude Code */}
          <div className="flex items-center gap-3 bg-white border border-violet-100 rounded-2xl px-5 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <div className="w-8 h-8 rounded-lg bg-[#D97757] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 17l6-5-6-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-base text-gray-700 font-medium">Claude Code</span>
          </div>

          {/* Opencode */}
          <div className="flex items-center gap-3 bg-white border border-violet-100 rounded-2xl px-5 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 6l-6 6 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.5 4l-5 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-base text-gray-700 font-medium">Opencode</span>
          </div>

        </div>
      </div>

    </section>
  );
}
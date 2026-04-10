"use client";

// Footer.jsx
// Place this in your Next.js project under components/Footer.jsx

import { useState } from "react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("uswalohani386@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-violet-900 text-white px-5 sm:px-8 md:px-16 lg:px-20 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Branding */}
          <div className="lg:col-span-2">
            <span
              className="text-3xl font-semibold text-white"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Uswa<span className="text-violet-400">.</span>
            </span>
            <p className="text-violet-200 font-light leading-relaxed mt-3 max-w-sm">
              Full-Stack Developer & AI Builder helping businesses design, build, and ship production-ready web applications and AI-powered products.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6 relative">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/uswakhan386" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-violet-800 flex items-center justify-center text-violet-200 hover:bg-violet-600 hover:text-white transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                </svg>
              </a>
              {/* Upwork */}
              <a href="https://www.upwork.com/freelancers/~012a9db1aef745e442" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-violet-800 flex items-center justify-center text-violet-200 hover:bg-violet-600 hover:text-white transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H8.028v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H.979v7.112c0 3.057 2.484 5.54 5.541 5.54 3.056 0 5.54-2.483 5.54-5.54V9.18c.535 1.115 1.193 2.256 1.986 3.286l-1.684 7.902h2.584l1.224-5.735c1.099.712 2.302 1.127 3.591 1.127 3.057 0 5.541-2.485 5.541-5.541 0-3.057-2.484-5.541-5.541-5.541z"/>
                </svg>
              </a>
              {/* GitHub */}
              <a href="https://github.com/UswaKhan" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-violet-800 flex items-center justify-center text-violet-200 hover:bg-violet-600 hover:text-white transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 496 512">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/>
                </svg>
              </a>
              {/* Email */}
              <a href="mailto:uswalohani386@gmail.com"
                className="w-9 h-9 rounded-lg bg-violet-800 flex items-center justify-center text-violet-200 hover:bg-violet-600 hover:text-white transition-all duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {["Home", "Services", "Skills", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={item === "Home" ? "#home" : `#${item.toLowerCase()}`}
                    className="text-violet-200 hover:text-violet-400 transition-colors duration-200 text-sm no-underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="mailto:uswalohani386@gmail.com" className="text-violet-200 hover:text-violet-400 transition-colors duration-200 text-sm no-underline">
                  uswalohani386@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/uswakhan386" target="_blank" rel="noopener noreferrer" className="text-violet-200 hover:text-violet-400 transition-colors duration-200 text-sm no-underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.upwork.com/freelancers/~012a9db1aef745e442" target="_blank" rel="noopener noreferrer" className="text-violet-200 hover:text-violet-400 transition-colors duration-200 text-sm no-underline">
                  Upwork
                </a>
              </li>
              <li>
                <a href="https://github.com/UswaKhan" target="_blank" rel="noopener noreferrer" className="text-violet-200 hover:text-violet-400 transition-colors duration-200 text-sm no-underline">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-violet-800 mb-6" />

        {/* SEO text */}
        <p className="text-center text-violet-300 text-xs font-light mb-6 tracking-wide">
          Full-Stack Developer & AI Builder · Python · React.js · Next.js · FastAPI · Claude AI
        </p>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-violet-300 text-sm">© {new Date().getFullYear()} Uswa Khan. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-violet-200 hover:text-violet-400 transition-colors duration-200"
          >
            Back to Top
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
}
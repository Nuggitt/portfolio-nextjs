"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "./themeProvider";

export default function Header() {
  const { darkMode, setDarkMode } = useTheme();
  const [openMain, setOpenMain] = useState(false); // mobilmenu
  const [openCv, setOpenCv] = useState(false); // CV-dropdown (desktop)
  const wrapRef = useRef(null);
  const cvRef = useRef(null);

  // Klik udenfor lukker menuer
  useEffect(() => {
    function onDocClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpenMain(false);
        setOpenCv(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <nav
      className="bg-gray-800 text-white px-4 sm:px-6 py-4 sticky top-0 z-50 shadow"
      ref={wrapRef}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-lg sm:text-xl font-bold hover:underline underline-offset-4"
        >
          Philip&apos;s Portfolio
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/about" className="hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/work" className="hover:underline underline-offset-4">
            Work
          </Link>
          <Link
            href="/education"
            className="hover:underline underline-offset-4"
          >
            Education
          </Link>
          <Link href="/skills" className="hover:underline underline-offset-4">
            Skills
          </Link>
          <Link href="/projects" className="hover:underline underline-offset-4">
            Projects
          </Link>
          <Link href="/contact" className="hover:underline underline-offset-4">
            Contact
          </Link>

          {/* CV Dropdown (desktop) */}
          <div className="relative" ref={cvRef}>
            <button
              onClick={() => setOpenCv((v) => !v)}
              className="cv-button"
              aria-haspopup="menu"
              aria-expanded={openCv}
            >
              View Resume
            </button>
            {openCv && (
              <div
                className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-md z-50"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href="https://jofibo.com/da/s/m3WVtromskGUVgjdtTbD0w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  🇩🇰 Danish
                </a>
                <a
                  href="https://jofibo.com/da/s/pYWlKfDU1E2jJCNZUlGq6w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  🇬🇧 English
                </a>
              </div>
            )}
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 px-3 py-1 border rounded text-sm hover:bg-gray-700 dark:hover:bg-gray-300 dark:text-black"
            aria-pressed={darkMode}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 border rounded text-sm hover:bg-gray-700 dark:hover:bg-gray-300 dark:text-black"
            aria-pressed={darkMode}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setOpenMain((v) => !v)}
            aria-controls="mobile-menu"
            aria-expanded={openMain}
            aria-label="Toggle menu"
            className="inline-flex items-center justify-center rounded-md p-2 border border-white/20 hover:bg-white/10 focus:outline-none"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {openMain && (
        <div
          id="mobile-menu"
          className="md:hidden mt-3 max-w-5xl mx-auto rounded-2xl border border-white/10 bg-gray-800 p-4 shadow-lg"
        >
          <div className="flex flex-col gap-2">
            <Link
              href="/about"
              className="py-1 hover:underline underline-offset-4"
              onClick={() => setOpenMain(false)}
            >
              About
            </Link>
            <Link
              href="/work"
              className="py-1 hover:underline underline-offset-4"
              onClick={() => setOpenMain(false)}
            >
              Work
            </Link>
            <Link
              href="/education"
              className="py-1 hover:underline underline-offset-4"
              onClick={() => setOpenMain(false)}
            >
              Education
            </Link>
            <Link
              href="/skills"
              className="py-1 hover:underline underline-offset-4"
              onClick={() => setOpenMain(false)}
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className="py-1 hover:underline underline-offset-4"
              onClick={() => setOpenMain(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="py-1 hover:underline underline-offset-4"
              onClick={() => setOpenMain(false)}
            >
              Contact
            </Link>

            {/* CV-links på mobil som simpel liste */}
            <div className="mt-2 pt-2 border-t border-white/10">
              <div className="text-sm font-medium mb-1">View Resume</div>
              <div className="flex flex-col rounded-lg overflow-hidden border border-white/10">
                <a
                  href="https://jofibo.com/da/s/m3WVtromskGUVgjdtTbD0w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-sm hover:bg-white/10"
                >
                  🇩🇰 Danish
                </a>
                <a
                  href="https://jofibo.com/da/s/pYWlKfDU1E2jJCNZUlGq6w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-sm hover:bg-white/10"
                >
                  🇬🇧 English
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

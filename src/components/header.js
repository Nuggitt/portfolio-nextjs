"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "./themeProvider";

export default function Header() {
  const { darkMode, setDarkMode } = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 sticky top-0 z-50 shadow">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold hover:underline underline-offset-4"
        >
          Philip&apos;s Portfolio
        </Link>

        <div className="flex items-center space-x-4 relative">
          <Link href="/about" className="hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/work" className="hover:underline underline-offset-4">
            Experience
          </Link>
          <Link href="/projects" className="hover:underline underline-offset-4">
            Projects
          </Link>
          <Link
            href="/education"
            className="hover:underline underline-offset-4"
          >
            Education
          </Link>
          <Link href="/contact" className="hover:underline underline-offset-4">
            Contact
          </Link>

          {/* CV Dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="cv-button"
            >
              View CV
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-md z-50">
                <a
                  href="https://jofibo.com/da/s/m3WVtromskGUVgjdtTbD0w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  🇩🇰 Dansk CV
                </a>
                <a
                  href="https://jofibo.com/da/s/pYWlKfDU1E2jJCNZUlGq6w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  🇬🇧 English CV
                </a>
              </div>
            )}
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 px-3 py-1 border rounded text-sm hover:bg-gray-700 dark:hover:bg-gray-300 dark:text-black"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}

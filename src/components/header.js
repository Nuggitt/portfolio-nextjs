"use client";
import Link from "next/link";
import { useTheme } from "./themeProvider";

export default function Header() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 sticky top-0 z-50 shadow">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold hover:underline underline-offset-4"
        >
          Philip&apos;s Portfolio
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/about" className="hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/work" className="hover:underline underline-offset-4">
            Experience
          </Link>
          <Link href="/projects" className="hover:underline underline-offset-4">
            Projects
          </Link>
          <Link href="/contact" className="hover:underline underline-offset-4">
            Contact
          </Link>
          <a
            href="/cv.pdf"
            download
            className="bg-gray-900 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            Download CV
          </a>
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

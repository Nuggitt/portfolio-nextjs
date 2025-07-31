"use client";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 sticky top-0 z-50 shadow">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold hover:underline underline-offset-4"
        >
          Philip's Portfolio
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
        </div>
      </div>
    </nav>
  );
}

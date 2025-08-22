"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // Months are zero-indexed in JavaScript
  const currentDate = new Date().getDate();

  return (
    <footer>
      <div>
        <a
          href="https://www.linkedin.com/in/phni"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Nuggitt"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://facebook.com/Nuggitlive"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </div>

      <p>
        Last updated: {currentDate} {currentMonth} {currentYear},
      </p>
    </footer>
  );
}

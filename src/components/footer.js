"use client";

export default function Footer() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");

  return (
    <footer>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        {/* Link-række */}
        <div className="link-row">
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

        {/* Centreret under links */}
        <p>
          Last updated: {dd}-{mm}-{yyyy}
        </p>
      </div>
    </footer>
  );
}

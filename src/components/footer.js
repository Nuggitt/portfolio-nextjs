"use client";

export default function Footer() {
  const updated = process.env.NEXT_PUBLIC_LAST_UPDATED;

  return (
    <footer>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
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

        <p>
          Last updated:{" "}
          {updated
            ? new Date(updated).toLocaleDateString("da-DK", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })
            : "Unknown"}
        </p>
      </div>
    </footer>
  );
}

// app/page.js (Next.js App Router)
// Dark, minimalist home page with Hero, Highlights, Tech Badges, and CTA
// SEO-friendly H1/H2

import Link from "next/link";
import ResumeMenuInline from "@/components/resumeMenuInline";

export const metadata = {
  title: "Philip | Fullstack .NET & React Developer",
  description:
    "Recently graduated Computer Science AP full‑stack developer building fast, scalable, and user‑friendly web apps with .NET, C#, React/Next.js, SQL, and Tailwind.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Philip — Fullstack .NET & React Developer",
    description:
      "I build modern, responsive web apps with .NET, C#, React/Next.js, SQL, and Tailwind.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  const badges = [
    ".NET",
    "C#",
    "React",
    "Next.js",
    "SQL",
    "Tailwind CSS",
    "Git",
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
      {/* HERO */}
      <section className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Hi, I&apos;m Philip <span aria-hidden>👋</span>
        </h1>
        <p className="about-lead max-w-3xl mx-auto">
          I&apos;m a recently graduated Computer Science AP student specializing
          in full-stack development. I build modern and responsive web apps
          using <b>.NET</b>, <b>C#</b>, and <b>Next.js</b>.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium bg-blue-600 hover:bg-blue-700 text-white transition"
          >
            See My Projects
          </Link>
          <ResumeMenuInline className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium bg-blue-600 hover:bg-blue-700 text-white transition" />
        </div>
      </section>

      {/* HIGHLIGHTS (uses same card style as About) */}
      <section className="mt-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
          Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card h-full transition hover:shadow-md hover:-translate-y-0.5">
            <h3 className="card-title-md">Full-stack Development</h3>
            <p className="text-muted">
              Scalable .NET APIs with clean architecture + modern React/Next.js
              frontends.
            </p>
          </div>

          <div className="card h-full transition hover:shadow-md hover:-translate-y-0.5">
            <h3 className="card-title-md">Production-minded</h3>
            <p className="text-muted">
              Focus on performance, DX, accessibility, and responsive design.
            </p>
          </div>

          <div className="card h-full transition hover:shadow-md hover:-translate-y-0.5">
            <h3 className="card-title-md">Recent Graduate</h3>
            <p className="text-muted">
              Computer Science AP — comfortable from idea to deployment.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK TECH BADGES */}
      <section className="mt-16">
        <h2 className="sr-only">Technologies</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {badges.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-lg text-sm font-medium bg-slate-700 text-white dark:bg-gray-700 dark:text-white"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="mt-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Let&apos;s build something great together
        </h2>
        <p className="text-muted mb-6 max-w-2xl mx-auto">
          I enjoy turning ideas into reliable products. If you have a project in
          mind or want to collaborate, I&apos;d love to hear from you.
        </p>
        <Link href="/contact" className="btn-blue">
          Get in Touch
        </Link>
      </section>
    </main>
  );
}

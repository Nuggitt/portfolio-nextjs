"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// Brand-ikoner
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiDotnet,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiDocker,
  SiVercel,
  SiLinux,
  SiGit,
  SiGithub,
  SiPostman,
  SiJirasoftware,
  SiTrello,
  SiFigma,
  SiFramer,
  // NEW (fra CV)
  SiKotlin,
  SiPython,
  SiVuedotjs,
  SiAxios,
  SiSelenium,
  SiFirebase,
  SiGithubactions,
  SiTensorflow,
  SiFilezilla,
  SiGooglecloud,
} from "react-icons/si";

// Generiske fallbacks
import { Database, Mail, FlaskConical, Hash, Cloud, Code2 } from "lucide-react";

export default function SkillsPage() {
  // Ikon map
  const ICONS = {
    // languages
    javascript: SiJavascript,
    typescript: SiTypescript,
    html: SiHtml5,
    css: SiCss3,
    dotnet: SiDotnet,
    node: SiNodedotjs,

    // frameworks & libs
    react: SiReact,
    next: SiNextdotjs,
    tailwind: SiTailwindcss,
    prisma: SiPrisma,
    framermotion: SiFramer,

    // tools
    git: SiGit,
    github: SiGithub,
    docker: SiDocker,
    vercel: SiVercel,
    linux: SiLinux,
    postman: SiPostman,
    jira: SiJirasoftware,
    trello: SiTrello,
    figma: SiFigma,

    // NEW: languages
    kotlin: SiKotlin,
    python: SiPython,

    // NEW: frameworks/libs
    vue: SiVuedotjs,
    axios: SiAxios,
    selenium: SiSelenium,
    firebase: SiFirebase, // Firebase Auth
    tensorflow: SiTensorflow,
    googlecloud: SiGooglecloud, // Vision API

    // NEW: tools/devops
    githubactions: SiGithubactions,
    filezilla: SiFilezilla,
  };

  // Render med fallback
  function RenderIcon({ name }) {
    const Comp = ICONS[name];
    if (Comp) return <Comp className="text-xl" aria-hidden />;

    // Azure familie (ingen dedikerede react-icons)
    if (name === "azure") {
      return <Cloud className="w-5 h-5" aria-hidden />;
    }
    if (name === "azuredevops") {
      return <Cloud className="w-5 h-5" aria-hidden />;
    }

    // Fallbacks
    if (name === "blazor" || name === "razor")
      return <SiDotnet className="text-xl" aria-hidden />;
    if (name === "jetpack" || name === "syncfusion" || name === "ssms")
      return <Code2 className="w-5 h-5" aria-hidden />;
    if (name === "csharp") return <Hash className="w-5 h-5" aria-hidden />;
    if (name === "sql" || name === "entityframework")
      return <Database className="w-5 h-5" aria-hidden />;
    if (name === "railway") return <Cloud className="w-5 h-5" aria-hidden />;
    if (name === "vscode") return <Code2 className="w-5 h-5" aria-hidden />;
    if (name === "resend") return <Mail className="w-5 h-5" aria-hidden />;
    if (name === "ci") return <FlaskConical className="w-5 h-5" aria-hidden />;

    return <span aria-hidden>🔹</span>;
  }

  // ---------- DATA ----------
  const programming = {
    frontend: [
      { label: "JavaScript", key: "javascript" },
      { label: "TypeScript", key: "typescript" },
      { label: "HTML", key: "html" },
      { label: "CSS", key: "css" },
    ],
    backend: [
      { label: "C#", key: "csharp" },
      { label: ".NET", key: "dotnet" },
      { label: "SQL", key: "sql" },
      { label: "Node.js", key: "node" },
      { label: "Python", key: "python" }, // NEW
      { label: "Kotlin", key: "kotlin" }, // NEW
    ],
  };

  const frameworks = [
    { label: "React", key: "react" },
    { label: "Next.js", key: "next" },
    { label: "Tailwind CSS", key: "tailwind" },
    { label: "ASP.NET", key: "dotnet" },
    { label: "Entity Framework", key: "entityframework" },
    { label: "Prisma", key: "prisma" },
    { label: "Framer Motion", key: "framermotion" },
    // NEW
    { label: "Blazor", key: "blazor" },
    { label: "Razor Pages", key: "razor" },
    { label: "Vue.js", key: "vue" },
    { label: "Jetpack Compose", key: "jetpack" },
    { label: "Syncfusion", key: "syncfusion" },
    { label: "Axios", key: "axios" },
    { label: "Selenium", key: "selenium" },
    { label: "TensorFlow", key: "tensorflow" },
    { label: "Firebase Auth", key: "firebase" },
    { label: "GCP Vision API", key: "googlecloud" },
  ];

  const toolsPlatforms = [
    { label: "Git", key: "git" },
    { label: "GitHub", key: "github" },
    { label: "VS Code", key: "vscode" },
    { label: "Docker", key: "docker" },
    { label: "Vercel", key: "vercel" },
    { label: "Linux", key: "linux" },
    { label: "Postman", key: "postman" },
    { label: "Jira", key: "jira" },
    { label: "Trello", key: "trello" },
    { label: "Railway", key: "railway" },
    { label: "Figma", key: "figma" },
    { label: "Resend (Email)", key: "resend" },
    { label: "CI/CD (GitHub)", key: "ci" },
    // NEW
    { label: "Azure", key: "azure" },
    { label: "Azure DevOps", key: "azuredevops" },
    { label: "GitHub Actions", key: "githubactions" },
    { label: "SSMS", key: "ssms" },
    { label: "FileZilla", key: "filezilla" },
  ];

  const certificates = [
    {
      id: "az900",
      title: "Learning React.js ",
      issuer: "Linkedin Learning",
      date: " Jul 29 2025",
      logo: "/images/learningnextjs.png",
      skills: ["Web Development", "Front-End-Development", "Next.js", "React"],
      description:
        "Covers the fundamentals of React.js, including components, JSX, state, props, and hooks, to build interactive and modern front-end applications.",
      link: "https://www.linkedin.com/learning/certificates/c448d4859efc99bec633b8554142b95408236c299b5c0d13217e78e57c306d6e?u=37487420",
    },
    // …
  ];

  // --- Modal state ---
  const [openId, setOpenId] = useState(null);
  const active = certificates.find((c) => c.id === openId) || null;
  const overlayRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpenId(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function Badge({ text, node }) {
    return (
      <span className="badge" title={text}>
        {node}
        <span>{text}</span>
      </span>
    );
  }

  function Grid({ items }) {
    // sorter en kopi af items alfabetisk efter label
    const sorted = [...items].sort((a, b) => a.label.localeCompare(b.label));

    return (
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(160px,1fr))] gap-3">
        {sorted.map((it) => (
          <div key={it.label} className="chip">
            <div className="h-full flex items-center gap-2">
              <div className="w-5 h-5 shrink-0" aria-hidden>
                <RenderIcon name={it.key} />
              </div>
              <div className="font-medium text-sm leading-none whitespace-nowrap">
                {it.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <main className="page-main">
      <h1 className="page-title">Skills & Certifications</h1>
      <div className="title-accent" />

      {/* Programming Languages */}
      <h2 className="section-heading">Programming Languages</h2>
      <div className="title-accent-left" />
      <section className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="section-heading">Frontend Languages</h2>
          <Grid items={programming.frontend} />
        </div>
        <div className="card">
          <h2 className="section-heading">Backend Languages</h2>
          <Grid items={programming.backend} />
        </div>
      </section>

      {/* Toolbox */}
      <h2 className="section-heading mt-12">Toolbox</h2>
      <div className="title-accent-left" />
      <section className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="section-heading">Tools & Platforms</h2>
          <Grid items={toolsPlatforms} />
        </div>
        <div className="card">
          <h2 className="section-heading">Frameworks & Libraries</h2>
          <Grid items={frameworks} />
        </div>
      </section>

      {/* Courses & Certs */}
      <h2 className="section-heading mt-12">Courses & Certifications</h2>
      <div className="title-accent-left" />
      <section className="mt-6">
        <div className="card">
          <h2 className="section-heading">Certificates</h2>
          <div className="grid sm:grid-cols-2 gap-5 mt-4">
            {certificates.map((c) => (
              <div
                key={c.id}
                className="group text-left rounded-xl border border-gray-200 
                 dark:border-gray-800 bg-white/50 dark:bg-gray-800/50 
                 hover:bg-white dark:hover:bg-gray-800 transition-colors 
                 p-4"
              >
                <div className="flex items-center gap-6">
                  {/* Mega logo */}
                  <div className="relative w-40 h-40 shrink-0 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <Image
                      src={c.logo}
                      alt={c.issuer}
                      fill
                      sizes="160px"
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Tekstblok */}
                  <div className="flex-1">
                    <div className="font-semibold leading-tight text-xl">
                      {c.title}
                    </div>
                    <div className="text-base text-gray-600 dark:text-gray-300">
                      {c.issuer}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {c.date}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-4 flex gap-3">
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-lg text-sm font-medium
                     bg-gradient-to-r from-blue-500 to-blue-600 text-white
                     hover:opacity-90 transition"
                  >
                    View on LinkedIn ↗
                  </a>
                  <button
                    onClick={() => setOpenId(c.id)}
                    className="px-3 py-1 rounded-lg text-sm font-medium
                     border border-gray-300 dark:border-gray-600
                     bg-white dark:bg-gray-800
                     text-gray-700 dark:text-gray-200
                     hover:bg-gray-100 dark:hover:bg-gray-700
                     transition"
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {active && (
        <div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
          onClick={(e) => {
            if (e.target === overlayRef.current) setOpenId(null);
          }}
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-white dark:bg-gray-900 
                    border border-gray-200 dark:border-gray-800 shadow-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-6">
                {/* Kæmpe logo */}
                <div className="relative w-40 h-40 shrink-0 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <Image
                    src={active.logo}
                    alt={active.issuer}
                    fill
                    sizes="160px"
                    className="object-contain p-2"
                  />
                </div>

                {/* Tekstblok */}
                <div className="flex-1">
                  <div className="font-semibold leading-tight text-2xl">
                    {active.title}
                  </div>
                  <div className="text-base text-gray-600 dark:text-gray-300">
                    {active.issuer} • {active.date}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setOpenId(null)}
                className="px-3 py-1 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                {active.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {active.skills.map((s) => (
                  <span key={s} className="badge">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 dark:border-gray-800">
              <a
                href={active.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-lg text-sm font-medium
                     bg-gradient-to-r from-blue-500 to-blue-600 text-white
                     hover:opacity-90 transition"
              >
                View on LinkedIn ↗
              </a>
              <button
                onClick={() => setOpenId(null)}
                className="px-3 py-1 rounded-lg text-sm font-medium
                     border border-gray-300 dark:border-gray-600
                     bg-white dark:bg-gray-800
                     text-gray-700 dark:text-gray-200
                     hover:bg-gray-100 dark:hover:bg-gray-700
                     transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

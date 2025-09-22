"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

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
import { Database, Mail, FlaskConical, Hash, Cloud, Code2 } from "lucide-react";

export default function SkillsPage() {
  const ICONS = {
    javascript: SiJavascript,
    typescript: SiTypescript,
    html: SiHtml5,
    css: SiCss3,
    dotnet: SiDotnet,
    node: SiNodedotjs,
    react: SiReact,
    next: SiNextdotjs,
    tailwind: SiTailwindcss,
    prisma: SiPrisma,
    framermotion: SiFramer,
    git: SiGit,
    github: SiGithub,
    docker: SiDocker,
    vercel: SiVercel,
    linux: SiLinux,
    postman: SiPostman,
    jira: SiJirasoftware,
    trello: SiTrello,
    figma: SiFigma,
    kotlin: SiKotlin,
    python: SiPython,
    vue: SiVuedotjs,
    axios: SiAxios,
    selenium: SiSelenium,
    firebase: SiFirebase,
    tensorflow: SiTensorflow,
    googlecloud: SiGooglecloud,
    githubactions: SiGithubactions,
    filezilla: SiFilezilla,
  };

  function RenderIcon({ name }) {
    const Comp = ICONS[name];
    if (Comp) return <Comp className="i-lg" aria-hidden />;

    if (name === "azure" || name === "azuredevops" || name === "railway")
      return <Cloud className="i-sm" aria-hidden />;
    if (name === "blazor" || name === "razor")
      return <SiDotnet className="i-lg" aria-hidden />;
    if (name === "jetpack" || name === "syncfusion" || name === "ssms")
      return <Code2 className="i-sm" aria-hidden />;
    if (name === "csharp") return <Hash className="i-sm" aria-hidden />;
    if (name === "sql" || name === "entityframework")
      return <Database className="i-sm" aria-hidden />;
    if (name === "vscode") return <Code2 className="i-sm" aria-hidden />;
    if (name === "resend") return <Mail className="i-sm" aria-hidden />;
    if (name === "ci") return <FlaskConical className="i-sm" aria-hidden />;

    return <span aria-hidden>🔹</span>;
  }

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
      { label: "Python", key: "python" },
      { label: "Kotlin", key: "kotlin" },
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
  ];

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

  function Grid({ items }) {
    const sorted = [...items].sort((a, b) => a.label.localeCompare(b.label));
    return (
      <div className="auto-grid-160 grid-gap">
        {sorted.map((it) => (
          <div key={it.label} className="chip">
            <div className="chip-inner">
              <div className="chip-icon" aria-hidden>
                <RenderIcon name={it.key} />
              </div>
              <div className="chip-label">{it.label}</div>
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
      <section className="two-col">
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
      <section className="two-col">
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
          <div className="cert-grid">
            {certificates.map((c) => (
              <div key={c.id} className="cert-card">
                <div className="cert-head">
                  <div className="cert-logo">
                    <Image
                      src={c.logo}
                      alt={c.issuer}
                      fill
                      sizes="160px"
                      className="img-contain"
                    />
                  </div>
                  <div className="cert-meta">
                    <div className="cert-title">{c.title}</div>
                    <div className="cert-issuer">{c.issuer}</div>
                    <div className="cert-date">{c.date}</div>
                  </div>
                </div>

                <div className="cert-actions">
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gradient"
                  >
                    View on LinkedIn ↗
                  </a>
                  <button
                    onClick={() => setOpenId(c.id)}
                    className="btn-outline"
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
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === overlayRef.current) setOpenId(null);
          }}
        >
          <div className="modal-panel">
            <div className="modal-header">
              <div className="cert-head">
                <div className="cert-logo">
                  <Image
                    src={active.logo}
                    alt={active.issuer}
                    fill
                    sizes="160px"
                    className="img-contain"
                  />
                </div>
                <div className="cert-meta">
                  <div className="cert-title text-2xl">{active.title}</div>
                  <div className="cert-issuer">
                    {active.issuer} • {active.date}
                  </div>
                </div>
              </div>
              <button onClick={() => setOpenId(null)} className="modal-close">
                ✕
              </button>
            </div>

            <div className="modal-body">
              <p className="modal-text">{active.description}</p>
              <div className="badge-row">
                {active.skills.map((s) => (
                  <span key={s} className="badge">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <a
                href={active.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient"
              >
                View on LinkedIn ↗
              </a>
              <button onClick={() => setOpenId(null)} className="btn-outline">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function AboutPage() {
  const tech = [
    // Programming languages
    "C#",
    ".NET",
    "SQL",
    "JavaScript",
    "TypeScript",
    "Python",
    "Kotlin",
    "HTML",
    "CSS",

    // Frameworks & libraries
    "React",
    "Next.js",
    "Tailwind CSS",
    "ASP.NET",
    "Entity Framework",
    "Blazor",
    "Razor Pages",
    "Vue.js",
    "Jetpack Compose",
    "Syncfusion",
    "Axios",
    "Selenium",
    "TensorFlow",
    "Firebase Auth",

    // Tools & platforms
    "Git",
    "GitHub",
    "VS Code",
    "Docker",
    "Vercel",
    "Linux",
    "Postman",
    "CI/CD (GitHub)",
    "Azure",
    "Azure DevOps",
    "GitHub Actions",
  ];

  const projectSteps = [
    "Planning and defining scope",
    "Designing UI and user flows",
    "Building features iteratively",
    "Testing and gathering feedback",
    "Deploying and continuous improvement",
  ];
  const currentStep = 2;

  const [resumeOpen, setResumeOpen] = useState(false);
  const resumeRef = useRef(null);
  useEffect(() => {
    function handleClickAway(e) {
      if (resumeRef.current && !resumeRef.current.contains(e.target))
        setResumeOpen(false);
    }
    document.addEventListener("mousedown", handleClickAway);
    return () => document.removeEventListener("mousedown", handleClickAway);
  }, []);

  return (
    <main className="page-main">
      <h1 className="page-title">About Me</h1>
      <div className="title-accent" />

      {/* --- ABOUT: avatar + bio bullets --- */}
      <section className="about-section">
        <div className="about-grid">
          {/* Avatar + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card about-card-center"
          >
            <div className="avatar-ring">
              <Image
                src="/images/20200713_102544 5.jpg"
                alt="Portrait of me"
                width={112}
                height={112}
                className="avatar-img"
                priority
              />
            </div>

            <div className="about-cta">
              <div className="cta-row" id="cta-row">
                {/* Resume dropdown */}
                <div className="relative" ref={resumeRef}>
                  <button
                    className="btn-primary"
                    aria-haspopup="menu"
                    aria-expanded={resumeOpen}
                    aria-controls="resume-menu"
                    onClick={() => setResumeOpen((o) => !o)}
                  >
                    Resume
                  </button>

                  {resumeOpen && (
                    <div id="resume-menu" role="menu" className="resume-menu">
                      <Link
                        href="https://jofibo.com/da/s/m3WVtromskGUVgjdtTbD0w"
                        target="_blank"
                        role="menuitem"
                        className="resume-item"
                        onClick={() => setResumeOpen(false)}
                      >
                        Danish
                      </Link>
                      <Link
                        href="https://jofibo.com/da/s/pYWlKfDU1E2jJCNZUlGq6w"
                        target="_blank"
                        role="menuitem"
                        className="resume-item"
                        onClick={() => setResumeOpen(false)}
                      >
                        English
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="https://www.linkedin.com/in/phni"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-blue">LinkedIn</button>
                </Link>
                <Link
                  href="https://github.com/nuggitt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-neutral">GitHub</button>
                </Link>
              </div>

              <Link href="/contact" className="btn-block">
                <button className="btn-gradient btn-block">Get in touch</button>
              </Link>
            </div>
          </motion.div>

          {/* Bio bullets */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="card"
          >
            <ul className="emoji-list">
              <li>
                <span>👨‍💻</span>
                <p>
                  I&apos;m a recently graduated <b>Computer Science AP</b>{" "}
                  student from Denmark with a passion for full-stack
                  development.
                </p>
              </li>
              <li>
                <span>🎓</span>
                <p>
                  I build clean, reliable software using <b>C#/.NET</b>,{" "}
                  <b>React</b> and <b>Next.js</b>.
                </p>
              </li>
              <li>
                <span>⚡</span>
                <p>
                  I love solving problems, crafting user-friendly interfaces,
                  and learning technologies that improve developer efficiency.
                </p>
              </li>
              <li>
                <span>🌱</span>
                <p>
                  I’m open-minded, reflective, and I enjoy sharing new knowledge
                  with the people I work with.
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* --- VALUES --- */}
      <section className="about-section mt-12">
        <h1 className="page-title">Values</h1>
        <div className="title-accent" />
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card"
        >
          <h2 className="card-title-xl">My Values & How I Work</h2>
          <p className="text-muted">
            I value being <b>open-minded</b> and see mistakes as opportunities
            to learn. I strive to stay <b>reflective</b> about my work and
            continuously improve. Sharing new knowledge with colleagues is
            important to me, as collaboration and growth go hand in hand.
          </p>
        </motion.div>
      </section>

      {/* --- CURRENTLY DEVELOPING --- */}
      <section className="about-section mt-12">
        <h1 className="page-title">Currently Developing</h1>
        <div className="title-accent" />

        <div className="about-grid about-grid-start">
          {/* Task Tracker App */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card card-full"
          >
            <h2 className="card-title-md">Portfolio Website</h2>
            <p className="text-muted">
              A personal portfolio website showcasing my projects and skills,
              built with <b>Next.js</b>, <b>JavaScript</b>, and{" "}
              <b>Tailwind CSS</b>.
            </p>
            <Link href="/projects" className="btn-blue mt-4 inline-block">
              View all projects ↗
            </Link>
          </motion.div>

          {/* Dynamic progress */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="card card-full"
          >
            <h3 className="card-title-md">Development Progress</h3>

            <ol className="progress-list">
              {projectSteps.map((label, idx) => (
                <li key={label} className="progress-item">
                  <span
                    className={
                      idx === currentStep
                        ? "progress-dot progress-dot--active"
                        : "progress-dot"
                    }
                  />
                  <span
                    className={
                      idx === currentStep
                        ? "progress-label progress-label--active"
                        : "progress-label"
                    }
                  >
                    {label}
                    {idx === currentStep && (
                      <span className="progress-badge">Current</span>
                    )}
                  </span>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>

      {/* --- TECH STACK --- */}
      <section className="about-section mt-12">
        <h1 className="page-title">Tech Stack</h1>
        <div className="title-accent" />
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card text-center group"
        >
          <div
            className="scroll-container"
            style={{ ["--marquee-speed"]: "120s" }}
          >
            <ul className="scroll-track">
              {[...tech, ...tech].map((item, i) => (
                <li key={`${item}-${i}`} className="tag whitespace-nowrap">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

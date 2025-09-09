"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function AboutPage() {
  const tech = [
    "C#",
    ".NET",
    "SQL",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Git",
  ];

  // ---- Project process (dynamic) ----
  const projectSteps = [
    "Planning and defining scope",
    "Designing UI and user flows",
    "Building features iteratively",
    "Testing and gathering feedback",
    "Deploying and continuous improvement",
  ];
  // 0=Planning, 1=Designing, 2=Building, 3=Testing, 4=Deploying
  const currentStep = 2; // ← sæt denne til nuværende state

  // Resume dropdown state + click-away (JS version – no types)
  const [resumeOpen, setResumeOpen] = useState(false);
  const resumeRef = useRef(null);
  useEffect(() => {
    function handleClickAway(e) {
      if (resumeRef.current && !resumeRef.current.contains(e.target)) {
        setResumeOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickAway);
    return () => document.removeEventListener("mousedown", handleClickAway);
  }, []);

  return (
    <main className="about-page">
      {/* --- TITLE --- */}
      <h1 className="about-title">About Me</h1>
      <div className="title-accent" />

      {/* --- ABOUT: avatar + bio bullets (2 cards) --- */}
      <section className="about-section">
        <div className="about-grid">
          {/* Avatar + CTAs card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-6 md:p-8 flex flex-col items-center gap-6"
          >
            <div className="avatar-ring">
              <Image
                src="/images/20200713_102544 5.jpg"
                alt="Portrait of me"
                width={112}
                height={112}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>

            {/* CTA block: top row + bottom full-width button */}
            <div className="inline-flex flex-col gap-3 items-center">
              {/* Top row: 3 buttons side by side */}
              <div className="flex gap-3 w-max" id="cta-row">
                {/* Resume dropdown */}
                <div className="relative inline-block" ref={resumeRef}>
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
                    <div
                      id="resume-menu"
                      role="menu"
                      className="absolute left-0 mt-2 w-44 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden z-20"
                    >
                      <Link
                        href="https://jofibo.com/da/s/m3WVtromskGUVgjdtTbD0w"
                        target="_blank"
                        className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100"
                        role="menuitem"
                        onClick={() => setResumeOpen(false)}
                      >
                        Danish
                      </Link>
                      <Link
                        href="https://jofibo.com/da/s/pYWlKfDU1E2jJCNZUlGq6w"
                        target="_blank"
                        className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100"
                        role="menuitem"
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

              {/* Bottom row: matches width of top row */}
              <Link href="/contact" className="w-full">
                <button className="btn-gradient w-full">Get in touch</button>
              </Link>
            </div>
          </motion.div>

          {/* Bio bullets card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="card p-6 md:p-8"
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
        <h1 className="about-title">Values</h1>
        <div className="title-accent" />
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card p-6 md:p-8"
        >
          <h2 className="text-xl font-semibold mb-3">Values & Working Style</h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            I value being <b>open-minded</b> and see mistakes as opportunities
            to learn. I strive to stay <b>reflective</b> about my work and
            continuously improve. Sharing new knowledge with colleagues is
            important to me, as collaboration and growth go hand in hand.
          </p>
        </motion.div>
      </section>

      {/* --- CURRENTLY DEVELOPING (2 CARDS) --- */}
      <section className="about-section mt-12">
        <h1 className="about-title">Currently Developing</h1>
        <div className="title-accent" />

        <div className="about-grid grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Task Tracker App */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-6 md:p-8 h-full"
          >
            <h2 className="text-lg font-medium mb-2">Task Tracker App</h2>
            <p className="text-gray-700 dark:text-gray-300">
              A focused productivity tool where I explore{" "}
              <b>React state patterns</b>, <b>local storage persistence</b>, and
              small <b>UI micro-interactions</b>.
            </p>
            <Link
              href="/projects"
              className="inline-block mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              View all projects ↗
            </Link>
          </motion.div>

          {/* Process of Current Project (DYNAMIC) */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="card p-6 md:p-8 h-full"
          >
            <h3 className="text-lg font-medium mb-3">Development Progress</h3>

            <ol className="space-y-3">
              {projectSteps.map((label, idx) => (
                <li key={label} className="flex items-start gap-3">
                  {/* Dot */}
                  <span className="relative mt-1 h-4 w-4 shrink-0">
                    {idx === currentStep ? (
                      <>
                        <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping" />
                        <span className="relative block h-3.5 w-3.5 rounded-full bg-green-500" />
                      </>
                    ) : (
                      <span className="block h-3.5 w-3.5 rounded-full bg-gray-400/60" />
                    )}
                  </span>

                  {/* Tekst */}
                  <span
                    className={
                      idx === currentStep
                        ? "text-gray-900 dark:text-white font-semibold" // <— før: "text-white"
                        : "text-gray-700 dark:text-gray-300"
                    }
                  >
                    {label}
                    {idx === currentStep && (
                      <span className="ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
                        Current
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>

      {/* --- TECH STACK (auto-scroll) --- */}
      <section className="about-section mt-12">
        <h1 className="about-title">Tech Stack</h1>
        <div className="title-accent" />
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card p-6 md:p-8 text-center group"
        >
          <div className="scroll-container">
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

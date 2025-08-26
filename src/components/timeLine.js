"use client";
import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    company: "ChannelCRM",
    title: "Internship - Software Developer",
    start: "Jan 2025",
    end: "Mar 2025",
    year: "2025",
    description:
      "Worked on internal web applications using .NET and SQL Server. Collaborated with senior developers, participated in code reviews, and helped build production features.",
  },
  {
    company: "School Project Heatwaves",
    title: "Scrum Master & Developer",
    start: "April 2024",
    end: "June 2024",
    year: "2024",
    description:
      "Led and contributed the Heatwaves project in academic settings. Gained experience in project management, teamwork, and full software development lifecycle.",
  },
];

/* Hook: observer der kun animerer én gang */
function useInViewOnce(
  options = { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown) return;
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      });
    }, options);

    io.observe(el);
    return () => io.disconnect();
  }, [shown, options]);

  return { ref, shown };
}

/* Wrapper der giver fade/slide ind */
function Reveal({ children, direction = "up", delay = 0 }) {
  const { ref, shown } = useInViewOnce();

  const base =
    "will-change-transform motion-safe:transition-all motion-safe:duration-1000 motion-safe:ease-out";
  const hiddenMap = {
    left: "opacity-0 -translate-x-8",
    right: "opacity-0 translate-x-8",
    up: "opacity-0 translate-y-6",
  };
  const visible = "opacity-100 translate-x-0 translate-y-0";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={`${base} ${shown ? visible : hiddenMap[direction]}`}
    >
      {children}
    </div>
  );
}

function Card({ company, title, start, end, description, align = "left" }) {
  return (
    <div
      className={`timeline-content ${
        align === "left" ? "text-left" : "text-right"
      }`}
    >
      <h3 className="text-lg font-semibold mb-1">{company}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{title}</p>
      <p className="text-sm mb-2">
        <span className="font-medium">{start}</span> –{" "}
        <span className="font-medium">{end}</span>
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

export default function Timeline() {
  return (
    <div className="timeline-center">
      {/* Lodret centerlinje */}
      <div className="timeline-center-line" />

      {experiences.map((exp, index) => {
        const isLeft = index % 2 === 0;

        return (
          <div key={index} className="timeline-row">
            {/* Venstre kort */}
            <div className={`${isLeft ? "block" : "hidden"} timeline-col-left`}>
              <Reveal direction="left">
                <Card {...exp} align="left" />
              </Reveal>
            </div>

            {/* Midterkolonne (dot + år) */}
            <div className="timeline-center-col">
              {/* Dot + år med lille pop/fade */}
              <Reveal delay={100}>
                <div className="relative">
                  <div className="timeline-dot timeline-dot--center motion-safe:transition motion-safe:duration-700 motion-safe:ease-out motion-safe:scale-100 opacity-100" />
                  <div
                    className={`timeline-year font-mono tracking-wide text-gray-600 dark:text-gray-300 ${
                      isLeft ? "timeline-year--right" : "timeline-year--left"
                    }`}
                  >
                    {exp.year}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Højre kort */}
            <div
              className={`${isLeft ? "hidden" : "block"} timeline-col-right`}
            >
              <Reveal direction="right">
                <Card {...exp} align="right" />
              </Reveal>
            </div>
          </div>
        );
      })}
    </div>
  );
}

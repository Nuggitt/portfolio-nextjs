"use client";
import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    company: "Beezy365",
    title: "Internship - Software Developer",
    start: "Jan 2025",
    end: "Mar 2025",
    description:
      "Developed different Integrations in the ChannelCRM system, a time registration module in C#, .NET, and Blazor with Syncfusion. Integrated AI features (RAG and CAG). Designed system architecture with UML and worked on SQL database management. Built API controllers for CRUD operations in an agile team setup.",
  },
  {
    company: "Biometric Solutions",
    title: "Production Technician",
    start: "Feb 2022",
    end: "Feb 2024",
    description:
      "Handled setup and installation of hardware, components, software, and firmware. Performed testing and quality assurance of products, troubleshooting, and technical issue resolution.",
  },
  {
    company: "Herlev Ungdomsskole",
    title: "IT Assistant",
    start: "Sep 2020",
    end: "Sep 2021",
    description:
      "Supported daily IT operations for staff and students, optimized digital media setups, and prepared IT equipment for secure digital exams. Assisted with troubleshooting and user support.",
  },
  {
    company: "SFO Skovvang",
    title: "After-School Educator",
    start: "Aug 2016",
    end: "Feb 2020",
    description:
      "Developed children's digital and social skills through media education and digital literacy. Acted as IT responsible for the SFO, integrating digital tools and supporting staff with technology.",
  },
];

function getYear(dateStr) {
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? "" : String(d.getFullYear());
}

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

export default function WorkTimeline() {
  return (
    <section className="timeline-center">
      <div className="timeline-center-line" />
      {experiences.map((exp, index) => {
        const isLeft = index % 2 === 0;
        // Kun ét år i midten (slutår falder tilbage til startår, hvis nødvendigt)
        const yearLabel = getYear(exp.end) || getYear(exp.start);
        return (
          <div key={index} className="timeline-row">
            <div className="timeline-col-left">
              {isLeft ? (
                <Reveal direction="left">
                  <Card {...exp} align="left" />
                </Reveal>
              ) : null}
            </div>

            <div className="timeline-center-col relative">
              <span className="timeline-dot timeline-dot--center" />
              <span
                className={
                  isLeft
                    ? "timeline-year timeline-year--right"
                    : "timeline-year timeline-year--left"
                }
              >
                {yearLabel}
              </span>
            </div>

            <div className="timeline-col-right">
              {!isLeft ? (
                <Reveal direction="right">
                  <Card {...exp} align="right" />
                </Reveal>
              ) : null}
            </div>
          </div>
        );
      })}
    </section>
  );
}

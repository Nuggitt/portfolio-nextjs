export default function ProjectsPage() {
  const currentProjects = [
    {
      title: "Portfolio Website",
      description:
        "A modern developer portfolio built with Next.js and Tailwind.",
      tech: ["Next.js", "Tailwind CSS", "Vercel"],
      github: "https://github.com/Nuggitt/portfolio-nextjs",
      live: "https://example.com/portfolio",
      image: "/images/portfolio-white.png",
    },
    {
      title: "Kids Clothing Order System - TO BE MADE",
      description:
        "A full-stack application for managing clothing orders for kids for friends and family.",
      tech: [".Blazor", "C#", ".NET", "SQL Server"],
      github: "",
      live: "",
      image: "/images/ideaimage.png",
    },
    {
      title: "Shopping List APP - TO BE MADE",
      description:
        "A simple shopping list application where users can add, edit, and delete items.",
      tech: ["Kotlin", "Jetpack Compose", "MongoDB"],
      github: "",
      live: "",
      image: "/images/shoppinglist.png",
    },
  ];

  const earlierProjects = [
    {
      year: 2022,
      title: "Shark Gaming Website",
      type: "School Project",
      tech: ["C#", ".NET", "HTML", "CSS", "JSON", "Bootstrap"],
      github: "https://github.com/Nuggitt/SharkGaming",
      live: "https://example.com/exam-system",
    },
    {
      year: 2023,
      title: "FDF Ticket System",
      type: "School Project",
      tech: ["C#", ".NET", "ADO.NET", "SQL", "HTML", "Bootstrap", "CSS"],
      github: "https://github.com/Nuggitt/LodSalgsSystemFDF",
      live: "https://example.com/fdf-ticket-system",
    },
    {
      year: 2024,
      title: "Heatwaves - Temperature Data Analysis",
      type: "School Project",
      tech: [
        "Python",
        "Raspberry Pi",
        "Linux",
        "C#",
        ".NET",
        "Entity Framework",
        "SQL",
        "SocketTest",
        "Vue.js",
        "Axios",
        "Selenium",
        "CSS",
        "HTML",
      ],
      github: [
        "https://github.com/Nuggitt/HeatWaves",
        "https://github.com/Nuggitt/HtmlHeatWave",
      ],
      live: "https://example.com/heatwaves",
    },
  ];

  return (
    <main className="projects-page">
      {/* <– bredere container (6xl) */}
      <h1 className="page-title">Projects</h1>
      <div className="title-accent" />

      {/* Current Projects */}
      <section className="current-projects">
        <h2 className="section-heading">Current Projects</h2>
        <div className="title-accent-left" />
        <div className="project-grid">
          {currentProjects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-links mt-auto flex flex-wrap gap-2">
                  {typeof project.github === "string" &&
                    project.github.trim().startsWith("http") && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-blue"
                      >
                        GitHub ↗
                      </a>
                    )}
                  {typeof project.live === "string" &&
                    project.live.trim().startsWith("http") && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-blue"
                      >
                        Live Site ↗
                      </a>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Earlier Projects */}
      <section className="earlier-projects">
        <h2 className="section-heading">Earlier Projects</h2>
        <div className="title-accent-left" />

        {/* MOBILE: stacked cards (vises kun < md) */}
        <div className="md:hidden space-y-4">
          {earlierProjects
            .sort((a, b) => b.year - a.year)
            .map((proj, i) => (
              <article
                key={i}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4 bg-white/5 backdrop-blur-sm"
              >
                <header className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold">{proj.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {proj.year} · {proj.type}
                    </p>
                  </div>
                </header>

                {/* Tech */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {proj.tech.map((t, j) => (
                    <span key={j} className="tag text-xs">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {Array.isArray(proj.github) ? (
                    proj.github.map((link) => {
                      const label = link.split("/").pop();
                      return (
                        <a
                          key={link}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-blue"
                          title={label}
                          aria-label={`Open ${label} on GitHub`}
                        >
                          GitHub ↗
                        </a>
                      );
                    })
                  ) : proj.github ? (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-blue"
                      title={proj.github.split("/").pop() || "GitHub"}
                      aria-label={`Open ${
                        proj.github.split("/").pop() || "repo"
                      } on GitHub`}
                    >
                      GitHub ↗
                    </a>
                  ) : null}

                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-blue"
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
        </div>

        {/* DESKTOP: table (vises kun ≥ md) */}
        <div className="hidden md:block">
          <div className="overflow-x-visible">
            <table className="project-table md:table-fixed w-full">
              <thead>
                <tr className="table-header">
                  <th className="w-16">Year</th>
                  <th className="w-1/4">Title</th>
                  <th className="w-28">Type</th>
                  <th>Tech Stack</th>
                  <th className="w-48">GitHub</th>
                  <th className="w-28">Live</th>
                </tr>
              </thead>
              <tbody>
                {earlierProjects
                  .sort((a, b) => b.year - a.year)
                  .map((proj, i) => (
                    <tr
                      key={i}
                      className="table-row align-top border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                    >
                      <td>{proj.year}</td>
                      <td className="font-medium">{proj.title}</td>
                      <td>{proj.type}</td>
                      <td>
                        <div className="flex flex-wrap gap-2">
                          {proj.tech.map((t, j) => (
                            <span key={j} className="tag">
                              {t}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td>
                        <div className="flex flex-wrap gap-2">
                          {Array.isArray(proj.github) ? (
                            proj.github.map((link) => {
                              const label = link.split("/").pop();
                              return (
                                <a
                                  key={link}
                                  href={link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn-blue"
                                  title={label}
                                  aria-label={`Open ${label} on GitHub`}
                                >
                                  GitHub ↗
                                </a>
                              );
                            })
                          ) : proj.github ? (
                            <a
                              href={proj.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-blue"
                              title={proj.github.split("/").pop() || "GitHub"}
                              aria-label={`Open ${
                                proj.github.split("/").pop() || "repo"
                              } on GitHub`}
                            >
                              GitHub ↗
                            </a>
                          ) : null}
                        </div>
                      </td>
                      <td>
                        {proj.live && (
                          <a
                            href={proj.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-blue"
                          >
                            Live ↗
                          </a>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}

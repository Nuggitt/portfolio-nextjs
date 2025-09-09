export default function ProjectsPage() {
  const currentProjects = [
    {
      title: "Task Tracker App",
      description:
        "A simple task management app built with React and local storage.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/yourusername/task-tracker",
      live: "https://example.com/task-tracker",
      image: "/images/ChatGPT Image 22. aug. 2025, 10.56.04.png",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern developer portfolio built with Next.js and Tailwind.",
      tech: ["Next.js", "Tailwind CSS", "Vercel"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://example.com/portfolio",
      image: "/images/portfolio-white.png",
    },
    {
      title: "Recipe Finder",
      description:
        "Search for recipes using an external API and filter by ingredients.",
      tech: ["React", "Axios", "API"],
      github: "https://github.com/yourusername/recipe-finder",
      live: "https://example.com/recipe-finder",
      image: "/images/ChatGPT Image 22. aug. 2025, 11.10.28.png",
    },
  ];

  const earlierProjects = [
    {
      year: 2024,
      title: "Exam Management System",
      type: "School Project",
      tech: ["C#", ".NET", "SQL Server", "Bootstrap"],
      github: "https://github.com/yourusername/exam-system",
      live: "https://example.com/exam-system",
    },
  ];

  return (
    <main className="projects-page">
      <h1 className="projects-title">Projects</h1>
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
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub ↗
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
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
        <div className="overflow-x-auto">
          <table className="project-table">
            <thead>
              <tr className="table-header">
                <th>Year</th>
                <th>Title</th>
                <th>Type</th>
                <th>Tech Stack</th>
                <th>GitHub Link</th>
                <th>Live Link</th>
              </tr>
            </thead>
            <tbody>
              {earlierProjects.map((proj, i) => (
                <tr key={i} className="table-row">
                  <td>{proj.year}</td>
                  <td className="font-medium">{proj.title}</td>
                  <td>{proj.type}</td>
                  <td>
                    {proj.tech.map((t, j) => (
                      <span key={j} className="tag mr-1">
                        {t}
                      </span>
                    ))}
                  </td>
                  <td>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      GitHub ↗
                    </a>
                  </td>
                  <td>
                    {proj.live && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
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
      </section>
    </main>
  );
}

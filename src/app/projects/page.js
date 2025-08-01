const projects = [
  {
    title: "Exam Management System",
    description:
      "A .NET MVC web application to manage exam results and student data.",
    tech: ["C#", ".NET", "SQL Server", "Bootstrap"],
    github: "https://github.com/yourusername/exam-system",
  },
  {
    title: "Task Tracker App",
    description:
      "A simple task management app built with React and local storage.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/task-tracker",
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center">Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow hover:shadow-lg transition bg-white/80 dark:bg-gray-800/60"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-lg leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech, i) => (
                <span key={i} className="tag">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              className="text-blue-600 font-medium underline"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

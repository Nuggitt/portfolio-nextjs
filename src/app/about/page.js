export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        I'm a recently graduated Computer Science AP student from Denmark. I
        specialize in fullstack development with .NET, JavaScript, and
        React/Next.js. I enjoy creating clean, user-friendly applications and
        learning new technologies that make development more efficient and
        impactful.
      </p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
        <ul className="flex flex-wrap gap-3 text-sm mt-2">
          {[
            "C#",
            ".NET",
            "SQL",
            "JavaScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Git",
          ].map((tech, i) => (
            <li key={i} className="bg-gray-700 px-3 py-1 rounded">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Hi, I&apos;m Philip 👋
      </h1>
      <p className="text-lg leading-relaxed mb-6">
        I&apos;m a recently graduated Computer Science AP student specializing
        in fullstack development. I love building modern and responsive web apps
        using .NET, JavaScript, and Next.js.
      </p>
      <a
        href="/projects"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition"
      >
        See My Projects
      </a>
      <p className="text-lg leading-relaxed mt-6">
        Feel free to explore my work and get in touch if you&apos;d like to
        collaborate or just say hi! And if you&apos;re interested in my resume,
        you can download it
      </p>
    </main>
  );
}

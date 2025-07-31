export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Hi, I&apos;m Philip 👋
      </h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        I&apos;m a newly graduated Computer Science AP student specializing in
        fullstack development. I love building modern and responsive web apps
        using .NET, JavaScript, and Next.js.
      </p>
      <a
        href="/projects"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition"
      >
        See My Projects
      </a>
    </main>
  );
}

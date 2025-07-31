export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        I'm currently open to job opportunities or collaborations. Feel free to
        reach out via email:
      </p>

      <a
        href="mailto:phulip.nielsen@gmail.com"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition"
      >
        phulip.nielsen@gmail.com
      </a>
    </main>
  );
}

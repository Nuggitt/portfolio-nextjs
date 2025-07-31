export default function WorkPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">Experience</h1>

      <div className="border rounded-xl p-6 shadow-md">
        <h2 className="text-2xl font-semibold">Internship at ChannelCRM</h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          During my internship, I worked on internal web applications using .NET
          and SQL Server. I collaborated with senior developers, participated in
          code reviews, and helped build features that were actually used in
          production.
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-600">
          <li>Built features in ASP.NET MVC</li>
          <li>Worked with relational databases (SQL Server)</li>
          <li>Used Git and Agile workflows</li>
        </ul>
      </div>
    </main>
  );
}

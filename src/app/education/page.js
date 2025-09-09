import EducationTimeline from "@/components/educationTimeline";

export function EducationPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">Education</h1>
      <div className="title-accent" />
      <EducationTimeline />
    </main>
  );
}

export { EducationPage as default };

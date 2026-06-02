import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-zinc-800 px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h1 className="text-xl font-bold">AI CV Reviewer</h1>
          <UserButton />
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <p className="mt-2 text-zinc-400">
          Upload your CV and get AI-powered feedback.
        </p>

        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h3 className="text-xl font-semibold">Start your first review</h3>
          <p className="mt-2 text-zinc-400">
            Upload a PDF or DOCX CV to receive an ATS score and improvement suggestions.
          </p>

          <a
            href="/upload"
            className="mt-6 inline-block rounded-xl bg-white px-5 py-3 font-medium text-zinc-950 hover:bg-zinc-200"
          >
            Upload CV
          </a>
        </div>
      </section>
    </main>
  );
}
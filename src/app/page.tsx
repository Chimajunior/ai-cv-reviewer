export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
          AI-powered CV feedback for job seekers
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
          Improve your CV before recruiters see it.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          Upload your CV, get an ATS score, find missing skills, and receive
          clear suggestions to improve your chances of getting interviews.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="/dashboard"
            className="rounded-xl bg-white px-6 py-3 font-medium text-zinc-950 hover:bg-zinc-200"
          >
            Get started
          </a>

          <a
            href="#features"
            className="rounded-xl border border-zinc-700 px-6 py-3 font-medium text-white hover:bg-zinc-900"
          >
            View features
          </a>
        </div>
      </section>
    </main>
  );
}
export default function UploadPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-3xl">
        <a href="/dashboard" className="text-sm text-zinc-400 hover:text-white">
          ← Back to dashboard
        </a>

        <h1 className="mt-6 text-3xl font-bold">Upload your CV</h1>

        <p className="mt-2 text-zinc-400">
          Upload a PDF or DOCX file. The AI reviewer will analyse your CV and
          give you feedback.
        </p>

        <div className="mt-8 rounded-2xl border border-dashed border-zinc-700 bg-zinc-900 p-10 text-center">
          <p className="text-lg font-medium">Drop your CV here</p>
          <p className="mt-2 text-sm text-zinc-500">PDF or DOCX only</p>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="mt-6 block w-full cursor-pointer rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-sm text-zinc-300"
          />

          <button className="mt-6 rounded-xl bg-white px-6 py-3 font-medium text-zinc-950 hover:bg-zinc-200">
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}
"use client";

import { UploadDropzone } from "@/utils/uploadthing";

export default function UploadPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-3xl">
        <a href="/dashboard" className="text-sm text-zinc-400 hover:text-white">
          ← Back to dashboard
        </a>

        <h1 className="mt-6 text-3xl font-bold">Upload your CV</h1>

        <p className="mt-2 text-zinc-400">
          Upload a PDF CV. The AI reviewer will analyse your CV and give you feedback.
        </p>

        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <UploadDropzone
            endpoint="resumeUploader"
            onClientUploadComplete={(res) => {
              console.log("Upload complete:", res);
              alert("CV uploaded successfully!");
            }}
            onUploadError={(error: Error) => {
              alert(`Upload failed: ${error.message}`);
            }}
          />
        </div>
      </div>
    </main>
  );
}
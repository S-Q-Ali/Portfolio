"use client";

import { useState } from "react";

export default function GenerateResumePage() {
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!role.trim()) {
      setError("Please enter a desired role");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/generate-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ desiredRole: role }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to generate resume");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `resume-${role.replace(/\s+/g, "-").toLowerCase()}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            AI Resume <span className="text-accent">Generator</span>
          </h1>
          <p className="mt-2 text-text-secondary">
            Generate an ATS-friendly resume tailored to your desired role using Groq AI
          </p>
        </div>

        <div className="rounded-md border border-border bg-surface p-6">
          <label htmlFor="role" className="block text-sm font-medium text-text-primary">
            Desired Role
          </label>
          <input
            id="role"
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="e.g., Senior Frontend Developer"
            className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none"
            onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
          />

          <button
            type="button"
            onClick={handleGenerate}
            disabled={loading}
            className="mt-4 w-full rounded-md bg-accent px-4 py-3 font-semibold text-background transition-colors hover:bg-accent-dim disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Generating...
              </span>
            ) : (
              "Generate Resume"
            )}
          </button>

          {error && (
            <div className="mt-4 rounded-md border border-red-500/50 bg-red-500/10 p-4" role="alert">
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}
        </div>

        <div className="rounded-md border border-border bg-surface p-6">
          <h2 className="font-mono text-sm font-semibold text-accent uppercase tracking-wider">
            How it works
          </h2>
          <ol className="mt-4 space-y-2 text-sm text-text-secondary" role="list">
            <li>1. Enter the role you're targeting</li>
            <li>2. We fetch your best GitHub projects</li>
            <li>3. Groq AI generates an ATS-friendly resume</li>
            <li>4. Download your tailored PDF resume</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

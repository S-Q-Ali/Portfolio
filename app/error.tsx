"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto max-w-md text-center">
        <h2 className="text-2xl font-bold text-text-primary">Something went wrong</h2>
        <p className="mt-2 text-text-secondary">{error.message}</p>
        <button
          type="button"
          onClick={reset}
          className="mt-4 rounded-md bg-accent px-4 py-2 font-medium text-background hover:bg-accent-dim transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

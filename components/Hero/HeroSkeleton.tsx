export default function HeroSkeleton() {
  return (
    <section className="border-b border-border" aria-busy="true" aria-label="Loading hero section">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="flex flex-col items-center gap-8">
          <div className="h-32 w-32 animate-pulse rounded-full bg-surface" />
          <div className="space-y-4 text-center">
            <div className="mx-auto h-10 w-64 animate-pulse rounded-md bg-surface" />
            <div className="mx-auto h-6 w-48 animate-pulse rounded-md bg-surface" />
            <div className="mx-auto h-4 w-32 animate-pulse rounded-md bg-surface" />
          </div>
          <div className="flex gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-20 w-24 animate-pulse rounded-md bg-surface" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

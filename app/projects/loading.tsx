export default function ProjectsLoading() {
  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header Skeleton */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="h-6 w-36 rounded-full bg-muted animate-shimmer" />
          <div className="h-10 w-3/4 rounded-lg bg-muted animate-shimmer" />
          <div className="h-5 w-full rounded-md bg-muted/70 animate-shimmer" />
          <div className="h-5 w-2/3 rounded-md bg-muted/60 animate-shimmer" />
        </div>

        {/* Filter Pills Skeleton */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b border-border/50">
          {[80, 110, 140, 95, 120].map((width, i) => (
            <div
              key={i}
              style={{ width: `${width}px` }}
              className="h-9 rounded-lg bg-muted animate-shimmer"
            />
          ))}
        </div>

        {/* Project Cards Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border/60 bg-card overflow-hidden shadow-sm flex flex-col"
            >
              {/* Card Image Skeleton */}
              <div className="h-60 w-full bg-muted animate-shimmer relative">
                <div className="absolute top-4 left-4 h-6 w-24 rounded-full bg-background/50 backdrop-blur-sm" />
              </div>

              {/* Card Content Skeleton */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center">
                    <div className="h-4 w-28 rounded bg-muted/80 animate-shimmer" />
                    <div className="h-4 w-16 rounded bg-muted/60 animate-shimmer" />
                  </div>
                  <div className="h-6 w-5/6 rounded-md bg-muted animate-shimmer" />
                  <div className="h-4 w-full rounded bg-muted/70 animate-shimmer" />
                </div>

                {/* Card Footer Meta Skeleton */}
                <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                  <div className="h-4 w-24 rounded bg-muted/60 animate-shimmer" />
                  <div className="h-8 w-28 rounded-lg bg-primary/20 animate-shimmer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

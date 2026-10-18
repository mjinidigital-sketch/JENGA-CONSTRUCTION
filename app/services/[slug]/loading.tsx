export default function ServiceDetailLoading() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl space-y-10">
        {/* Breadcrumb Skeleton */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-16 rounded bg-muted animate-shimmer" />
          <span className="text-muted-foreground/40">/</span>
          <div className="h-4 w-20 rounded bg-muted animate-shimmer" />
          <span className="text-muted-foreground/40">/</span>
          <div className="h-4 w-28 rounded bg-muted/70 animate-shimmer" />
        </div>

        {/* Hero Banner Skeleton */}
        <div className="relative rounded-3xl overflow-hidden bg-card border border-border/60 p-8 md:p-12 space-y-6">
          <div className="h-6 w-32 rounded-full bg-primary/20 animate-shimmer" />
          <div className="h-12 w-3/4 max-w-xl rounded-xl bg-muted animate-shimmer" />
          <div className="h-5 w-full max-w-2xl rounded-md bg-muted/80 animate-shimmer" />
          <div className="flex gap-4 pt-2">
            <div className="h-11 w-36 rounded-lg bg-primary/30 animate-shimmer" />
            <div className="h-11 w-36 rounded-lg bg-muted animate-shimmer" />
          </div>
        </div>

        {/* Features / Capabilities Grid Skeleton */}
        <div className="space-y-6">
          <div className="h-8 w-52 rounded bg-muted animate-shimmer" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-border/60 bg-card space-y-3"
              >
                <div className="h-10 w-10 rounded-xl bg-primary/20 animate-shimmer" />
                <div className="h-5 w-40 rounded bg-muted animate-shimmer" />
                <div className="h-4 w-full rounded bg-muted/70 animate-shimmer" />
                <div className="h-4 w-5/6 rounded bg-muted/60 animate-shimmer" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

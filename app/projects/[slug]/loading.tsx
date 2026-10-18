export default function ProjectDetailLoading() {
  return (
    <div className="min-h-screen bg-background py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl space-y-10">
        {/* Breadcrumb Skeleton */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-16 rounded bg-muted animate-shimmer" />
          <span className="text-muted-foreground/40">/</span>
          <div className="h-4 w-20 rounded bg-muted animate-shimmer" />
          <span className="text-muted-foreground/40">/</span>
          <div className="h-4 w-32 rounded bg-muted/70 animate-shimmer" />
        </div>

        {/* Hero Header Skeleton */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex gap-2">
            <div className="h-6 w-28 rounded-full bg-primary/20 animate-shimmer" />
            <div className="h-6 w-36 rounded-full bg-muted animate-shimmer" />
          </div>
          <div className="h-12 w-full max-w-2xl rounded-xl bg-muted animate-shimmer" />
          <div className="h-6 w-3/4 rounded-md bg-muted/80 animate-shimmer" />
        </div>

        {/* Hero Image Showcase Skeleton */}
        <div className="h-[420px] w-full rounded-3xl bg-muted animate-shimmer overflow-hidden relative shadow-lg" />

        {/* Quick Stats Grid Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border border-border/60 bg-card space-y-2"
            >
              <div className="h-4 w-20 rounded bg-muted/70 animate-shimmer" />
              <div className="h-7 w-28 rounded bg-muted animate-shimmer" />
            </div>
          ))}
        </div>

        {/* Body Content 2-Column Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-4">
          <div className="lg:col-span-2 space-y-6">
            <div className="h-8 w-48 rounded bg-muted animate-shimmer" />
            <div className="space-y-3">
              <div className="h-4 w-full rounded bg-muted/80 animate-shimmer" />
              <div className="h-4 w-11/12 rounded bg-muted/80 animate-shimmer" />
              <div className="h-4 w-4/5 rounded bg-muted/80 animate-shimmer" />
            </div>
            <div className="h-64 w-full rounded-2xl bg-muted animate-shimmer" />
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-border/60 bg-card space-y-4">
              <div className="h-6 w-36 rounded bg-muted animate-shimmer" />
              <div className="space-y-3">
                <div className="h-10 w-full rounded-lg bg-muted/70 animate-shimmer" />
                <div className="h-10 w-full rounded-lg bg-muted/70 animate-shimmer" />
                <div className="h-10 w-full rounded-lg bg-muted/70 animate-shimmer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

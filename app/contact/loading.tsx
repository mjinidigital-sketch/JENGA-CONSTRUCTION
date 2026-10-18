export default function ContactLoading() {
  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl space-y-10">
        {/* Header Skeleton */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="h-6 w-32 rounded-full bg-primary/20 mx-auto animate-shimmer" />
          <div className="h-10 w-3/4 rounded-xl bg-muted mx-auto animate-shimmer" />
          <div className="h-5 w-full rounded-md bg-muted/80 animate-shimmer" />
        </div>

        {/* Form and Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-4">
          {/* Contact Details Skeleton */}
          <div className="p-8 rounded-3xl border border-border/60 bg-card space-y-6">
            <div className="h-7 w-48 rounded bg-muted animate-shimmer" />
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="h-12 w-12 rounded-xl bg-muted animate-shimmer shrink-0" />
                  <div className="space-y-2 flex-1">
                    <div className="h-4 w-28 rounded bg-muted/70 animate-shimmer" />
                    <div className="h-5 w-48 rounded bg-muted animate-shimmer" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Skeleton */}
          <div className="p-8 rounded-3xl border border-border/60 bg-card space-y-5">
            <div className="space-y-2">
              <div className="h-4 w-24 rounded bg-muted/70 animate-shimmer" />
              <div className="h-10 w-full rounded-lg bg-muted animate-shimmer" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-24 rounded bg-muted/70 animate-shimmer" />
              <div className="h-10 w-full rounded-lg bg-muted animate-shimmer" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-28 rounded bg-muted/70 animate-shimmer" />
              <div className="h-28 w-full rounded-lg bg-muted animate-shimmer" />
            </div>
            <div className="h-11 w-full rounded-lg bg-primary/30 animate-shimmer" />
          </div>
        </div>
      </div>
    </div>
  );
}

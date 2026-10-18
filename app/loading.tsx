import { HardHat } from "lucide-react";

export default function GlobalLoading() {
  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden bg-background">
      {/* Background blueprint grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center">
        {/* Animated HardHat Emblem */}
        <div className="relative mb-6">
          {/* Ambient Glow */}
          <div className="absolute -inset-3 rounded-full bg-primary/20 blur-xl animate-pulse" />
          
          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/30 bg-card shadow-2xl shadow-primary/20">
            <HardHat className="size-10 text-primary animate-bounce duration-1000" />
          </div>

          {/* Rotating orbit ring */}
          <div className="absolute -inset-2 rounded-2xl border-2 border-primary/30 border-t-primary animate-spin" />
        </div>

        {/* Brand & Loading Status */}
        <h3 className="text-lg font-bold tracking-tight text-foreground mb-1">
          JENGA LTD
        </h3>
        <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-5">
          Precision Engineering & Construction
        </p>

        {/* Glowing Progress bar */}
        <div className="w-48 h-1.5 bg-muted rounded-full overflow-hidden relative mb-3">
          <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-amber-500 via-primary to-amber-300 rounded-full w-1/2 animate-[shimmer-wave_1.4s_infinite_ease-in-out]" />
        </div>

        <p className="text-xs text-muted-foreground flex items-center gap-1.5 animate-pulse">
          Loading site assets...
        </p>
      </div>
    </div>
  );
}

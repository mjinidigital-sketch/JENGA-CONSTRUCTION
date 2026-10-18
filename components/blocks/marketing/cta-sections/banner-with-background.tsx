import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, HardHat, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BannerWithBackgroundCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-950 text-neutral-100 border-t border-neutral-800 py-20 sm:py-28">
      {/* Background construction photograph */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=85"
          alt="JENGA LTD Active Construction Site"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25 brightness-75"
        />
        {/* Dark radial and linear gradients matching footer */}
        <div className="absolute inset-0 bg-neutral-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/50" />
      </div>

      {/* Subtle brand glow effects */}
      <div className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 size-96 rounded-full bg-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-primary/15 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          {/* Kicker badge */}


          {/* Heading */}
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-[1.08]">
            Have an Upcoming <span className="text-primary">Project</span> or Tender?
          </h2>

          {/* Subheading */}
          <p className="text-neutral-300 mx-auto max-w-3xl text-sm leading-relaxed">
            Submit your architectural drawings, BOQ, or project brief. Our senior engineering directors will evaluate your requirements and provide an itemized schedule and transparent quotation.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              size="lg"
              className="w-full sm:w-auto h-12 px-8 font-bold bg-primary text-primary-foreground hover:brightness-110 shadow-lg shadow-primary/25 text-sm"
              asChild
            >
              <Link href="/#contact">
                Request a Proposal & Quote
                <ArrowUpRight className="ml-2 size-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-12 px-8 font-semibold border-neutral-700 bg-neutral-900/80 text-white hover:bg-neutral-800 hover:text-white backdrop-blur-md text-sm"
              asChild
            >
              <a href="tel:+254700123456">
                <Phone className="mr-2 size-4 text-primary" />
                +254 700 123 456
              </a>
            </Button>
          </div>

          {/* Trust indicators strip */}
          <div className="pt-8 border-t border-neutral-800/80 mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium text-neutral-400">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="size-4 text-primary shrink-0" />
              <span>NCA 1 Accredited</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="size-4 text-primary shrink-0" />
              <span>Fixed-Price Certainty</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="size-4 text-primary shrink-0" />
              <span>ISO 9001 Quality</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="size-4 text-primary shrink-0" />
              <span>Zero-Harm Safety</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

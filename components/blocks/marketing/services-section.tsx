"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ClipboardList,
  Cog,
  DraftingCompass,
  Droplets,
  HardHat,
  Home,
  Landmark,
  Paintbrush,
  Phone,
  Route,
  Shovel,
  Sparkles,
} from "lucide-react";
import { services } from "@/lib/services";

// Icon lookup dictionary
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Home,
  Shovel,
  PenRuler: DraftingCompass,
  DraftingCompass,
  Paintbrush,
  ClipboardList,
  Cog,
  Route,
  Droplets,
  Landmark,
};

type Category = "all" | "buildings" | "infrastructure" | "engineering";

const categories: { id: Category; label: string; count: number }[] = [
  { id: "all", label: "All Specializations", count: 10 },
  { id: "buildings", label: "Commercial & Residential", count: 3 },
  { id: "infrastructure", label: "Civil & Infrastructure", count: 3 },
  { id: "engineering", label: "Engineering & Turnkey", count: 4 },
];

const categorySlugs: Record<Category, string[]> = {
  all: services.map((s) => s.slug),
  buildings: [
    "commercial-construction",
    "residential-developments",
    "fit-out-and-renovation",
  ],
  infrastructure: [
    "civil-works-infrastructure",
    "road-and-paving-works",
    "water-and-sanitation",
  ],
  engineering: [
    "design-and-build",
    "project-management",
    "structural-engineering",
    "property-development",
  ],
};

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<Category>("all");

  const filteredServices = services.filter((service) =>
    categorySlugs[activeTab].includes(service.slug)
  );

  return (
    <section id="services" className="relative bg-background py-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-full max-w-7xl bg-primary/[0.04] blur-[140px]" />

      <div className="container relative z-10 px-4 md:px-8 max-w-7xl">
        {/* Section Heading */}
        <div className="flex flex-col items-start w-full mb-14">

          <h2 className="text-left text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Our {" "}
            <span className="text-primary">Construction</span> Services
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg max-w-4xl">
            As an NCA 1 registered main contractor in Kenya, JENGA LTD delivers complete turnkey building, heavy civil, and engineering solutions across East Africa.
          </p>

        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || HardHat;

            return (
              <article
                key={service.slug}
                className="group relative flex flex-col overflow-hidden rounded-md border border-border/70 bg-card shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Image Header with Overlays */}
                <div className="relative h-60 w-full overflow-hidden bg-muted">
                  <Image
                    src={service.heroImage}
                    alt={`${service.title} - JENGA LTD`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Subtle dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15  to-transparent" />
                  <div className="absolute inset-0 bg-primary/5 opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100" />


                  {/* Top-Right Floating Icon */}
                  <div className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-xl border border-white/15 bg-black/50 text-primary shadow-sm backdrop-blur-md transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground">
                    <IconComponent className="size-4.5" />
                  </div>


                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                      <Link
                        href={`/services/${service.slug}`}
                        className="focus:outline-none"
                      >
                        <span className="absolute inset-0" aria-hidden="true" />
                        {service.title}
                      </Link>
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                      {service.tagline}
                    </p>


                  </div>

                  {/* Card Footer / Action Link */}
                  <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 bg-card">
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:underline">
                      Explore Full Service
                      <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>


                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Fast Action Row */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-primary/20 bg-muted/30 p-6 backdrop-blur-sm sm:flex-row sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Building2 className="size-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-foreground">
                Need a Customized Bill of Quantities or Tender Proposal?
              </h4>
              <p className="text-xs text-muted-foreground sm:text-sm">
                Share your architectural or civil drawings with our estimators for a prompt, transparent quote.
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <Link
              href="/#contact"
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-5 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:brightness-110 active:scale-95"
            >
              Request Proposal
              <ArrowUpRight className="size-3.5" />
            </Link>
            <a
              href="tel:+254700123456"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-card px-4 text-xs font-semibold text-foreground transition-all hover:border-primary/40 active:scale-95"
            >
              <Phone className="size-3.5 text-primary" />
              +254 700 123 456
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

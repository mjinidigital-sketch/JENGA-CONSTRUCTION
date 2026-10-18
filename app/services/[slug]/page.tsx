import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  HardHat,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import BannerWithBackgroundCTA from "@/components/blocks/marketing/cta-sections/banner-with-background";
import { services, servicesBySlug } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesBySlug[slug];
  if (!service) return {};
  return {
    title: `${service.title} | JENGA LTD - Construction & Engineering`,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesBySlug[slug];

  if (!service) {
    notFound();
  }

  // Related other services (exclude current)
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative isolate flex min-h-[85svh] items-end overflow-hidden bg-neutral-950 sm:min-h-[90svh] lg:min-h-screen">
        {/* Background image */}
        <Image
          src={service.heroImage}
          alt={`${service.title} by JENGA LTD`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-black/15" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

        {/* Subtle brand glow */}
        <div className="pointer-events-none absolute -left-32 top-1/3 size-80 rounded-full bg-primary/20 blur-[120px]" />

        {/* Hero content */}
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-5 pb-12 pt-32 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20 2xl:max-w-7xl">
            <div className="max-w-4xl">
              {/* Back link */}
              <Link
                href="/#services"
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/15 hover:text-white"
              >
                <ArrowLeft className="size-4" />
                All Services
              </Link>

              {/* Service category */}
              {/* <div className="mb-5">
                <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/50 bg-primary/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:text-sm">
                  <HardHat className="size-4 shrink-0 text-primary" />
                  <span>{service.kicker}</span>
                </span>
              </div> */}

              {/* Heading */}
              <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl ">
                {service.title}
              </h1>

              {/* Introduction */}
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 ">
                {service.intro}
              </p>

              {/* Actions */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Link
                  href="/#contact"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-black/20 transition-all duration-300 hover:brightness-110 active:scale-[0.98] sm:w-auto sm:px-7"
                >
                  Request a Proposal
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>

                <a
                  href="tel:+254700123456"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-lg border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/20 active:scale-[0.98] sm:w-auto sm:px-7"
                >
                  <Phone className="size-4" />
                  +254 700 123 456
                </a>
              </div>

              {/* Trust indicators */}
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-xs font-medium text-white/70 sm:mt-10 sm:gap-x-8 sm:text-sm">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="size-4 shrink-0 text-primary sm:size-5" />
                  NCA 1 Registered Contractor
                </span>

                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4 shrink-0 text-primary sm:size-5" />
                  Nairobi & East Africa
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom transition into the next section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/30 to-transparent" />
      </section>

      {/* ── OUR APPROACH & SCOPE ─────────────────────────────────── */}
      <section className="border-b border-border/60 bg-muted/20 py-20 sm:py-28">
        <div className="container mx-auto px-4 md:px-8 2xl:max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
                Execution Excellence
              </p>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
                Engineered for Certainty. Built Around{" "}
                <span className="text-primary">Your Brief.</span>
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                From initial site evaluation through to final commissioning and statutory certification, our engineers and site managers maintain rigorous quality control, adherence to British and Kenyan standards, and transparent reporting.
              </p>

              <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  The JENGA Standard
                </p>
                <p className="mt-2 text-sm leading-6 text-foreground/90">
                  Every site is supervised by registered resident engineers with continuous ISO 9001 quality audits and strict zero-harm safety protocols.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <h3 className="mb-6 text-lg font-bold text-foreground">
                Core Deliverables & Scope
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {service.points.map((point, i) => (
                  <div
                    key={point}
                    className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card p-4 transition-all duration-200 hover:border-primary/40 hover:shadow-sm"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex items-center gap-2 pt-0.5">
                      <CheckCircle2 className="size-4 shrink-0 text-primary" />
                      <span className="text-sm font-medium text-foreground">
                        {point}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE CAPABILITIES ───────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 md:px-8 2xl:max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
              What Sets Us Apart
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Specialized Capabilities
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
              Dedicated resources, proprietary methodologies, and seasoned technical teams dedicated to {service.title.toLowerCase()}.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.features.map((feature, i) => (
              <div
                key={feature.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20" />
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                <div>
                  <span className="mb-4 inline-block font-mono text-xs font-black tracking-widest text-primary/70">
                    0{i + 1}
                  </span>
                  <h3 className="mb-3 text-lg font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY / WORK IN ACTION ────────────────────────────── */}
      <section className="border-y border-border/60 bg-muted/20 py-20 sm:py-28">
        <div className="container mx-auto px-4 md:px-8 2xl:max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
                Visual Portfolio
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                On-Site Execution
              </h2>
            </div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Recent site photography & deliveries
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.gallery.map((img, i) => (
              <div
                key={img}
                className="group relative h-72 sm:h-80 lg:h-96 overflow-hidden rounded-2xl border border-border/60 bg-muted shadow-sm"
              >
                <Image
                  src={img}
                  alt={`${service.title} project image ${i + 1} - JENGA LTD`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="inline-block rounded-md bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {service.title} · Phase {i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ──────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 md:px-8 2xl:max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
                Clarity & Confidence
              </p>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                Have specific technical or contractual questions regarding your upcoming site? Our team is available for a direct consultation.
              </p>
              <div className="mt-8">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:underline"
                >
                  Speak with an engineer directly
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {service.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-border/70 bg-card p-6 open:border-primary/40 open:shadow-sm transition-all duration-200"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-foreground select-none">
                    <span>{faq.q}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary/80 text-muted-foreground transition-transform duration-300 group-open:rotate-180 group-open:bg-primary/10 group-open:text-primary">
                      <ChevronDown className="size-4" />
                    </span>
                  </summary>
                  <div className="mt-4 border-t border-border/40 pt-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPLORE OTHER SERVICES ───────────────────────────────── */}
      <section className="border-t border-border/60 bg-muted/15 py-16">
        <div className="container mx-auto px-4 md:px-8 2xl:max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-xl font-extrabold tracking-tight text-foreground">
              Other Specializations
            </h3>
            <Link
              href="/#services"
              className="text-xs font-bold uppercase tracking-wider text-primary hover:underline"
            >
              View All 10 Services
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group flex flex-col justify-between rounded-xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-primary/50 hover:shadow-md"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                    {other.kicker}
                  </span>
                  <h4 className="mt-1 text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {other.title}
                  </h4>
                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-muted-foreground">
                    {other.tagline}
                  </p>
                </div>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary">
                  Learn more <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION (DARK BACKGROUND) ───────────────────────── */}
      <BannerWithBackgroundCTA />
    </div>
  );
}

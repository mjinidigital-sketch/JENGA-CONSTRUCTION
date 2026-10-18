import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    Building,
    CheckCircle2,
    HardHat,
    Layers,
    MapPin,
    Phone,
    ShieldCheck,
    Trophy,
} from "lucide-react";
import ProjectCards from "@/components/blocks/marketing/project-cards";
import BannerWithBackgroundCTA from "@/components/blocks/marketing/cta-sections/banner-with-background";

export const metadata: Metadata = {
    title: "Our Projects & Engineering Portfolio | JENGA LTD - NCA 1 Contractor",
    description:
        "Explore landmark commercial towers, residential developments, highways, and civil infrastructure engineered and delivered across Kenya and East Africa by JENGA LTD.",
    keywords: [
        "construction projects kenya",
        "Nairobi commercial contractors",
        "civil engineering portfolio east africa",
        "NCA 1 registered contractor projects",
        "infrastructure projects nairobi",
        "JENGA LTD projects",
    ],
    openGraph: {
        title: "Our Construction & Engineering Portfolio | JENGA LTD",
        description:
            "Explore landmark commercial towers, residential developments, highways, and civil infrastructure delivered across Kenya and East Africa by JENGA LTD.",
        url: "https://jengaltd.co.ke/projects",
        siteName: "JENGA LTD",
        images: [
            {
                url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85",
                width: 1200,
                height: 630,
                alt: "JENGA LTD Construction Portfolio",
            },
        ],
        locale: "en_KE",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Construction & Engineering Portfolio | JENGA LTD",
        description:
            "Explore landmark commercial towers, residential developments, highways, and civil infrastructure delivered across Kenya and East Africa by JENGA LTD.",
        images: [
            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85",
        ],
    },
};

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">

            {/* ── PORTFOLIO HERO ───────────────────────────────────────── */}
            <section className="relative isolate flex min-h-[75svh] items-center overflow-hidden bg-neutral-950 sm:min-h-[80svh] lg:min-h-[85svh]">
                {/* Background construction photograph */}
                <Image
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=85"
                    alt="JENGA LTD Construction Site Portfolio"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center brightness-[0.7]"
                />

                {/* Cinematic gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/75 to-neutral-950/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-neutral-950/40 to-transparent" />

                {/* Ambient brand glow */}
                <div className="pointer-events-none absolute -left-20 top-1/4 size-96 rounded-full bg-primary/25 blur-[140px]" />

                <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 py-20 lg:py-28 max-w-7xl">
                    <div className="max-w-3xl">
                        {/* Top kicker badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                            <HardHat className="size-4 text-primary shrink-0" />
                            <span>Project Case Studies & Engineering Portfolio</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.06]">
                            Landmark Works.{" "}
                            <span className="text-primary">Engineered</span> for Generations.
                        </h1>

                        {/* Intro paragraph */}
                        <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg md:text-xl max-w-2xl">
                            From flagship commercial towers in Nairobi&apos;s financial heart to
                            national expressways and municipal water systems across Kenya, explore
                            how JENGA LTD turns complex blueprints into enduring reality.
                        </p>

                        {/* Action Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                            <a
                                href="#project-directory"
                                className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-lg bg-primary px-7 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:brightness-110 active:scale-95"
                            >
                                Explore Projects
                                <ArrowDown className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                            </a>

                            <Link
                                href="/#contact"
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 active:scale-95"
                            >
                                Submit a Project Brief
                                <ArrowUpRight className="size-4" />
                            </Link>
                        </div>

                        {/* Trust Metrics Strip */}
                        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/15 pt-8 text-white/90">
                            <div>
                                <span className="block text-2xl sm:text-3xl font-extrabold text-primary">
                                    KES 50B+
                                </span>
                                <span className="text-xs text-white/70 font-medium">
                                    Asset Value Delivered
                                </span>
                            </div>
                            <div>
                                <span className="block text-2xl sm:text-3xl font-extrabold text-primary">
                                    150+
                                </span>
                                <span className="text-xs text-white/70 font-medium">
                                    Completed Projects
                                </span>
                            </div>
                            <div>
                                <span className="block text-2xl sm:text-3xl font-extrabold text-primary">
                                    100%
                                </span>
                                <span className="text-xs text-white/70 font-medium">
                                    NCA 1 Certified
                                </span>
                            </div>
                            <div>
                                <span className="block text-2xl sm:text-3xl font-extrabold text-primary">
                                    0 LTI
                                </span>
                                <span className="text-xs text-white/70 font-medium">
                                    Lost-Time Injury Record
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROJECT CARDS DIRECTORY WITH FILTERS ─────────────────── */}
            <ProjectCards
                heading="Featured Project Showcase"
                subheading="Browse our recent portfolio across commercial, high-density residential, heavy civil, and mission-critical industrial installations."
            />

            {/* ── SECTOR EXPERTISE SUMMARY ─────────────────────────────── */}
            <section className="border-t border-border/60 bg-muted/20 py-20 sm:py-28">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
                    <div className="mb-14 max-w-3xl">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">
                            Multi-Disciplinary Capability
                        </span>
                        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                            Every Sector. One Accountable Main Contractor.
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                            With integrated heavy equipment fleets, in-house geotechnical engineering, and specialized MEP teams, JENGA LTD eliminates subcontractor friction and delivers total project certainty.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-2xl border border-border/70 bg-card p-7 shadow-xs">
                            <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <Building className="size-6" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground">
                                Commercial & Mixed-Use
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                Grade-A office towers, shopping malls, boutique hotels, and corporate headquarters engineered for seismic resilience, energy efficiency, and high tenant density.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-border/70 bg-card p-7 shadow-xs">
                            <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <Layers className="size-6" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground">
                                Civil Works & Expressways
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                Heavy earthworks, asphalt concrete dualing, grade-separated interchanges, storm-water drainage channels, and reinforced concrete bridge structures.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-border/70 bg-card p-7 shadow-xs">
                            <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <ShieldCheck className="size-6" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground">
                                Mission-Critical & Industrial
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                Superflat FM2 logistics warehouses, Tier-IV data centers, clinical surgical theatres, and water treatment plants with stringent tolerance parameters.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROJECT CALL TO ACTION BANNER (DARK BACKGROUND) ──────── */}
            <BannerWithBackgroundCTA />
        </div>
    );
}
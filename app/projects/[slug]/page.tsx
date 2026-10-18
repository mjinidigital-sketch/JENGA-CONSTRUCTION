import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    Building2,
    Calendar,
    CheckCircle2,
    ChevronDown,
    Clock,
    Coins,
    FileText,
    HardHat,
    Layers,
    MapPin,
    Phone,
    Quote,
    ShieldAlert,
    ShieldCheck,
    Sparkles,
    Trophy,
} from "lucide-react";

import BannerWithBackgroundCTA from "@/components/blocks/marketing/cta-sections/banner-with-background";
import {
    projects,
    projectsBySlug,
    getRelatedProjects,
    Project,
} from "@/lib/projects";

// Generate static params for all project slugs
export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

// Generate rich dynamic SEO metadata
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const project = projectsBySlug[slug];
    if (!project) return {};

    const pageTitle = `${project.title} | JENGA LTD Construction Portfolio`;
    const pageDescription = `${project.tagline} Location: ${project.location}. Delivered by JENGA LTD (NCA 1 Registered Contractor). Contract Value: ${project.value}.`;

    return {
        title: pageTitle,
        description: pageDescription,
        keywords: [
            project.title,
            project.category,
            project.location,
            "JENGA LTD project",
            "Kenya construction case study",
            "NCA 1 contractor projects",
            "commercial construction Nairobi",
        ],
        openGraph: {
            title: pageTitle,
            description: pageDescription,
            url: `https://jengaltd.co.ke/projects/${project.slug}`,
            siteName: "JENGA LTD",
            images: [
                {
                    url: project.heroImage,
                    width: 1800,
                    height: 1000,
                    alt: `${project.title} - JENGA LTD Construction`,
                },
            ],
            locale: "en_KE",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: pageTitle,
            description: pageDescription,
            images: [project.heroImage],
        },
    };
}

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = projectsBySlug[slug];

    if (!project) {
        notFound();
    }

    const relatedProjects = getRelatedProjects(slug, 3);

    // Structured Data (JSON-LD) for Google Rich Snippets
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.title,
        headline: project.tagline,
        description: project.intro,
        image: project.heroImage,
        locationCreated: {
            "@type": "Place",
            name: project.location,
        },
        creator: {
            "@type": "Organization",
            name: "JENGA LTD",
            url: "https://jengaltd.co.ke",
        },
    };

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            {/* JSON-LD Rich Snippet */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />



            {/* ── CINEMATIC HERO SECTION ───────────────────────────────── */}
            <section className="relative isolate flex min-h-[85svh] items-end overflow-hidden bg-neutral-950 sm:min-h-[90svh] lg:min-h-screen">
                {/* Real construction background photography */}
                <Image
                    src={project.heroImage}
                    alt={`${project.title} by JENGA LTD`}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center brightness-[0.7]"
                />

                {/* Cinematic gradient overlays */}
                <div className="absolute inset-0 bg-neutral-950/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/70 to-neutral-950/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/45 to-transparent" />

                {/* Ambient brand glow */}
                <div className="pointer-events-none absolute -left-28 top-1/3 size-88 rounded-full bg-primary/20 blur-[130px]" />

                {/* Hero content */}
                <div className="relative z-10 w-full">
                    <div className="container mx-auto px-4 sm:px-6 md:px-8 pb-12 pt-28 sm:pb-16 lg:pb-20 max-w-7xl">
                        <div className="max-w-4xl">
                            {/* Breadcrumb / Back button */}
                            <div className="mb-6 flex flex-wrap items-center gap-3">
                                <Link
                                    href="/projects"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/20 hover:text-white"
                                >
                                    <ArrowLeft className="size-3.5" />
                                    All Projects
                                </Link>

                                <span className="text-white/40 text-xs">/</span>

                                <span className="rounded-full bg-primary/20 border border-primary/40 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider backdrop-blur-md">
                                    {project.category}
                                </span>

                                <span
                                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold backdrop-blur-md border ${project.status === "Completed"
                                        ? "bg-emerald-950/70 text-emerald-300 border-emerald-500/30"
                                        : "bg-amber-950/70 text-amber-300 border-amber-500/30"
                                        }`}
                                >
                                    <span
                                        className={`size-1.5 rounded-full ${project.status === "Completed"
                                            ? "bg-emerald-400"
                                            : "bg-amber-400 animate-pulse"
                                            }`}
                                    />
                                    {project.status}
                                </span>
                            </div>

                            {/* Kicker */}
                            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary mb-2">
                                {project.kicker}
                            </p>

                            {/* Main Heading */}
                            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.08]">
                                {project.title}
                            </h1>

                            {/* Introduction summary */}
                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
                                {project.intro}
                            </p>

                            {/* Key metadata pills strip */}
                            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                                <div className="rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur-md">
                                    <span className="flex items-center gap-1.5 text-[11px] font-medium text-white/70">
                                        <MapPin className="size-3 text-primary" /> Location
                                    </span>
                                    <p className="mt-1 text-xs font-bold text-white truncate">
                                        {project.location}
                                    </p>
                                </div>

                                <div className="rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur-md">
                                    <span className="flex items-center gap-1.5 text-[11px] font-medium text-white/70">
                                        <Building2 className="size-3 text-primary" /> Client
                                    </span>
                                    <p className="mt-1 text-xs font-bold text-white truncate">
                                        {project.client}
                                    </p>
                                </div>

                                <div className="rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur-md">
                                    <span className="flex items-center gap-1.5 text-[11px] font-medium text-white/70">
                                        <Coins className="size-3 text-primary" /> Value
                                    </span>
                                    <p className="mt-1 text-xs font-bold text-white truncate">
                                        {project.value}
                                    </p>
                                </div>

                                <div className="rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur-md">
                                    <span className="flex items-center gap-1.5 text-[11px] font-medium text-white/70">
                                        <Clock className="size-3 text-primary" /> Timeline
                                    </span>
                                    <p className="mt-1 text-xs font-bold text-white truncate">
                                        {project.duration} ({project.year.replace("Completed ", "")})
                                    </p>
                                </div>
                            </div>

                            {/* Primary Actions */}
                            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                                <Link
                                    href="/#contact"
                                    className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-lg bg-primary px-7 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:brightness-110 active:scale-95"
                                >
                                    Request Project Consultation
                                    <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </Link>

                                <a
                                    href="tel:+254700123456"
                                    className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 active:scale-95"
                                >
                                    <Phone className="size-4" />
                                    +254 700 123 456
                                </a>
                            </div>

                            {/* Trust Indicators */}
                            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-5 text-xs font-medium text-white/70">
                                <span className="inline-flex items-center gap-1.5">
                                    <ShieldCheck className="size-4 text-primary" />
                                    NCA 1 Registered Contractor
                                </span>
                                <span className="inline-flex items-center gap-1.5">
                                    <Trophy className="size-4 text-primary" />
                                    ISO 9001 Quality Certified
                                </span>
                                <span className="inline-flex items-center gap-1.5">
                                    <HardHat className="size-4 text-primary" />
                                    Zero Lost-Time Injury Protocol
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom smooth fade */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
            </section>

            {/* ── PROJECT KEY METRICS BAR ──────────────────────────────── */}
            <section className="border-b border-border/60 bg-muted/40 py-12">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {project.stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="rounded-2xl border border-border/70 bg-card p-6 shadow-xs text-center"
                            >
                                <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary">
                                    {stat.value}
                                </span>
                                <span className="mt-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PROJECT DETAILS & ENGINEERING NARRATIVE ───────────────── */}
            <section className="py-20 sm:py-28">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                        {/* Left Column: In-Depth Narrative */}
                        <div className="lg:col-span-7 space-y-10">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                                    Project Dossier
                                </p>
                                <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                                    Engineering Overview & Execution
                                </h2>
                                <p className="mt-5 text-sm sm:text-base leading-relaxed text-muted-foreground">
                                    {project.overview}
                                </p>
                            </div>

                            {/* The Technical Challenge */}
                            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.04] p-7">
                                <div className="flex items-center gap-2.5 text-amber-500 font-bold text-sm uppercase tracking-wider mb-3">
                                    <ShieldAlert className="size-5" />
                                    <span>The Engineering Challenge</span>
                                </div>
                                <p className="text-sm leading-relaxed text-foreground/90">
                                    {project.challenge}
                                </p>
                            </div>

                            {/* The Innovation & Solution */}
                            <div className="rounded-2xl border border-primary/30 bg-primary/[0.04] p-7">
                                <div className="flex items-center gap-2.5 text-primary font-bold text-sm uppercase tracking-wider mb-3">
                                    <Sparkles className="size-5" />
                                    <span>The Innovative Solution</span>
                                </div>
                                <p className="text-sm leading-relaxed text-foreground/90">
                                    {project.solution}
                                </p>
                            </div>

                            {/* Tangible Impact & Outcomes */}
                            <div>
                                <h3 className="text-xl font-bold tracking-tight text-foreground mb-3">
                                    Project Impact & Deliverables
                                </h3>
                                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                                    {project.impact}
                                </p>
                            </div>

                            {/* Client/Engineer Testimonial */}
                            {project.testimonial && (
                                <div className="relative rounded-2xl border border-border/80 bg-card p-8 shadow-sm">
                                    <Quote className="size-10 text-primary/20 absolute top-6 right-6 pointer-events-none" />
                                    <p className="text-base sm:text-lg italic leading-relaxed text-foreground/95">
                                        &ldquo;{project.testimonial.quote}&rdquo;
                                    </p>
                                    <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border/60">
                                        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                                            {project.testimonial.author
                                                .split(" ")
                                                .map((n) => n[0])
                                                .slice(0, 2)
                                                .join("")}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-foreground">
                                                {project.testimonial.author}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {project.testimonial.role} · {project.testimonial.company}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Column: Technical Dossier & Scope */}
                        <div className="lg:col-span-5 space-y-8">
                            {/* Technical Specifications Table */}
                            <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
                                <h3 className="text-lg font-bold text-foreground mb-4 pb-3 border-b border-border/60">
                                    Technical Specifications
                                </h3>
                                <dl className="divide-y divide-border/60 text-xs sm:text-sm">
                                    <div className="py-2.5 flex justify-between gap-4">
                                        <dt className="text-muted-foreground">Client</dt>
                                        <dd className="font-semibold text-foreground text-right">
                                            {project.client}
                                        </dd>
                                    </div>
                                    <div className="py-2.5 flex justify-between gap-4">
                                        <dt className="text-muted-foreground">Principal Contractor</dt>
                                        <dd className="font-semibold text-primary text-right">
                                            JENGA LTD (NCA 1)
                                        </dd>
                                    </div>
                                    <div className="py-2.5 flex justify-between gap-4">
                                        <dt className="text-muted-foreground">Location</dt>
                                        <dd className="font-semibold text-foreground text-right">
                                            {project.location}
                                        </dd>
                                    </div>
                                    <div className="py-2.5 flex justify-between gap-4">
                                        <dt className="text-muted-foreground">Sector Category</dt>
                                        <dd className="font-semibold text-foreground text-right">
                                            {project.category}
                                        </dd>
                                    </div>
                                    <div className="py-2.5 flex justify-between gap-4">
                                        <dt className="text-muted-foreground">Contract Value</dt>
                                        <dd className="font-semibold text-foreground text-right">
                                            {project.value}
                                        </dd>
                                    </div>
                                    <div className="py-2.5 flex justify-between gap-4">
                                        <dt className="text-muted-foreground">Duration</dt>
                                        <dd className="font-semibold text-foreground text-right">
                                            {project.duration}
                                        </dd>
                                    </div>
                                    <div className="py-2.5 flex justify-between gap-4">
                                        <dt className="text-muted-foreground">Built Area / Scale</dt>
                                        <dd className="font-semibold text-foreground text-right">
                                            {project.builtArea}
                                        </dd>
                                    </div>
                                    <div className="py-2.5 flex justify-between gap-4">
                                        <dt className="text-muted-foreground">Completion Status</dt>
                                        <dd className="font-semibold text-foreground text-right">
                                            {project.status}
                                        </dd>
                                    </div>
                                    <div className="py-2.5 flex justify-between gap-4">
                                        <dt className="text-muted-foreground">Standards Compliance</dt>
                                        <dd className="font-semibold text-foreground text-right">
                                            BS EN & NCA Standards
                                        </dd>
                                    </div>
                                </dl>
                            </div>

                            {/* Scope of Works Checklist */}
                            <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
                                <h3 className="text-lg font-bold text-foreground mb-4 pb-3 border-b border-border/60">
                                    Comprehensive Scope of Works
                                </h3>
                                <ul className="space-y-3">
                                    {project.scope.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-3 text-xs sm:text-sm text-foreground/90"
                                        >
                                            <CheckCircle2 className="size-4 shrink-0 text-primary mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Consultation Card */}
                            <div className="rounded-2xl border border-primary/40 bg-gradient-to-br from-card to-primary/10 p-6 text-center">
                                <HardHat className="size-8 text-primary mx-auto mb-3" />
                                <h4 className="text-base font-bold text-foreground">
                                    Planning a Similar Build?
                                </h4>
                                <p className="mt-2 text-xs text-muted-foreground">
                                    Our chief project directors are available to review your drawings and provide feasibility analysis.
                                </p>
                                <Link
                                    href="/#contact"
                                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-xs font-bold text-primary-foreground shadow-md hover:brightness-110"
                                >
                                    Schedule Site Evaluation
                                    <ArrowRight className="size-3.5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CORE HIGHLIGHTS & CAPABILITIES ───────────────────────── */}
            <section className="border-t border-border/60 bg-muted/20 py-20 sm:py-28">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
                    <div className="mb-14 max-w-2xl">
                        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                            Engineering Hallmarks
                        </p>
                        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                            Specialized Project Highlights
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            Proprietary methods, advanced civil materials, and multidisciplinary coordination implemented for {project.title}.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {project.keyHighlights.map((hl, i) => (
                            <div
                                key={hl.title}
                                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
                            >
                                <div className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/25" />
                                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                                <div>
                                    <span className="mb-4 inline-block font-mono text-xs font-black tracking-widest text-primary">
                                        0{i + 1}
                                    </span>
                                    <h3 className="mb-3 text-base font-bold text-foreground">
                                        {hl.title}
                                    </h3>
                                    <p className="text-xs leading-relaxed text-muted-foreground">
                                        {hl.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── VISUAL PROJECT GALLERY ("PROJECT ALLEY") ──────────────── */}
            <section className="border-t border-border/60 bg-background py-20 sm:py-28">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
                    <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                                Construction Alley & Site Photography
                            </p>
                            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                                On-Site Execution Gallery
                            </h2>
                        </div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                            {project.gallery.length} verified site stages
                        </p>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {project.gallery.map((img, idx) => (
                            <div
                                key={idx}
                                className="group relative h-80 sm:h-96 lg:h-[420px] overflow-hidden rounded-2xl border border-border/70 bg-muted shadow-sm"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.caption}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />

                                {/* Dark gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300" />

                                {/* Stage Tag */}
                                {img.stage && (
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md border border-white/20">
                                            <span className="size-1.5 rounded-full bg-primary" />
                                            {img.stage}
                                        </span>
                                    </div>
                                )}

                                {/* Caption at bottom */}
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="text-xs sm:text-sm font-medium text-white/95 leading-relaxed bg-black/40 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                                        {img.caption}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FREQUENTLY ASKED QUESTIONS (FAQ) ──────────────────────── */}
            <section className="border-t border-border/60 bg-muted/20 py-20 sm:py-28">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                        <div className="lg:col-span-5">
                            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                                Clarity & Confidence
                            </p>
                            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                                Frequently Asked Technical Questions
                            </h2>
                            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                                Inquiries regarding engineering compliance, subcontractor management, structural warranties, and site health & safety protocols.
                            </p>
                            <div className="mt-8">
                                <Link
                                    href="/#contact"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                                >
                                    Inquire directly with our resident engineer
                                    <ArrowRight className="size-4" />
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-7 space-y-4">
                            {project.faqs.map((faq, i) => (
                                <details
                                    key={i}
                                    className="group rounded-2xl border border-border/70 bg-card p-6 open:border-primary/50 open:shadow-sm transition-all duration-200"
                                >
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-foreground select-none">
                                        <span>{faq.q}</span>
                                        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground transition-transform duration-300 group-open:rotate-180 group-open:bg-primary/10 group-open:text-primary">
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

            {/* ── RELATED PROJECTS SHOWCASE ─────────────────────────────── */}
            <section className="border-t border-border/60 bg-background py-20 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
                    <div className="mb-10 flex items-center justify-between">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                                More From Our Portfolio
                            </p>
                            <h3 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                                Related Construction Works
                            </h3>
                        </div>
                        <Link
                            href="/projects"
                            className="text-xs font-bold uppercase tracking-wider text-primary hover:underline flex items-center gap-1"
                        >
                            View All Projects
                            <ArrowRight className="size-3.5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {relatedProjects.map((other) => (
                            <Link
                                key={other.slug}
                                href={`/projects/${other.slug}`}
                                className="group flex flex-col justify-between rounded-2xl border border-border/70 bg-card overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                                    <Image
                                        src={other.heroImage}
                                        alt={other.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                    <span className="absolute top-3 left-3 rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md">
                                        {other.category}
                                    </span>
                                    <span className="absolute bottom-2.5 left-3 text-xs text-white/90 font-medium">
                                        {other.location}
                                    </span>
                                </div>

                                <div className="p-5 flex flex-col justify-between flex-1 gap-3">
                                    <div>
                                        <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                                            {other.title}
                                        </h4>
                                        <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                                            {other.tagline}
                                        </p>
                                    </div>
                                    <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs font-bold text-primary">
                                        <span>{other.value}</span>
                                        <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                            Explore Case Study <ArrowRight className="size-3" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HIGH-CONVERTING CTA SECTION (DARK THEME) ─────────────── */}
            <BannerWithBackgroundCTA />
        </div>
    );
}

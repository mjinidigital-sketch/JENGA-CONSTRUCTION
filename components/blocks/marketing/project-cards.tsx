"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  Filter,
  Hammer,
  HardHat,
  Layers,
  MapPin,
  Search,
  Sparkles,
} from "lucide-react";
import {
  projects,
  projectCategories,
  Project,
  ProjectCategory,
} from "@/lib/projects";

interface ProjectCardsProps {
  initialCategory?: "All" | ProjectCategory;
  limit?: number;
  showFilters?: boolean;
  heading?: string;
  subheading?: string;
}

export default function ProjectCards({
  initialCategory = "All",
  limit,
  showFilters = true,
  heading,
  subheading,
}: ProjectCardsProps) {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>(
    initialCategory
  );
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tagline.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const displayProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  return (
    <section className="relative py-16 sm:py-24 bg-background overflow-hidden" id="project-directory">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-[500px] w-full max-w-7xl bg-primary/[0.03] blur-[140px]" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        {/* Optional Section Header */}
        {(heading || subheading) && (
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <HardHat className="size-3.5" />
              <span>Proven Track Record</span>
            </div>
            {heading && (
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {subheading}
              </p>
            )}
          </div>
        )}

        {/* Filters and Search Bar */}
        {showFilters && (
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {projectCategories.map((cat) => {
                const isActive = activeCategory === cat;
                const count =
                  cat === "All"
                    ? projects.length
                    : projects.filter((p) => p.category === cat).length;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${isActive
                      ? "bg-primary text-primary-foreground shadow-sm shadow-primary/25 ring-2 ring-primary ring-offset-2 ring-offset-background"
                      : "border border-border/80 bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${isActive
                        ? "bg-white/20 text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                        }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Live Search */}
            <div className="relative w-full sm:w-72 shrink-0">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by city, client, or type..."
                className="h-10 w-full rounded-full border border-border/80 bg-card pl-10 pr-4 text-xs font-medium text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        )}

        {/* Projects Grid: strictly even height with flex-col justify-between */}
        {displayProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {displayProjects.map((project) => (
              <div
                key={project.slug}
                className="group relative flex flex-col h-full rounded-md border border-border/70 bg-card overflow-hidden shadow-xs hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Container with Consistent Aspect Ratio */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <Image
                    src={project.heroImage}
                    alt={`${project.title} - ${project.location}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md border border-white/15">
                      {project.category}
                    </span>

                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold backdrop-blur-md border ${project.status === "Completed"
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

                  {/* Bottom Image Info */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-xs text-white/90">
                    <span className="inline-flex items-center gap-1.5 font-medium">
                      <MapPin className="size-3.5 text-primary" />
                      <span className="truncate max-w-[180px]">
                        {project.location}
                      </span>
                    </span>
                    {/* <span className="rounded-md bg-white/15 px-2 py-0.5 text-[10px] font-bold tracking-wide backdrop-blur-sm border border-white/20">
                      {project.builtArea}
                    </span> */}
                  </div>
                </div>

                {/* Card Body — Evenly Spaced with flex-1 */}
                <div className="flex flex-col flex-1 p-6 justify-between gap-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5 font-medium">
                        <Building2 className="size-3.5 text-primary/80" />
                        <span className="truncate max-w-[160px]">
                          {project.client}
                        </span>
                      </span>
                      <span className="inline-flex items-center gap-1 font-medium">
                        <Calendar className="size-3 text-muted-foreground" />
                        {project.year.replace("Completed ", "")}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary line-clamp-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="after:absolute after:inset-0"
                      >
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Specs & Link Strip */}
                  <div className="space-y-4 pt-4 border-t border-border/60">
                    {/* Micro Stats Strip */}
                    <div className="grid grid-cols-2 gap-2 text-center">
                      <div className="rounded-lg bg-muted/40 p-2 border border-border/40">
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                          Contract Value
                        </span>
                        <span className="text-xs font-bold text-foreground">
                          {project.value}
                        </span>
                      </div>
                      <div className="rounded-lg bg-muted/40 p-2 border border-border/40">
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                          Duration
                        </span>
                        <span className="text-xs font-bold text-foreground">
                          {project.duration}
                        </span>
                      </div>
                    </div>

                    {/* Action link */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                        View Project Dossier
                        <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </span>
                      {/* <span className="text-[11px] font-medium text-muted-foreground">
                        {project.gallery.length + 1} Photos
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="my-16 rounded-2xl border border-dashed border-border p-12 text-center">
            <Filter className="mx-auto size-10 text-muted-foreground/60" />
            <h4 className="mt-4 text-base font-bold text-foreground">
              No matching projects found
            </h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Try adjusting your category filter or search keywords.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-bold text-primary-foreground hover:brightness-110"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  HardHat,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { SiInstagram, SiYoutube } from "@icons-pack/react-simple-icons";
import { Linkedin, Twitter } from "@/components/ui/brand-icons";

const serviceLinks = [
  { title: "Commercial Construction", href: "/services/commercial-construction" },
  { title: "Residential Developments", href: "/services/residential-developments" },
  { title: "Civil Works & Infrastructure", href: "/services/civil-works-infrastructure" },
  { title: "Design & Build (EPC)", href: "/services/design-and-build" },
  { title: "Fit-out & Renovation", href: "/services/fit-out-and-renovation" },
  { title: "Water & Sanitation Works", href: "/services/water-and-sanitation" },
  { title: "View All 10 Specializations", href: "/#services" },
];

const projectLinks = [
  { title: "Nairobi Financial Centre", href: "/projects/nairobi-financial-centre" },
  { title: "Kilimani Crest Residences", href: "/projects/kilimani-crest-residences" },
  { title: "Rift Valley Expressway", href: "/projects/rift-valley-expressway-phase-2" },
  { title: "Mombasa Port Logistics Hub", href: "/projects/mombasa-port-logistics-hub" },
  { title: "Konza Tier-IV Data Centre", href: "/projects/konza-technopolis-data-hub" },
  { title: "Karen Waterfront Marina", href: "/projects/karen-waterfront-retail-park" },
  { title: "Explore Full Portfolio", href: "/projects" },
];

const companyLinks = [
  { title: "About JENGA LTD", href: "/#about" },
  { title: "Health, Safety & Environment (HSE)", href: "/#about" },
  { title: "Heavy Plant & Equipment Fleet", href: "/#about" },
  { title: "QA/QC Materials Laboratory", href: "/#about" },
  { title: "Tender Submissions & BOQ Review", href: "/#contact" },
  { title: "Subcontractor Prequalification", href: "/#contact" },
  { title: "Careers & Site Apprenticeships", href: "/#contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter / X" },
  { icon: SiInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: SiYoutube, href: "https://youtube.com", label: "YouTube" },
];

export default function FooterSubscribe() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-neutral-950 text-neutral-200 w-full border-t border-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
        {/* ── TOP: TENDER BULLETIN & CONSTRUCTION UPDATES ───────────── */}
        <div className="border-b border-neutral-800 py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Subscribe
              </h2>
              <p className="text-neutral-400 mt-3 text-sm max-w-2xl leading-relaxed">
                Receive quarterly construction market cost indices, civil infrastructure updates, and project handover reports directly from our senior engineering directors.
              </p>
            </div>

            <div className="lg:col-span-5">
              {submitted ? (
                <div className="rounded-xl border border-primary/40 bg-primary/10 p-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-primary font-bold text-sm">
                    <CheckCircle2 className="size-5" />
                    <span>Subscribed Successfully</span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-300">
                    You have been enrolled in JENGA LTD&apos;s quarterly construction bulletin.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter corporate email address..."
                    className="flex-1 bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-500 text-sm focus:border-primary"
                  />
                  <Button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold hover:brightness-110 shrink-0"
                  >
                    Subscribe
                    <ArrowRight className="size-4" />
                  </Button>
                </form>
              )}
              <p className="mt-2 text-[11px] text-neutral-500">
                Strict corporate privacy. No spam. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* ── MAIN COLUMNS ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 py-14 lg:py-16">
          {/* Column 1: Company Profile & Accreditations (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <img
                src="/construction.webp"
                alt="JENGA LTD Logo"
                className="size-10 object-contain rounded-md bg-white/5 p-1"
              />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white leading-none">
                  JENGA LTD
                </span>
                <span className="text-[11px] font-semibold text-primary uppercase tracking-wider mt-1">
                  Construction & Engineering
                </span>
              </div>
            </Link>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              An NCA 1 registered main contractor delivering landmark commercial towers, luxury residential estates, national expressways, and water treatment infrastructure across Kenya and East Africa.
            </p>

            {/* Accreditation Badges */}
            <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-neutral-300">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800 bg-neutral-900 px-2.5 py-1">
                <ShieldCheck className="size-3.5 text-primary" />
                NCA 1 Building Works
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800 bg-neutral-900 px-2.5 py-1">
                <ShieldCheck className="size-3.5 text-primary" />
                NCA 1 Civil Engineering
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800 bg-neutral-900 px-2.5 py-1">
                <ShieldCheck className="size-3.5 text-primary" />
                ISO 9001:2015
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="size-9 rounded-lg border border-neutral-800 bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <link.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Construction Services (Span 2) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {serviceLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-primary transition-colors block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Projects (Span 2) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Case Studies
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {projectLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-primary transition-colors block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Corporate & Compliance (Span 2) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Company & HSE
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {companyLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-primary transition-colors block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Direct Site & Office Contacts (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Headquarters
            </h3>
            <div className="space-y-3 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="size-4 shrink-0 text-primary mt-0.5" />
                <span>
                  JENGA Towers, 4th Flr, Waiyaki Way, Westlands, Nairobi, Kenya
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-primary" />
                <a
                  href="tel:+254700123456"
                  className="hover:text-primary transition-colors"
                >
                  +254 700 123 456
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-primary" />
                <a
                  href="mailto:tenders@jengaltd.co.ke"
                  className="hover:text-primary transition-colors truncate"
                >
                  tenders@jengaltd.co.ke
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-neutral-800">
                <Clock className="size-4 shrink-0 text-primary mt-0.5" />
                <div className="text-[11px] leading-tight">
                  <p className="font-medium text-neutral-300">Site Hours:</p>
                  <p className="text-neutral-400">Mon–Fri: 7:00 AM – 6:00 PM</p>
                  <p className="text-neutral-400">Sat: 8:00 AM – 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR: LEGAL & COPYRIGHT ────────────────────────── */}
        <div className="border-t border-neutral-800 py-6 text-xs text-neutral-400">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-center sm:text-left">
              &copy; {currentYear} JENGA LTD. All rights reserved. Registered NCA 1 Main Contractor.
            </p>
            <nav className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2 text-[11px]">
              <a href="/#about" className="hover:text-primary transition-colors">
                Environmental & NEMA Policy
              </a>
              <a href="/#about" className="hover:text-primary transition-colors">
                Occupational Safety (OSHA)
              </a>
              <a href="/#contact" className="hover:text-primary transition-colors">
                General Contract Conditions
              </a>
              <a href="/#contact" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  HardHat,
  MapPin,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function HeroSectionWithEmailInput() {
  const [submitted, setSubmitted] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailOrPhone.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-background/80 py-20 ">
        {/* Subtle background ambient accents */}
        {/* Architectural Construction Tower Crane SVG Silhouette / Watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-0 flex items-end justify-end overflow-hidden opacity-[0.22] dark:opacity-[0.30] select-none"
        >
          <svg
            viewBox="0 0 650 720"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[110%] w-auto max-w-[680px] stroke-primary text-primary"
          >
            {/* Crane Mast Base Foundation */}
            <rect x="170" y="690" width="80" height="20" rx="3" className="fill-primary/20 stroke-primary" strokeWidth="2" />
            <line x1="160" y1="710" x2="260" y2="710" strokeWidth="3" className="stroke-primary" />
            <line x1="180" y1="690" x2="160" y2="710" strokeWidth="2" className="stroke-primary" />
            <line x1="240" y1="690" x2="260" y2="710" strokeWidth="2" className="stroke-primary" />

            {/* Vertical Mast Chords (Legs) */}
            <line x1="190" y1="180" x2="190" y2="690" strokeWidth="2.5" className="stroke-primary" />
            <line x1="230" y1="180" x2="230" y2="690" strokeWidth="2.5" className="stroke-primary" />

            {/* Mast Internal Service Ladder */}
            <line x1="210" y1="180" x2="210" y2="690" strokeWidth="1" strokeDasharray="3 3" className="stroke-primary/50" />

            {/* Mast Horizontal Struts & Diagonal Lattice Cross-Bracing */}
            <line x1="190" y1="650" x2="230" y2="650" strokeWidth="1.5" className="stroke-primary" />
            <line x1="190" y1="690" x2="230" y2="650" strokeWidth="1.5" className="stroke-primary" />
            <line x1="230" y1="690" x2="190" y2="650" strokeWidth="1.5" className="stroke-primary" />

            <line x1="190" y1="610" x2="230" y2="610" strokeWidth="1.5" className="stroke-primary" />
            <line x1="190" y1="650" x2="230" y2="610" strokeWidth="1.5" className="stroke-primary" />
            <line x1="230" y1="650" x2="190" y2="610" strokeWidth="1.5" className="stroke-primary" />

            <line x1="190" y1="570" x2="230" y2="570" strokeWidth="1.5" className="stroke-primary" />
            <line x1="190" y1="610" x2="230" y2="570" strokeWidth="1.5" className="stroke-primary" />
            <line x1="230" y1="610" x2="190" y2="570" strokeWidth="1.5" className="stroke-primary" />

            <line x1="190" y1="530" x2="230" y2="530" strokeWidth="1.5" className="stroke-primary" />
            <line x1="190" y1="570" x2="230" y2="530" strokeWidth="1.5" className="stroke-primary" />
            <line x1="230" y1="570" x2="190" y2="530" strokeWidth="1.5" className="stroke-primary" />

            <line x1="190" y1="490" x2="230" y2="490" strokeWidth="1.5" className="stroke-primary" />
            <line x1="190" y1="530" x2="230" y2="490" strokeWidth="1.5" className="stroke-primary" />
            <line x1="230" y1="530" x2="190" y2="490" strokeWidth="1.5" className="stroke-primary" />

            <line x1="190" y1="450" x2="230" y2="450" strokeWidth="1.5" className="stroke-primary" />
            <line x1="190" y1="490" x2="230" y2="450" strokeWidth="1.5" className="stroke-primary" />
            <line x1="230" y1="490" x2="190" y2="450" strokeWidth="1.5" className="stroke-primary" />

            <line x1="190" y1="410" x2="230" y2="410" strokeWidth="1.5" className="stroke-primary" />
            <line x1="190" y1="450" x2="230" y2="410" strokeWidth="1.5" className="stroke-primary" />
            <line x1="230" y1="450" x2="190" y2="410" strokeWidth="1.5" className="stroke-primary" />

            <line x1="190" y1="370" x2="230" y2="370" strokeWidth="1.5" className="stroke-primary" />
            <line x1="190" y1="410" x2="230" y2="370" strokeWidth="1.5" className="stroke-primary" />
            <line x1="230" y1="410" x2="190" y2="370" strokeWidth="1.5" className="stroke-primary" />

            <line x1="190" y1="330" x2="230" y2="330" strokeWidth="1.5" className="stroke-primary" />
            <line x1="190" y1="370" x2="230" y2="330" strokeWidth="1.5" className="stroke-primary" />
            <line x1="230" y1="370" x2="190" y2="330" strokeWidth="1.5" className="stroke-primary" />

            <line x1="190" y1="290" x2="230" y2="290" strokeWidth="1.5" className="stroke-primary" />
            <line x1="190" y1="330" x2="230" y2="290" strokeWidth="1.5" className="stroke-primary" />
            <line x1="230" y1="330" x2="190" y2="290" strokeWidth="1.5" className="stroke-primary" />

            <line x1="190" y1="250" x2="230" y2="250" strokeWidth="1.5" className="stroke-primary" />
            <line x1="190" y1="290" x2="230" y2="250" strokeWidth="1.5" className="stroke-primary" />
            <line x1="230" y1="290" x2="190" y2="250" strokeWidth="1.5" className="stroke-primary" />

            <line x1="190" y1="210" x2="230" y2="210" strokeWidth="1.5" className="stroke-primary" />
            <line x1="190" y1="250" x2="230" y2="210" strokeWidth="1.5" className="stroke-primary" />
            <line x1="230" y1="250" x2="190" y2="210" strokeWidth="1.5" className="stroke-primary" />

            <line x1="190" y1="180" x2="230" y2="180" strokeWidth="2" className="stroke-primary" />
            <line x1="190" y1="210" x2="230" y2="180" strokeWidth="1.5" className="stroke-primary" />
            <line x1="230" y1="210" x2="190" y2="180" strokeWidth="1.5" className="stroke-primary" />

            {/* Slewing Unit & Turntable */}
            <rect x="184" y="170" width="52" height="10" rx="2" className="fill-primary/30 stroke-primary" strokeWidth="1.5" />

            {/* Operator Cab */}
            <rect x="156" y="145" width="28" height="30" rx="3" className="fill-primary/20 stroke-primary" strokeWidth="1.5" />
            <line x1="156" y1="158" x2="184" y2="158" strokeWidth="1" className="stroke-primary" />
            <line x1="170" y1="145" x2="170" y2="158" strokeWidth="1" className="stroke-primary" />

            {/* Tower Apex / Cat Head (A-Frame Peak) */}
            <polygon points="190,145 210,50 230,145" strokeWidth="2" className="stroke-primary" fill="none" />
            <line x1="210" y1="50" x2="210" y2="145" strokeWidth="1.5" className="stroke-primary" />
            <circle cx="210" cy="46" r="3.5" fill="#f43f5e" />

            {/* Counter-Jib (Rear Arm) */}
            <line x1="190" y1="145" x2="40" y2="145" strokeWidth="2.5" className="stroke-primary" />
            <line x1="190" y1="120" x2="40" y2="120" strokeWidth="2" className="stroke-primary" />
            <line x1="40" y1="120" x2="40" y2="145" strokeWidth="2" className="stroke-primary" />
            <line x1="190" y1="145" x2="150" y2="120" strokeWidth="1.5" className="stroke-primary" />
            <line x1="150" y1="145" x2="110" y2="120" strokeWidth="1.5" className="stroke-primary" />
            <line x1="110" y1="145" x2="70" y2="120" strokeWidth="1.5" className="stroke-primary" />
            <line x1="70" y1="145" x2="40" y2="120" strokeWidth="1.5" className="stroke-primary" />
            <line x1="210" y1="50" x2="40" y2="120" strokeWidth="2" className="stroke-primary" />

            {/* Concrete Counterweight Blocks */}
            <rect x="50" y="135" width="28" height="28" rx="2" className="fill-primary/40 stroke-primary" strokeWidth="1.5" />
            <rect x="82" y="135" width="28" height="28" rx="2" className="fill-primary/40 stroke-primary" strokeWidth="1.5" />
            <rect x="114" y="135" width="24" height="28" rx="2" className="fill-primary/40 stroke-primary" strokeWidth="1.5" />

            {/* Working Main Jib Boom */}
            <line x1="230" y1="145" x2="630" y2="145" strokeWidth="2.5" className="stroke-primary" />
            <line x1="230" y1="120" x2="630" y2="145" strokeWidth="2" className="stroke-primary" />
            <line x1="230" y1="145" x2="270" y2="122" strokeWidth="1.5" className="stroke-primary" />
            <line x1="270" y1="145" x2="310" y2="125" strokeWidth="1.5" className="stroke-primary" />
            <line x1="310" y1="145" x2="350" y2="127" strokeWidth="1.5" className="stroke-primary" />
            <line x1="350" y1="145" x2="390" y2="130" strokeWidth="1.5" className="stroke-primary" />
            <line x1="390" y1="145" x2="430" y2="132" strokeWidth="1.5" className="stroke-primary" />
            <line x1="430" y1="145" x2="470" y2="135" strokeWidth="1.5" className="stroke-primary" />
            <line x1="470" y1="145" x2="510" y2="137" strokeWidth="1.5" className="stroke-primary" />
            <line x1="510" y1="145" x2="550" y2="140" strokeWidth="1.5" className="stroke-primary" />
            <line x1="550" y1="145" x2="590" y2="142" strokeWidth="1.5" className="stroke-primary" />
            <line x1="590" y1="145" x2="630" y2="145" strokeWidth="1.5" className="stroke-primary" />

            {/* Vertical Jib Posts */}
            <line x1="270" y1="122" x2="270" y2="145" strokeWidth="1" className="stroke-primary/70" />
            <line x1="350" y1="127" x2="350" y2="145" strokeWidth="1" className="stroke-primary/70" />
            <line x1="430" y1="132" x2="430" y2="145" strokeWidth="1" className="stroke-primary/70" />
            <line x1="510" y1="137" x2="510" y2="145" strokeWidth="1" className="stroke-primary/70" />

            {/* Tension Stay Cables */}
            <line x1="210" y1="50" x2="370" y2="128" strokeWidth="1.8" className="stroke-primary" />
            <line x1="210" y1="50" x2="520" y2="138" strokeWidth="1.8" className="stroke-primary" />

            {/* Trolley Carriage */}
            <rect x="440" y="145" width="22" height="9" rx="1.5" className="fill-primary stroke-primary" strokeWidth="1" />
            <circle cx="445" cy="145" r="2" className="fill-background" />
            <circle cx="457" cy="145" r="2" className="fill-background" />

            {/* Hoist Cables */}
            <line x1="447" y1="154" x2="447" y2="300" strokeWidth="1.2" className="stroke-primary" />
            <line x1="455" y1="154" x2="455" y2="300" strokeWidth="1.2" className="stroke-primary" />

            {/* Pulley Block and Hook */}
            <rect x="443" y="300" width="16" height="14" rx="2" className="fill-primary/60 stroke-primary" strokeWidth="1.5" />
            <path d="M 451 314 C 451 324 443 324 443 330 C 443 335 450 335 455 330" strokeWidth="2.5" className="stroke-primary" fill="none" strokeLinecap="round" />

            {/* Rigging Slings Lifting a Steel I-Beam */}
            <line x1="447" y1="332" x2="400" y2="365" strokeWidth="1.2" className="stroke-primary" />
            <line x1="455" y1="332" x2="502" y2="365" strokeWidth="1.2" className="stroke-primary" />

            {/* Structural Steel I-Beam */}
            <rect x="380" y="365" width="140" height="16" rx="1" className="fill-primary/30 stroke-primary" strokeWidth="1.8" />
            <line x1="380" y1="369" x2="520" y2="369" strokeWidth="1" className="stroke-primary" />
            <line x1="380" y1="377" x2="520" y2="377" strokeWidth="1" className="stroke-primary" />
          </svg>
        </div>
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
          <div className="h-[400px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 2xl:max-w-7xl">
          {/* Main Grid */}
          <div className="grid lg:grid-cols-12 lg:gap-x-14 xl:gap-x-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Location & Certification Badge */}
              <div className="inline-flex items-center gap-2 rounded-sm border border-primary/30 px-3.5 py-1.5 text-xs font-semibold text-foreground backdrop-blur-sm">
                <span className="flex items-center gap-1.5 text-xs">
                  <HardHat className="size-3 " />
                  NCA 1 Registered Contractor • Nairobi, Kenya
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="scroll-m-20 text-4xl lg:text-5xl xl:text-6xl  font-extrabold text-foreground leading-[1.1]">
                Nairobi&apos;s Leading <span className="text-primary ">
                  Construction {" "}
                </span>{" "}
                Firm
              </h1>

              {/* Subtitle / Value Proposition */}
              <p className="text-base text-muted-foreground leading-relaxed">
                Delivering turnkey construction on time, on
                budget, and built to the highest safety standards. We build everything from residential buildings to large-scale commercial projects.
                Welcome to JENGA LTD, Nairobi&apos;s Leading Construction Company. </p>

              {/* Email / Quote Consultation Form */}
              <div className="pt-2">
                {submitted ? (
                  <div className="flex items-center gap-3 rounded-lg border border-primary/40 bg-primary/10 p-4 text-foreground max-w-xl">
                    <CheckCircle2 className="size-6 text-primary shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">
                        Thank you! Your inquiry has been received.
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        A senior project engineer from JENGA LTD will contact you within 24 hours with your preliminary appraisal.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-row items-stretch sm:items-center gap-3 max-w-xl"
                  >
                    <div className="relative flex-1">
                      <Label htmlFor="hero-email" className="sr-only">
                        Email address or phone number
                      </Label>
                      <Input
                        id="hero-email"
                        value={emailOrPhone}
                        onChange={(e) => setEmailOrPhone(e.target.value)}
                        placeholder="Enter work email or phone for quote..."
                        type="text"
                        required
                        className="h-12 w-full bg-background/90 text-foreground shadow-sm placeholder:text-muted-foreground/80 focus-visible:ring-primary"
                      />
                    </div>
                    <Button
                      size="lg"
                      type="submit"
                      className="h-12 whitespace-nowrap shadow-md gap-2 font-bold tracking-wide cursor-pointer"
                    >
                      <span className="text-sm md:text-base">Free Quote</span>
                      <ArrowRight className="size-4" />
                    </Button>
                  </form>
                )}

              </div>


            </div>

            {/* Right Column: High-Impact Visual Showcase */}
            <div className="lg:col-span-6 mt-10 lg:mt-0 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Decorative background border glow */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary/30 to-muted blur-md opacity-70" />

                {/* Main Card Frame */}
                <div className="relative overflow-hidden rounded-md border-4 border-primary bg-card shadow-2xl">
                  {/* Hero Project Image */}
                  <div className="relative w-full overflow-hidden bg-muted">
                    <Image
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      src="/road1.webp"
                      alt="Modern high-rise commercial construction project in Nairobi by JENGA LTD"
                      width={1200}
                      height={1500}
                      priority
                    />

                    {/* Gradient Overlay for card contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                    {/* Floating Top Badge: Rating & Recognition */}
                    <div className="absolute top-4 right-4 rounded-xl border border-white/20 bg-black/60 backdrop-blur-md px-3.5 py-2 shadow-lg">
                      <div className="flex items-center gap-2">
                        <Award className="size-4 text-primary" />
                        <div>
                          <div className="text-xs font-bold text-white leading-none">
                            NCA 1 Certified
                          </div>
                          <div className="text-[10px] text-white/80 font-medium">
                            Commercial &amp; Civil
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

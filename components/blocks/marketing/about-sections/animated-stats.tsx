"use client";

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Award,
  Building2,
  CheckCircle2,
  HardHat,
  ShieldCheck,
} from 'lucide-react';
import Image from 'next/image';

const stats = [
  {
    icon: HardHat,
    value: 18,
    suffix: '+',
    label: 'Years of Industry Leadership',
    description: 'Premier civil, commercial, and structural engineering across Kenya.',
  },
  {
    icon: Building2,
    value: 350,
    suffix: '+',
    label: 'Completed Projects',
    description: 'Turnkey residential complexes, commercial towers, and roadworks.',
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: '%',
    label: 'NCA 1 & Safety Compliance',
    description: 'Strict adherence to building codes with a zero-accident site record.',
  },
  {
    icon: CheckCircle2,
    value: 98,
    suffix: '%',
    label: 'On-Time Project Delivery',
    description: 'Delivering complex masterworks on schedule and within budget.',
  },
];

export default function AboutSectionAnimatedStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry!.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry!.target);
        }
      },
      { threshold: 0.2 }
    );

    const currentElement = sectionRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <section
      className="container mx-auto px-4 md:px-8 py-16 md:py-24 md:px-6 max-w-7xl border-b"
      ref={sectionRef}
    >
      <div className=" mb-16 max-w-3xl space-y-4 ">

        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
          About <span className="text-primary">JENGA</span> LTD
        </h2>

        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg max-w-4xl">
          JENGA LTD is a premier NCA 1 registered construction and engineering firm in Kenya, delivering full-scope building and civil works across East Africa since 2008.    </p>

      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className="group relative isolate overflow-hidden rounded-md border border-border/60 bg-card p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
          >
            {/* Subtle background glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 -z-10 size-36 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20"
            />

            {/* Top accent line */}
            <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-primary via-primary/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

            <CardContent className="flex flex-col gap-6 p-6 sm:p-8">
              <div>
                <h3 className="flex items-baseline gap-1 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                  <AnimatedCounter
                    value={stat.value}
                    isVisible={isVisible}
                    duration={2000}
                  />

                  <span className="text-primary text-4xl">
                    {stat.suffix}
                  </span>
                </h3>
              </div>

              <div className="space-y-2 -mt-2">
                <p className="text-base font-semibold tracking-tight text-foreground ">
                  {stat.label}
                </p>

                <p className="max-w-sm text-xs leading-6 text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="relative mt-16 overflow-hidden rounded-md border border-border/70 bg-gradient-to-br from-card via-card to-primary/5 shadow-sm sm:mt-20">
        <div className="relative grid grid-cols-1 items-center lg:grid-cols-2">
          {/* Left: Image */}
          <div className="relative min-h-[280px] overflow-hidden sm:min-h-[380px] lg:min-h-[520px]">
            <Image
              src="/construction2.webp"
              alt="JENGA LTD construction project"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                <Award className="size-4" />
                Building Kenya&apos;s Tomorrow
              </span>

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Strong Foundations.
                <br />
                Lasting Excellence.
              </h3>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="relative space-y-6 p-6 sm:p-8 lg:p-10 xl:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-primary">
                <Award className="size-4" />
                ENGINEERING EXCELLENCE
              </div>

              <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl xl:text-4xl">
                Engineering Foundations That Stand the Test of Time
              </h3>

              <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                <p>
                  At JENGA LTD, every foundation we lay and every structure we raise
                  reflects our commitment to structural integrity, environmental
                  safety, and superior workmanship.
                </p>

                <p>
                  Equipped with modern, company-owned heavy plant machinery and a
                  skilled team of project engineers, we manage every phase from
                  geotechnical groundwork to turnkey handover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Animated counter component
interface AnimatedCounterProps {
  value: number;
  isVisible: boolean;
  duration: number;
}

function AnimatedCounter({ value, isVisible, duration }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const stepRef = useRef(0);
  const countRef = useRef(0);

  useEffect(() => {
    if (!isVisible) return;

    const steps = 60;
    const increment = value / steps;
    const intervalTime = duration / steps;

    stepRef.current = 0;
    countRef.current = 0;

    const interval = setInterval(() => {
      stepRef.current += 1;
      const newCount = Math.min(Math.round(stepRef.current * increment), value);

      if (countRef.current !== newCount) {
        countRef.current = newCount;
        setCount(newCount);
      }

      if (stepRef.current >= steps || newCount >= value) {
        clearInterval(interval);
        setCount(value);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isVisible, value, duration]);

  return <span className="text-4xl font-bold">{count}</span>;
}

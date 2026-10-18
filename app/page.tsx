import AboutSectionAnimatedStats from "@/components/blocks/marketing/about-sections/animated-stats";
import BannerWithBackgroundCTA from "@/components/blocks/marketing/cta-sections/banner-with-background";
import HeroSectionWithEmailInput from "@/components/blocks/marketing/hero-sections/with-email-input";
import ServicesSection from "@/components/blocks/marketing/services-section";
import ProjectCards from "@/components/blocks/marketing/project-cards";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PortfolioGallery from "@/components/blocks/marketing/gallery/portfolio-gallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">

      <div className="scroll-reveal">
        <HeroSectionWithEmailInput />
      </div>

      <div className="scroll-reveal">
        <AboutSectionAnimatedStats />
      </div>

      {/* Featured Projects Showcase on Homepage */}
      <section className="border-t border-border/60 scroll-reveal">
        <ProjectCards
          limit={3}
          heading="Featured Construction Projects"
          subheading="A selection of landmark commercial towers, residential estates, and civil infrastructure engineered and delivered across Kenya."
        />
        <div className="container mx-auto px-4 pb-16 text-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2.5 rounded-xl border border-primary/40 bg-primary/10 px-7 py-3.5 text-sm font-bold text-primary shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/25 active:scale-95 cursor-pointer"
          >
            Explore Complete Portfolio (8+ Case Studies)
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </section>

      <div className="scroll-reveal">
        <BannerWithBackgroundCTA />
      </div>

      <div className="scroll-reveal">
        <ServicesSection />
      </div>

      <div className="scroll-reveal">
        < PortfolioGallery />
      </div>

    </div>
  );
}

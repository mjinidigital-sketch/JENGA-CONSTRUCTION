"use client";

import { useEffect, useState } from "react";

import { Book, Menu, SeparatorVertical, Sunset, Trees, Zap } from "lucide-react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaXTwitter,
} from "react-icons/fa6";
import { cn } from "cn";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar35Props {
  className?: string;
  logo: {
    url: string;
    src: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu: MenuItem[];
  auth: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const defaultProps: Navbar35Props = {
  logo: {
    url: "/",
    src: "/construction.webp",
    alt: "logo",
    title: "JENGA LTD",
  },
  menu: [
    { title: "Home", url: "/" },
    {
      title: "Services",
      url: "/#services",
      items: [
        {
          title: "Commercial Construction",
          description: "Office towers, business parks & commercial developments",
          icon: <Book className="size-5 shrink-0" />,
          url: "/services/commercial-construction",
        },
        {
          title: "Residential Developments",
          description: "Luxury villas, gated estates & apartment complexes",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/services/residential-developments",
        },
        {
          title: "Civil Works & Infrastructure",
          description: "Roads, bridges, water treatment & heavy earthworks",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/services/civil-works-infrastructure",
        },
        {
          title: "Design & Build (EPC)",
          description: "Turnkey architectural, engineering & construction management",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/services/design-and-build",
        },
      ],
    },
    {
      title: "Projects",
      url: "/projects",
    },

    {
      title: "Contact",
      url: "/contact",
    },
  ],
  auth: {
    login: { title: "Call Us", url: "tel:+254700123456" },
    signup: { title: "Get a Quote", url: "/#contact" },
  },
};

const Navbar35 = ({ className, ...props }: Partial<Navbar35Props>) => {
  const { logo, menu, auth } = {
    ...defaultProps,
    ...props,
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all">
      {/* Top Bar: #2c2c2c background, ultra-smooth CSS Grid collapse */}
      <div
        className={cn(
          "w-full bg-[#2c2c2c] text-neutral-200 text-xs transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] grid overflow-hidden",
          isScrolled
            ? "grid-rows-[0fr] opacity-0 border-b-0 pointer-events-none -translate-y-2"
            : "grid-rows-[1fr] opacity-100 border-b border-white/10 translate-y-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="container max-w-7xl mx-auto px-4 md:px-8 py-2 flex items-center justify-between gap-2 text-[11px] sm:text-xs">
            {/* Left: Mobile call link + email on sm+ */}
            <div className="flex items-center gap-3 sm:gap-6 truncate">
              <a
                href="tel:+254700123456"
                className="flex items-center gap-1.5 hover:text-primary transition-colors duration-200 font-medium shrink-0"
              >
                <FaPhone className="text-primary text-[11px] sm:text-xs shrink-0" />
                <span>+254 700 123 456</span>
              </a>
              <span className="text-white/20 hidden sm:inline">|</span>
              <a
                href="mailto:info@jengaltd.co.ke"
                className="hidden sm:flex items-center gap-1.5 hover:text-primary transition-colors duration-200 truncate"
              >
                <FaEnvelope className="text-primary text-[11px] sm:text-xs shrink-0" />
                <span className="truncate">info@jengaltd.co.ke</span>
              </a>
            </div>

            {/* Right: Address (md+) & Socials */}
            <div className="flex items-center gap-3 sm:gap-6 shrink-0">
              <div className="hidden md:flex items-center gap-1.5 text-neutral-300">
                <FaLocationDot className="text-primary text-xs shrink-0" />
                <span>Westlands, Nairobi, Kenya</span>
              </div>
              <span className="text-white/20 hidden md:inline">|</span>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="text-neutral-300 hover:text-primary transition-colors duration-200 p-0.5"
                >
                  <FaFacebookF className="size-3" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter / X"
                  className="text-neutral-300 hover:text-primary transition-colors duration-200 p-0.5"
                >
                  <FaXTwitter className="size-3" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-neutral-300 hover:text-primary transition-colors duration-200 p-0.5"
                >
                  <FaLinkedinIn className="size-3" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="text-neutral-300 hover:text-primary transition-colors duration-200 p-0.5"
                >
                  <FaInstagram className="size-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar: always fixed at top when scrolling */}
      <section
        className={cn(
          "w-full  bg-background/95 backdrop-blur-md border-b border-border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isScrolled ? "py-3 shadow-md" : "py-4",
          className
        )}
      >
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <nav className="hidden grid-cols-[1fr_auto_1fr] items-center lg:grid">
            <a
              href={logo.url}
              className="flex items-center gap-2 justify-self-start"
            >
              <img
                src={logo.src}
                className="max-h-10"
                alt={logo.alt}
              />

              <span className="flex flex-col text-2xl font-extrabold ">
                {logo.title}
                <hr />

                <span className="text-xs font-normal text-primary">Construction Company</span>
              </span>
            </a>
            <NavigationMenu className="justify-self-center">
              <NavigationMenuList>
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex gap-2 justify-self-end text-xs">
              <Button variant="outline" size="sm" asChild>
                <a href={auth.login.url}>{auth.login.title}</a>
              </Button>
              <Button size="sm" asChild>
                <a href={auth.signup.url}>{auth.signup.title}</a>
              </Button>
            </div>
          </nav>

          <div className="block lg:hidden">
            <div className="flex items-center justify-between">
              <a href={logo.url} className="flex items-center gap-2.5">
                <img
                  src={logo.src}
                  className="max-h-9 w-auto object-contain"
                  alt={logo.alt}
                />
                <span className="flex flex-col text-lg font-extrabold leading-tight tracking-tight">
                  {logo.title}
                  <span className="text-[10px] font-semibold text-primary">Construction Company</span>
                </span>
              </a>
              <Sheet>
                <SheetTrigger render={<Button variant="outline" size="icon" aria-label="Open menu" />}><Menu className="size-4" /></SheetTrigger>
                <SheetContent className="overflow-y-auto max-h-[100dvh] p-6 flex flex-col justify-between">
                  <div>
                    <SheetHeader className="border-b pb-4 text-left">
                      <SheetTitle>
                        <a href={logo.url} className="-ml-4 flex items-center gap-2.5">
                          <img
                            src={logo.src}
                            className="max-h-8 w-auto object-contain"
                            alt={logo.alt}
                          />
                          <span className="flex flex-col text-lg font-extrabold leading-tight tracking-tight">
                            {logo.title}
                            <span className="text-[10px] font-semibold text-primary">Construction Company</span>
                          </span>
                        </a>
                      </SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col py-4">
                      <Accordion type="single" collapsible className="flex w-full flex-col">
                        {menu.map((item) => renderMobileMenuItem(item))}
                      </Accordion>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 pt-4 border-t border-border mt-6">
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" className="w-full" asChild>
                        <a href={auth.login.url}>{auth.login.title}</a>
                      </Button>
                      <Button className="w-full" asChild>
                        <a href={auth.signup.url}>{auth.signup.title}</a>
                      </Button>
                    </div>
                    <a
                      href="tel:+254700123456"
                      className="flex items-center justify-center gap-2 rounded-sm border border-primary/30 bg-primary/10 py-2.5 text-xs font-semibold text-foreground hover:bg-primary/20 transition-colors"
                    >
                      <FaPhone className="text-primary size-3" />
                      <span>Call: +254 700 123 456</span>
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink key={subItem.title} className="w-80" render={<SubMenuLink item={subItem} />}></NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b border-border/50">
        <AccordionTrigger className="text-base py-3 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="pb-3 pt-1">
          <div className="flex flex-col gap-1 pl-1">
            {item.items.map((subItem) => (
              <SubMenuLink key={subItem.title} item={subItem} isMobile />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a
      key={item.title}
      href={item.url}
      className="text-base font-semibold py-3 border-b border-border/50 hover:text-primary transition-colors flex items-center justify-between"
    >
      <span>{item.title}</span>
    </a>
  );
};

const SubMenuLink = ({ item, isMobile }: { item: MenuItem; isMobile?: boolean }) => {
  return (
    <a
      className={cn(
        "flex flex-row gap-3.5 rounded-md p-2.5 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground",
        isMobile ? "w-full min-w-0" : "w-80 min-w-80"
      )}
      href={item.url}
    >
      <div className="text-foreground shrink-0 mt-0.5">{item.icon}</div>
      <div className="min-w-0 flex-1">
        <div className="text-sm font-semibold truncate">{item.title}</div>
        {item.description && (
          <p className="text-xs leading-snug text-muted-foreground mt-1 line-clamp-2">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar35 };

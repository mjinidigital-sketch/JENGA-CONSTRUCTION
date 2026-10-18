"use client";

import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingContactProps {
  phoneNumber?: string;
  phoneDisplay?: string;
  whatsappNumber?: string;
  whatsappMessage?: string;
  className?: string;
}

export function FloatingContact({
  phoneNumber = "+254700123456",
  phoneDisplay = "+254 700 123 456",
  whatsappNumber = "254700123456",
  whatsappMessage = "Hello JENGA Construction, I would like to inquire about your construction and engineering services.",
  className,
}: FloatingContactProps) {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <aside
      aria-label="Quick Contact Actions"
      className={cn(
        "fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5 sm:gap-3",
        className
      )}
    >
      {/* ── CALL BUTTON ───────────────────────────────────────────────── */}
      <div className="relative group">
        <a
          href={`tel:${phoneNumber}`}
          aria-label={`Call JENGA Construction at ${phoneDisplay}`}
          className="relative flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/45 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <Phone className="size-5 transition-transform duration-300 ease-out group-hover:rotate-12 group-hover:scale-110" />
        </a>

        {/* Desktop Tooltip */}
        <span
          role="tooltip"
          className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded-lg bg-neutral-950/95 backdrop-blur-sm border border-neutral-800 px-2.5 py-1 text-[11px] font-semibold text-neutral-100 opacity-0 shadow-xl transition-all duration-200 group-hover:opacity-100 whitespace-nowrap hidden sm:block"
        >
          Call: {phoneDisplay}
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-t-4 border-t-neutral-950" />
        </span>
      </div>

      {/* ── WHATSAPP BUTTON ───────────────────────────────────────────── */}
      <div className="relative group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with JENGA Construction on WhatsApp"
          className="relative flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/35 transition-all duration-300 hover:scale-110 hover:bg-[#20ba59] hover:shadow-xl hover:shadow-[#25D366]/50 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        >
          {/* Subtle Online Availability Pulse Indicator */}
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
          </span>

          {/* Authentic WhatsApp Glyph */}
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="currentColor"
            className="transition-transform duration-300 ease-out group-hover:scale-110"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>

        {/* Desktop Tooltip */}
        <span
          role="tooltip"
          className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded-lg bg-neutral-950/95 backdrop-blur-sm border border-neutral-800 px-2.5 py-1 text-[11px] font-semibold text-neutral-100 opacity-0 shadow-xl transition-all duration-200 group-hover:opacity-100 whitespace-nowrap hidden sm:block"
        >
          Chat on WhatsApp
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-t-4 border-t-neutral-950" />
        </span>
      </div>
    </aside>
  );
}

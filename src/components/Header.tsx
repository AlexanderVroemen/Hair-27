"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { appointmentMailto, siteData } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), {
      threshold: 0
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div ref={sentinelRef} className="absolute top-0 h-px w-px" aria-hidden="true" />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-[var(--line)] bg-[rgb(248_244_238_/_0.9)] shadow-[0_18px_50px_rgb(43_39_35_/_0.08)] backdrop-blur" : "bg-transparent"
        }`}
      >
        <nav className="container-shell flex h-[72px] items-center justify-between gap-4" aria-label="Hoofdnavigatie">
          <Link href="/" className="focus-ring flex shrink-0 items-center" aria-label="HAIR 27 home">
            <Image
              src={siteData.logo.dark.src}
              alt={siteData.logo.dark.alt}
              width={190}
              height={42}
              priority
              className="h-auto w-[132px] sm:w-[154px]"
            />
          </Link>

          <div className="hidden items-center gap-5 lg:flex">
            {siteData.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-full px-1 py-2 text-[0.85rem] font-medium text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden shrink-0 lg:block">
            <a href={appointmentMailto()} className="button-base button-primary focus-ring">
              Afspraak maken
            </a>
          </div>

          <button
            type="button"
            className="focus-ring inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-[var(--line)] bg-[rgb(255_250_243_/_0.74)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} strokeWidth={1.7} /> : <Menu size={22} strokeWidth={1.7} />}
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-[var(--surface)] px-6 pb-8 pt-24 transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col justify-between">
          <div className="grid gap-2">
            {siteData.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-md border-b border-[var(--line)] py-4 text-2xl"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="grid gap-3">
            <a href={appointmentMailto()} className="button-base button-primary focus-ring w-full">
              Afspraak maken
            </a>
            <a href={siteData.business.phoneHref} className="button-base button-outline focus-ring w-full">
              Bel {siteData.business.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

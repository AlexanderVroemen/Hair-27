import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { appointmentMailto, siteData } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] overflow-hidden">
      <Image
        src={siteData.images.hero.src}
        alt={siteData.images.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(31_28_25_/_0.72),rgb(31_28_25_/_0.38)_48%,rgb(31_28_25_/_0.18))]" />
      <div className="relative z-10 flex min-h-[100dvh] items-center pb-14 pt-24">
        <div className="container-shell">
          <div className="max-w-2xl text-[var(--surface)]">
            <p className="mb-5 max-w-fit rounded-full border border-[rgb(255_250_243_/_0.38)] bg-[rgb(255_250_243_/_0.12)] px-4 py-2 text-sm font-semibold backdrop-blur">
              Kapsalon voor dames, heren en kinderen in Beegden.
            </p>
            <h1 className="heading max-w-3xl text-5xl sm:text-6xl lg:text-7xl">
              Jouw moment. Jouw haar. Jouw stijl.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[rgb(255_250_243_/_0.86)]">
              Persoonlijke aandacht, eerlijk advies en een kapsel dat echt bij je past.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={appointmentMailto()} variant="secondary">
                Maak een afspraak
                <ArrowRight size={18} strokeWidth={1.7} />
              </ButtonLink>
              <ButtonLink href="#behandelingen" variant="secondary">
                Bekijk behandelingen
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 z-10 w-[min(100%-2rem,1180px)] -translate-x-1/2">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(255_250_243_/_0.34)] bg-[rgb(31_28_25_/_0.34)] px-4 py-2 text-sm font-medium text-[var(--surface)] backdrop-blur">
          <Star size={16} fill="currentColor" strokeWidth={1.5} />
          {siteData.reviewSummary.score} uit 5 op basis van {siteData.reviewSummary.count} {siteData.reviewSummary.source}
        </div>
      </div>
    </section>
  );
}

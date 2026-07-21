import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { siteData } from "@/data/site";

export function Intro() {
  return (
    <section id="over-hair-27" className="section-pad">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div className="relative mx-auto max-w-[460px]">
            <div className="absolute -left-5 -top-5 h-28 w-28 rounded-md border border-[var(--line)]" aria-hidden="true" />
            <Image
              src={siteData.images.intro.src}
              alt={siteData.images.intro.alt}
              width={siteData.images.intro.width}
              height={siteData.images.intro.height}
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="relative aspect-[4/5] w-full rounded-md object-cover shadow-[0_30px_80px_rgb(74_63_52_/_0.18)]"
            />
          </div>
        </Reveal>
        <Reveal delay={110}>
          <div className="max-w-2xl">
            <h2 className="heading text-4xl sm:text-5xl">Welkom bij HAIR 27</h2>
            <div className="mt-6 space-y-5 body-copy">
              <p>
                Mijn naam is Saray Coolen. Sinds februari 2016 ontvang ik je met trots in mijn eigen salon in Beegden.
              </p>
              <p>
                Bij HAIR 27 draait het om haar dat bij je past en om een ontspannen moment voor jezelf. Je krijgt persoonlijke aandacht, eerlijk advies en kwaliteit zonder poespas.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {siteData.values.map((value) => (
                <div key={value} className="rounded-md border border-[var(--line)] bg-[rgb(255_250_243_/_0.62)] p-5 text-sm font-semibold leading-6">
                  {value}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

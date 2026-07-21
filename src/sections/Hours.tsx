import Image from "next/image";
import { OpeningHours } from "@/components/OpeningHours";
import { Reveal } from "@/components/Reveal";
import { siteData } from "@/data/site";

export function Hours() {
  return (
    <section id="openingstijden" className="section-pad bg-[rgb(238_228_218_/_0.5)]">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div>
            <h2 className="heading text-4xl sm:text-5xl">Openingstijden</h2>
            <p className="mt-5 body-copy">
              De salon werkt uitsluitend op afspraak. De huidige dag wordt gemarkeerd op basis van Europe/Amsterdam.
            </p>
            <div className="mt-8">
              <OpeningHours />
            </div>
          </div>
        </Reveal>
        <Reveal delay={110}>
          <Image
            src="/images/optimized/openingstijden-1400.webp"
            alt="Sfeerfoto van de HAIR 27 salon bij de openingstijden"
            width={1400}
            height={933}
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="aspect-[4/3] rounded-md object-cover shadow-[0_30px_80px_rgb(74_63_52_/_0.14)]"
          />
        </Reveal>
      </div>
    </section>
  );
}

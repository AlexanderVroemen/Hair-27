import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { siteData } from "@/data/site";

export function Products() {
  return (
    <section id="producten" className="section-pad">
      <div className="container-shell grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <Reveal>
          <div>
            <h2 className="heading text-4xl sm:text-5xl">Producten in de salon</h2>
            <p className="mt-5 body-copy">
              HAIR 27 werkt met Schwarzkopf Professional voor kleuren, verzorgen en stylen. Voor heren gebruikt Saray STMNT Grooming.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-[var(--line)] p-5">
                <h3 className="font-semibold">Schwarzkopf Professional</h3>
                <p className="mt-3 body-copy text-sm">Voor kleurbehandelingen, verzorging en styling met betrouwbare salonkwaliteit.</p>
              </div>
              <div className="rounded-md border border-[var(--line)] p-5">
                <h3 className="font-semibold">STMNT Grooming</h3>
                <p className="mt-3 body-copy text-sm">Voor herenstyling en verzorging met een moderne, verzorgde finish.</p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={110}>
          <div className="grid grid-cols-[0.82fr_1fr] items-end gap-4">
            <Image src={siteData.images.products.src} alt={siteData.images.products.alt} width={siteData.images.products.width} height={siteData.images.products.height} sizes="(min-width: 1024px) 28vw, 48vw" className="aspect-[3/4] rounded-md object-cover" />
            <Image src={siteData.images.stmnt.src} alt={siteData.images.stmnt.alt} width={siteData.images.stmnt.width} height={siteData.images.stmnt.height} sizes="(min-width: 1024px) 32vw, 48vw" className="aspect-[4/5] rounded-md object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

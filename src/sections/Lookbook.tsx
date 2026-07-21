import { LookbookLightbox } from "@/components/LookbookLightbox";
import { Reveal } from "@/components/Reveal";
import { siteData } from "@/data/site";

export function Lookbook() {
  return (
    <section id="lookbook" className="section-pad">
      <div className="container-shell">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="heading text-4xl sm:text-5xl">Lookbook</h2>
            <p className="mt-5 body-copy">
              Een rustige selectie met bestaande beelden van HAIR 27. Extra filters worden pas zinvol bij meer lookbookfoto's.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100} className="mt-12">
          <LookbookLightbox images={[...siteData.lookbook]} />
        </Reveal>
      </div>
    </section>
  );
}

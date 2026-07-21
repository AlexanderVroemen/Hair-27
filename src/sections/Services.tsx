import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteData } from "@/data/site";

export function Services() {
  return (
    <section id="behandelingen" className="section-pad bg-[rgb(238_228_218_/_0.5)]">
      <div className="container-shell">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="heading text-4xl sm:text-5xl">Behandelingen met aandacht</h2>
            <p className="mt-5 body-copy">
              Van knippen tot kleur en styling: Saray kijkt naar je wens, je haar en wat thuis prettig werkt.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-[1.05fr_0.95fr_1.05fr]">
          {siteData.services.map((service, index) => (
            <Reveal key={service.title} delay={index * 55}>
              <article className={`flex h-full flex-col justify-between rounded-md border border-[var(--line)] bg-[rgb(255_250_243_/_0.72)] p-6 transition-transform duration-300 hover:-translate-y-1 ${index === 3 ? "lg:row-span-2 lg:min-h-64" : ""}`}>
                <div>
                  <h3 className="heading text-3xl">{service.title}</h3>
                  <p className="mt-4 body-copy text-sm">{service.description}</p>
                </div>
                <p className="mt-8 text-sm font-semibold text-[var(--accent-dark)]">{service.from ?? "Prijs op aanvraag"}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Link href="/prijzen" className="button-base button-primary focus-ring mt-10">
            Bekijk volledige prijslijst
            <ArrowRight size={18} strokeWidth={1.7} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

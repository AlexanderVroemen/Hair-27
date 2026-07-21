import { Mail, MapPin, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { appointmentMailto, siteData } from "@/data/site";

export function Appointment() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <div className="rounded-md bg-[var(--accent-dark)] p-8 text-[var(--surface)] sm:p-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-10">
            <div>
              <h2 className="heading text-4xl sm:text-5xl">Klaar voor een kapsel dat bij je past?</h2>
              <p className="mt-5 max-w-xl leading-8 text-[rgb(255_250_243_/_0.82)]">
                Neem contact op met Saray en plan jouw afspraak bij HAIR 27.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <ButtonLink href={siteData.business.phoneHref} variant="secondary">
                <Phone size={18} strokeWidth={1.7} />
                Bel {siteData.business.phoneDisplay}
              </ButtonLink>
              <ButtonLink href={appointmentMailto()} variant="secondary">
                <Mail size={18} strokeWidth={1.7} />
                Stuur e-mail
              </ButtonLink>
              <ButtonLink href={siteData.business.mapsUrl} variant="outline" target="_blank" rel="noreferrer" className="border-[rgb(255_250_243_/_0.32)] text-[var(--surface)] hover:bg-[rgb(255_250_243_/_0.08)]">
                <MapPin size={18} strokeWidth={1.7} />
                Bekijk route
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

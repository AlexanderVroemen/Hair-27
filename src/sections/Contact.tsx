import Image from "next/image";
import type { ReactNode } from "react";
import { Camera, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { siteData } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-[rgb(238_228_218_/_0.42)]">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.88fr_1.12fr]">
        <Reveal>
          <div>
            <h2 className="heading text-4xl sm:text-5xl">Contact en locatie</h2>
            <address className="mt-7 grid gap-4 not-italic">
              <ContactLine icon={<MapPin size={20} strokeWidth={1.7} />} text={`${siteData.business.street}, ${siteData.business.postalCode} ${siteData.business.city}`} href={siteData.business.mapsUrl} external />
              <ContactLine icon={<Phone size={20} strokeWidth={1.7} />} text={siteData.business.phoneDisplay} href={siteData.business.phoneHref} />
              <ContactLine icon={<Mail size={20} strokeWidth={1.7} />} text={siteData.business.email} href={`mailto:${siteData.business.email}`} />
            </address>
            <div className="mt-7 flex gap-3">
              <a href={siteData.social.instagram} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)]" aria-label="Instagram">
                <Camera size={20} strokeWidth={1.7} />
              </a>
              <a href={siteData.social.facebook} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)]" aria-label="Facebook">
                <MessageCircle size={20} strokeWidth={1.7} />
              </a>
            </div>
            <div className="mt-8 overflow-hidden rounded-md">
              <Image src={siteData.images.contact.src} alt={siteData.images.contact.alt} width={siteData.images.contact.width} height={siteData.images.contact.height} sizes="(min-width: 1024px) 36vw, 100vw" className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid gap-6">
            <div className="rounded-md border border-[var(--line)] bg-[rgb(255_250_243_/_0.72)] p-6">
              <h3 className="heading text-3xl">Stuur een aanvraag</h3>
              <p className="mt-3 body-copy text-sm">
                Het formulier opent je mailprogramma. Tot er een backend is gekoppeld, worden berichten niet op de website verwerkt.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
            <div className="rounded-md border border-dashed border-[var(--accent)] bg-[rgb(255_250_243_/_0.48)] p-6">
              <h3 className="font-semibold">Kaartplaceholder</h3>
              <p className="mt-2 body-copy text-sm">
                Privacyvriendelijke placeholder. Vervang dit door een kaartoplossing na keuze voor cookies, Google Maps of een alternatief.
              </p>
              <a href={siteData.business.mapsUrl} target="_blank" rel="noreferrer" className="button-base button-outline focus-ring mt-5">
                Bekijk route in Google Maps
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactLine({
  icon,
  text,
  href,
  external = false
}: {
  icon: ReactNode;
  text: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="focus-ring flex items-center gap-3 rounded-md text-[var(--ink)] underline-offset-4 hover:underline">
      <span className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-[var(--surface)]">{icon}</span>
      <span>{text}</span>
    </a>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Camera, MessageCircle } from "lucide-react";
import { siteData } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  const shortHours = "Wo-vr op afspraak, za 09:00-16:00";

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--accent-dark)] py-12 text-[var(--surface)]">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
        <div className="space-y-5">
          <Image src={siteData.logo.light.src} alt={siteData.logo.light.alt} width={240} height={54} className="h-auto w-44" />
          <p className="max-w-sm text-sm leading-7 text-[rgb(255_250_243_/_0.76)]">
            Kapsalon voor dames, heren en kinderen in Beegden. Persoonlijke aandacht, eerlijk advies en kwaliteit in een ontspannen sfeer.
          </p>
        </div>

        <address className="not-italic text-sm leading-7 text-[rgb(255_250_243_/_0.82)]">
          <strong className="block text-[var(--surface)]">{siteData.business.name}</strong>
          {siteData.business.street}
          <br />
          {siteData.business.postalCode} {siteData.business.city}
          <br />
          <a className="focus-ring rounded-sm underline-offset-4 hover:underline" href={siteData.business.phoneHref}>
            {siteData.business.phoneDisplay}
          </a>
          <br />
          <a className="focus-ring rounded-sm underline-offset-4 hover:underline" href={`mailto:${siteData.business.email}`}>
            {siteData.business.email}
          </a>
          <span className="mt-3 block">{shortHours}</span>
        </address>

        <div className="grid gap-5 text-sm">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {siteData.nav.map((item) => (
              <Link key={item.href} href={item.href} className="focus-ring rounded-sm text-[rgb(255_250_243_/_0.82)] underline-offset-4 hover:underline">
                {item.label}
              </Link>
            ))}
            <Link href="/privacy" className="focus-ring rounded-sm text-[rgb(255_250_243_/_0.82)] underline-offset-4 hover:underline">
              Privacyverklaring
            </Link>
          </div>
          <div className="flex gap-3">
            <a className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[rgb(255_250_243_/_0.22)]" href={siteData.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Camera size={19} strokeWidth={1.7} />
            </a>
            <a className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[rgb(255_250_243_/_0.22)]" href={siteData.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <MessageCircle size={19} strokeWidth={1.7} />
            </a>
          </div>
          <p className="text-xs text-[rgb(255_250_243_/_0.58)]">© {year} HAIR 27. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}

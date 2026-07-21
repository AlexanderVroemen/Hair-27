import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ButtonLink } from "@/components/ButtonLink";
import { appointmentMailto, siteData } from "@/data/site";

export const metadata: Metadata = {
  title: "Prijslijst",
  description:
    "Bekijk de prijslijst van HAIR 27 in Beegden voor dames, heren, kleuren, styling en wenkbrauwen.",
  alternates: {
    canonical: "/prijzen"
  }
};

export default function PricesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-28">
        <section className="section-pad pt-10">
          <div className="container-shell">
            <Link href="/#behandelingen" className="focus-ring mb-8 inline-flex items-center gap-2 rounded-full text-sm font-semibold text-[var(--accent-dark)]">
              <ArrowLeft size={17} strokeWidth={1.7} />
              Terug naar behandelingen
            </Link>
            <div className="max-w-2xl">
              <h1 className="heading text-5xl sm:text-6xl">Prijslijst</h1>
              <p className="mt-5 body-copy">
                Prijzen zijn overgenomen van de bestaande HAIR 27-website. Laat de definitieve behandeling en actuele prijs altijd bevestigen bij het maken van je afspraak.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {siteData.prices.map((group) => (
                <section key={group.category} className="rounded-md border border-[var(--line)] bg-[rgb(255_250_243_/_0.72)] p-6">
                  <h2 className="heading text-4xl">{group.category}</h2>
                  <div className="mt-6 grid gap-3">
                    {group.items.map((item) => (
                      <div key={`${group.category}-${item.name}`} className="grid grid-cols-[1fr_auto] gap-4 rounded-md bg-[rgb(238_228_218_/_0.46)] px-4 py-3 text-sm">
                        <span>{item.name}</span>
                        <strong className="text-right font-semibold">{item.price}</strong>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={appointmentMailto()}>
                Afspraak maken
              </ButtonLink>
              <ButtonLink href={siteData.business.phoneHref} variant="outline">
                <Phone size={18} strokeWidth={1.7} />
                Bel {siteData.business.phoneDisplay}
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

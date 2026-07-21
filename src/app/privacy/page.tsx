import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteData } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: "Privacyverklaring voor de website van HAIR 27 in Beegden.",
  alternates: {
    canonical: "/privacy"
  }
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-28">
        <section className="section-pad pt-10">
          <div className="container-shell max-w-3xl">
            <Link href="/" className="focus-ring mb-8 inline-flex items-center gap-2 rounded-full text-sm font-semibold text-[var(--accent-dark)]">
              <ArrowLeft size={17} strokeWidth={1.7} />
              Terug naar home
            </Link>
            <h1 className="heading text-5xl sm:text-6xl">Privacyverklaring</h1>
            <div className="mt-8 space-y-6 body-copy">
              <p>
                Deze concepttekst is bedoeld als nette basis voor HAIR 27. Laat de definitieve privacyverklaring controleren door de eigenaar of juridisch adviseur voordat de website live gaat.
              </p>
              <h2 className="heading pt-4 text-3xl text-[var(--ink)]">Welke gegevens</h2>
              <p>
                Wanneer je contact opneemt, gebruik je gegevens zoals naam, e-mailadres, telefoonnummer en je bericht om je vraag of afspraakverzoek te behandelen.
              </p>
              <h2 className="heading pt-4 text-3xl text-[var(--ink)]">Contactformulier</h2>
              <p>
                Het formulier op deze website opent je eigen mailprogramma. Zonder gekoppelde backend worden formuliergegevens niet door de website opgeslagen.
              </p>
              <h2 className="heading pt-4 text-3xl text-[var(--ink)]">Bewaartermijn</h2>
              <p>
                HAIR 27 bewaart contactgegevens niet langer dan nodig is voor het beantwoorden van je vraag, het plannen van afspraken en normale bedrijfsadministratie.
              </p>
              <h2 className="heading pt-4 text-3xl text-[var(--ink)]">Contact</h2>
              <p>
                Voor vragen over privacy kun je contact opnemen via {siteData.business.email} of {siteData.business.phoneDisplay}.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

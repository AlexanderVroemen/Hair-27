import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="grid min-h-[70dvh] place-items-center px-4 pt-24">
        <div className="max-w-xl text-center">
          <h1 className="heading text-5xl">Pagina niet gevonden</h1>
          <p className="mt-5 body-copy">
            Deze pagina bestaat niet of is verplaatst. Ga terug naar de homepage om een afspraak te maken of contact op te nemen.
          </p>
          <Link href="/" className="button-base button-primary focus-ring mt-8">
            Naar homepage
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

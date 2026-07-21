import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Appointment } from "@/sections/Appointment";
import { Contact } from "@/sections/Contact";
import { Hero } from "@/sections/Hero";
import { Hours } from "@/sections/Hours";
import { Intro } from "@/sections/Intro";
import { Lookbook } from "@/sections/Lookbook";
import { Products } from "@/sections/Products";
import { Reviews } from "@/sections/Reviews";
import { Services } from "@/sections/Services";
import { siteData } from "@/data/site";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: siteData.business.name,
    url: siteData.business.website,
    image: `${siteData.business.website}images/optimized/homepage-1600.webp`,
    telephone: siteData.business.phoneSchema,
    email: siteData.business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteData.business.street,
      postalCode: siteData.business.postalCode,
      addressLocality: siteData.business.city,
      addressCountry: "NL"
    },
    openingHoursSpecification: siteData.openingHours
      .filter((item) => item.hours !== "gesloten")
      .map((item) => {
        const [opens, closes] = item.hours.split("-");
        return {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: item.schemaDay,
          opens,
          closes
        };
      }),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteData.reviewSummary.score.replace(",", "."),
      reviewCount: siteData.reviewSummary.count
    },
    sameAs: [siteData.social.instagram, siteData.social.facebook]
  };

  return (
    <>
      <Header />
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <Hero />
        <Intro />
        <Services />
        <Lookbook />
        <Reviews />
        <Products />
        <Hours />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

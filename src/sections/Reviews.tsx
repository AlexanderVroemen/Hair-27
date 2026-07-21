import { Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteData } from "@/data/site";

export function Reviews() {
  return (
    <section className="section-pad bg-[rgb(238_228_218_/_0.42)]">
      <div className="container-shell">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="heading text-4xl sm:text-5xl">Wat klanten zeggen</h2>
            <p className="mt-5 body-copy">
              Deze reacties zijn gebaseerd op Google-reviews en zijn compact weergegeven voor leesbaarheid.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {siteData.reviews.map((review, index) => (
            <Reveal key={review.name} delay={index * 80}>
              <article className="flex h-full flex-col justify-between rounded-md border border-[var(--line)] bg-[rgb(255_250_243_/_0.7)] p-6">
                <div>
                  <div className="mb-5 flex gap-1 text-[var(--accent)]" aria-label="Google-review">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} size={16} fill="currentColor" strokeWidth={1.4} />
                    ))}
                  </div>
                  <p className="body-copy text-sm">“{review.text}”</p>
                </div>
                <p className="mt-6 text-sm font-semibold">{review.name}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

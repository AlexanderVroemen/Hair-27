"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import type { ImageAsset } from "@/data/site";

export function LookbookLightbox({ images }: { images: ImageAsset[] }) {
  const [active, setActive] = useState<ImageAsset | null>(null);

  useEffect(() => {
    function close(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-[1.25fr_0.85fr] md:items-start">
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className={`focus-ring group overflow-hidden rounded-md bg-[var(--surface-muted)] text-left ${
              index === 0 ? "md:row-span-2" : ""
            }`}
            onClick={() => setActive(image)}
            aria-label={`${image.alt} vergroten`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes={index === 0 ? "(min-width: 768px) 58vw, 100vw" : "(min-width: 768px) 34vw, 100vw"}
              className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.035] ${
                index === 0 ? "aspect-[4/5]" : "aspect-[4/3]"
              }`}
            />
          </button>
        ))}
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Lookbook afbeelding"
          className="fixed inset-0 z-[70] grid place-items-center bg-[rgb(31_28_25_/_0.86)] p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="focus-ring absolute right-5 top-5 inline-flex min-h-12 min-w-12 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--ink)]"
            onClick={() => setActive(null)}
            aria-label="Afbeelding sluiten"
          >
            <X size={22} strokeWidth={1.7} />
          </button>
          <Image
            src={active.src}
            alt={active.alt}
            width={active.width}
            height={active.height}
            sizes="100vw"
            className="max-h-[84dvh] w-auto rounded-md object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  );
}

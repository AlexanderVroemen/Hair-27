"use client";

import { useEffect, useState } from "react";
import { siteData } from "@/data/site";

const dayMap = new Map([
  ["maandag", "Maandag"],
  ["dinsdag", "Dinsdag"],
  ["woensdag", "Woensdag"],
  ["donderdag", "Donderdag"],
  ["vrijdag", "Vrijdag"],
  ["zaterdag", "Zaterdag"],
  ["zondag", "Zondag"]
]);

export function OpeningHours() {
  const [today, setToday] = useState<string | null>(null);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("nl-NL", {
      weekday: "long",
      timeZone: siteData.business.timezone
    });
    setToday(dayMap.get(formatter.format(new Date()).toLowerCase()) ?? null);
  }, []);

  return (
    <div className="rounded-md border border-[var(--line)] bg-[rgb(255_250_243_/_0.76)] p-3">
      <p className="mb-4 px-2 pt-1 text-sm font-semibold">Wij werken uitsluitend op afspraak.</p>
      <dl className="grid gap-1">
        {siteData.openingHours.map((item) => {
          const active = item.day === today;
          return (
            <div
              key={item.day}
              className={`grid grid-cols-[1fr_auto] gap-4 rounded-md px-3 py-3 text-sm ${
                active ? "bg-[var(--accent-dark)] text-[var(--surface)]" : "text-[var(--ink)]"
              }`}
            >
              <dt className="font-semibold">{item.day}</dt>
              <dd className={active ? "text-[var(--surface)]" : "text-[var(--ink-soft)]"}>{item.hours}</dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}

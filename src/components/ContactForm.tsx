"use client";

import { cloneElement, useMemo, useState } from "react";
import { Send } from "lucide-react";
import { siteData } from "@/data/site";

type FormState = {
  name: string;
  email: string;
  phone: string;
  treatment: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  treatment: "",
  message: "",
  website: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Afspraak aanvraag van ${form.name || "websitebezoeker"}`);
    const body = encodeURIComponent(
      `Naam: ${form.name}\nE-mail: ${form.email}\nTelefoon: ${form.phone}\nGewenste behandeling: ${form.treatment}\n\nBericht:\n${form.message}`
    );
    return `mailto:${siteData.business.email}?subject=${subject}&body=${body}`;
  }, [form]);

  function update(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("idle");
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (form.website) {
      setStatus("success");
      return;
    }

    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) nextErrors.name = "Vul je naam in.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Vul een geldig e-mailadres in.";
    if (form.message.trim().length < 8) nextErrors.message = "Schrijf kort waar je naar zoekt.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      return;
    }

    window.location.href = mailto;
    setStatus("success");
  }

  return (
    <form onSubmit={submit} className="grid gap-4" noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" autoComplete="off" tabIndex={-1} value={form.website} onChange={(event) => update("website", event.target.value)} />
      </div>

      <Field label="Naam" id="name" error={errors.name}>
        <input id="name" name="name" autoComplete="name" required value={form.name} onChange={(event) => update("name", event.target.value)} />
      </Field>
      <Field label="E-mail" id="email" error={errors.email}>
        <input id="email" name="email" type="email" autoComplete="email" required value={form.email} onChange={(event) => update("email", event.target.value)} />
      </Field>
      <Field label="Telefoonnummer" id="phone">
        <input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={(event) => update("phone", event.target.value)} />
      </Field>
      <Field label="Gewenste behandeling" id="treatment">
        <select id="treatment" name="treatment" value={form.treatment} onChange={(event) => update("treatment", event.target.value)}>
          <option value="">Maak een keuze</option>
          {siteData.services.map((service) => (
            <option key={service.title} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Bericht" id="message" error={errors.message}>
        <textarea id="message" name="message" required rows={5} value={form.message} onChange={(event) => update("message", event.target.value)} />
      </Field>

      <button type="submit" className="button-base button-primary focus-ring w-full sm:w-fit">
        <Send size={18} strokeWidth={1.7} />
        Verstuur aanvraag
      </button>

      <div aria-live="polite" className="min-h-6 text-sm">
        {status === "success" ? (
          <p className="text-[var(--accent-dark)]">Je aanvraag wordt geopend in je mailprogramma. Zonder formulierbackend wordt er niets op de website opgeslagen.</p>
        ) : null}
        {status === "error" ? <p className="text-[#7d2d20]">Controleer de gemarkeerde velden.</p> : null}
      </div>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  children
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactElement<{ className?: string; "aria-invalid"?: boolean; "aria-describedby"?: string }>;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-[var(--ink)]">
        {label}
      </label>
      {cloneElement(children, {
        className:
          "focus-ring min-h-12 rounded-md border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-[var(--ink)] shadow-[inset_0_1px_0_rgb(255_255_255_/_0.65)]",
        "aria-invalid": Boolean(error),
        "aria-describedby": error ? `${id}-error` : undefined
      })}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-[#7d2d20]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

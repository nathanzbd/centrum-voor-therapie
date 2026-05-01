"use client";

import { useState } from "react";
import { Send, Check, AlertCircle } from "lucide-react";

type Errors = Record<string, string>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrors({});

    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      naam: fd.get("naam"),
      telefoon: fd.get("telefoon"),
      email: fd.get("email"),
      bericht: fd.get("bericht"),
      privacy: fd.get("privacy") === "on",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        if (json.errors) {
          setErrors(json.errors);
          setStatus("error");
          return;
        }
        setErrors({ _general: json.error || "Versturen mislukt." });
        setStatus("error");
        return;
      }

      setStatus("ok");
      form.reset();
    } catch {
      setErrors({ _general: "Geen verbinding. Mail direct naar centrumvoortherapie@gmail.com." });
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="bg-cream rounded-3xl p-12 border border-line/60 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-gold-deep text-white flex items-center justify-center mb-5">
          <Check size={28} />
        </div>
        <h3 className="text-2xl mb-3">Bedankt voor je bericht</h3>
        <p className="text-ink-soft">
          Ik neem zo snel mogelijk contact met je op — meestal binnen 48 uur.
        </p>
      </div>
    );
  }

  const inputClass = (key: string) =>
    `w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-1 transition ${
      errors[key]
        ? "border-red-400 focus:border-red-500 focus:ring-red-300"
        : "border-line focus:border-gold-deep focus:ring-gold-deep"
    }`;

  return (
    <form onSubmit={onSubmit} noValidate className="bg-cream rounded-3xl p-8 md:p-10 border border-line/60 space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-ink-soft mb-2">
            Naam <span className="text-gold-deep">*</span>
          </label>
          <input
            name="naam"
            required
            autoComplete="name"
            className={inputClass("naam")}
          />
          {errors.naam && (
            <p className="text-xs text-red-600 mt-1.5">{errors.naam}</p>
          )}
        </div>
        <div>
          <label className="block text-sm text-ink-soft mb-2">Telefoon</label>
          <input
            name="telefoon"
            type="tel"
            autoComplete="tel"
            className={inputClass("telefoon")}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-ink-soft mb-2">
          E-mail <span className="text-gold-deep">*</span>
        </label>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass("email")}
        />
        {errors.email && (
          <p className="text-xs text-red-600 mt-1.5">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm text-ink-soft mb-2">
          Bericht <span className="text-gold-deep">*</span>
        </label>
        <textarea
          name="bericht"
          required
          minLength={5}
          rows={6}
          className={`${inputClass("bericht")} resize-none`}
          placeholder="Vertel kort waar je bij geholpen wilt worden..."
        />
        {errors.bericht && (
          <p className="text-xs text-red-600 mt-1.5">{errors.bericht}</p>
        )}
      </div>

      <label className="flex items-start gap-3 text-sm text-ink-soft cursor-pointer">
        <input
          type="checkbox"
          name="privacy"
          required
          className="mt-1 accent-gold-deep"
        />
        <span>
          Ik heb de{" "}
          <a href="/privacy" className="text-gold-deep underline">
            privacyverklaring
          </a>{" "}
          gelezen en ga akkoord met de algemene voorwaarden.{" "}
          <span className="text-gold-deep">*</span>
        </span>
      </label>
      {errors.privacy && (
        <p className="text-xs text-red-600 -mt-3">{errors.privacy}</p>
      )}

      {errors._general && (
        <div className="flex gap-2 text-sm text-red-700 bg-red-50 rounded-xl p-3">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          {errors._general}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary disabled:opacity-50"
      >
        <Send size={16} />
        {status === "loading" ? "Versturen..." : "Verstuur bericht"}
      </button>

      <p className="text-xs text-ink-mute">
        Velden met <span className="text-gold-deep">*</span> zijn verplicht.
      </p>
    </form>
  );
}

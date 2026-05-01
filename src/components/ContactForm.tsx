"use client";

import { useState } from "react";
import { Send, Check, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (!data.privacy) {
      setStatus("error");
      setError("Vink het privacy-vinkje aan om te versturen.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Versturen mislukt");
      setStatus("ok");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(
        "Er ging iets mis. Mail me direct op centrumvoortherapie@gmail.com."
      );
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

  return (
    <form onSubmit={onSubmit} className="bg-cream rounded-3xl p-8 md:p-10 border border-line/60 space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-ink-soft mb-2">Naam</label>
          <input
            name="naam"
            required
            className="w-full px-4 py-3 rounded-xl border border-line bg-white focus:border-gold-deep focus:outline-none focus:ring-1 focus:ring-gold-deep transition"
          />
        </div>
        <div>
          <label className="block text-sm text-ink-soft mb-2">Telefoon</label>
          <input
            name="telefoon"
            type="tel"
            className="w-full px-4 py-3 rounded-xl border border-line bg-white focus:border-gold-deep focus:outline-none focus:ring-1 focus:ring-gold-deep transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-ink-soft mb-2">E-mail</label>
        <input
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-xl border border-line bg-white focus:border-gold-deep focus:outline-none focus:ring-1 focus:ring-gold-deep transition"
        />
      </div>

      <div>
        <label className="block text-sm text-ink-soft mb-2">Bericht</label>
        <textarea
          name="bericht"
          required
          rows={6}
          className="w-full px-4 py-3 rounded-xl border border-line bg-white focus:border-gold-deep focus:outline-none focus:ring-1 focus:ring-gold-deep transition resize-none"
          placeholder="Vertel kort waar je bij geholpen wilt worden..."
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-ink-soft cursor-pointer">
        <input
          type="checkbox"
          name="privacy"
          className="mt-1 accent-gold-deep"
        />
        <span>
          Ik heb de{" "}
          <a href="/privacy" className="text-gold-deep underline">
            privacyverklaring
          </a>{" "}
          gelezen en ga akkoord met de algemene voorwaarden.
        </span>
      </label>

      {status === "error" && (
        <div className="flex gap-2 text-sm text-red-700 bg-red-50 rounded-xl p-3">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          {error}
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
    </form>
  );
}

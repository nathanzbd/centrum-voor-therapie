import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const naam = String(body.naam || "").trim();
    const telefoon = String(body.telefoon || "").trim();
    const email = String(body.email || "").trim();
    const bericht = String(body.bericht || "").trim();
    const privacy = body.privacy === true || body.privacy === "on";

    const errors: Record<string, string> = {};
    if (!naam) errors.naam = "Vul je naam in.";
    if (!email) errors.email = "Vul je e-mailadres in.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = "Vul een geldig e-mailadres in.";
    if (!bericht || bericht.length < 5)
      errors.bericht = "Schrijf een kort bericht (minimaal 5 tekens).";
    if (!privacy) errors.privacy = "Bevestig dat je de privacyverklaring hebt gelezen.";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO || "centrumvoortherapie@gmail.com";
    const from = process.env.CONTACT_FROM || "Centrum voor Therapie <onboarding@resend.dev>";

    if (!apiKey) {
      console.warn("[contact] RESEND_API_KEY missing — skipping send.", {
        naam, telefoon, email, bericht,
      });
      return NextResponse.json({ ok: true, skipped: true });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Contactformulier — ${naam}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:24px;background:#faf3eb;border-radius:16px">
          <h2 style="color:#8b6c4f;margin:0 0 16px">Nieuw bericht via centrumvoortherapie.nl</h2>
          <p><strong>Naam:</strong> ${escapeHtml(naam)}</p>
          <p><strong>E-mail:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          ${telefoon ? `<p><strong>Telefoon:</strong> ${escapeHtml(telefoon)}</p>` : ""}
          <p><strong>Bericht:</strong></p>
          <div style="background:#fff;border:1px solid #ebe0d1;padding:16px;border-radius:12px;white-space:pre-wrap;line-height:1.6">${escapeHtml(bericht)}</div>
        </div>
      `,
    });

    if (error) {
      console.error("[contact] resend error", error);
      return NextResponse.json(
        { error: "Versturen mislukt. Mail rechtstreeks naar centrumvoortherapie@gmail.com." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] unexpected", err);
    return NextResponse.json(
      { error: "Server error. Probeer het later opnieuw." },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

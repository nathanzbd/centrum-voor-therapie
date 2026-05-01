import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { naam, telefoon, email, bericht } = await request.json();

    if (!naam || !email || !bericht) {
      return NextResponse.json({ error: "Velden ontbreken" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO || "centrumvoortherapie@gmail.com";

    if (!apiKey) {
      console.warn("[contact] RESEND_API_KEY missing — skipping send.", {
        naam, telefoon, email, bericht,
      });
      return NextResponse.json({ ok: true, skipped: true });
    }

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Centrum voor Therapie <noreply@centrumvoortherapie.nl>",
      to,
      replyTo: email,
      subject: `Nieuw contactformulier — ${naam}`,
      html: `
        <h2>Nieuw bericht via de website</h2>
        <p><strong>Naam:</strong> ${naam}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${telefoon ? `<p><strong>Telefoon:</strong> ${telefoon}</p>` : ""}
        <p><strong>Bericht:</strong></p>
        <p>${String(bericht).replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

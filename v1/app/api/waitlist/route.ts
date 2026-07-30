import { NextResponse } from "next/server";

/**
 * Waitlist submission endpoint.
 *
 * ─────────────────────────────────────────────────────────────────────────
 *  ⚠️  EMAIL INTEGRATION PLACEHOLDER — NOT YET CONNECTED
 * ─────────────────────────────────────────────────────────────────────────
 *  This route currently validates the payload and returns success WITHOUT
 *  persisting anything or sending it to an email platform.
 *
 *  To go live, add your provider call in the marked block below. Examples:
 *    - Mailchimp:   POST /lists/{list_id}/members
 *    - ConvertKit:  POST /v3/forms/{form_id}/subscribe
 *    - Resend:      resend.contacts.create({ audienceId, email, firstName })
 *
 *  Store the API key in an environment variable (e.g. process.env.EMAIL_API_KEY)
 *  — never hard-code it here.
 * ─────────────────────────────────────────────────────────────────────────
 */
export async function POST(request: Request) {
  let body: { firstName?: string; email?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  const firstName = (body.firstName ?? "").trim();
  const email = (body.email ?? "").trim();
  const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!firstName || !emailLooksValid) {
    return NextResponse.json(
      { ok: false, error: "Please enter your first name and a valid email." },
      { status: 400 }
    );
  }

  // ───────────────────────────────────────────────────────────────────────
  // TODO: connect email platform (Mailchimp / ConvertKit / Resend) here.
  //       e.g. await addSubscriber({ firstName, email });
  //       Until then, this is a no-op and the address is not saved anywhere.
  // ───────────────────────────────────────────────────────────────────────

  return NextResponse.json({ ok: true });
}

"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success";

export default function Waitlist() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!firstName.trim() || !emailLooksValid) {
      setError("Please enter your first name and a valid email.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: firstName.trim(), email: email.trim() }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("idle");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section className="waitlist" id="waitlist">
      <div className="wrap">
        <div className="waitlist__card">
          {status === "success" ? (
            <div className="waitlist__success">
              <p className="script">You&rsquo;re on the list.</p>
              <p>
                Thank you, {firstName.trim()}. We&rsquo;ll email you the moment
                Issue No. 001 is released.
              </p>
            </div>
          ) : (
            <>
              <div className="waitlist__head">
                <h2 className="waitlist__title">Join the Waitlist</h2>
                <p className="waitlist__sub">
                  Be the first to know when Issue No. 001 is released.
                </p>
              </div>

              <form className="waitlist__fields" onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label htmlFor="firstName">First name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    placeholder="Your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {error && (
                  <p className="waitlist__error" role="alert">
                    {error}
                  </p>
                )}

                <button
                  className="waitlist__submit"
                  type="submit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Joining…" : "Join the Waitlist"}
                  <span aria-hidden="true">↗</span>
                </button>

                <p className="waitlist__note">
                  We respect your inbox. Unsubscribe anytime.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

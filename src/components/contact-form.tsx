"use client";

import { useState } from "react";

type Status =
  | { type: "idle"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus({
          type: "error",
          message: result.message ?? "Unable to submit your request. Please try again.",
        });
        return;
      }

      setStatus({
        type: "success",
        message: result.message ?? "Thank you. Our team will contact you shortly.",
      });
      form.reset();
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please try again in a few moments.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="mt-7 space-y-7" onSubmit={onSubmit}>
      <label className="form-label-light block text-sm">
        Name
        <input type="text" name="name" required className="input-light mt-2" placeholder="Your full name" />
      </label>
      <label className="form-label-light block text-sm">
        Email
        <input
          type="email"
          name="email"
          required
          className="input-light mt-2"
          placeholder="you@example.com"
        />
      </label>
      <label className="form-label-light block text-sm">
        Phone
        <input type="tel" name="phone" required className="input-light mt-2" placeholder="+91" />
      </label>
      <label className="form-label-light block text-sm">
        Message
        <textarea
          name="message"
          rows={4}
          required
          className="input-light input-light-textarea mt-2 resize-y"
          placeholder="Briefly describe your legal concern"
        />
      </label>
      <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
        {loading ? "Submitting..." : "Request Consultation"}
      </button>
      <p className="form-note-light text-xs">Your information is kept strictly confidential.</p>
      {status.message ? (
        <p
          className={`text-sm ${
            status.type === "success" ? "text-[#8a672c]" : "text-[#b43a3a]"
          }`}
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}

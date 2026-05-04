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

    const requiredFields = ["name", "email", "phone", "message"] as const;
    const hasMissingField = requiredFields.some((field) => {
      const value = payload[field];
      return typeof value !== "string" || !value.trim();
    });

    try {
      if (hasMissingField) {
        setStatus({
          type: "error",
          message: "Please complete all required fields.",
        });
        return;
      }

      setStatus({
        type: "success",
        message: "Thank you. Our legal team will contact you within 24 hours.",
      });
      form.reset();
    } catch {
      setStatus({
        type: "error",
        message: "Unable to submit your request. Please try again.",
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

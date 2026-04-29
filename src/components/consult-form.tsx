"use client";

import { useState } from "react";
import { services } from "@/lib/site-data";

type Status =
  | { type: "idle"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function ConsultForm() {
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
      const response = await fetch("/api/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus({
          type: "error",
          message: result.message ?? "Unable to submit consultation request.",
        });
        return;
      }

      setStatus({
        type: "success",
        message:
          result.message ?? "Consultation request submitted. Our team will contact you within 24 hours.",
      });
      form.reset();
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please try again shortly.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="mt-8 space-y-10" onSubmit={onSubmit}>
      <div>
        <p className="eyebrow">Personal Details</p>
        <div className="mt-5 grid gap-7 md:grid-cols-2">
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
          <label className="form-label-light block text-sm md:col-span-2">
            Phone
            <input type="tel" name="phone" required className="input-light mt-2" placeholder="+91" />
          </label>
        </div>
      </div>

      <div className="section-divider pt-8">
        <p className="eyebrow">Case Type</p>
        <label className="form-label-light mt-5 block text-sm">
          Legal Service
          <select name="serviceType" required className="input-light mt-2">
            <option value="">Select issue type</option>
            {services.map((service) => (
              <option key={service.slug}>{service.title}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="section-divider pt-8">
        <p className="eyebrow">Message</p>
        <label className="form-label-light mt-5 block text-sm">
          Case Brief
          <textarea
            name="message"
            rows={6}
            required
            className="input-light input-light-textarea mt-2 resize-y"
            placeholder="Share a brief description of your case and legal objective"
          />
        </label>
      </div>

      <button type="submit" disabled={loading} className="btn-primary disabled:opacity-60">
        {loading ? "Submitting..." : "Request Consultation"}
      </button>

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

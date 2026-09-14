"use client";
import { FormEvent, useState } from "react";
import Button from "@/components/ui/Button";

interface FormState { name: string; email: string; phone: string; message: string; }
const initialState: FormState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-8 text-center">
        <h3 className="text-lg font-semibold text-white">Thank you.</h3>
        <p className="mt-2 text-sm text-slate-400">Your enquiry has been received. Our investor services team will respond within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Field label="Full Name" id="name"><input id="name" required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="e.g. Adebayo Ogunlesi" className={inputClasses} /></Field>
      <Field label="Email Address" id="email"><input id="email" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" className={inputClasses} /></Field>
      <Field label="Phone Number" id="phone"><input id="phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+234 801 234 5678" className={inputClasses} /></Field>
      <Field label="Message" id="message"><textarea id="message" rows={4} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="I would like to learn more about the FDC Balanced Fund." className={`${inputClasses} resize-y`} /></Field>
      <Button type="submit" variant="pillGold" size="lg" className="w-full">Submit Enquiry</Button>
    </form>
  );
}

const inputClasses = "w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-gold/50 focus:ring-2 focus:ring-gold/20";

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</label>
      {children}
    </div>
  );
}

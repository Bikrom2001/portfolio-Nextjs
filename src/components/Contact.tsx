"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Download, Mail, MapPin, Phone, Send } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { BrandIcon } from "./BrandIcons";
import { links, profile } from "@/data/cv";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-2xl border border-border bg-bg px-4 py-3 text-base sm:text-sm text-fg placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25";

  const cards = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
    { icon: MapPin, label: "Location", value: `${profile.location}, Bangladesh` },
  ];

  return (
    <>
      <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden py-20 md:py-28">
        <div aria-hidden="true" className="absolute bottom-0 left-1/2 -z-10 h-[18rem] w-[20rem] sm:h-[26rem] sm:w-[45rem] -translate-x-1/2 rounded-full bg-[var(--blob-2)] opacity-60 blur-[90px] sm:blur-[120px]" />
        <div className="wrap">
          <SectionHeader
            id="contact-title"
            tag="Contact"
            title="Let's work together"
            subtitle="Open to developer roles, training engagements and assessment work. Send a message and I'll get back to you."
            align="center"
          />

          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="grid content-start gap-4">
              {cards.map((c, i) => {
                const Icon = c.icon;
                const tone = ["bg-p-violet text-accent-3", "bg-p-pink text-accent-2", "bg-p-peach text-fg-soft"][i % 3];
                const inner = (
                  <>
                    <span className={`grid h-11 w-11 sm:h-14 sm:w-14 shrink-0 place-items-center rounded-2xl ${tone}`}>
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.72rem] sm:text-[0.78rem] text-muted">{c.label}</span>
                      <span className="block break-all text-sm sm:text-base font-semibold text-fg">{c.value}</span>
                    </span>
                  </>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="reveal glass glass-hover flex items-center gap-3 sm:gap-4 p-4 sm:p-5">
                    {inner}
                  </a>
                ) : (
                  <div key={c.label} className="reveal glass flex items-center gap-3 sm:gap-4 p-4 sm:p-5">
                    {inner}
                  </div>
                );
              })}

              <div className="reveal glass p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row gap-2">
                  <button type="button" onClick={copyEmail} className="btn btn-outline w-full sm:w-auto !py-2.5" aria-label="Copy email address">
                    <AnimatePresence mode="wait" initial={false}>
                      {copied ? (
                        <motion.span key="ok" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="inline-flex items-center justify-center gap-2 text-success">
                          <Check className="h-4 w-4" aria-hidden="true" /> Copied
                        </motion.span>
                      ) : (
                        <motion.span key="copy" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="inline-flex items-center justify-center gap-2">
                          <Copy className="h-4 w-4" aria-hidden="true" /> Copy email
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                  <a href={profile.cv} download className="btn btn-outline w-full sm:w-auto !py-2.5">
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Download CV
                  </a>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={l.label}
                        className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border border-border bg-surface text-fg-soft transition-colors hover:border-accent hover:text-accent-3"
                      >
                        <BrandIcon kind={l.kind} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <form onSubmit={onSubmit} className="reveal glass relative overflow-hidden p-5 sm:p-8">
              <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-p-violet blur-2xl" />
              <p className="relative font-display text-lg sm:text-xl font-bold text-fg">Send a message</p>
              <p className="relative mt-1 text-[0.82rem] sm:text-[0.88rem] text-muted">This opens a ready-to-send email in your mail app.</p>
              <div className="relative mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="mb-1.5 block text-[0.85rem] font-medium text-fg-soft">
                    Name
                  </label>
                  <input id="c-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} autoComplete="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="c-email" className="mb-1.5 block text-[0.85rem] font-medium text-fg-soft">
                    Email
                  </label>
                  <input id="c-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} autoComplete="email" placeholder="you@example.com" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="c-subject" className="mb-1.5 block text-[0.85rem] font-medium text-fg-soft">
                    Subject
                  </label>
                  <input id="c-subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={field} placeholder="Job opportunity, training session…" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="c-msg" className="mb-1.5 block text-[0.85rem] font-medium text-fg-soft">
                    Message
                  </label>
                  <textarea id="c-msg" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${field} resize-y`} placeholder="Tell me a little about it" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary relative mt-5 w-full sm:w-auto">
                <Send className="h-4 w-4" aria-hidden="true" />
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

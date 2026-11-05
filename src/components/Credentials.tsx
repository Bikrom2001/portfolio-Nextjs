"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, BookOpenText, GraduationCap, ShieldCheck, Users } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { affiliations, certifications, education, publication, type Cert } from "@/data/cv";

const groups: ("All" | Cert["group"])[] = ["All", "NSDA", "Trainer programs", "Courses"];

export default function Credentials() {
  const [group, setGroup] = useState<(typeof groups)[number]>("All");
  const list = certifications.filter((c) => group === "All" || c.group === group);

  return (
    <section id="credentials" aria-labelledby="credentials-title" className="relative py-20 md:py-28">
      <div aria-hidden="true" className="bg-grid mask-fade absolute inset-0 -z-10 opacity-70" />
      <div className="wrap">
        <SectionHeader
          id="credentials-title"
          tag="Credentials"
          title="Education & certifications"
          subtitle="Engineering degrees, national NSDA qualifications, trainer programs, research and professional memberships."
        />

        {/* Education timeline */}
        <ol className="relative grid gap-4 md:grid-cols-2">
          {education.map((e) => (
            <li key={e.degree} className="reveal glass glass-hover relative overflow-hidden p-6 sm:p-7">
              <div aria-hidden="true" className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-p-pink blur-2xl" />
              <div className="relative flex items-start justify-between gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-p-violet text-accent-3">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="rounded-full bg-p-peach px-3 py-1 text-[0.78rem] font-semibold text-fg-soft">{e.years}</span>
              </div>
              <h3 className="relative mt-5 font-display text-xl font-bold leading-snug text-fg">{e.degree}</h3>
              <p className="relative mt-1 text-[0.95rem] text-muted">{e.school}</p>
              <p className="relative mt-4 inline-flex items-center gap-2 rounded-full bg-p-mint px-3 py-1 text-[0.85rem] font-semibold text-success">
                {e.result}
              </p>
            </li>
          ))}
        </ol>

        {/* Certifications */}
        <div className="mt-16">
          <div className="reveal flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="flex items-center gap-2.5 font-display text-xl font-bold text-fg">
                <Award className="h-5 w-5 text-accent-2" aria-hidden="true" />
                Certifications
              </h3>
              <p className="mt-1 text-[0.95rem] text-muted">{certifications.length} certificates and training programs.</p>
            </div>
            <div role="group" aria-label="Filter certifications" className="glass flex flex-wrap gap-1 !rounded-full p-1">
              {groups.map((g) => (
                <button
                  key={g}
                  type="button"
                  aria-pressed={group === g}
                  onClick={() => setGroup(g)}
                  className={`relative isolate rounded-full px-3.5 py-1.5 text-[0.83rem] font-medium transition-colors ${group === g ? "text-white" : "text-muted hover:text-fg"}`}
                >
                  {group === g && <motion.span layoutId="cert-filter" className="absolute inset-0 -z-10 rounded-full bg-gradient-brand" />}
                  {g}
                </button>
              ))}
            </div>
          </div>

          <motion.ul layout className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence initial={false} mode="popLayout">
              {list.map((c) => (
                <motion.li
                  key={c.name}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="glass glass-hover flex flex-col p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${c.group === "NSDA" ? "bg-p-mint text-success" : c.group === "Trainer programs" ? "bg-p-pink text-accent-2" : "bg-p-violet text-accent-3"}`}>
                      {c.group === "NSDA" ? <ShieldCheck className="h-5 w-5" aria-hidden="true" /> : <Award className="h-5 w-5" aria-hidden="true" />}
                    </span>
                    {c.level && <span className="rounded-full bg-p-mint px-2.5 py-0.5 text-[0.72rem] font-bold text-success">{c.level}</span>}
                  </div>
                  <p className="mt-4 font-semibold leading-snug text-fg">{c.name}</p>
                  <p className="mt-1 text-[0.85rem] text-muted">{c.issuer}</p>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>

        {/* Research & memberships */}
        <div className="mt-16 grid gap-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="reveal glass relative overflow-hidden p-6 sm:p-7">
            <div className="pill !bg-p-pink !text-accent-2">
              <BookOpenText className="h-4 w-4" aria-hidden="true" />
              Publication
            </div>
            <p className="mt-3 font-display text-lg font-bold leading-snug text-fg">{publication.title}</p>
            <p className="mt-3 text-[0.9rem] text-muted">
              {publication.venue}, {publication.date}
            </p>
          </div>
          <div className="reveal glass p-6 sm:p-7">
            <div className="pill">
              <Users className="h-4 w-4" aria-hidden="true" />
              Memberships
            </div>
            <ul className="mt-4 space-y-3">
              {affiliations.map((a) => (
                <li key={a.org} className="flex items-start gap-3 text-[0.93rem] leading-snug">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-3" aria-hidden="true" />
                  <span>
                    <span className="font-semibold text-fg">{a.role}</span>
                    <span className="text-muted">, {a.org}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

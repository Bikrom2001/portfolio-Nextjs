"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, CalendarDays, CheckCircle2, Mic2 } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { engagements, experience, type Role, type RoleTrack } from "@/data/cv";

const filters: { key: "all" | RoleTrack; label: string }[] = [
  { key: "all", label: "All" },
  { key: "teaching", label: "Teaching & assessment" },
  { key: "development", label: "Development & IT" },
];

const getRoleId = (r: Role) => `${r.title}-${r.org}-${r.start}`;

export default function Experience() {
  const [filter, setFilter] = useState<"all" | RoleTrack>("all");
  const roles = experience.filter((r) => filter === "all" || r.track === filter);
  const [activeId, setActiveId] = useState(getRoleId(experience[0]));
  const active = roles.find((r) => getRoleId(r) === activeId) ?? roles[0];

  return (
    <section id="experience" aria-labelledby="experience-title" className="relative overflow-hidden py-20 md:py-28">
      <div aria-hidden="true" className="bg-grid mask-fade absolute inset-0 -z-10 opacity-70" />
      <div className="wrap">
        <SectionHeader
          id="experience-title"
          tag="Experience"
          title="Where I've worked"
          subtitle="From IT operations and web development to classrooms and national assessments. Pick a role to see the details."
        />

        <div role="group" aria-label="Filter roles" className="reveal mb-6 flex flex-wrap gap-2">
          {filters.map((f) => {
            const count = f.key === "all" ? experience.length : experience.filter((r) => r.track === f.key).length;
            const on = filter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                aria-pressed={on}
                onClick={() => {
                  setFilter(f.key);
                  const first = experience.find((r) => f.key === "all" || r.track === f.key);
                  if (first) setActiveId(getRoleId(first));
                }}
                className={`relative isolate rounded-full px-4 py-2 text-[0.88rem] font-semibold transition-colors ${on ? "text-white" : "glass !rounded-full text-muted hover:text-fg"}`}
              >
                {on && <motion.span layoutId="exp-filter" className="absolute inset-0 -z-10 rounded-full bg-gradient-brand" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
                {f.label}
                <span className={`ml-2 rounded-md px-1.5 py-0.5 text-[0.72rem] ${on ? "bg-white/25" : "bg-p-violet text-accent-3"}`}>{count}</span>
              </button>
            );
          })}
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
          {/* Role list */}
          <div role="tablist" aria-label="Roles" aria-orientation="vertical" className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {roles.map((r) => {
              const id = getRoleId(r);
              const on = active && id === getRoleId(active);
              const current = r.end === "Present";
              return (
                <button
                  key={id}
                  role="tab"
                  type="button"
                  aria-selected={!!on}
                  onClick={() => setActiveId(id)}
                  className={`relative min-w-[15rem] shrink-0 rounded-3xl border p-4 pl-5 text-left transition-colors lg:min-w-0 ${
                    on ? "border-accent/50 bg-p-violet shadow-[var(--shadow)]" : "border-border bg-surface hover:border-accent/40"
                  }`}
                >
                  {on && <motion.span layoutId="exp-bar" className="absolute left-0 top-4 bottom-4 hidden w-1 rounded-r-full bg-gradient-brand lg:block" />}
                  <span className="flex items-center justify-between gap-2">
                    <span className="text-[0.75rem] text-muted">
                      {r.start} – {r.end}
                    </span>
                    {current && <span className="rounded-md bg-success/15 px-1.5 py-0.5 text-[0.68rem] font-semibold text-success">Current</span>}
                  </span>
                  <span className={`mt-1 block font-display text-[1rem] font-semibold leading-snug ${on ? "text-fg" : "text-fg-soft"}`}>{r.title}</span>
                  <span className="block text-[0.82rem] text-muted">{r.org}</span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="glass relative min-h-[20rem] overflow-hidden p-6 sm:p-8" role="tabpanel">
            <div aria-hidden="true" className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-p-violet blur-2xl" />
            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={getRoleId(active)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="relative"
                >
                  <span className={`pill ${active.track === "teaching" ? "" : "!bg-p-mint !text-success"}`}>
                    {active.track === "teaching" ? "Teaching & assessment" : "Development & IT"}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-fg sm:text-3xl">{active.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[0.92rem] text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Building2 className="h-4 w-4 text-accent-3" aria-hidden="true" />
                      {active.org}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-4 w-4 text-accent-3" aria-hidden="true" />
                      {active.start} – {active.end}
                      {active.type ? ` (${active.type})` : ""}
                    </span>
                  </div>
                  <ul className="mt-7 space-y-4">
                    {active.points.map((p) => (
                      <li key={p} className="flex gap-3 text-[1rem] leading-relaxed text-fg-soft">
                        <CheckCircle2 className="mt-1 h-[1.05rem] w-[1.05rem] shrink-0 text-accent" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Resource person */}
        <div className="mt-16">
          <h3 className="reveal flex items-center gap-2.5 font-display text-xl font-bold text-fg">
            <Mic2 className="h-5 w-5 text-accent-3" aria-hidden="true" />
            Resource person
          </h3>
          <p className="reveal mt-1 text-[0.95rem] text-muted">Invited sessions for training institutes and national projects.</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {engagements.map((e) => (
              <li key={e.org} className="reveal glass glass-hover p-6">
                <p className="inline-block rounded-full bg-p-peach px-2.5 py-0.5 text-[0.75rem] font-semibold text-fg-soft">{e.dates}</p>
                <p className="mt-2 font-semibold leading-snug text-fg">{e.org}</p>
                <p className="mt-1 text-[0.92rem] text-muted">{e.topic}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

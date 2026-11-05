"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MousePointerClick } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { skillGroups } from "@/data/cv";

// Where each skill shows up in the CV, so every claim is grounded.
const usage: Record<string, string[]> = {
  Python: ["Web Operation Specialist, Euro Bangla iT", "Trainer, Infosystem Technology Limited", "NSDA Level 4 assessor and certificate holder", "Job Portal and Admission Portal"],
  Django: ["Job Portal (multi-language, multi-auth)", "University Admission Portal", "Courses at Ostad and The Universal IT"],
  JavaScript: ["Trainer roles at Infosystem, Children's Hope and BASIS–SEIP", "Dynamic data pages at Euro Bangla iT"],
  "React.js": ["Front-end components at Infosystem Technology Limited", "Full Stack Web Development course, Ostad"],
  HTML: ["Taught in every trainer role since 2022", "NSDA Web Design and Development, Level 3"],
  CSS: ["Taught in every trainer role since 2022", "HTML5 & CSS3 Complete Course, Udemy"],
  Bootstrap: ["Taught at Children's Hope and BASIS–SEIP"],
  MySQL: ["Query optimization, indexing and caching at Euro Bangla iT"],
  Git: ["CI/CD pipelines with GitHub Actions, GitLab CI/CD and Jenkins"],
  Arduino: ["Introduction to IoT and Embedded Systems (Coursera)"],
};

const all = skillGroups.flatMap((g) => g.items.map((s) => ({ name: s, group: g.name })));

export default function Skills() {
  const [group, setGroup] = useState<string>("All");
  const [selected, setSelected] = useState("Python");
  const shown = group === "All" ? all : all.filter((s) => s.group === group);
  const sel = all.find((s) => s.name === selected)!;

  return (
    <section id="skills" aria-labelledby="skills-title" className="relative overflow-hidden py-20 md:py-28">
      <div aria-hidden="true" className="absolute left-1/2 top-1/3 -z-10 h-[18rem] w-[20rem] sm:h-[30rem] sm:w-[40rem] -translate-x-1/2 rounded-full bg-[var(--blob-1)] opacity-50 blur-[90px] sm:blur-[120px]" />
      <div className="wrap">
        <SectionHeader id="skills-title" tag="Skills" title="Tech stack & tools" subtitle="The languages, frameworks and tools I build and teach with. Select any skill to see where I've used it." />

        <div role="group" aria-label="Filter skills" className="reveal mb-6 flex flex-wrap gap-2">
          {["All", ...skillGroups.map((g) => g.name)].map((g) => {
            const on = group === g;
            return (
              <button
                key={g}
                type="button"
                aria-pressed={on}
                onClick={() => setGroup(g)}
                className={`relative isolate rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-[0.85rem] font-semibold transition-colors ${on ? "text-white" : "glass !rounded-full text-muted hover:text-fg"}`}
              >
                {on && <motion.span layoutId="skill-filter" className="absolute inset-0 -z-10 rounded-full bg-gradient-brand" />}
                {g}
              </button>
            );
          })}
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <motion.ul layout className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence initial={false} mode="popLayout">
              {shown.map((s) => {
                const on = s.name === selected;
                return (
                  <motion.li
                    key={s.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      type="button"
                      aria-pressed={on}
                      onClick={() => setSelected(s.name)}
                      className={`flex w-full items-center gap-2 sm:gap-3 rounded-[1.25rem] border p-2 sm:p-3 text-left transition-all ${
                        on ? "border-accent/60 bg-p-violet shadow-[var(--shadow-lg)]" : "border-border bg-surface shadow-[var(--shadow)] hover:-translate-y-1 hover:border-accent/40"
                      }`}
                    >
                      <span
                        className={`grid h-8 w-8 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-xl font-display text-[0.72rem] sm:text-[0.8rem] font-bold ${
                          on ? "bg-gradient-brand text-white" : "bg-p-pink text-accent-2"
                        }`}
                        aria-hidden="true"
                      >
                        {s.name.replace(/[^A-Za-z]/g, "").slice(0, 2)}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-[0.82rem] sm:text-[0.92rem] font-semibold text-fg">{s.name}</span>
                        <span className="block truncate text-[0.68rem] sm:text-[0.72rem] text-muted">{s.group}</span>
                      </span>
                    </button>
                  </motion.li>
                );
              })}
            </AnimatePresence>
          </motion.ul>

          <aside aria-live="polite" className="glass relative self-start overflow-hidden p-5 sm:p-6 lg:sticky lg:top-28">
            <div aria-hidden="true" className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-p-pink blur-2xl" />
            <AnimatePresence mode="wait">
              <motion.div key={selected} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="relative">
                <p className="pill">{sel.group}</p>
                <p className="mt-3 font-display text-2xl sm:text-3xl font-bold text-fg">{selected}</p>
                <p className="mt-5 text-[0.8rem] font-semibold text-muted">Where I&apos;ve used it</p>
                {usage[selected] ? (
                  <ul className="mt-3 space-y-3">
                    {usage[selected].map((u) => (
                      <li key={u} className="flex gap-2.5 text-[0.88rem] sm:text-[0.92rem] leading-snug text-fg-soft">
                        <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-3" aria-hidden="true" />
                        {u}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-[0.88rem] sm:text-[0.92rem] leading-snug text-fg-soft">Part of my toolkit for building and teaching web projects.</p>
                )}
              </motion.div>
            </AnimatePresence>
            <p className="relative mt-6 flex items-center gap-2 border-t border-border pt-4 text-[0.78rem] text-muted">
              <MousePointerClick className="h-4 w-4" aria-hidden="true" />
              Select another skill to compare
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

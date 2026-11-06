"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Award,
  Briefcase,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Code2,
  GraduationCap,
  MapPin,
  Mic2,
  Radio,
  Sparkles,
} from "lucide-react";
import { engagements, experience, type Role, type RoleTrack } from "@/data/cv";

type FilterKey = "all" | RoleTrack;

const filters: { key: FilterKey; label: string; icon: typeof Briefcase }[] = [
  { key: "all", label: "All Milestones", icon: Briefcase },
  { key: "teaching", label: "Teaching & Assessment", icon: GraduationCap },
  { key: "development", label: "Development & IT", icon: Code2 },
];

export default function Experience() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const shouldReduceMotion = useReducedMotion();

  const filteredRoles =
    filter === "all" ? experience : experience.filter((r) => r.track === filter);

  const getRoleIcon = (role: Role) => {
    if (role.title.toLowerCase().includes("assessor")) {
      return <Award className="h-5 w-5 text-amber-500" aria-hidden="true" />;
    }
    if (role.track === "development") {
      return <Code2 className="h-5 w-5 text-emerald-500" aria-hidden="true" />;
    }
    return <GraduationCap className="h-5 w-5 text-accent-3 dark:text-accent" aria-hidden="true" />;
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative overflow-hidden py-20 md:py-28"
    >
      {/* Background ambient glow effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          aria-hidden="true"
          className="bg-grid mask-fade absolute inset-0 opacity-60"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 30, -25, 0],
                  y: [0, -35, 30, 0],
                }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-gradient-to-tr from-accent/25 via-p-violet to-transparent opacity-50 blur-[110px]"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, -30, 25, 0],
                  y: [0, 30, -25, 0],
                }
          }
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 bottom-1/4 h-80 w-80 rounded-full bg-gradient-to-bl from-accent-2/20 via-p-pink to-transparent opacity-45 blur-[100px]"
        />
      </div>

      <div className="wrap relative z-10">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="font-mono text-xs font-bold tracking-widest text-accent uppercase">
              04 —— EXPERIENCE & IMPACT
            </span>
          </div>

          <h2
            id="experience-title"
            className="font-display text-[clamp(2.2rem,4.8vw,3.3rem)] font-bold leading-[1.12] tracking-tight text-fg"
          >
            Where I&apos;ve built, mentored &{" "}
            <span className="text-gradient">led</span>
          </h2>

          <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
            Over a decade of dual-track leadership in full-stack web engineering,
            digital business operations, government skills programs, and national
            competency assessment.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          role="group"
          aria-label="Filter roles by category"
          className="mb-12 flex flex-wrap items-center gap-2.5"
        >
          {filters.map((f) => {
            const count =
              f.key === "all"
                ? experience.length
                : experience.filter((r) => r.track === f.key).length;
            const isActive = filter === f.key;
            const Icon = f.icon;

            return (
              <button
                key={f.key}
                type="button"
                aria-pressed={isActive}
                onClick={() => setFilter(f.key)}
                className={`group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-[0.84rem] font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-brand text-white shadow-md shadow-accent/25"
                    : "border border-border bg-surface text-fg-soft hover:border-accent hover:text-fg"
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span>{f.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[0.7rem] font-bold transition-colors ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-surface-2 text-muted group-hover:text-fg"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ================= VERTICAL TIMELINE STREAM ================= */}
        <div className="relative pl-6 sm:pl-10 md:pl-12">
          {/* Continuous Glowing Timeline Spine */}
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-2.5 sm:left-4 top-2 w-[2.5px] rounded-full bg-gradient-to-b from-accent via-accent-2 to-border"
          />

          <motion.div layout className="space-y-8 sm:space-y-10">
            <AnimatePresence mode="popLayout">
              {filteredRoles.map((role, idx) => {
                const isCurrent = role.end === "Present";
                const isTeaching = role.track === "teaching";
                const roleId = `${role.title}-${role.org}-${role.start}`;

                return (
                  <motion.div
                    key={roleId}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="relative group"
                  >
                    {/* Timeline Node Beacon */}
                    <div className="absolute -left-[1.85rem] sm:-left-[2.75rem] md:-left-[2.85rem] top-6 z-20 flex items-center justify-center">
                      <div
                        className={`relative grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full border-2 transition-transform duration-300 group-hover:scale-110 shadow-sm ${
                          isCurrent
                            ? "border-accent bg-surface ring-4 ring-accent/20"
                            : "border-border bg-surface text-muted"
                        }`}
                      >
                        {isCurrent && (
                          <span className="absolute -inset-1 animate-ping rounded-full bg-accent/30 opacity-75" />
                        )}
                        {getRoleIcon(role)}
                      </div>
                    </div>

                    {/* Timeline Role Card */}
                    <div className="glass relative overflow-hidden rounded-3xl border border-border p-5 sm:p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-lg)]">
                      {/* Subtle corner aura */}
                      <div
                        aria-hidden="true"
                        className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-2xl opacity-40 transition-opacity duration-300 group-hover:opacity-75 ${
                          isTeaching ? "bg-p-pink" : "bg-p-mint"
                        }`}
                      />

                      {/* Card Header: Track Badge, Date, Current Pill */}
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-4">
                        <div className="flex flex-wrap items-center gap-2">
                          {/* Track Pill */}
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                              isTeaching
                                ? "bg-p-violet text-accent-3 dark:bg-accent/15 dark:text-accent"
                                : "bg-p-mint text-success dark:bg-emerald-500/15 dark:text-emerald-300"
                            }`}
                          >
                            {isTeaching ? (
                              <GraduationCap className="h-3.5 w-3.5" />
                            ) : (
                              <Code2 className="h-3.5 w-3.5" />
                            )}
                            {isTeaching ? "Teaching & Assessment" : "Development & IT"}
                          </span>

                          {/* Role Type */}
                          {role.type && (
                            <span className="rounded-lg border border-border bg-surface-2 px-2.5 py-0.5 font-mono text-[0.72rem] font-semibold text-fg-soft">
                              {role.type}
                            </span>
                          )}
                        </div>

                        {/* Date and Current Indicator */}
                        <div className="flex items-center gap-2">
                          {isCurrent && (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 px-2.5 py-0.5 text-xs font-semibold text-success">
                              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                              Current Role
                            </span>
                          )}
                          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-muted">
                            <CalendarDays className="h-3.5 w-3.5 text-accent" />
                            <span>
                              {role.start} – {role.end}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Role Title & Organization Info */}
                      <div className="mt-4 space-y-1.5">
                        <h3 className="font-display text-xl sm:text-2xl font-bold leading-snug text-fg group-hover:text-accent-3 dark:group-hover:text-accent transition-colors">
                          {role.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                          <span className="inline-flex items-center gap-1.5 font-semibold text-fg-soft">
                            <Building2 className="h-4 w-4 text-accent-3 dark:text-accent" />
                            {role.org}
                          </span>
                          {role.location && (
                            <span className="inline-flex items-center gap-1 text-xs">
                              <MapPin className="h-3.5 w-3.5 text-accent-2" />
                              {role.location}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Key Contributions & Achievements Bullet Points */}
                      <div className="mt-5 space-y-2.5">
                        {role.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-3 text-sm sm:text-[0.95rem] leading-relaxed text-fg-soft"
                          >
                            <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                            </span>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills / Tech Stack Badges */}
                      {role.skills && role.skills.length > 0 && (
                        <div className="mt-6 flex flex-wrap items-center gap-1.5 border-t border-border/60 pt-4">
                          <span className="mr-1 text-[0.7rem] font-bold tracking-widest text-muted uppercase">
                            Skills:
                          </span>
                          {role.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-lg border border-border/80 bg-surface-2 px-2.5 py-1 text-[0.72rem] sm:text-xs font-mono font-medium text-fg-soft transition-colors hover:border-accent hover:text-fg"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ================= RESOURCE PERSON & KEYNOTE BENTO ================= */}
        <div className="mt-20">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-p-pink text-accent-2">
                  <Mic2 className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-fg">
                  Resource Person & Guest Keynotes
                </h3>
              </div>
              <p className="mt-1 text-sm text-muted">
                Invited training sessions for government ministries, universities, and national programs.
              </p>
            </div>
            <span className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs font-semibold text-fg-soft">
              {engagements.length} Featured Engagements
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {engagements.map((e, idx) => (
              <motion.div
                key={e.org}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.07 }}
                className="glass group relative flex flex-col justify-between overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow)]"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-accent/10 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div>
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="inline-block rounded-full bg-p-peach px-2.5 py-0.5 font-mono text-[0.72rem] font-semibold text-fg-soft">
                      {e.dates}
                    </span>
                    <Sparkles className="h-3.5 w-3.5 text-accent-2 opacity-50 transition-opacity group-hover:opacity-100" />
                  </div>
                  <h4 className="font-display text-base font-bold leading-snug text-fg group-hover:text-accent-3 dark:group-hover:text-accent transition-colors">
                    {e.org}
                  </h4>
                </div>

                <div className="mt-4 border-t border-border/70 pt-3">
                  <p className="text-xs font-medium text-muted">
                    Topic / Initiative:
                  </p>
                  <p className="mt-1 text-xs sm:text-[0.82rem] font-semibold text-accent-3 dark:text-accent line-clamp-2">
                    {e.topic}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

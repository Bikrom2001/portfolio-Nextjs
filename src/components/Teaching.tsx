"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ClipboardCheck,
  Hammer,
  Monitor,
  RefreshCw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type TeachingRole = {
  title: string;
  org: string;
  period: string;
  topicsHeader?: string;
  topics: string[];
};

const teachingRoles: TeachingRole[] = [
  {
    title: "Lead Trainer — Social Media Marketing & Content Moderation",
    org: "Infosystem Technology Limited · BACCO-SICIP",
    period: "Nov 2026 – Present",
    topicsHeader: "TOPICS TAUGHT",
    topics: [
      "Social Media Marketing",
      "Content Moderation",
      "Facebook & Instagram",
      "LinkedIn & YouTube",
      "Account Management",
      "Page Setup & SEO",
      "Optimization",
      "Professional Skills",
    ],
  },
  {
    title: "Lead Trainer — Digital Business Operations",
    org: "Infosystem Technology Limited · BACCO-SICIP",
    period: "Aug 2026 – Present",
    topicsHeader: "TOPICS TAUGHT",
    topics: [
      "eCommerce (WooCommerce)",
      "CRM & Support",
      "Zoho CRM",
      "HubSpot & Freshdesk",
      "Claude AI Workflows",
      "Zapier & Make",
      "Business Automation",
      "Workflow Ops",
    ],
  },
  {
    title: "Trainer — Web Application Development",
    org: "Children's Hope",
    period: "Jul 2026 – Oct 2026",
    topicsHeader: "TOPICS TAUGHT",
    topics: [
      "Python",
      "Database Management",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript",
      "Backend Architecture",
      "Hands-on Projects",
    ],
  },
  {
    title: "Trainer — Web Development",
    org: "Infosystem Technology Limited",
    period: "Apr 2025 – Present",
    topicsHeader: "TOPICS TAUGHT",
    topics: [
      "Python OOP",
      "React.js",
      "jQuery",
      "JavaScript",
      "Dynamic Front-end",
      "Data Display",
      "Algorithms",
      "Mentorship",
    ],
  },
  {
    title: "Certified Assessor — Web & Operations",
    org: "National Skill Development Authority (NSDA)",
    period: "May 2024 – Present",
    topicsHeader: "ASSESSMENT DOMAINS",
    topics: [
      "CBT&A Level 4",
      "Python Web App (L4)",
      "Web Design (L3)",
      "Computer Operation (L3)",
      "Competency Standards",
      "Evidence Guide",
    ],
  },
  {
    title: "Trainer — Web Application Development",
    org: "BASIS Institute of Technology & Management (BITM) · SEIP",
    period: "Feb 2024 – Present",
    topicsHeader: "TOPICS TAUGHT",
    topics: [
      "Web App Development",
      "BITM-SEIP-Batch-13, 14",
      "PHP & MySQL",
      "JavaScript",
      "HTML5 & CSS3",
      "Bootstrap",
      "Hands-on Lab",
      "Project Mentorship",
    ],
  },
  {
    title: "Trainer — Web Application Development with PHP",
    org: "BASIS – SEIP Project",
    period: "2022 – 2023",
    topicsHeader: "TOPICS TAUGHT",
    topics: [
      "Web App Development",
      "PHP & MySQL",
      "SEIP-BASIS Batch-08, 09",
      "HTML5 & CSS3",
      "Bootstrap",
      "JavaScript",
      "Dynamic Web Apps",
      "Hands-on Lab",
    ],
  },
  {
    title: "Specialist Trainer — ICT & Web Design",
    org: "Dhaka Technical Teachers Training Institute (DTTI)",
    period: "Dec 2024 – Present",
    topicsHeader: "TOPICS TAUGHT",
    topics: [
      "Web Design (L3)",
      "Computer Operation (L3)",
      "Teacher Training",
      "NSDA Standards",
      "Curriculum Delivery",
      "Lab Demonstration",
    ],
  },
  {
    title: "Resource Person — Advanced ICT & Web",
    org: "CEDP National University · SIMT · Her Power",
    period: "2023 – 2024",
    topicsHeader: "KEY INITIATIVES",
    topics: [
      "Advanced ICT",
      "Freelancing",
      "Web Dev Level IV (BTEB)",
      "Women in Tech",
      "Industry Readiness",
      "Project Evaluation",
    ],
  },
];

const pillars = [
  {
    icon: Hammer,
    title: "Project-based learning",
    desc: "Students build real-world projects and portfolio-ready applications, not just exercises.",
  },
  {
    icon: ClipboardCheck,
    title: "Assessment & feedback",
    desc: "Progress is measured through assignments, quizzes, and competency-based (CBT&A) project reviews.",
  },
  {
    icon: ShieldCheck,
    title: "Industry best practices",
    desc: "Responsive design, UI/UX principles, and cross-browser compatibility from day one.",
  },
  {
    icon: RefreshCw,
    title: "Always current",
    desc: "Course content is kept up to date with modern web technologies and programming trends.",
  },
];

const floatingSparks = [
  { id: 1, x: "8%", y: "16%", size: 6, delay: 0, duration: 7 },
  { id: 2, x: "24%", y: "72%", size: 5, delay: 1.5, duration: 8.5 },
  { id: 3, x: "52%", y: "22%", size: 4, delay: 0.8, duration: 6 },
  { id: 4, x: "74%", y: "68%", size: 6, delay: 2.2, duration: 9 },
  { id: 5, x: "88%", y: "18%", size: 5, delay: 1.1, duration: 7.5 },
  { id: 6, x: "94%", y: "78%", size: 4, delay: 2.8, duration: 8 },
  { id: 7, x: "38%", y: "86%", size: 5, delay: 1.9, duration: 6.8 },
];

export default function Teaching() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="teaching" aria-labelledby="teaching-title" className="relative overflow-hidden py-20 md:py-28">
      {/* ================= BACKGROUND ANIMATION SYSTEM ================= */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Animated Radial Matrix / Tech Grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.22] dark:opacity-[0.14]"
          style={{
            backgroundImage: `radial-gradient(var(--accent) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse at 50% 50%, black 35%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 35%, transparent 80%)",
          }}
        />

        {/* Floating Morphing Aurora Orb 1 (Top-Left: Violet/Indigo) */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 55, -40, 0],
                  y: [0, -45, 35, 0],
                  scale: [1, 1.2, 0.9, 1],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-28 -top-16 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-accent/35 via-accent-2/20 to-transparent opacity-70 blur-[100px]"
        />

        {/* Floating Morphing Aurora Orb 2 (Right-Middle: Pink/Peach) */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, -50, 40, 0],
                  y: [0, 50, -40, 0],
                  scale: [1, 0.9, 1.25, 1],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-24 top-1/4 h-[30rem] w-[30rem] rounded-full bg-gradient-to-bl from-accent-2/30 via-p-pink to-transparent opacity-65 blur-[110px]"
        />

        {/* Floating Morphing Aurora Orb 3 (Bottom-Center: Mint/Sky) */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 30, -30, 0],
                  y: [0, -30, 25, 0],
                  opacity: [0.25, 0.55, 0.25],
                  scale: [0.95, 1.1, 0.95],
                }
          }
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/3 bottom-10 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-p-mint/40 via-p-sky/35 to-p-violet/30 blur-[110px]"
        />

        {/* Floating Light Sparks */}
        {!shouldReduceMotion &&
          floatingSparks.map((spark) => (
            <motion.span
              key={spark.id}
              className="absolute rounded-full bg-accent/40 dark:bg-accent-2/50 shadow-[0_0_12px_currentColor]"
              style={{
                left: spark.x,
                top: spark.y,
                width: spark.size,
                height: spark.size,
              }}
              animate={{
                y: [0, -35, 0],
                opacity: [0.2, 0.85, 0.2],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: spark.duration,
                delay: spark.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

        {/* Subtle sweeping light shimmer line */}
        {!shouldReduceMotion && (
          <motion.div
            className="absolute -top-10 left-0 h-[1.5px] w-72 bg-gradient-to-r from-transparent via-accent to-transparent blur-[1px]"
            animate={{
              x: ["-100%", "600%"],
              y: ["0%", "500%"],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 3,
            }}
          />
        )}
      </div>

      <div className="wrap relative z-10">
        {/* Section Header matching the reference image layout */}
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="font-mono text-xs font-bold tracking-widest text-accent uppercase">
              06 —— TEACHING & MENTORING
            </span>
          </div>

          <h2
            id="teaching-title"
            className="font-display text-[clamp(2.2rem,4.8vw,3.3rem)] font-bold leading-[1.12] tracking-tight text-fg"
          >
            Turning learners into <span className="text-gradient">builders</span>
          </h2>

          <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
            Alongside development, I train the next generation of developers and digital professionals — with practical, project-based sessions that move learners from fundamentals to real, working applications. Over 500+ students trained across web development and digital operations programs.
          </p>
        </div>

        {/* Roles Grid matching reference cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {teachingRoles.map((role, idx) => (
            <motion.div
              key={`${role.title}-${role.org}-${role.period}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative flex flex-col justify-between rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-lg)]"
            >
              <div>
                {/* Top Row: Icon + Date */}
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-p-violet text-accent-3 transition-transform duration-300 group-hover:scale-105 dark:bg-accent/15 dark:text-accent">
                    <Monitor className="h-5 w-5" aria-hidden="true" />
                  </div>
                  {role.period.toLowerCase().includes("present") ? (
                    <div className="flex flex-wrap items-center justify-end gap-1.5 font-mono text-xs font-medium text-muted">
                      <span>{role.period.split(/[–—-]\s*present/i)[0]?.trim()} –</span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[0.72rem] font-bold text-emerald-600 shadow-[0_0_10px_rgba(16,185,129,0.2)] transition-all duration-300 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_14px_rgba(16,185,129,0.35)] dark:border-emerald-400/35 dark:bg-emerald-400/15 dark:text-emerald-300">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                        </span>
                        <span className="tracking-wide">Present</span>
                      </span>
                    </div>
                  ) : (
                    <span className="font-mono text-xs font-medium text-muted">
                      {role.period}
                    </span>
                  )}
                </div>

                {/* Role Title & Org */}
                <h3 className="font-display text-lg font-bold leading-snug text-fg transition-colors group-hover:text-accent-3 dark:group-hover:text-accent">
                  {role.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-accent-3 dark:text-accent">
                  {role.org}
                </p>
              </div>

              {/* Topics Taught Badges */}
              <div className="mt-6 border-t border-border/70 pt-4">
                <span className="mb-2.5 block text-[0.68rem] font-bold tracking-widest text-muted uppercase">
                  {role.topicsHeader || "TOPICS TAUGHT"}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {role.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-lg border border-border bg-surface-2 px-2.5 py-1 text-[0.75rem] font-medium text-fg-soft transition-colors hover:border-accent hover:text-fg"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bento Banner Card: "How I teach" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="relative mt-8 overflow-hidden rounded-3xl border border-border bg-surface p-6 sm:p-8 md:p-10 shadow-[var(--shadow)]"
        >
          {/* Subtle grid pattern background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.45] dark:opacity-[0.25]"
            style={{
              backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />

          {/* Corner animated ambient accent */}
          {!shouldReduceMotion && (
            <motion.div
              aria-hidden="true"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.45, 0.2],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-brand opacity-30 blur-2xl"
            />
          )}

          <div className="relative z-10">
            <h3 className="font-display text-xl font-bold tracking-tight text-fg sm:text-2xl">
              How I teach
            </h3>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="group space-y-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-p-violet text-accent-3 transition-transform duration-300 group-hover:scale-110 dark:bg-accent/15 dark:text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h4 className="font-display text-base font-bold text-fg">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

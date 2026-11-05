"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUp,
  Check,
  Code2,
  Copy,
  Download,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import Logo from "./Logo";
import { BrandIcon } from "./BrandIcons";
import { links, nav, profile } from "@/data/cv";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  // Floating ambient light particles
  const particles = [
    { id: 1, x: "12%", y: "25%", size: 5, delay: 0, duration: 6 },
    { id: 2, x: "28%", y: "65%", size: 4, delay: 1.2, duration: 8 },
    { id: 3, x: "46%", y: "30%", size: 6, delay: 0.5, duration: 7 },
    { id: 4, x: "68%", y: "70%", size: 5, delay: 2, duration: 9 },
    { id: 5, x: "82%", y: "35%", size: 4, delay: 1, duration: 6.5 },
    { id: 6, x: "92%", y: "60%", size: 6, delay: 2.5, duration: 7.5 },
    { id: 7, x: "36%", y: "82%", size: 5, delay: 1.8, duration: 8.5 },
  ];

  return (
    <footer className="relative mt-16 overflow-hidden border-t border-border/80 bg-gradient-to-b from-transparent via-surface/60 to-surface-2/90 backdrop-blur-xl">
      {/* ===================== ANIMATED BACKGROUND SYSTEM ===================== */}

      {/* 1. Luminous animated beam sweeping across top border */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      {!shouldReduceMotion && (
        <motion.div
          className="pointer-events-none absolute top-0 left-0 h-[2px] w-56 bg-gradient-to-r from-transparent via-accent-2 to-transparent blur-[1px]"
          animate={{
            x: ["-100%", "900%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 1.5,
          }}
        />
      )}

      {/* 2. Floating Morphing Aurora Spheres */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Violet floating glow orb */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 45, -35, 0],
                  y: [0, -35, 30, 0],
                  scale: [1, 1.15, 0.95, 1],
                }
          }
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-20 top-1/4 h-[22rem] w-[22rem] rounded-full bg-gradient-to-tr from-accent/30 via-accent-2/20 to-transparent opacity-70 blur-[90px]"
        />

        {/* Pink / Peach floating glow orb */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, -40, 35, 0],
                  y: [0, 35, -30, 0],
                  scale: [1, 0.9, 1.18, 1],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-20 bottom-10 h-[24rem] w-[24rem] rounded-full bg-gradient-to-bl from-accent-2/30 via-p-pink to-transparent opacity-65 blur-[100px]"
        />

        {/* Center ambient pulse aura */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  opacity: [0.25, 0.55, 0.25],
                  scale: [0.95, 1.05, 0.95],
                }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/3 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-p-violet/40 via-p-sky/30 to-p-pink/35 blur-[110px]"
        />

        {/* 3. Floating particle sparks */}
        {!shouldReduceMotion &&
          particles.map((p) => (
            <motion.span
              key={p.id}
              className="absolute rounded-full bg-accent/50 dark:bg-accent-2/60 shadow-[0_0_10px_currentColor]"
              style={{
                left: p.x,
                top: p.y,
                width: p.size,
                height: p.size,
              }}
              animate={{
                y: [0, -32, 0],
                opacity: [0.2, 0.85, 0.2],
                scale: [1, 1.35, 1],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

        {/* 4. Animated subtle undulating wave contour at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-25 dark:opacity-15">
          <svg
            className="w-full h-36 text-accent/30"
            viewBox="0 0 1440 280"
            fill="none"
            preserveAspectRatio="none"
          >
            <motion.path
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      d: [
                        "M0,160L60,176C120,192,240,224,360,208C480,192,600,128,720,122.7C840,117,960,171,1080,181.3C1200,192,1320,160,1380,144L1440,128L1440,280L1380,280C1320,280,1200,280,1080,280C960,280,840,280,720,280C600,280,480,280,360,280C240,280,120,280,60,280L0,280Z",
                        "M0,128L60,149.3C120,171,240,213,360,197.3C480,181,600,107,720,101.3C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,280L1380,280C1320,280,1200,280,1080,280C960,280,840,280,720,280C600,280,480,280,360,280C240,280,120,280,60,280L0,280Z",
                        "M0,160L60,176C120,192,240,224,360,208C480,192,600,128,720,122.7C840,117,960,171,1080,181.3C1200,192,1320,160,1380,144L1440,128L1440,280L1380,280C1320,280,1200,280,1080,280C960,280,840,280,720,280C600,280,480,280,360,280C240,280,120,280,60,280L0,280Z",
                      ],
                    }
              }
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* ===================== FOOTER CONTENT ===================== */}
      <div className="wrap relative z-10 pt-16 pb-12">
        {/* Top Call-to-Action / Status Banner */}
        <div className="relative mb-14 overflow-hidden rounded-3xl border border-border/90 bg-surface/85 p-6 shadow-[var(--shadow-lg)] backdrop-blur-md sm:p-8 md:p-10">
          <div
            aria-hidden="true"
            className="blob absolute -right-12 -top-12 h-44 w-44 bg-gradient-brand opacity-25 blur-2xl"
          />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3.5 py-1 text-xs font-semibold text-fg">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                <span>Available for Opportunities</span>
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-fg sm:text-3xl">
                Have a project or training program in mind?
              </h3>
              <p className="max-w-xl text-sm text-muted sm:text-base">
                Whether you need a scalable web application or structured competency-based IT training, let’s make it happen.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={copyEmail}
                className="btn btn-outline gap-2 px-5 py-2.5 text-sm font-semibold transition-all hover:scale-[1.02]"
                aria-label="Copy email address"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-1.5 text-success"
                    >
                      <Check className="h-4 w-4" aria-hidden="true" />
                      Email Copied!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-1.5"
                    >
                      <Copy className="h-4 w-4" aria-hidden="true" />
                      Copy Email
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <a
                href={profile.cv}
                download
                className="btn btn-primary gap-2 px-6 py-2.5 text-sm font-semibold transition-all hover:scale-[1.02]"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Focused 3-Column Footer Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand & Socials (lg:col-span-5) */}
          <div className="space-y-4 lg:col-span-5">
            <div className="flex items-center gap-3">
              <Logo size={38} />
              
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Dedicated to building data-driven web applications with modern tech stacks and mentoring developers to industry-standard competency.
            </p>

            {/* Social pills with animated rotating border beam */}
            <div className="pt-2">
              <ul className="flex flex-wrap gap-3" aria-label="Social profiles">
                {links.map((item, index) => {
                  const durations = [3.5, 4.2, 3.8, 4.5];
                  const duration = durations[index % durations.length];
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl p-[1.5px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/25"
                        aria-label={item.label}
                        title={item.label}
                      >
                        {/* Continuous rotating conic gradient border beam */}
                        <motion.div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_260deg,var(--accent)_310deg,var(--accent-2)_360deg)] opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                          animate={shouldReduceMotion ? {} : { rotate: 360 }}
                          transition={{
                            duration,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />

                        {/* Subtle static border layer */}
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 rounded-2xl border border-border/80 transition-colors duration-300 group-hover:border-accent/40"
                        />

                        {/* Inner icon container */}
                        <span className="relative z-10 flex h-full w-full items-center justify-center rounded-[14.5px] bg-surface text-fg-soft transition-all duration-300 group-hover:bg-p-violet group-hover:text-accent-3">
                          <BrandIcon
                            kind={item.kind}
                            className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                          />
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Column 2: Quick Navigation (lg:col-span-3) */}
          <div className="space-y-3.5 lg:col-span-3">
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-fg">
              <Code2 className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              Navigation
            </h4>
            <nav aria-label="Footer Navigation">
              <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm sm:grid-cols-1">
                {nav.map((n) => (
                  <li key={n.id}>
                    <a
                      href={`#${n.id}`}
                      className="group inline-flex items-center gap-2 text-muted transition-colors hover:text-accent-3"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-border transition-all duration-200 group-hover:w-3 group-hover:bg-accent" />
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Direct Inquiries & Contact (lg:col-span-4) */}
          <div className="space-y-3.5 lg:col-span-4">
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-fg">
              <Sparkles className="h-3.5 w-3.5 text-accent-2" aria-hidden="true" />
              Direct Inquiries
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center gap-2.5 text-muted transition-colors hover:text-fg"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-p-violet text-accent-3 transition-transform group-hover:scale-105">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="break-all">{profile.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.phoneHref}
                  className="group flex items-center gap-2.5 text-muted transition-colors hover:text-fg"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-p-pink text-accent-2 transition-transform group-hover:scale-105">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span>+880 {profile.phone}</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2.5 text-muted">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-p-mint text-success">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span>{profile.location}, Bangladesh</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/80 pt-8 text-xs text-muted sm:flex-row">
          <p>
            © {currentYear} <span className="font-semibold text-fg">{profile.name}</span>. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 font-medium text-fg-soft shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-p-violet hover:text-accent-3"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
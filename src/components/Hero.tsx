import Image from "next/image";
import { ArrowRight, BadgeCheck, Download, GraduationCap, MapPin, Sparkles } from "lucide-react";
import Typewriter from "./Typewriter";
import { BrandIcon } from "./BrandIcons";
import { links, profile } from "@/data/cv";

// Staggered entrance delay for CSS animations (.anim-rise / .anim-pop in globals.css)
const d = (seconds: number) => ({ "--d": `${seconds}s` }) as React.CSSProperties;
const tilt = (deg: number, delay = 0) => ({ "--r": `${deg}deg`, "--d": `${delay}s` }) as React.CSSProperties;

const roles = ["Web Application Developer", "NSDA Certified Trainer", "NSDA Assessor", "Python & Django Developer"];

function PhotoCard() {
  return (
    <div className="relative mx-auto w-full max-w-[20rem] sm:max-w-[23rem]">
      {/* Morphing pastel blob behind the photo */}
      <div aria-hidden="true" className="blob absolute -inset-6 bg-gradient-brand opacity-25 blur-2xl" />
      <div aria-hidden="true" className="blob absolute inset-0 translate-x-6 translate-y-6 bg-gradient-brand opacity-90" />

      <div style={d(0.2)} className="anim-pop relative overflow-hidden rounded-[2.5rem] border-[6px] border-surface bg-surface shadow-[var(--shadow-lg)]">
        <div className="relative aspect-[4/5]">
          <Image
            src="/hero-portrait.jpg"
            alt={`Portrait of ${profile.name}`}
            fill
            priority
            sizes="(min-width: 640px) 360px, 300px"
            className="object-cover object-[50%_25%]"
          />
        </div>
      </div>

      {/* Sticker cards with facts from the CV */}
      <div style={d(0.7)} className="anim-pop absolute -left-6 top-[18%] sm:-left-14">
        <div style={tilt(-4)} className="float-y flex items-center gap-2.5 rounded-2xl border border-border bg-surface px-3.5 py-2.5 shadow-[var(--shadow-lg)]">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-p-mint text-success">
            <BadgeCheck className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-[0.82rem] font-bold text-fg">NSDA Certified</span>
            <span className="block text-[0.72rem] text-muted">Trainer & Assessor</span>
          </span>
        </div>
      </div>

      <div style={d(0.85)} className="anim-pop absolute -right-4 top-[46%] sm:-right-12">
        <div style={tilt(5, 1)} className="float-y rounded-2xl border border-border bg-surface px-4 py-3 text-center shadow-[var(--shadow-lg)]">
          <span className="block font-display text-3xl font-bold leading-none text-gradient">12+</span>
          <span className="mt-1 block text-[0.72rem] font-medium text-muted">years in IT</span>
        </div>
      </div>

      <div style={d(1)} className="anim-pop absolute -bottom-5 left-1/2 -translate-x-1/2">
        <div style={tilt(-2, 2)} className="float-y flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-surface px-4 py-2 shadow-[var(--shadow-lg)]">
          <GraduationCap className="h-4 w-4 text-accent-2" aria-hidden="true" />
          <span className="text-[0.8rem] font-semibold text-fg">MSc, University of Dhaka</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-x-clip pt-28 pb-14 md:pt-32 md:pb-20">
      {/* Drifting pastel blobs */}
      <div aria-hidden="true" className="drift absolute -left-24 top-10 -z-10 h-80 w-80 rounded-full bg-[var(--blob-1)] blur-3xl" />
      <div aria-hidden="true" style={d(3)} className="drift absolute right-[-6rem] top-40 -z-10 h-96 w-96 rounded-full bg-[var(--blob-2)] blur-3xl" />
      <div aria-hidden="true" style={d(6)} className="drift absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-[var(--blob-3)] blur-3xl" />

      <div className="wrap">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-surface/70 p-6 shadow-[var(--shadow)] backdrop-blur-sm sm:p-10 lg:p-14">
          <div aria-hidden="true" className="bg-gradient-soft absolute inset-0 -z-10 opacity-60" />
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10">
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <p style={d(0.05)} className="anim-rise inline-flex items-center gap-2 rounded-full bg-surface px-3.5 py-1.5 text-[0.82rem] font-semibold text-fg-soft shadow-[var(--shadow)]">
                <span className="live-dot h-2 w-2 rounded-full bg-success" aria-hidden="true" />
                Available for new opportunities
              </p>

              <p style={d(0.12)} className="anim-rise mt-7 font-display text-2xl font-medium text-fg-soft">
                Hello, I&apos;m <span className="wave" aria-hidden="true">👋</span>
              </p>
              <h1 style={d(0.18)} className="anim-rise mt-1 font-display text-[clamp(2.6rem,6.5vw,4.6rem)] font-extrabold leading-[1.02] tracking-tight text-fg">
                Priyanka <span className="text-gradient">Das Dewan</span>
              </h1>

              <p style={d(0.26)} className="anim-rise mt-4 min-h-[2.1em] font-display text-[clamp(1.2rem,2.5vw,1.6rem)] font-semibold text-fg-soft">
                <Sparkles className="mr-2 inline h-5 w-5 -translate-y-0.5 text-accent-2" aria-hidden="true" />
                <Typewriter phrases={roles} />
              </p>

              <p style={d(0.32)} className="anim-rise mx-auto mt-3 max-w-[34rem] text-[1.05rem] leading-relaxed text-muted lg:mx-0">
                {profile.tagline}
              </p>

              <div style={d(0.4)} className="anim-rise mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                <a href="#contact" className="btn btn-primary">
                  Let&apos;s talk
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href={profile.cv} download className="btn btn-outline">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download CV
                </a>
              </div>

              <div style={d(0.48)} className="anim-rise mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 lg:justify-start">
                <ul className="flex gap-2">
                  {links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={l.label}
                        className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-fg-soft shadow-[var(--shadow)] transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent-3"
                      >
                        <BrandIcon kind={l.kind} />
                      </a>
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1.5 text-[0.9rem] text-muted">
                  <MapPin className="h-4 w-4 text-accent-2" aria-hidden="true" />
                  {profile.location}, Bangladesh
                </span>
              </div>
            </div>

            <div className="order-1 px-6 pb-4 lg:order-2 lg:px-0">
              <PhotoCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

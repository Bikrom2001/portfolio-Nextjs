"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { Award, Briefcase, GraduationCap, Presentation } from "lucide-react";
import { certifications, engagements, experience } from "@/data/cv";

const stats = [
  { value: 12, suffix: "+", label: "Years in IT", note: "Since 2014", icon: Briefcase },
  { value: experience.filter((r) => r.track === "teaching").length, suffix: "", label: "Teaching & assessment roles", note: "Since 2019", icon: Presentation },
  { value: certifications.length, suffix: "", label: "Certifications", note: "Incl. 3 from NSDA", icon: Award },
  { value: engagements.length, suffix: "", label: "Institutes", note: "As resource person", icon: GraduationCap },
];

/** Shows the final number on first render (so it is never empty), then counts up when scrolled into view. */
function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(to);
  const armed = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = ref.current?.getBoundingClientRect();
    if (r && r.top > window.innerHeight) {
      armed.current = true;
      setVal(0);
    }
  }, []);

  useEffect(() => {
    if (!inView || !armed.current) return;
    const c = animate(0, to, { duration: 1.4, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section aria-label="Highlights" className="relative overflow-hidden pb-6">
      <div className="wrap">
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = s.icon;
            const tone = ["bg-p-violet text-accent-3", "bg-p-pink text-accent-2", "bg-p-peach text-fg-soft", "bg-p-mint text-success"][i % 4];
            return (
              <li
                key={s.label}
                className="reveal glass glass-hover flex items-center gap-4 p-4 sm:p-6"
              >
                <span className={`hidden h-14 w-14 shrink-0 place-items-center rounded-2xl ${tone} sm:grid`}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-display text-3xl font-bold leading-none text-fg sm:text-4xl">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </span>
                  <span className="mt-1.5 block text-[0.9rem] font-medium text-fg-soft">{s.label}</span>
                  <span className="block text-[0.78rem] text-muted">{s.note}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

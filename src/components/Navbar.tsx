"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { nav, profile } from "@/data/cv";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Precise scroll spy for navbar items
      const targetPos = scrollY + 220;

      const sectionEls = nav
        .map((item) => {
          const el = document.getElementById(item.id);
          if (!el) return null;
          return {
            id: item.id,
            top: el.offsetTop,
            bottom: el.offsetTop + el.offsetHeight,
          };
        })
        .filter(Boolean) as { id: string; top: number; bottom: number }[];

      // Near page bottom -> activate last item (Contact)
      if (window.innerHeight + scrollY >= document.body.offsetHeight - 80) {
        if (sectionEls.length > 0) {
          setActive(sectionEls[sectionEls.length - 1].id);
          return;
        }
      }

      // Hero / top of page
      if (scrollY < 180) {
        setActive("");
        return;
      }

      // Check from bottom to top
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const s = sectionEls[i];
        if (targetPos >= s.top) {
          setActive(s.id);
          return;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Main"
        className={`mx-auto flex h-16 max-w-[72rem] items-center justify-between gap-3 !rounded-full px-3 pl-4 transition-all duration-300 sm:px-4 ${
          scrolled || open ? "glass shadow-[var(--shadow)]" : "border border-transparent"
        }`}
      >
        <a href="#top" aria-label="Back to top" onClick={() => setOpen(false)}>
          <Logo size={36} />
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setActive(item.id)}
                className={`relative isolate block rounded-full px-3.5 py-2 text-[0.92rem] font-medium transition-colors ${
                  active === item.id ? "text-accent-3 font-semibold" : "text-muted hover:text-fg"
                }`}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-p-violet"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href={profile.cv} download className="btn btn-primary hidden !py-2.5 sm:inline-flex">
            <Download className="h-4 w-4" aria-hidden="true" />
            Resume
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-fg lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div className="mx-auto mt-1.5 h-[3px] w-full max-w-[68rem] overflow-hidden rounded-full">
        <motion.div
          style={{ scaleX: progress }}
          className="h-full w-full origin-left bg-gradient-brand"
          aria-hidden="true"
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="glass mx-auto mt-2 max-w-[72rem] p-3 lg:hidden"
          >
            <ul className="grid gap-1">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => {
                      setActive(item.id);
                      setOpen(false);
                    }}
                    className={`block rounded-2xl px-4 py-3 font-display text-lg font-semibold ${
                      active === item.id ? "bg-p-violet text-accent-3" : "text-fg hover:bg-bg-2"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href={profile.cv} download onClick={() => setOpen(false)} className="btn btn-primary mt-3 w-full">
              <Download className="h-4 w-4" aria-hidden="true" />
              Download resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

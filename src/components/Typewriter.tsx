"use client";

import { useEffect, useState } from "react";

/** Cycles through phrases with a typing effect. The first phrase is rendered in full on the server. */
export default function Typewriter({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(phrases[0]);
  const [deleting, setDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setStarted(true), 2200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!started) return;
    const full = phrases[index];
    let delay = deleting ? 35 : 70;
    if (!deleting && text === full) delay = 1800;
    if (deleting && text === "") delay = 300;

    const t = setTimeout(() => {
      if (!deleting && text === full) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      } else {
        setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, started, phrases]);

  return (
    <span aria-live="polite">
      <span className="text-gradient">{text}</span>
      <span className="caret ml-0.5 inline-block h-[1em] w-[3px] translate-y-[0.15em] rounded-full bg-accent-3" aria-hidden="true" />
    </span>
  );
}

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { RotateCcw } from "lucide-react";

const DEFAULT_HTML = `<div class="card">
  <h1>Hello, class!</h1>
  <p>Change this code and watch the preview update.</p>
  <button onclick="this.textContent = 'Competent ✓'">
    Assess me
  </button>
</div>`;

const DEFAULT_CSS = `body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-family: system-ui, sans-serif;
  background: #fbf8ff;
  padding: 10px;
  box-sizing: border-box;
}
.card {
  background: #fff;
  padding: 16px 18px;
  border-radius: 18px;
  text-align: center;
  max-width: 100%;
  box-shadow: 0 8px 24px rgba(30, 41, 90, .15);
}
h1 { margin: 0 0 4px; font-size: 1.2rem; color: #1e1433; }
p  { margin: 0 0 12px; font-size: 0.82rem; color: #5d6680; }
button {
  background: linear-gradient(120deg, #8b5cf6, #ec4899);
  color: #fff;
  border: 0;
  padding: 8px 16px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
}`;

type FileKey = "html" | "css";
const FILES: { key: FileKey; label: string }[] = [
  { key: "html", label: "index.html" },
  { key: "css", label: "style.css" },
];

export default function LiveLesson() {
  const reduce = useReducedMotion();
  const [code, setCode] = useState<Record<FileKey, string>>({ html: "", css: DEFAULT_CSS });
  const [active, setActive] = useState<FileKey>("html");
  const [typing, setTyping] = useState(true);
  const [preview, setPreview] = useState({ html: DEFAULT_HTML, css: DEFAULT_CSS });
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const finishTyping = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
    setCode((c) => ({ ...c, html: c.html.length < DEFAULT_HTML.length && typing ? DEFAULT_HTML : c.html }));
    setTyping(false);
  };

  // Type the HTML file out once on page load
  useEffect(() => {
    if (reduce) {
      setCode({ html: DEFAULT_HTML, css: DEFAULT_CSS });
      setTyping(false);
      return;
    }
    let i = 0;
    const start = setTimeout(() => {
      timer.current = setInterval(() => {
        i += 3;
        setCode((c) => ({ ...c, html: DEFAULT_HTML.slice(0, i) }));
        if (i >= DEFAULT_HTML.length) {
          if (timer.current) clearInterval(timer.current);
          timer.current = null;
          setTyping(false);
        }
      }, 22);
    }, 700);
    return () => {
      clearTimeout(start);
      if (timer.current) clearInterval(timer.current);
    };
  }, [reduce]);

  // Debounced preview
  useEffect(() => {
    const t = setTimeout(() => setPreview({ html: code.html, css: code.css }), typing ? 0 : 250);
    return () => clearTimeout(t);
  }, [code, typing]);

  const srcDoc = useMemo(
    () => `<!doctype html><html><head><meta charset="utf-8"><style>${preview.css}</style></head><body>${preview.html}</body></html>`,
    [preview]
  );

  const value = code[active];
  const lineCount = value.split("\n").length;

  const reset = () => {
    finishTyping();
    setCode({ html: DEFAULT_HTML, css: DEFAULT_CSS });
  };

  return (
    <div className="w-full overflow-hidden rounded-2xl sm:rounded-[2rem] bg-code text-code-text shadow-[var(--shadow-lg)] ring-1 ring-code-line">
      {/* Title bar */}
      <div className="flex items-center justify-between gap-2 border-b border-code-line px-3 sm:px-4 py-2 sm:py-2.5">
        <div role="tablist" aria-label="Lesson files" className="flex gap-1">
          {FILES.map((f) => (
            <button
              key={f.key}
              role="tab"
              type="button"
              aria-selected={active === f.key}
              onClick={() => {
                if (typing) finishTyping();
                setActive(f.key);
              }}
              className={`rounded-md px-2.5 sm:px-3 py-1 sm:py-1.5 font-mono text-[0.72rem] sm:text-[0.78rem] transition-colors ${
                active === f.key ? "bg-code-line text-code-text" : "text-code-text/55 hover:text-code-text"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[0.72rem] sm:text-[0.78rem] text-code-text/60 transition-colors hover:text-code-text"
        >
          <RotateCcw className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
          Reset
        </button>
      </div>

      {/* Editor */}
      <div className="relative flex h-48 sm:h-60 font-mono text-xs sm:text-[0.8rem] leading-[1.5rem] sm:leading-[1.6rem]">
        <div aria-hidden="true" className="select-none overflow-hidden px-2 sm:px-3 pt-3 text-right text-code-text/25">
          {Array.from({ length: Math.max(lineCount, 1) }, (_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <label htmlFor="lesson-editor" className="sr-only">
          Edit {active === "html" ? "HTML" : "CSS"} code
        </label>
        <textarea
          id="lesson-editor"
          value={value}
          spellCheck={false}
          wrap="off"
          autoCapitalize="off"
          autoCorrect="off"
          onFocus={() => typing && finishTyping()}
          onChange={(e) => setCode((c) => ({ ...c, [active]: e.target.value }))}
          onScroll={(e) => {
            const gutter = e.currentTarget.previousElementSibling?.previousElementSibling as HTMLElement | null;
            if (gutter) gutter.scrollTop = e.currentTarget.scrollTop;
          }}
          className="h-full w-full resize-none overflow-auto whitespace-pre bg-transparent pt-3 pr-4 text-code-text caret-sky-400 outline-none focus-visible:outline-none"
        />
        {typing && (
          <span className="pointer-events-none absolute bottom-3 right-4 rounded bg-code-line px-2 py-0.5 text-[0.7rem] text-code-text/60">
            typing…
          </span>
        )}
      </div>

      {/* Preview */}
      <div className="border-t border-code-line bg-surface-2 p-2">
        <div className="flex items-center justify-between px-2 pb-1.5 pt-0.5 text-[0.72rem] sm:text-[0.75rem] text-muted">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
            Live preview
          </span>
          <span>Click the button</span>
        </div>
        <iframe
          title="Live preview of the lesson code"
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          className="h-36 sm:h-44 w-full rounded-xl border border-border bg-surface-2"
        />
      </div>
    </div>
  );
}

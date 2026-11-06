import { Check, ExternalLink, FolderGit2 } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { BrandIcon } from "./BrandIcons";
import { projects } from "@/data/cv";

/** Schematic UI drawings of each app (not screenshots). */
function AdmissionMock() {
  return (
    <div>
      <div className="flex items-center gap-1.5">
        {["Profile", "Documents", "Submit"].map((s, i) => (
          <div key={s} className="flex flex-1 items-center gap-1.5">
            <span className={`grid h-5 w-5 place-items-center rounded-full text-[0.58rem] font-bold ${i < 2 ? "bg-success text-white" : "bg-border text-muted"}`}>
              {i + 1}
            </span>
            <span className="text-[0.62rem] font-semibold text-fg-soft">{s}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 space-y-2.5 rounded-2xl border border-border bg-surface p-3">
        <div className="h-2 w-1/4 rounded-full bg-fg/60" />
        <div className="h-7 rounded-full border border-border bg-bg" />
        <div className="grid grid-cols-2 gap-2">
          {["Certificate.pdf", "Photo.jpg"].map((f) => (
            <div key={f} className="grid h-14 place-items-center rounded-xl border-2 border-dashed border-accent/30 bg-p-violet/50 text-[0.6rem] font-medium text-accent-3">
              {f}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const mocks = [AdmissionMock];

const cardGradients = [
  "bg-gradient-soft",
  "bg-gradient-to-br from-p-sky via-p-violet to-p-pink",
  "bg-gradient-to-br from-rose-500/15 via-p-pink to-p-peach",
  "bg-gradient-to-br from-amber-500/15 via-rose-500/15 to-p-peach",
  "bg-gradient-to-br from-emerald-500/15 via-teal-500/15 to-p-sky",
  "bg-gradient-to-br from-amber-500/20 via-yellow-400/15 to-p-peach",
];

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="relative overflow-hidden py-20 md:py-28">
      <div className="wrap">
        <SectionHeader
          id="projects-title"
          tag="Projects"
          title="Featured projects"
          subtitle="Full-stack web applications and large-scale Python data analysis systems built end to end."
        />
        <div className="grid gap-6 lg:gap-8 md:grid-cols-2">
          {projects.map((p, i) => {
            const Mock = mocks[i % mocks.length];
            const hasImage = "image" in p && typeof p.image === "string";
            const hasLive = "live" in p && typeof p.live === "string" && p.live.length > 0 && !p.live.includes("github.com");
            const hasGithub = "github" in p && typeof p.github === "string" && p.github.length > 0;

            return (
              <article key={p.name} className="reveal glass glass-hover group flex flex-col overflow-hidden !rounded-[2rem]">
                {/* Preview area */}
                <div
                  className={`relative m-3 overflow-hidden rounded-[1.5rem] p-3.5 sm:p-4.5 ${
                    cardGradients[i % cardGradients.length]
                  }`}
                >
                  <div className="relative overflow-hidden rounded-[1.25rem] border border-border bg-surface/90 shadow-[var(--shadow)] transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:rotate-[-0.6deg]">
                    <div className="flex items-center gap-1.5 border-b border-border/60 px-3.5 py-2 bg-surface/80" aria-hidden="true">
                      <span className="h-2 w-2 rounded-full bg-rose-400" />
                      <span className="h-2 w-2 rounded-full bg-amber-400" />
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="ml-2 font-mono text-[0.62rem] text-muted">
                        {p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}.{p.stack.includes("Python") ? "py" : p.stack.includes("PHP") || p.stack.includes("Laravel") ? "php" : "app"}
                      </span>
                    </div>

                    {hasImage ? (
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-2">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="p-3.5 sm:p-4" aria-hidden="true">
                        <Mock />
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="pill w-fit">
                    <FolderGit2 className="h-3.5 w-3.5" aria-hidden="true" />
                    Project {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold tracking-tight text-fg">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.summary}</p>
                  <ul className="mt-4 grid gap-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2 text-xs sm:text-[0.88rem] text-fg-soft leading-snug">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-5" aria-label="Technologies">
                    {p.stack.map((s) => (
                      <li key={s} className="rounded-full bg-bg-2 px-2.5 py-1 text-[0.72rem] sm:text-[0.76rem] font-semibold text-fg-soft">
                        {s}
                      </li>
                    ))}
                  </ul>

                  {/* Actions: Live Website & GitHub */}
                  {(hasLive || hasGithub) && (
                    <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-border/70 pt-4">
                      {hasLive && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary !py-2 !px-4 text-xs sm:text-sm font-semibold shadow-sm transition-transform hover:scale-[1.02]"
                          aria-label={`View live website for ${p.name}`}
                        >
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                          Live Website
                        </a>
                      )}
                      {hasGithub && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`btn ${!hasLive ? "btn-primary" : "btn-outline"} !py-2 !px-4 text-xs sm:text-sm font-semibold shadow-sm transition-transform hover:scale-[1.02]`}
                          aria-label={`View GitHub repository for ${p.name}`}
                        >
                          <BrandIcon kind="github" className="h-3.5 w-3.5" />
                          GitHub Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

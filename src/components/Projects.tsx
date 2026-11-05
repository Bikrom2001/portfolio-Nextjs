import { Check, FolderGit2 } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { projects } from "@/data/cv";

/** Schematic UI drawings of each app (not screenshots). */
function JobPortalMock() {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-2">
        <div className="h-8 flex-1 rounded-full border border-border bg-bg px-3 text-[0.65rem] leading-8 text-muted">Search jobs…</div>
        <div className="flex h-8 items-center rounded-full bg-p-violet px-3 text-[0.62rem] font-bold text-accent-3">EN ▾</div>
      </div>
      {[0.72, 0.56, 0.64].map((w, i) => (
        <div key={i} className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-2.5">
          <div className={`h-8 w-8 rounded-xl ${["bg-p-violet", "bg-p-pink", "bg-p-peach"][i]}`} />
          <div className="flex-1 space-y-1.5">
            <div className="h-2 rounded-full bg-fg/70" style={{ width: `${w * 100}%` }} />
            <div className="h-1.5 w-1/3 rounded-full bg-border" />
          </div>
          <div className="rounded-full bg-p-pink px-2 py-0.5 text-[0.58rem] font-bold text-accent-2">Alert</div>
        </div>
      ))}
    </div>
  );
}

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

const mocks = [JobPortalMock, AdmissionMock];

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="relative overflow-hidden py-20 md:py-28">
      <div className="wrap">
        <SectionHeader
          id="projects-title"
          tag="Projects"
          title="Featured projects"
          subtitle="Two Django applications built end to end, from authentication and user roles to file uploads and email."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => {
            const Mock = mocks[i % mocks.length];
            return (
              <article key={p.name} className="reveal glass glass-hover group flex flex-col overflow-hidden !rounded-[2rem]">
                {/* Preview area */}
                <div className={`relative m-3 overflow-hidden rounded-[1.5rem] p-5 sm:p-6 ${i % 2 === 0 ? "bg-gradient-soft" : "bg-gradient-to-br from-p-sky via-p-violet to-p-pink"}`}>
                  <div className="relative rounded-[1.25rem] border border-border bg-surface/90 p-4 shadow-[var(--shadow)] transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:rotate-[-0.6deg]">
                    <div className="mb-3 flex items-center gap-1.5" aria-hidden="true">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                      <span className="ml-2 text-[0.62rem] text-muted">{p.name.toLowerCase().replace(/\s+/g, "-")}.app</span>
                    </div>
                    <div aria-hidden="true">
                      <Mock />
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="pill w-fit">
                    <FolderGit2 className="h-3.5 w-3.5" aria-hidden="true" />
                    Project {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-fg">{p.name}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{p.summary}</p>
                  <ul className="mt-5 grid gap-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2.5 text-[0.93rem] text-fg-soft">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label="Technologies">
                    {p.stack.map((s) => (
                      <li key={s} className="rounded-full bg-bg-2 px-3 py-1 text-[0.76rem] font-semibold text-fg-soft">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

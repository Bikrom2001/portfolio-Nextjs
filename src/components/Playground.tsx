import { Terminal } from "lucide-react";
import SectionHeader from "./SectionHeader";
import LiveLesson from "./LiveLesson";

const taught = ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Python", "Databases"];

export default function Playground() {
  return (
    <section id="playground" aria-labelledby="playground-title" className="py-20 md:py-28">
      <div className="wrap">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          <div>
            <SectionHeader
              id="playground-title"
              tag="Playground"
              align="left"
              title="Learn by doing: try a mini lesson"
              subtitle="Teaching is half of what I do. Edit the HTML or CSS and watch the preview update as you type, the same way my students start."
            />
            <div className="reveal glass p-5">
              <p className="flex items-center gap-2 text-[0.85rem] font-semibold text-fg">
                <Terminal className="h-4 w-4 text-accent-2" aria-hidden="true" />
                Subjects I teach
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {taught.map((t) => (
                  <li key={t} className="rounded-full bg-p-violet px-3 py-1 text-[0.78rem] font-semibold text-accent-3">
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[0.88rem] leading-relaxed text-muted">
                Taught at Infosystem Technology Limited, Children&apos;s Hope and the BASIS–SEIP project.
              </p>
            </div>
          </div>
          <div className="reveal relative">
            <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-brand opacity-20 blur-3xl" />
            <LiveLesson />
          </div>
        </div>
      </div>
    </section>
  );
}

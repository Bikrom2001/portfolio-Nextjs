import Image from "next/image";
import { ClipboardCheck, Code, GraduationCap, Mail, MapPin, Phone, Presentation } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { education, profile } from "@/data/cv";

const services = [
  {
    icon: Code,
    title: "Build web applications",
    text: "Dynamic, data-driven web apps with Python, Django and JavaScript, with optimized databases, PyTest tests and CI/CD pipelines.",
    tags: ["Django", "Python", "React"],
  },
  {
    icon: Presentation,
    title: "Train developers",
    text: "Hands-on lessons from HTML, CSS and JavaScript through Python, OOP and databases, built around real projects.",
    tags: ["HTML/CSS", "JavaScript", "Python"],
  },
  {
    icon: ClipboardCheck,
    title: "Assess competency",
    text: "NSDA skill assessments against the national Competency Standard for web and computer operation qualifications.",
    tags: ["Web Design L3", "Computer Op. L3", "Python L4"],
  },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 md:py-28">
      <div className="wrap">
        <SectionHeader id="about-title" tag="About me" title="Developer by craft, teacher by choice" subtitle="A short introduction to who I am and the three things I do best." />

        <div className="grid gap-4 lg:grid-cols-3">
          {/* Intro */}
          <article className="reveal glass relative overflow-hidden p-6 sm:p-8 lg:col-span-2">
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-p-pink blur-2xl" />
            <div className="relative flex items-center gap-4">
              <Image src={profile.photo} alt="" width={64} height={64} className="h-16 w-16 rounded-2xl object-cover ring-4 ring-p-violet" />
              <div>
                <h3 className="font-display text-xl font-bold text-fg">{profile.name}</h3>
                <p className="text-[0.92rem] text-accent-3">{profile.role}</p>
              </div>
            </div>
            <p className="relative mt-6 text-[1.05rem] leading-[1.8] text-fg-soft">{profile.summary}</p>
            <div className="relative mt-6 flex flex-wrap gap-2">
              <span className="pill">NSDA Certified Trainer</span>
              <span className="pill !bg-p-pink !text-accent-2">NSDA Assessor</span>
              <span className="pill !bg-p-sky !text-fg-soft">MSc, University of Dhaka</span>
              <span className="pill !bg-p-peach !text-fg-soft">BSc in EEE, BRAC University</span>
            </div>
          </article>

          {/* Quick info */}
          <aside className="reveal glass flex flex-col p-6 sm:p-8">
            <h3 className="font-display text-lg font-bold text-fg">Quick info</h3>
            <ul className="mt-5 space-y-4 text-[0.93rem]">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-2" aria-hidden="true" />
                <span>
                  <span className="block text-[0.78rem] text-muted">Location</span>
                  <span className="text-fg">{profile.location}, Bangladesh</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-2" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-[0.78rem] text-muted">Email</span>
                  <a href={`mailto:${profile.email}`} className="break-all text-fg hover:text-accent">
                    {profile.email}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-2" aria-hidden="true" />
                <span>
                  <span className="block text-[0.78rem] text-muted">Phone</span>
                  <a href={profile.phoneHref} className="text-fg hover:text-accent">
                    {profile.phone}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-accent-2" aria-hidden="true" />
                <span>
                  <span className="block text-[0.78rem] text-muted">Latest degree</span>
                  <span className="text-fg">{education[0].degree}</span>
                </span>
              </li>
            </ul>
            <div className="mt-auto pt-6">
              <span className="inline-flex items-center gap-2 rounded-lg bg-success/12 px-3 py-1.5 text-[0.82rem] font-semibold text-success">
                <span className="live-dot h-2 w-2 rounded-full bg-success" aria-hidden="true" />
                Open to new opportunities
              </span>
            </div>
          </aside>

          {/* What I do */}
          {services.map((s, i) => {
            const Icon = s.icon;
            const tone = ["bg-p-violet text-accent-3", "bg-p-pink text-accent-2", "bg-p-mint text-success"][i % 3];
            return (
              <article key={s.title} className="reveal glass glass-hover group p-6 sm:p-7">
                <span className={`grid h-14 w-14 place-items-center rounded-2xl ${tone} transition-transform group-hover:scale-110 group-hover:-rotate-6`}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-fg">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{s.text}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <li key={t} className="rounded-full bg-bg-2 px-2.5 py-1 text-[0.74rem] font-medium text-fg-soft">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

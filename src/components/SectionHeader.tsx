type Props = {
  tag: string; // short label shown in a pastel pill, e.g. "About me"
  title: string;
  subtitle?: string;
  id: string;
  align?: "left" | "center";
};

export default function SectionHeader({ tag, title, subtitle, id, align = "center" }: Props) {
  const center = align === "center";
  return (
    <div className={`reveal mb-12 md:mb-14 ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <p className="pill">
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" aria-hidden="true" />
        {tag}
      </p>
      <h2 id={id} className="mt-4 font-display text-[clamp(2rem,4.6vw,3.1rem)] font-bold leading-[1.1] tracking-tight text-fg">
        {title}
      </h2>
      {subtitle && <p className={`mt-4 max-w-xl text-[1.05rem] leading-relaxed text-muted ${center ? "mx-auto" : ""}`}>{subtitle}</p>}
    </div>
  );
}

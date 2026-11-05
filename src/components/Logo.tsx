import { useId } from "react";

/** "pd" monogram: the p and d share one bowl and mirror each other (point-symmetric). */
export function LogoMark({ size = 36, className = "" }: { size?: number; className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`lg-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="18" fill={`url(#lg-${id})`} />
      <circle cx="32" cy="32" r="9.5" fill="none" stroke="#FDE2F0" strokeWidth="5" />
      <path d="M22.5 22.5V51M41.5 13V41.5" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ size = 36, withWordmark = true, className = "" }: { size?: number; withWordmark?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} />
      {withWordmark && (
        <span className="font-display text-[1.05rem] font-bold leading-none tracking-tight text-fg">
          Priyanka<span className="font-medium text-muted"> Das Dewan</span>
        </span>
      )}
    </span>
  );
}

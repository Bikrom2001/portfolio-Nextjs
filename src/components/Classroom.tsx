"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Award,
  Building2,
  Calendar,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  GraduationCap,
  Maximize2,
  Play,
  Sparkles,
  Users,
  Video,
  X,
} from "lucide-react";

type BatchCategory = "all" | "infosystem" | "childrens-hope" | "dtti-nsda" | "seip-basis" | "video";

type MomentItem = {
  id: string;
  category: BatchCategory;
  tag: string;
  tagIcon: "users" | "video" | "award" | "grad";
  indicator: string; // e.g. "1/6 Photos" or "2026"
  title: string;
  institute: string;
  batch?: string;
  level?: string;
  date: string;
  desc?: string;
  isVideo?: boolean;
  videoUrl?: string;
  image?: string;
  photos?: string[];
  isLogo?: boolean;
  color: string;
};

const MOMENTS: MomentItem[] = [
  {
    id: "m-1",
    category: "infosystem",
    tag: "Certification Day",
    tagIcon: "users",
    indicator: "1/5 Photos",
    title: "Digital Business Operations (DBO)",
    institute: "Infosystem Technology Limited · BACCO-SICIP",
    batch: "DBO Batch 01",
    date: "2026",
    image: "/classroom/dbo-batch-01-group.jpg",
    photos: [
      "/classroom/dbo-batch-01-group.jpg",
      "/classroom/dbo-batch-01-cert-1.jpg",
      "/classroom/dbo-batch-01-cert-2.jpg",
      "/classroom/dbo-batch-01-gift.jpg",
      "/classroom/dbo-batch-01-cert-3.jpg",
    ],
    color: "from-blue-600/40 via-purple-600/30 to-surface-2",
  },
  {
    id: "m-2",
    category: "video",
    tag: "Video Highlight",
    tagIcon: "video",
    indicator: "2026",
    title: "Live Classroom Experience & Practical Demo",
    institute: "Infosystem Technology Limited · BACCO-SICIP",
    batch: "DBO Batch 01",
    date: "2026",
    isVideo: true,
    videoUrl: "/classroom-video.mp4",
    color: "from-blue-600/40 via-indigo-600/30 to-surface-2",
  },
  {
    id: "m-1b",
    category: "infosystem",
    tag: "ASSET-BWCCI",
    tagIcon: "users",
    indicator: "1/3 Photos",
    title: "Web Design",
    institute: "Infosystem Technology Limited",
    level: "Level 3",
    batch: "ASSET-BWCCI-3rd Cycle",
    date: "2026",
    image: "/classroom/web-design-asset-1.jpg",
    photos: [
      "/classroom/web-design-asset-1.jpg",
      "/classroom/web-design-asset-2.jpg",
      "/classroom/web-design-asset-3.jpg",
    ],
    color: "from-indigo-600/40 via-purple-600/30 to-surface-2",
  },
  {
    id: "m-wit",
    category: "dtti-nsda",
    tag: "NSDA Certified",
    tagIcon: "award",
    indicator: "WIT Batch",
    title: "Web Design and Development for Freelancing Level 3",
    institute: "WIT Institute",
    level: "Level 3",
    batch: "NSDA-WDFF-L3-B2",
    date: "2026",
    image: "/wit-institute-logo.png",
    isLogo: true,
    color: "from-purple-600/30 via-pink-600/20 to-surface-2",
  },
  {
    id: "m-3",
    category: "dtti-nsda",
    tag: "Her Power / ASSET-BWCCI",
    tagIcon: "users",
    indicator: "1 Photo",
    title: "Women in Tech — Web Application Development",
    institute: "Department of ICT · Her Power Project",
    level: "Level 4",
    batch: "Women Cohort 02",
    date: "2024",
    image: "/classroom/women-in-tech-lab.jpg",
    color: "from-pink-600/40 via-rose-600/30 to-surface-2",
  },
  {
    id: "m-4",
    category: "childrens-hope",
    tag: "Hands-on Lab",
    tagIcon: "users",
    indicator: "Batch 03",
    title: "Full-Stack Project Development Workshop",
    institute: "Children's Hope",
    batch: "Batch 03",
    date: "2026",
    image: "/childrens-hope-logo.jpg",
    isLogo: true,
    color: "from-amber-600/30 via-orange-600/20 to-surface-2",
  },
  {
    id: "m-5",
    category: "dtti-nsda",
    tag: "NSDA Assessment Day",
    tagIcon: "award",
    indicator: "1 Photo",
    title: "National Skill Competency Assessment (CBT&A)",
    institute: "National Skill Development Authority (NSDA)",
    level: "Level 4",
    batch: "Assessor Session",
    date: "2025",
    image: "/classroom/nsda-assessment-priyanka.jpg",
    color: "from-amber-600/40 via-orange-600/30 to-surface-2",
  },
  {
    id: "m-6",
    category: "seip-basis",
    tag: "SEIP Project",
    tagIcon: "grad",
    indicator: "SEIP Logo",
    title: "Web Design & Foundation Bootcamp",
    institute: "BASIS – SEIP Project",
    batch: "SEIP Batch 12",
    date: "2023",
    image: "/seip-logo.webp",
    isLogo: true,
    color: "from-emerald-600/30 via-teal-600/20 to-surface-2",
  },
];

function matchesFilter(item: MomentItem, filterId: BatchCategory): boolean {
  if (filterId === "all") return true;
  if (filterId === "video") return !!item.isVideo;
  if (filterId === "infosystem") {
    return (
      item.category === "infosystem" ||
      item.institute.toLowerCase().includes("infosystem")
    );
  }
  return item.category === filterId;
}

const FILTER_TABS: { id: BatchCategory; label: string }[] = [
  { id: "all", label: "All Batches" },
  { id: "infosystem", label: "Infosystem Tech" },
  { id: "childrens-hope", label: "Children's Hope" },
  { id: "dtti-nsda", label: "DTTI & NSDA" },
  { id: "seip-basis", label: "SEIP & BASIS" },
  { id: "video", label: "Video" },
];

const FILTERS = FILTER_TABS;

function MomentCard({
  item,
  onOpen,
  renderIcon,
}: {
  item: MomentItem;
  onOpen: (startIdx?: number) => void;
  renderIcon: (kind: MomentItem["tagIcon"]) => React.ReactNode;
}) {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!item.photos || item.photos.length <= 1) return;
    setActivePhotoIdx((prev) => (prev === 0 ? item.photos!.length - 1 : prev - 1));
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!item.photos || item.photos.length <= 1) return;
    setActivePhotoIdx((prev) => (prev === item.photos!.length - 1 ? 0 : prev + 1));
  };

  const currentImg =
    item.photos && item.photos.length > 0 ? item.photos[activePhotoIdx] : item.image;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onClick={() => onOpen(activePhotoIdx)}
      className="group relative cursor-pointer overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-[var(--shadow-lg)]"
    >
      {/* Visual Area */}
      <div className={`relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br ${item.color}`}>
        {item.isVideo && item.videoUrl ? (
          <>
            <video
              src={item.videoUrl}
              muted
              loop
              autoPlay
              playsInline
              className="absolute inset-0 h-full w-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/35 backdrop-blur-[0.5px]" />
          </>
        ) : item.isLogo ? (
          <div className="absolute inset-0 flex items-center justify-center p-6 bg-gradient-to-br from-surface via-surface-2 to-p-violet/20">
            <div className="relative flex h-20 w-48 items-center justify-center rounded-2xl border border-border bg-white p-3.5 shadow-sm transition-transform duration-500 group-hover:scale-105 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className={
                  item.id === "m-6"
                    ? "w-full scale-[2.35] object-contain"
                    : "max-h-full max-w-full object-contain"
                }
              />
            </div>
          </div>
        ) : currentImg ? (
          <div className="relative h-full w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImg}
                src={currentImg}
                alt={item.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30" />
          </div>
        ) : (
          /* Subtle Grid / Pattern Backdrop */
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(var(--accent) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />
        )}

        {/* Video Play Button Overlay */}
        {item.isVideo && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.15 }}
              className="relative grid h-16 w-16 place-items-center rounded-full bg-blue-500 text-white shadow-[0_0_35px_rgba(59,130,246,0.7)]"
            >
              <Play className="ml-1 h-7 w-7 fill-white" aria-hidden="true" />
              <span className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-40" />
            </motion.div>
          </div>
        )}

        {/* Fallback avatar if no image/video */}
        {!item.isVideo && !currentImg && !item.isLogo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-2xl border border-white/20 bg-black/30 p-4 backdrop-blur-md">
              <Users className="mx-auto h-8 w-8 text-white/90" />
              <p className="mt-2 text-xs font-semibold text-white/90">
                {item.institute}
              </p>
            </div>
          </div>
        )}

        {/* ================= CARD SLIDER CONTROLS ================= */}
        {item.photos && item.photos.length > 1 && (
          <>
            {/* Prev / Next Arrows on Hover */}
            <button
              type="button"
              onClick={prevPhoto}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 grid h-8 w-8 place-items-center rounded-full bg-black/60 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-black/90 backdrop-blur-sm"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={nextPhoto}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 grid h-8 w-8 place-items-center rounded-full bg-black/60 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-black/90 backdrop-blur-sm"
              aria-label="Next photo"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Pagination Dots at Bottom of Photo (matching screenshot) */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 backdrop-blur-md">
              {item.photos.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIdx(idx);
                  }}
                  className={`transition-all duration-300 ${
                    idx === activePhotoIdx
                      ? "h-1.5 w-5 rounded-full bg-blue-500"
                      : "h-1.5 w-1.5 rounded-full bg-white/50 hover:bg-white/90"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Overlaid Badges matching the image */}
        <div className="pointer-events-none absolute inset-x-3 top-3 z-20 flex items-center justify-between gap-2">
          {/* Top Left Tag */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[0.72rem] font-semibold text-white backdrop-blur-md shadow-sm">
            {renderIcon(item.tagIcon)}
            <span>{item.tag}</span>
          </div>

          {/* Top Right Indicator */}
          <div className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/60 px-2.5 py-1 text-[0.72rem] font-mono font-medium text-white/90 backdrop-blur-md shadow-sm">
            {item.isVideo ? (
              <Calendar className="h-3 w-3 text-sky-300" />
            ) : (
              <Camera className="h-3 w-3 text-pink-300" />
            )}
            <span>
              {item.photos && item.photos.length > 1
                ? `${activePhotoIdx + 1}/${item.photos.length} Photos`
                : item.indicator}
            </span>
          </div>
        </div>

        {/* Hover Quick Zoom Icon */}
        <div className="pointer-events-none absolute bottom-3 right-3 z-10 grid h-8 w-8 place-items-center rounded-xl bg-black/60 text-white opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100">
          <Maximize2 className="h-4 w-4" />
        </div>
      </div>

      {/* Card Bottom Details matching screenshot */}
      <div className="flex flex-1 flex-col justify-between p-5 space-y-3.5">
        <div className="space-y-2">
          {/* Top Row: Icon + Institute in Monospace Uppercase */}
          <div className="flex items-center gap-2">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg border border-border bg-surface-2 text-accent-3 dark:text-accent">
              <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span className="font-mono text-[0.68rem] sm:text-xs font-bold tracking-wider text-accent-3 dark:text-accent uppercase line-clamp-1">
              {item.institute}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-base sm:text-lg font-bold leading-snug text-fg group-hover:text-accent-3 dark:group-hover:text-accent transition-colors">
            {item.title}
          </h3>
        </div>

        {/* Bottom Row: Batch & Level Pills on Left, Date with Calendar on Right */}
        <div className="flex items-center justify-between gap-3 border-t border-border/60 pt-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {item.level && (
              <span className="rounded-lg border border-accent/40 bg-p-sky/50 dark:bg-accent/15 px-2.5 py-1 text-[0.7rem] font-mono font-semibold text-accent-3 dark:text-accent">
                {item.level}
              </span>
            )}
            {item.batch && (
              <span className="rounded-lg border border-border bg-surface-2 px-2.5 py-1 text-[0.7rem] font-mono font-semibold text-fg-soft">
                {item.batch}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 font-mono text-xs text-muted shrink-0">
            <Calendar className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            <span>{item.date}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Classroom() {
  const [activeFilter, setActiveFilter] = useState<BatchCategory>("all");
  const [selectedMoment, setSelectedMoment] = useState<MomentItem | null>(null);
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const filteredMoments = MOMENTS.filter((item) => matchesFilter(item, activeFilter));

  const renderIcon = (kind: MomentItem["tagIcon"]) => {
    switch (kind) {
      case "video":
        return <Video className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />;
      case "award":
        return <Award className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />;
      case "grad":
        return <GraduationCap className="h-3.5 w-3.5 text-indigo-400" aria-hidden="true" />;
      default:
        return <Users className="h-3.5 w-3.5 text-accent-2" aria-hidden="true" />;
    }
  };

  return (
    <section id="classroom" aria-labelledby="classroom-title" className="relative overflow-hidden py-20 md:py-28">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 40, -30, 0],
                  y: [0, -30, 35, 0],
                  scale: [1, 1.15, 0.95, 1],
                }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 top-1/4 h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-accent/30 via-p-pink to-transparent opacity-60 blur-[100px]"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, -45, 30, 0],
                  y: [0, 35, -25, 0],
                }
          }
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 bottom-10 h-[28rem] w-[28rem] rounded-full bg-gradient-to-bl from-accent-2/25 via-p-violet to-transparent opacity-50 blur-[110px]"
        />
      </div>

      <div className="wrap relative z-10">
        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="font-mono text-xs font-bold tracking-widest text-accent uppercase">
              06 —— CLASSROOM & MENTORSHIP
            </span>
          </div>

          <h2
            id="classroom-title"
            className="font-display text-[clamp(2.2rem,4.8vw,3.3rem)] font-bold leading-[1.12] tracking-tight text-fg"
          >
            Training In Action & <span className="text-gradient">Student Moments</span>
          </h2>

          <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
            Real moments with my students from hands-on training sessions, interactive workshops, and intensive coding programs across various institutes.
          </p>
        </div>

        {/* Dynamic Filter Pills with live item counts */}
        <div className="mb-10 flex flex-wrap items-center gap-2.5">
          {FILTER_TABS.map((f) => {
            const isActive = activeFilter === f.id;
            const count = MOMENTS.filter((item) => matchesFilter(item, f.id)).length;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-brand text-white shadow-md shadow-accent/25"
                    : "border border-border bg-surface text-fg-soft hover:border-accent hover:text-fg"
                }`}
              >
                <span>{f.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[0.7rem] font-bold transition-colors ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-surface-2 text-muted group-hover:text-fg"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Moments Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredMoments.map((item) => (
              <MomentCard
                key={item.id}
                item={item}
                onOpen={(startIdx) => {
                  setSelectedMoment(item);
                  setCurrentPhotoIdx(startIdx || 0);
                }}
                renderIcon={renderIcon}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Video Modal */}
      <AnimatePresence>
        {selectedMoment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMoment(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Modal Content Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative z-10 w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl border border-border bg-surface p-4 sm:p-6 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg border border-border bg-surface-2 text-accent-3 dark:text-accent">
                      <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs font-bold tracking-wider text-accent-3 dark:text-accent uppercase">
                      {selectedMoment.institute}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-fg">
                    {selectedMoment.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {selectedMoment.level && (
                      <span className="rounded-lg border border-accent/40 bg-p-sky/50 dark:bg-accent/15 px-2.5 py-0.5 text-xs font-mono font-semibold text-accent-3 dark:text-accent">
                        {selectedMoment.level}
                      </span>
                    )}
                    {selectedMoment.batch && (
                      <span className="rounded-lg border border-border bg-surface-2 px-2.5 py-0.5 text-xs font-mono font-semibold text-fg-soft">
                        {selectedMoment.batch}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 font-mono text-xs text-muted ml-1">
                      <Calendar className="h-3 w-3 text-accent" />
                      {selectedMoment.date}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedMoment(null)}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-surface-2 text-fg hover:bg-p-pink hover:text-accent-2 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Media Preview Box */}
              <div className={`mt-5 relative aspect-video w-full overflow-hidden rounded-2xl bg-black flex items-center justify-center shadow-inner`}>
                {selectedMoment.isVideo && selectedMoment.videoUrl ? (
                  <video
                    src={selectedMoment.videoUrl}
                    controls
                    autoPlay
                    playsInline
                    className="h-full w-full object-contain rounded-2xl"
                  />
                ) : selectedMoment.photos && selectedMoment.photos.length > 0 ? (
                  <div className="relative h-full w-full flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={selectedMoment.photos[currentPhotoIdx]}
                        src={selectedMoment.photos[currentPhotoIdx]}
                        alt={`${selectedMoment.title} photo ${currentPhotoIdx + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="h-full w-full object-contain"
                      />
                    </AnimatePresence>

                    {/* Carousel Prev / Next Buttons */}
                    {selectedMoment.photos.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentPhotoIdx((prev) =>
                              prev === 0 ? selectedMoment.photos!.length - 1 : prev - 1
                            );
                          }}
                          className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-black/85 transition-colors"
                          aria-label="Previous photo"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentPhotoIdx((prev) =>
                              prev === selectedMoment.photos!.length - 1 ? 0 : prev + 1
                            );
                          }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-black/85 transition-colors"
                          aria-label="Next photo"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>

                        {/* Photo Counter Pill */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-black/70 px-3 py-1 font-mono text-xs font-semibold text-white backdrop-blur-md">
                          {currentPhotoIdx + 1} / {selectedMoment.photos.length}
                        </div>
                      </>
                    )}
                  </div>
                ) : selectedMoment.image ? (
                  selectedMoment.isLogo ? (
                    <div className="flex h-full w-full items-center justify-center p-8 bg-surface-2">
                      <div className="flex h-28 w-64 items-center justify-center rounded-2xl border border-border bg-white p-5 shadow-md overflow-hidden">
                        <img
                          src={selectedMoment.image}
                          alt={selectedMoment.title}
                          className={
                            selectedMoment.id === "m-6"
                              ? "w-full scale-[2.35] object-contain"
                              : "max-h-full max-w-full object-contain"
                          }
                        />
                      </div>
                    </div>
                  ) : (
                    <img
                      src={selectedMoment.image}
                      alt={selectedMoment.title}
                      className="h-full w-full object-contain rounded-2xl"
                    />
                  )
                ) : (
                  <div className="text-center p-6 space-y-2">
                    <Users className="mx-auto h-12 w-12 text-white/90" />
                    <p className="text-base font-bold text-white">
                      {selectedMoment.title}
                    </p>
                    <p className="text-xs text-white/80">
                      {selectedMoment.institute}
                    </p>
                  </div>
                )}
              </div>

              {/* Thumbnail Strip for Multi-Photo Albums */}
              {selectedMoment.photos && selectedMoment.photos.length > 1 && (
                <div className="mt-3 flex items-center justify-center gap-2 overflow-x-auto pb-1">
                  {selectedMoment.photos.map((photo, idx) => (
                    <button
                      key={photo}
                      type="button"
                      onClick={() => setCurrentPhotoIdx(idx)}
                      className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                        idx === currentPhotoIdx
                          ? "border-accent scale-105 shadow-md"
                          : "border-border/60 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={photo}
                        alt={`Thumbnail ${idx + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

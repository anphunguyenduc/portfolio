import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    title: "Greenfield Basketball Team",
    meta: "Head of Finance · Sep 2024 – May 2026",
    summary:
      "Running the money for a 50-member club: budgets, fundraising, and the slow business of earning a team's trust.",
    href: "/leadership/gbt",
    img: "/images/leadership/gbt-logo.jpg",
    imgAlt: "Greenfield Basketball Team logo",
  },
  {
    num: "02",
    title: "TALKTOPUS: Echoes",
    meta: "Head of Human Resources · Nov – Dec 2025",
    summary:
      "HR and MC for the first student-run TEDx-style speaking competition at Greenfield, a 40-person committee, a 50-participant cohort, and one finals morning I won't forget.",
    href: "/leadership/talktopus",
    img: "/images/leadership/talktopus.jpg",
    imgAlt: "TALKTOPUS 2025 key visual",
  },
  {
    num: "03",
    title: "Greenfield Volunteer Club",
    meta: "Event committee member · Sep 2025 – Present",
    summary:
      "The work that finally happens outside the school gates. Three projects under one umbrella. A bake-sale fundraiser, a mountain-school trip before Tết, and the club's flagship annual liveshow.",
    href: "/leadership/gvc",
    img: "/images/leadership/gvc-logo.jpg",
    imgAlt: "Greenfield Volunteer Club logo",
  },
];

export default function LeadershipPage() {
  return (
    <div className="px-8 py-16 pt-20 lg:pt-16 lg:px-16 lg:py-20 max-w-[1100px]">
      {/* Eyebrow */}
      <p className="text-[11px] font-semibold tracking-widest text-text-muted uppercase mb-8">
        <span className="text-accent">02</span> · LEADERSHIP &amp; ACTIVITIES
      </p>

      {/* Two-line H1 */}
      <h1
        className="text-5xl font-semibold leading-tight text-text-primary mb-1"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        LEADERSHIP
      </h1>
      <p
        className="text-5xl text-accent mb-10"
        style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
      >
        &amp; activities
      </p>

      {/* Intro prose */}
      <p className="text-text-muted text-base leading-[1.75] mb-16 max-w-[680px]">
        Three projects across two years of high school. Each one cracked open
        a different part of how I see the world: how money moves through a
        small group of people, how a competition holds together when the people
        inside it don&apos;t, and how the work changes when it stops being for
        people you already know. Together, they&apos;ve widened what I think
        I&apos;m capable of, and what I think work is for.
      </p>

      {/* Project cards */}
      <ol className="space-y-4">
        {projects.map(({ num, title, meta, summary, href, img, imgAlt }) => (
          <li key={num}>
            <Link
              href={href}
              className="hover-lift group flex items-center gap-5 border border-border bg-bg-card px-5 py-5 hover:border-text-subtle"
            >
              {/* Number */}
              <span
                className="text-accent text-lg shrink-0 w-7 self-start pt-0.5"
                style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
              >
                {num}
              </span>

              {/* Thumbnail */}
              <div className="relative w-20 h-20 lg:w-[120px] lg:h-[120px] shrink-0 rounded border border-border overflow-hidden">
                <Image
                  src={img}
                  alt={imgAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80px, 120px"
                />
              </div>

              {/* Body */}
              <div className="flex-1 min-w-0">
                <p
                  className="text-text-primary font-semibold text-base mb-1"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {title}
                </p>
                <p className="text-text-subtle text-xs uppercase tracking-widest mb-3">
                  {meta}
                </p>
                <p className="text-text-muted text-sm leading-[1.65]">
                  {summary}
                </p>
              </div>

              {/* Arrow */}
              <span className="text-text-subtle text-base shrink-0 self-start pt-0.5 group-hover:text-accent transition-colors">
                →
              </span>
            </Link>
          </li>
        ))}
      </ol>

      {/* Earlier Work */}
      <div className="mt-16">
        <p className="text-[10px] font-semibold tracking-widest text-text-subtle uppercase mb-4">
          Earlier work
        </p>
        <div className="h-px bg-border mb-6" />
        <Link
          href="/leadership/donut-bully"
          className="hover-lift group flex items-center gap-4 border border-border px-4 py-4 hover:border-text-subtle"
        >
          {/* Thumbnail */}
          <div className="relative w-20 h-20 lg:w-[120px] lg:h-[120px] shrink-0 rounded border border-border overflow-hidden">
            <Image
              src="/images/leadership/donut-bully.png"
              alt="Donut Bully Campaign"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 80px, 120px"
            />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-semibold tracking-widest text-text-subtle uppercase mb-1">
              Earlier work
            </p>
            <p
              className="text-text-muted font-semibold text-sm mb-1"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Donut Bully Campaign
            </p>
            <p className="text-text-subtle text-xs uppercase tracking-widest mb-2">
              Team participant · September 2024
            </p>
            <p className="text-text-subtle text-xs leading-[1.65]">
              A short video entry for the school&apos;s annual anti-bullying
              campaign. Winner of The Influential Changemaker award.
            </p>
          </div>
          <span className="text-text-subtle text-base shrink-0 self-start pt-0.5 group-hover:text-accent transition-colors">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}

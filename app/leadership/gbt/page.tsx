import Image from "next/image";
import { FacebookButton } from "@/components/FacebookButton";
import { FadeIn } from "@/components/FadeIn";

function BasketballIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ff7a7a"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      className="shrink-0 opacity-50"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 12 Q12 7 20.5 12" />
      <path d="M3.5 12 Q12 17 20.5 12" />
      <path d="M12 3.5 Q7 12 12 20.5" />
      <path d="M12 3.5 Q17 12 12 20.5" />
    </svg>
  );
}

function MiniBarChart({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="#ff7a7a"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <line x1="1" y1="14" x2="15" y2="14" />
      <line x1="2" y1="14" x2="2" y2="9" />
      <line x1="6" y1="14" x2="6" y2="5" />
      <line x1="10" y1="14" x2="10" y2="8" />
      <line x1="14" y1="14" x2="14" y2="2" />
    </svg>
  );
}

function SheetsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect width="18" height="18" rx="3" fill="#0f9d58" />
      <rect x="4" y="5" width="10" height="1.5" rx="0.5" fill="white" fillOpacity="0.9" />
      <rect x="4" y="8" width="10" height="1.5" rx="0.5" fill="white" fillOpacity="0.6" />
      <rect x="4" y="11" width="6" height="1.5" rx="0.5" fill="white" fillOpacity="0.4" />
    </svg>
  );
}

function GoogleSheetsLogo() {
  return (
    <svg width="44" height="54" viewBox="0 0 44 54" fill="none" aria-label="Google Sheets">
      {/* Document body */}
      <path d="M2 4 C2 1.8 3.8 0 6 0 H28 L42 14 V50 C42 52.2 40.2 54 38 54 H6 C3.8 54 2 52.2 2 50 Z" fill="#1AA260"/>
      {/* Folded corner — darker green triangle */}
      <path d="M28 0 L42 14 H30 C28.9 14 28 13.1 28 12 Z" fill="#0D7A45"/>
      {/* White spreadsheet area */}
      <rect x="7" y="22" width="30" height="24" rx="1" fill="white"/>
      {/* Header row tint */}
      <rect x="7" y="22" width="30" height="6" rx="1" fill="#E6F4EE"/>
      {/* Horizontal grid lines */}
      <line x1="7"  y1="28" x2="37" y2="28" stroke="#BFD9CC" strokeWidth="0.8"/>
      <line x1="7"  y1="35" x2="37" y2="35" stroke="#BFD9CC" strokeWidth="0.8"/>
      {/* Vertical grid lines */}
      <line x1="17" y1="22" x2="17" y2="46" stroke="#BFD9CC" strokeWidth="0.8"/>
      <line x1="28" y1="22" x2="28" y2="46" stroke="#BFD9CC" strokeWidth="0.8"/>
      {/* Cell content hints */}
      <rect x="9"  y="24" width="6" height="2.5" rx="0.4" fill="#1AA260" fillOpacity="0.35"/>
      <rect x="19" y="24" width="4" height="2.5" rx="0.4" fill="#1AA260" fillOpacity="0.25"/>
      <rect x="9"  y="30" width="5" height="2.5" rx="0.4" fill="#1AA260" fillOpacity="0.2"/>
      <rect x="9"  y="37" width="4" height="2.5" rx="0.4" fill="#1AA260" fillOpacity="0.15"/>
    </svg>
  );
}

function LedgerFlowIllustration() {
  const c = "#ff7a7a";
  return (
    <svg
      viewBox="0 0 240 240"
      className="w-[160px] h-[160px] lg:w-[240px] lg:h-[240px]"
      fill="none"
      aria-hidden="true"
    >
      {/* Ledger rectangle */}
      <rect
        x="60" y="75" width="120" height="90"
        stroke={c} strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round"
      />
      {/* Ledger rows */}
      {[90, 101, 112, 123, 134].map((y) => (
        <line
          key={y} x1="72" y1={y} x2="168" y2={y}
          stroke={c} strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"
        />
      ))}
      {/* Coin 1 — top right */}
      <circle cx="200" cy="42" r="22" stroke={c} strokeOpacity="0.8" strokeWidth="1.5" />
      <text
        x="200" y="47" textAnchor="middle" fontSize="12"
        fill={c} fillOpacity="0.8" fontFamily="system-ui, sans-serif" fontWeight="500"
      >
        ₫
      </text>
      {/* Coin 2 — bottom left */}
      <circle cx="32" cy="200" r="18" stroke={c} strokeOpacity="0.8" strokeWidth="1.5" />
      <text
        x="32" y="205" textAnchor="middle" fontSize="11"
        fill={c} fillOpacity="0.8" fontFamily="system-ui, sans-serif" fontWeight="500"
      >
        $
      </text>
      {/* Coin 3 — bottom right */}
      <circle cx="204" cy="200" r="18" stroke={c} strokeOpacity="0.8" strokeWidth="1.5" />
      <text
        x="204" y="205" textAnchor="middle" fontSize="11"
        fill={c} fillOpacity="0.8" fontFamily="system-ui, sans-serif" fontWeight="500"
      >
        ₫
      </text>
      {/* Flow line: ledger top-right → Coin 1 */}
      <line
        x1="175" y1="82" x2="185" y2="64"
        stroke={c} strokeOpacity="0.56" strokeWidth="1.5" strokeLinecap="round"
      />
    </svg>
  );
}

function SectionPhoto({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-10">
      <div className="w-full rounded overflow-hidden border border-border">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={900}
          className="w-full h-auto"
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 1100px"
        />
      </div>
      <figcaption className="mt-3 text-xs text-text-muted italic">
        {caption}
      </figcaption>
    </figure>
  );
}

function SectionLabel({
  num,
  title,
  icon = "basketball",
}: {
  num: string;
  title: string;
  icon?: "basketball" | "chart";
}) {
  return (
    <FadeIn>
      <div className="flex items-center gap-3 mb-5">
      <span
        className="text-accent text-[11px] font-semibold tracking-widest shrink-0"
      >
        {num}
      </span>
      {icon === "basketball" ? (
        <BasketballIcon size={13} />
      ) : (
        <MiniBarChart size={13} />
      )}
      <div className="flex-1 h-px bg-border" />
      <span className="text-[11px] font-semibold tracking-widest text-text-muted uppercase shrink-0">
        {title}
      </span>
    </div>
    </FadeIn>
  );
}

function GBTCaseStudy() {
  const mockRows = [
    { id: "M-001", datePct: 80, paidPct: 88, hasPending: true },
    { id: "M-002", datePct: 80, paidPct: 65, hasPending: false },
    { id: "M-003", datePct: 80, paidPct: 88, hasPending: false },
  ];

  return (
    <section className="mb-12">
      {/* Main heading */}
      <h2
        className="text-3xl text-accent mb-3 leading-tight"
        style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
      >
        Budgeting Management
        <br />&amp; Financial Tracking
      </h2>

      {/* Subtitle */}
      <p className="text-text-muted text-sm leading-[1.7] max-w-[600px] mb-10">
        How I kept 30+ players paying on time. A transparent, self-serve
        system built on Google Sheets and a weekly discipline.
      </p>

      {/* Top 2-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        {/* LEFT: Google Sheet System mockup */}
        <div
          className="rounded-lg bg-[#0e0e0e] p-4"
          style={{ border: "1px solid rgba(255,122,122,0.12)" }}
        >
          {/* Toolbar */}
          <div className="flex items-center gap-2 mb-3">
            <SheetsIcon />
            <span className="text-[10px] text-text-subtle font-mono tracking-wide">
              GBT Member Dues · FY 2024–2026
            </span>
          </div>

          {/* Formula bar */}
          <div className="flex items-center gap-2 bg-[#141414] border border-[#2a2a2a] rounded px-3 py-1.5 mb-3">
            <span className="text-text-subtle text-[11px] font-mono">fx</span>
            <span className="text-[#333] mx-1 font-mono text-[11px]">|</span>
            <span className="text-[11px] font-mono">
              <span className="text-text-muted">=SUM(</span>
              <span className="text-accent">A2:A50</span>
              <span className="text-text-muted">)*</span>
              <span style={{ color: "#7ec8a0" }}>$2</span>
            </span>
          </div>

          {/* Mock spreadsheet grid */}
          <div className="rounded border border-[#1e1e1e] overflow-hidden mb-4">
            {/* Column headers */}
            <div
              className="grid bg-[#141414]"
              style={{ gridTemplateColumns: "20px repeat(6, 1fr)" }}
            >
              {["", "A", "B", "C", "D", "E", "F"].map((h, i) => (
                <div
                  key={i}
                  className="px-1 py-1 text-[8px] text-center text-text-subtle border-r border-b border-[#1e1e1e] last:border-r-0"
                >
                  {h}
                </div>
              ))}
            </div>
            {/* Data rows */}
            {[0, 1, 2, 3, 4].map((row) => (
              <div
                key={row}
                className="grid"
                style={{ gridTemplateColumns: "20px repeat(6, 1fr)" }}
              >
                <div className="px-1 py-1.5 text-[8px] text-center text-text-subtle border-r border-b border-[#1e1e1e] bg-[#141414]">
                  {row + 1}
                </div>
                {[0, 1, 2, 3, 4, 5].map((col) => {
                  const highlighted =
                    (row === 1 && col === 1) || (row === 3 && col === 2);
                  return (
                    <div
                      key={col}
                      className="py-1.5 border-r border-b border-[#1e1e1e] last:border-r-0"
                      style={{
                        backgroundColor: highlighted ? "#3d1414" : "#0a0a0a",
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          {/* Card label */}
          <p className="text-sm font-semibold text-text-primary mb-0.5">
            Google Sheet System
          </p>
          <p className="text-xs text-text-muted">
            Tracking player&apos;s monthly contribution
          </p>
        </div>

        {/* RIGHT: Two stat cards stacked */}
        <div className="flex flex-col gap-4">
          {/* Stat 1: 30+ members */}
          <div
            className="rounded-lg p-5 flex-1"
            style={{
              backgroundColor: "var(--accent)",
              boxShadow: "0 4px 24px rgba(255,122,122,0.18), 0 0 60px rgba(255,122,122,0.20)",
            }}
          >
            <p
              className="text-black font-bold leading-none mb-1"
              style={{ fontSize: "2.8rem" }}
            >
              30+
            </p>
            <p className="text-black text-xs font-semibold tracking-widest uppercase">
              Members
            </p>
          </div>

          {/* Stat 2: ~30K VND */}
          <div
            className="rounded-lg p-5 flex-1"
            style={{
              backgroundColor: "var(--accent)",
              boxShadow: "0 4px 24px rgba(255,122,122,0.18), 0 0 60px rgba(255,122,122,0.20)",
            }}
          >
            <div className="flex items-start gap-1 mb-1">
              <p
                className="text-black font-bold leading-none"
                style={{ fontSize: "2.8rem" }}
              >
                ~30K
              </p>
              <span className="text-black text-xs font-semibold mt-2 shrink-0">
                VND
              </span>
            </div>
            <p className="text-black text-xs font-semibold tracking-widest uppercase">
              Monthly Dues
            </p>
          </div>

          {/* Status line */}
          <p className="text-right text-[10px] text-text-subtle uppercase tracking-widest">
            Status:{" "}
            <span style={{ color: "#5aad7c" }}>ACTIVE</span>
          </p>
        </div>
      </div>

      {/* FULL-WIDTH: Member Tracking Table mockup */}
      <div
        className="rounded-lg bg-[#0e0e0e] p-4 mb-5"
        style={{ border: "1px solid rgba(255,122,122,0.12)" }}
      >
        {/* Table header */}
        <div
          className="grid gap-3 mb-2"
          style={{ gridTemplateColumns: "80px 1fr 1fr 1fr 1fr 24px" }}
        >
          {["Member", "Date", "Paid", "Monitors", "Pending", ""].map((h) => (
            <div
              key={h}
              className="text-[9px] font-semibold tracking-widest text-text-subtle uppercase"
            >
              {h}
            </div>
          ))}
        </div>
        <div className="h-px bg-border mb-3" />

        {/* Mock rows */}
        {mockRows.map(({ id, datePct, paidPct, hasPending }) => (
          <div
            key={id}
            className="grid gap-3 mb-3 items-center"
            style={{ gridTemplateColumns: "80px 1fr 1fr 1fr 1fr 24px" }}
          >
            {/* Member ID */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm border border-[#333] shrink-0" />
              <span className="font-mono text-[10px] text-text-muted">{id}</span>
            </div>
            {/* Date bar */}
            <div className="h-2 rounded-full bg-[#1a1a1a] overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${datePct}%`, backgroundColor: "#3d8b6e" }}
              />
            </div>
            {/* Paid bar */}
            <div className="h-2 rounded-full bg-[#1a1a1a] overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${paidPct}%`, backgroundColor: "#3d8b6e" }}
              />
            </div>
            {/* Monitors — subtle/empty */}
            <div className="h-2 rounded-full bg-[#1a1a1a]" />
            {/* Pending */}
            <div className="h-2 rounded-full bg-[#1a1a1a] overflow-hidden">
              {hasPending && (
                <div
                  className="h-full rounded-full"
                  style={{ width: "35%", backgroundColor: "#b8860b" }}
                />
              )}
            </div>
            {/* Ellipsis */}
            <span className="text-text-subtle text-xs">···</span>
          </div>
        ))}

        <div className="h-px bg-border mt-4 mb-4" />
        <p className="text-center text-xs font-semibold text-text-primary">
          Real-time Payment Status Monitoring
        </p>
      </div>

      {/* Bottom callout — 2 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Left: spreadsheet icon card */}
        <div
          className="rounded-lg bg-[#0e0e0e] p-4 flex items-center justify-center min-h-[100px]"
          style={{ border: "1px solid rgba(255,122,122,0.12)" }}
        >
          <GoogleSheetsLogo />
        </div>

        {/* Right: On-time + pill + text */}
        <div
          className="rounded-lg bg-[#0e0e0e] p-4"
          style={{ border: "1px solid rgba(255,122,122,0.12)" }}
        >
          <p
            className="text-text-primary font-bold text-2xl mb-3"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            On-time
          </p>
          <span
            className="inline-block text-[10px] font-semibold tracking-widest uppercase rounded-full px-3 py-1 mb-4"
            style={{ backgroundColor: "var(--accent)", color: "#000" }}
          >
            Ensuring Transparency
          </span>
          <div className="space-y-1">
            <p className="text-text-muted text-xs">Self-serve visibility</p>
            <p className="text-text-muted text-xs">Weekly reconciliation</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const stripImages = [
  {
    src: "/images/gbt/524347704_1373060757604716_6197043208300960027_n.jpg",
    alt: "GBT in a friendly match",
    caption: "GBT in a friendly match",
  },
  {
    src: "/images/gbt/545482377_761498373184980_5417388414667481827_n.jpg",
    alt: "GBT in new jersey released",
    caption: "GBT in new jersey released",
  },
  {
    src: "/images/gbt/491836995_1288060199438106_6875918604747269654_n.jpg",
    alt: "",
    caption: null,
  },
];

function BigBasketball({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 0 30px rgba(255,122,122,0.25))" }}
    >
      <defs>
        <clipPath id="bb-clip">
          <circle cx="50" cy="50" r="47" />
        </clipPath>
      </defs>
      <circle cx="50" cy="50" r="47" fill="var(--accent)" fillOpacity="0.85" />
      <g clipPath="url(#bb-clip)" stroke="rgba(0,0,0,0.20)" strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d="M3,50 C3,18 97,18 97,50" />
        <path d="M3,50 C3,82 97,82 97,50" />
        <path d="M50,3 C18,3 18,97 50,97" />
      </g>
    </svg>
  );
}

export default function GBTPage() {
  return (
    <div className="px-8 py-16 pt-20 lg:pt-16 lg:px-16 lg:py-20 max-w-[1100px]">
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-8">
        <BasketballIcon size={16} />
        <p className="text-[11px] font-semibold tracking-widest text-text-muted uppercase">
          <span className="text-accent">02</span> · LEADERSHIP &amp; ACTIVITIES
        </p>
      </div>

      {/* H1 */}
      <div className="flex flex-row items-center gap-3 mb-8">
        <div className="flex-1 min-w-0">
          <h1
            className="text-5xl font-semibold leading-tight text-text-primary mb-1"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            GREENFIELD
          </h1>
          <p
            className="text-5xl text-accent"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Basketball Team
          </p>
        </div>
        <BigBasketball className="w-20 h-20 lg:w-36 lg:h-36 shrink-0" />
      </div>

      {/* Decorative break */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-border" />
        <BasketballIcon size={14} />
        <span
          className="text-accent opacity-40 text-base leading-none"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          ₫
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Spec block — 4 columns on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border mb-4">
        {[
          { label: "ROLE", value: "Head of Finance" },
          { label: "DURATION", value: "Sep 2024 – May 2026" },
          { label: "CLUB SIZE", value: "30+ active members" },
          { label: "REVENUE MANAGED", value: "₫33M over 2 years" },
        ].map(({ label, value }) => (
          <div key={label} className="bg-bg-card px-5 py-4">
            <p className="text-[10px] font-semibold tracking-widest text-text-subtle uppercase mb-1">
              {label}
            </p>
            <p
              className="text-text-primary text-sm font-semibold"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="mb-10">
        <FacebookButton
          href="https://web.facebook.com/profile.php?id=100047024146323"
          ariaLabel="View Greenfield Basketball Team on Facebook"
        />
      </div>

      {/* Image 1 — Hero */}
      <SectionPhoto
        src="/images/gbt/494905944_1301122328131893_744865852414164245_n.jpg"
        alt="GBT on Vietnam Liberation Day, 30/4"
        caption="GBT on Vietnam Liberation Day, 30/4"
        priority
      />

      {/* Section 01 — Why I took this role */}
      <section className="mb-12">
        <SectionLabel num="01" title="Why I took this role" />
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Left: prose */}
          <div className="flex-1 min-w-0">
            <p className="text-text-muted text-base leading-[1.75]">
              By the summer before Grade 11, I had already chosen Finance &amp;
              Economics as my university path. I didn&apos;t apply for the
              leadership title, I applied for the experience. Two years running real
              money for thirty real people was the closest thing to a finance
              apprenticeship I could find in high school.
            </p>
          </div>
          {/* Right: image — landscape so height stays close to prose */}
          <div className="w-full lg:w-[42%] shrink-0">
            <div
              className="relative w-full overflow-hidden rounded-lg"
              style={{ aspectRatio: "3/2" }}
            >
              <Image
                src="/images/hobbies/Personal%20Hobbies/IMG_9353.PNG"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 — What I built */}
      <section className="mb-12">
        <SectionLabel num="02" title="What I built" />
        <div className="max-w-[680px] mb-6">
          <p className="text-text-muted text-base leading-[1.75] mb-4">
            I designed our financial system from scratch: a Google Sheets system
            that tracked every inflow and outflow, with formulas that
            automatically flagged late payments across 30+ members paying
            ~30,000 VND per month. The monthly summaries became the leadership
            team&apos;s basis for decisions on events, uniforms, and training
            allocation.
          </p>
          <p className="text-text-muted text-base leading-[1.75]">
            Across two years, I managed allocation against competing requests,
            Media on uniforms and photoshoots, HR on an incentive fund, operations
            on court rentals and training. I led financial planning for three
            fundraising cycles per year (Club Fair, Christmas, Lunar New Year),
            setting pricing, estimating demand, and controlling costs to protect
            margin. I ran budget forecasts for four tournaments so we didn&apos;t
            get blindsided on registration, transport, or contingencies.
          </p>
        </div>

        {/* 3-image strip */}
        <div className="flex flex-col gap-3 sm:flex-row">
          {stripImages.map(({ src, alt, caption }, i) => (
            <div key={i} className="flex-1 flex flex-col gap-2">
              <div
                className="relative overflow-hidden rounded border border-border"
                style={{ height: "240px" }}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              {caption && (
                <p className="text-xs text-text-muted italic">{caption}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Case Study */}
      <GBTCaseStudy />

      {/* Section 03 — Impact */}
      <section className="mb-12">
        <SectionLabel num="03" title="Impact" icon="chart" />

        <div className="rounded overflow-hidden border border-border">
          {/* Terminal header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#080808] border-b border-border">
            <div className="flex items-center gap-2">
              <MiniBarChart size={12} />
              <span className="text-[9px] font-semibold tracking-[0.18em] text-text-subtle uppercase">
                Performance Summary · GBT Finance
              </span>
            </div>
            <span className="text-[9px] text-text-subtle tabular-nums">
              FY 2024–2026
            </span>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {[
              {
                value: "₫33M",
                indicator: "TOTAL REVENUE",
                label: "managed over 2 years",
                trend: "↗",
              },
              {
                value: "4+",
                indicator: "TOURNAMENTS",
                label: "budgeted end-to-end",
                trend: "↗",
              },
              {
                value: "0",
                indicator: "OVERRUNS",
                label: "across 24 months",
                trend: "✓",
              },
              {
                value: "6+",
                indicator: "EVENTS FUNDED",
                label: "across all cycles",
                trend: "↗",
              },
            ].map(({ value, indicator, label, trend }) => (
              <div
                key={indicator}
                className="bg-bg-card p-5 border-t-2 border-accent"
              >
                <p className="text-[8px] font-semibold tracking-[0.15em] text-text-subtle uppercase mb-4">
                  {indicator}
                </p>
                <div className="flex items-start justify-between mb-3">
                  <p
                    className="text-accent leading-none"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontStyle: "italic",
                      fontSize: "2.5rem",
                      textShadow: "0 0 20px rgba(255,122,122,0.15)",
                    }}
                  >
                    {value}
                  </p>
                  <span className="text-accent text-xs opacity-50 mt-1">
                    {trend}
                  </span>
                </div>
                <p className="text-text-muted text-[11px] leading-[1.5]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 04 — The decision that taught me the most */}
      <section className="mb-12">
        <SectionLabel num="04" title="The decision that taught me the most" />
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Left: prose */}
          <div className="flex-1 min-w-0">
            <p className="text-text-muted text-base leading-[1.75] mb-4">
              At the end of Grade 11, the team wanted a trip outside the city,
              ten-plus members, one weekend. The fund had a surplus, but most of it
              belonged to next year&apos;s operating reserve. I ran the numbers and
              hit a wall: the trip I could afford fully was half the trip people
              actually wanted.
            </p>
            <p className="text-text-muted text-base leading-[1.75] mb-4">
              I could have said no. I could have drained the reserve and left next
              year&apos;s team an empty fund. Instead I proposed a hybrid: the club
              subsidises the majority, members contribute 300,000–400,000 VND each.
              At that ratio, the trip cost members roughly half of what they&apos;d
              pay organising the same trip independently. A real deal, but not free.
            </p>
            <p className="text-text-muted text-base leading-[1.75] mb-8">
              People pushed back. Some had come to expect &ldquo;club pays for
              everything,&rdquo; and any co-pay felt like a downgrade even when it
              was cheaper than the market alternative. I spent a week walking through
              the math with them individually, what the subsidy was worth per person,
              what the reserve was protecting, and why next year&apos;s members
              deserved the same healthy fund I had inherited. By the end, the full
              group went.
            </p>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-accent pl-6 my-8">
              <p
                className="text-text-primary text-base leading-[1.8] italic"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Finance isn&apos;t ledger work. It&apos;s the slow build-up of
                trust that lets you say &ldquo;we can&apos;t&rdquo; and have people
                believe you&apos;re not hoarding.
              </p>
            </blockquote>
          </div>

          {/* Right: image */}
          <div className="w-full lg:w-[42%] shrink-0">
            <div
              className="relative w-full overflow-hidden rounded-lg"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src="/images/gbt/441938275_785268107023228_4360780325146740809_n.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 05 — What I'm taking forward */}
      <section className="mb-4">
        <SectionLabel num="05" title="What I'm taking forward" />
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Left: prose */}
          <div className="flex-1 min-w-0">
            <p className="text-text-muted text-base leading-[1.75]">
              Two years of this confirmed something I only half-believed when I
              started: running money well is running people well in disguise. Every
              line in the ledger is a decision someone made, to pay on time or not,
              to spend on uniforms or court time, to trust the system or work around
              it. I came in wanting to learn spreadsheets. I&apos;m leaving with an
              instinct for where money leaks, where it compounds, and where it
              quietly changes what a group of people can do together.
            </p>
          </div>

          {/* Right: decorative illustration */}
          <div className="flex shrink-0 justify-center lg:justify-end">
            <LedgerFlowIllustration />
          </div>
        </div>
      </section>
    </div>
  );
}

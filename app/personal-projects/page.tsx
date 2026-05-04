import Image from "next/image";
import { ExternalLink, Download } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const projects = [
  {
    id: "nvidia",
    glowClass: "nvidia-glow",
    thumbnailSrc: "/images/projects/nvidia-thumbnail.png",
    thumbnailAlt: "NVIDIA Equity Snapshot slide preview",
    eyebrow: "EQUITY ANALYSIS  ·  15 SLIDES",
    ticker: "NASDAQ: NVDA",
    tickerColor: "#76B900",
    tickerBg: "rgba(118, 185, 0, 0.12)",
    tickerBorder: "rgba(118, 185, 0, 0.3)",
    title: "NVIDIA Equity Snapshot",
    tagline: "The arms dealer of the AI gold rush.",
    description: [
      "How NVIDIA captured 80–90% of the AI accelerator market and built a $5 trillion company in three years. Covers the Data Center segment, the CUDA software moat, FY2025 financials, and competitive threats from AMD and hyperscaler custom silicon.",
      "Built using verified data from NVIDIA Investor Relations, SEC 10-K filings, and Q3 FY2026 earnings releases.",
    ],
    pdfHref: "/pdfs/nvidia-equity-snapshot.pdf",
    pptxHref: "/pptx/nvidia-equity-snapshot.pptx",
    pptxFilename: "nvidia-equity-snapshot.pptx",
    objectPosition: "7.5% center",
  },
  {
    id: "apple",
    glowClass: "apple-glow",
    thumbnailSrc: "/images/projects/apple-thumbnail.png",
    thumbnailAlt: "Apple Equity Snapshot slide preview",
    eyebrow: "EQUITY ANALYSIS  ·  15 SLIDES",
    ticker: "NASDAQ: AAPL",
    tickerColor: "#D4A574",
    tickerBg: "rgba(212, 165, 116, 0.12)",
    tickerBorder: "rgba(212, 165, 116, 0.3)",
    title: "Apple Equity Snapshot",
    tagline: "Status, ecosystem, and the most loyal customers on Earth.",
    description: [
      "How Apple built a $4 trillion company on premium pricing, vertical integration, and a 90% iPhone retention rate. Covers the Services engine that compounds at 75% gross margin, FY2025 financials, and the upcoming Tim Cook leadership transition.",
      "Built using verified data from Apple Investor Relations, FY2025 10-K filing, and Q1 FY2026 earnings.",
    ],
    pdfHref: "/pdfs/apple-equity-snapshot.pdf",
    pptxHref: "/pptx/apple-equity-snapshot.pptx",
    pptxFilename: "apple-equity-snapshot.pptx",
    objectPosition: "7% center",
  },
];

export default function PersonalProjectsPage() {
  return (
    <div className="px-8 py-16 pt-20 lg:pt-16 lg:px-16 lg:py-20 max-w-[1100px]">
      {/* Eyebrow */}
      <FadeIn>
        <p className="text-[11px] font-semibold tracking-widest text-text-muted uppercase mb-8">
          <span className="text-accent">01</span> · SELF-INITIATED WORK
        </p>

        {/* H1 */}
        <h1
          className="text-5xl font-semibold leading-tight text-text-primary mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Personal projects<span className="text-accent">.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-text-muted text-base italic mb-8 max-w-[680px]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Equity research and analysis I built outside of school, to learn how
          the world&apos;s largest companies actually make money.
        </p>

        {/* Lead paragraph */}
        <p className="text-text-muted text-base leading-[1.75] mb-10 max-w-[680px]">
          I started reading 10-K filings and annual reports because I wanted to
          understand the language Finance professionals actually use. These two
          decks are the result. Each one took several weeks of reading investor
          relations material, cross-checking numbers from SEC filings, and
          writing my own interpretation of the business. I built the slides
          myself in Microsoft PowerPoint, designed to match each company&apos;s
          brand identity. The data is verified against the companies&apos; own
          investor disclosures.
        </p>

        {/* Divider */}
        <div className="w-20 h-px bg-accent opacity-30 mb-16" />
      </FadeIn>

      {/* Project cards */}
      <div className="space-y-12">
        {projects.map((project, i) => (
          <FadeIn key={project.id}>
            <div
              className={`hover-lift ${project.glowClass} flex flex-col lg:flex-row gap-0 border border-border bg-bg-card rounded-xl overflow-hidden`}
              style={{
                borderColor: "rgba(255, 255, 255, 0.08)",
                transitionDelay: `${(i + 1) * 100}ms`,
              }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video lg:aspect-auto lg:w-[40%] shrink-0">
                <Image
                  src={project.thumbnailSrc}
                  alt={project.thumbnailAlt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: project.objectPosition }}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ border: "1px solid rgba(255, 255, 255, 0.08)" }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between flex-1 p-8">
                <div>
                  {/* Eyebrow + ticker */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <p
                      className="text-[11px] font-semibold tracking-widest text-text-subtle uppercase"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {project.eyebrow}
                    </p>
                    <span
                      className="text-[11px] font-bold tracking-[0.05em] px-[10px] py-1 rounded"
                      style={{
                        fontFamily: "monospace",
                        color: project.tickerColor,
                        background: project.tickerBg,
                        border: `1px solid ${project.tickerBorder}`,
                      }}
                    >
                      {project.ticker}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className="text-[32px] font-semibold text-text-primary leading-tight mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {project.title}
                  </h2>

                  {/* Tagline */}
                  <p
                    className="text-text-muted italic text-base mb-6"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <div className="space-y-3 mb-8">
                    {project.description.map((para, j) => (
                      <p
                        key={j}
                        className="text-text-muted text-sm leading-[1.75]"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.pdfHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold bg-accent text-bg hover:bg-accent-strong transition-colors duration-200"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    View deck
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href={project.pptxHref}
                    download={project.pptxFilename}
                    className="btn-outline inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold text-text-primary"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Download .pptx
                    <Download size={14} />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

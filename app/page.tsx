import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col xl:flex-row gap-12 px-8 py-16 pt-20 lg:pt-16 lg:px-16 lg:py-20">
      {/* Main column */}
      <div className="flex-1 max-w-[720px]">
        {/* Eyebrow */}
        <div className="relative mb-8">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 200px 60px at 40px 50%, rgba(255,122,122,0.14) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <p className="relative text-[11px] font-semibold tracking-widest text-text-muted uppercase">
            <span className="text-accent">01</span> · ABOUT ME
          </p>
        </div>

        {/* H1 — two-line name */}
        <h1
          className="text-5xl font-semibold leading-tight text-text-primary mb-1"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          AN PHU
        </h1>
        <div className="relative mb-8">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 360px 120px at 60px 50%, rgba(255,122,122,0.15) 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />
          <p
            className="relative text-5xl text-accent"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Nguyen Duc
          </p>
        </div>

        {/* Tagline */}
        <p
          className="text-lg text-text-muted mb-10"
          style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
        >
          I learned what money means at eight.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap gap-4 mb-16">
          <Link
            href="/leadership"
            className="px-6 py-3 bg-accent-strong text-black font-semibold text-sm hover:bg-accent transition-colors"
            style={{ boxShadow: "0 0 40px rgba(255,122,122,0.25)" }}
          >
            Continue ↗
          </Link>
          <a
            href="mailto:anphunguyen266@gmail.com"
            className="px-6 py-3 border border-border text-text-primary text-sm hover:border-text-muted transition-all hover:shadow-[0_0_40px_rgba(255,122,122,0.25)]"
          >
            Contact me
          </a>
        </div>

        {/* Hero essay */}
        <div className="space-y-6 text-text-primary text-base leading-[1.75]">
          <p>
            I&apos;m applying to study Finance and Economics. Before I
            tell you what I&apos;ve done, I want to tell you about one morning
            when I was eight.
          </p>
          <p>
            I walked past my mother&apos;s room and saw her crying. A year
            earlier, I had come home from leukaemia treatment. My mother is a
            single parent. She had carried our family through my diagnosis, my
            treatment, and the bills that followed, alone, and quietly. That
            morning, at eight, I understood in a way children shouldn&apos;t
            have to: that my being alive had a price, and that she had paid it.
          </p>
          <p>
            I don&apos;t write this for sympathy. I write it because that
            morning set the direction of everything after. Money, for me, has
            never been abstract. It is the distance between the morning I
            didn&apos;t see my mother cry, and the morning I did. I made a
            quiet promise then, that one day I would earn enough, and
            understand enough about how money moves, to repay what she had
            spent keeping me here.
          </p>
          <p>
            That&apos;s why Finance. Longer-term, I want to build a company
            that earns real money, and use some of what it earns on children in
            paediatric wards whose families cannot afford what mine could. Not
            as charity from the outside, as someone who was in that bed.
          </p>
        </div>
      </div>

      {/* Right rail — desktop only */}
      <aside className="hidden xl:flex flex-col gap-6 w-[250px] shrink-0 pt-[7rem]">
        {/* Portrait + coral dot accent */}
        <div className="relative">
          {/* Coral dot — bottom-right corner, glows outward */}
          <div
            className="coral-dot-pulse absolute z-10 rounded-full"
            style={{
              width: "18px",
              height: "18px",
              bottom: "-9px",
              right: "-9px",
              backgroundColor: "var(--accent)",
              boxShadow: "0 0 60px rgba(255,122,122,0.60)",
            }}
            aria-hidden="true"
          />
          <div className="aspect-[3/4] overflow-hidden rounded-lg border border-border relative">
            <Image
              src="/images/hobbies/Personal%20Hobbies/DSC04248.jpeg"
              alt="An Phu Nguyen Duc"
              fill
              className="object-cover"
              style={{ objectPosition: "62% 10%" }}
              sizes="(min-resolution: 2dppx) 500px, 250px"
              quality={90}
              priority
            />
          </div>
        </div>

        {/* Meta card */}
        <div className="bg-bg-card border border-border p-6 space-y-5">
          <div>
            <p className="text-text-subtle text-[10px] uppercase tracking-widest mb-1">
              Year
            </p>
            <p className="text-text-primary text-sm font-semibold">
              Year 12, graduating 2026
            </p>
          </div>
          <div>
            <p className="text-text-subtle text-[10px] uppercase tracking-widest mb-1">
              School
            </p>
            <p className="text-text-primary text-sm font-semibold">
              Greenfield School, Hưng Yên
            </p>
          </div>
          <div>
            <p className="text-text-subtle text-[10px] uppercase tracking-widest mb-1">
              Programme
            </p>
            <p className="text-text-primary text-sm font-semibold">
              Global Citizen Class
            </p>
          </div>
          <div>
            <p className="text-text-subtle text-[10px] uppercase tracking-widest mb-1">
              Target
            </p>
            <p className="text-text-primary text-sm font-semibold">
              RMIT BBus, Finance &amp; Economics
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}

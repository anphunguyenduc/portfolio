import Link from "next/link";
import Image from "next/image";
import { FacebookButton } from "@/components/FacebookButton";
import { FadeIn } from "@/components/FadeIn";

function SectionLabel({ num, title }: { num: string; title: string }) {
  return (
    <FadeIn>
      <div className="flex items-center gap-3 mb-5">
        <span
          className="text-accent text-[11px] font-semibold tracking-widest shrink-0"
        >
          {num}
        </span>
        <div className="flex-1 h-px bg-border" />
        <span className="text-[11px] font-semibold tracking-widest text-text-muted uppercase shrink-0">
          {title}
        </span>
      </div>
    </FadeIn>
  );
}

const subProjects = [
  {
    num: "01",
    title: "Chocoziii",
    meta: "Event team sub-lead · Nov–Dec 2025",
    summary:
      "A bake-sale fundraiser in partnership with the Greenfield Baking Club. Raised 21M VND for Mái Ấm Thánh Tâm children's shelter.",
    href: "/leadership/gvc/chocoziii",
    img: "/images/leadership/chocoziii.jpg",
    imgAlt: "Chocoziii project key visual",
  },
  {
    num: "02",
    title: "Mây Xanh Chấp Cánh Tri Thức",
    meta: "Event team · Jan 2026",
    summary:
      "A trip to Lũng Cà mountain school in Thái Nguyên. Book collection, uniform resale, football pitch setup, a skit performance, and tree planting.",
    href: "/leadership/gvc/may-xanh",
    img: "/images/leadership/may-xanh.jpg",
    imgAlt: "Mây Xanh Chấp Cánh Tri Thức",
  },
  {
    num: "03",
    title: "Nắng: Vọng",
    meta: "Event team · Dec 2025",
    summary:
      "GVC's flagship annual liveshow, 5th edition. [TODO: full content pending]",
    href: "/leadership/gvc/nang",
    img: "/images/leadership/nang-vong.jpg",
    imgAlt: "Nắng: Vọng liveshow poster",
  },
];

function BigHeartHands({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 0 30px rgba(255,122,122,0.25))" }}
    >
      {/* Heart */}
      <path
        d="M50 70 C50 70 14 50 14 28 C14 16 23 9 33 9 C41 9 47 15 50 20 C53 15 59 9 67 9 C77 9 86 16 86 28 C86 50 50 70 50 70 Z"
        fill="var(--accent)"
        fillOpacity="0.85"
      />
      {/* Left cupping arm */}
      <path
        d="M12 90 C12 72 24 66 36 62"
        fill="none"
        stroke="var(--accent)"
        strokeOpacity="0.80"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Right cupping arm */}
      <path
        d="M88 90 C88 72 76 66 64 62"
        fill="none"
        stroke="var(--accent)"
        strokeOpacity="0.80"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Bottom arc */}
      <path
        d="M12 90 C35 98 65 98 88 90"
        fill="none"
        stroke="var(--accent)"
        strokeOpacity="0.80"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function GVCPage() {
  return (
    <div className="px-8 py-16 pt-20 lg:pt-16 lg:px-16 lg:py-20 max-w-[1100px]">
      {/* Eyebrow */}
      <p className="text-[11px] font-semibold tracking-widest text-text-muted uppercase mb-8">
        <span className="text-accent">02</span> · LEADERSHIP &amp; ACTIVITIES
      </p>

      {/* H1 */}
      <div className="flex flex-row items-center gap-3 mb-6">
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
            Volunteer Club
          </p>
        </div>
        <BigHeartHands className="w-20 h-20 lg:w-36 lg:h-36 shrink-0" />
      </div>

      {/* Meta */}
      <p className="text-text-subtle text-xs uppercase tracking-widest mb-3">
        Event committee member · Sep 2025 – Present · ~60 member club
      </p>

      <div className="mb-14">
        <FacebookButton
          href="https://web.facebook.com/gfvolunteerclub"
          ariaLabel="View Greenfield Volunteer Club on Facebook"
        />
      </div>

      {/* Section 01: The promise I made to myself */}
      <section className="mb-12">
        <SectionLabel num="01" title="The promise I made to myself" />
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Left: prose */}
          <div className="flex-1 min-w-0">
            <p className="text-text-muted text-base leading-[1.75] mb-4">
              The wish to do this kind of work has been with me since I was a child.
              After what my own family went through, I knew early that there were
              children somewhere having a worse version of the year I had just
              survived, and that the adults around them were carrying what my mother
              had carried, often with less. I wanted to be on the giving side of that
              equation. I just didn&apos;t think I was ready yet.
            </p>
            <p className="text-text-muted text-base leading-[1.75]">
              For most of high school I told myself I would do it later. Schoolwork
              was heavy, leadership in other clubs felt closer to home, and being a
              member of a real outreach club felt like something I had to earn. By
              Grade 12, I ran out of reasons to wait. The promise I had carried since
              I was a child was not going to keep itself.
            </p>
          </div>
          {/* Right: image */}
          <div className="w-full lg:w-[40%] shrink-0">
            <div
              className="relative w-full overflow-hidden rounded-lg"
              style={{ aspectRatio: "4/5" }}
            >
              <Image
                src="/images/hobbies/Personal%20Hobbies/DSC04925.jpeg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Stepping outside the gates */}
      <section className="mb-12">
        <SectionLabel num="02" title="Stepping outside the gates" />
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Left: prose + pull quote */}
          <div className="flex-1 min-w-0">
            <p className="text-text-muted text-base leading-[1.75]">
              GVC was the first club I joined whose work happened outside the campus
              I already lived on. Children I had never met. Schools I had never
              visited. A shelter I could not find on any school map. It was also the
              first club where I was not a lead. I was a member, one of 60, doing the
              work someone else had designed. I wanted to know what I was like in
              that seat.
            </p>
            <div
              className="mt-6 pt-4 pl-1"
              style={{ borderTop: "1px solid rgba(255,122,122,0.3)" }}
            >
              <p
                className="text-accent text-sm leading-relaxed"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontStyle: "italic",
                }}
              >
                &ldquo;We make a living by what we get, but we make a life by
                what we give.&rdquo;
              </p>
              <p className="text-text-subtle text-[11px] tracking-widest uppercase mt-2">
                — WINSTON CHURCHILL
              </p>
            </div>
          </div>
          {/* Right: image (landscape) */}
          <div className="w-full lg:w-[45%] shrink-0">
            <div
              className="relative w-full overflow-hidden rounded-lg"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src="/images/gvc/may-xanh/DSC09690%20(1).JPG"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 03: What surprised me */}
      <section className="mb-12">
        <SectionLabel num="03" title="What surprised me" />
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Left: prose + metadata chips */}
          <div className="flex-1 min-w-0">
            <p className="text-text-muted text-base leading-[1.75]">
              What I did not expect was how much I would enjoy it. Every project gave
              me a kind of happiness I had not felt in any of the other things I had
              done. Working alongside people who showed up because they wanted to,
              not because they had a title, made the late nights and the heat and the
              small disasters feel like privileges rather than costs. I left every
              event tired and grateful. I had spent a year and a half before this
              learning to manage things. GVC was where I learned that some work earns
              you back more than you put in, and that you should keep doing that kind
              of work for as long as you can find it.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Sep 2025 – present", "60 members", "Event team"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-accent"
                    style={{ background: "rgba(255,122,122,0.15)" }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
          {/* Right: image */}
          <div className="w-full lg:w-[40%] shrink-0">
            <div
              className="relative w-full overflow-hidden rounded-lg"
              style={{ aspectRatio: "4/5" }}
            >
              <Image
                src="/images/gvc/nang/670482621_981202197798590_7193008566450108890_n.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Projects */}
      <section className="mb-12">
        <SectionLabel num="04" title="Projects" />
        <ol className="space-y-4">
          {subProjects.map(({ num, title, meta, summary, href, img, imgAlt }) => (
            <li key={num}>
              <Link
                href={href}
                className="group flex items-center gap-5 border border-border bg-bg-card px-5 py-5 hover:border-text-subtle transition-colors"
              >
                {/* Number */}
                <span
                  className="text-accent text-lg shrink-0 w-7 self-start pt-0.5"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontStyle: "italic",
                  }}
                >
                  {num}
                </span>

                {/* Thumbnail */}
                {img ? (
                  <div className="relative w-20 h-20 lg:w-[120px] lg:h-[120px] shrink-0 rounded border border-border overflow-hidden">
                    <Image
                      src={img}
                      alt={imgAlt!}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 80px, 120px"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 lg:w-[120px] lg:h-[120px] shrink-0 rounded border border-border bg-bg-card flex items-center justify-center">
                    <span className="text-text-subtle text-[10px] text-center leading-tight px-2">
                      Photo
                      <br />
                      pending
                    </span>
                  </div>
                )}

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
      </section>

      {/* Section 05: Reflection — prose left, 2 stacked images right */}
      <section>
        <SectionLabel num="05" title="Reflection" />
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Left: prose (~55%) */}
          <div className="flex-1 min-w-0">
            <p className="text-text-muted text-base leading-[1.75]">
              I joined GVC thinking I was finally beginning to act on something I had
              wanted to do for a long time. What I learned in the year that followed
              was that giving and receiving in this kind of work are not two separate
              things. They happen at the same time, to the same person. The team I
              worked with, the children I met, the afternoons spent fixing things
              under 35-degree noon sun, the small wins that no one outside the club
              would ever know about, all of it gave me as much as I think I gave to
              it. I learned that the work itself is the reward, and that the people
              you do it with are most of why you keep showing up.
            </p>
          </div>
          {/* Right: 2 stacked images (~45%) */}
          <div className="w-full lg:w-[45%] shrink-0 flex flex-col gap-3">
            <div
              className="relative w-full overflow-hidden rounded-lg"
              style={{ aspectRatio: "3/2" }}
            >
              <Image
                src="/images/gvc/nang/z7764604643843_969c10490e5011edbe471b7e0634c459.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
            <div
              className="relative w-full overflow-hidden rounded-lg"
              style={{ aspectRatio: "3/2" }}
            >
              <Image
                src="/images/gvc/nang/z7764604645117_93da78f09ab80097cb86d7d16a6b8065.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import { FacebookButton } from "@/components/FacebookButton";
import { FadeIn } from "@/components/FadeIn";

function MicIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ff7a7a"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect x="9" y="2" width="6" height="11" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" />
      <line x1="12" y1="17" x2="12" y2="22" />
      <line x1="8" y1="22" x2="16" y2="22" />
    </svg>
  );
}

function Waveform() {
  const heights = [6, 10, 16, 20, 24, 20, 16, 10, 6];
  return (
    <svg
      width="64"
      height="24"
      viewBox="0 0 64 24"
      aria-hidden="true"
      className="shrink-0"
    >
      {heights.map((h, i) => (
        <rect
          key={i}
          x={i * 7}
          y={(24 - h) / 2}
          width="4"
          height={h}
          rx="2"
          fill="#ff7a7a"
          opacity="0.3"
        />
      ))}
    </svg>
  );
}

function WaveformDivider() {
  return (
    <div className="flex items-center gap-4 my-14">
      <div className="flex-1 h-px bg-border" />
      <Waveform />
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <FadeIn>
      <div className="flex items-center gap-5 mb-10">
      <div className="flex items-center gap-2 shrink-0">
        <MicIcon />
        <span
          className="text-accent leading-none"
          style={{
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            fontSize: "3rem",
          }}
        >
          {num}
        </span>
      </div>
      <div className="h-px flex-1 bg-border" />
      <h2
        className="text-[11px] font-semibold tracking-widest text-text-muted uppercase shrink-0"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {title}
      </h2>
    </div>
    </FadeIn>
  );
}

function BigMic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 0 30px rgba(255,122,122,0.25))" }}
    >
      <defs>
        <clipPath id="mic-cap-clip">
          <rect x="32" y="4" width="36" height="52" rx="18" />
        </clipPath>
      </defs>
      {/* Capsule */}
      <rect x="32" y="4" width="36" height="52" rx="18" fill="var(--accent)" fillOpacity="0.85" />
      {/* Grille lines */}
      <g clipPath="url(#mic-cap-clip)" stroke="rgba(0,0,0,0.20)" strokeWidth="1.5" fill="none">
        <line x1="32" y1="24" x2="68" y2="24" />
        <line x1="32" y1="31" x2="68" y2="31" />
        <line x1="32" y1="38" x2="68" y2="38" />
        <line x1="32" y1="45" x2="68" y2="45" />
      </g>
      {/* Stand */}
      <line x1="50" y1="56" x2="50" y2="76" stroke="var(--accent)" strokeOpacity="0.80" strokeWidth="3" strokeLinecap="round" />
      {/* Tripod legs */}
      <line x1="50" y1="76" x2="28" y2="92" stroke="var(--accent)" strokeOpacity="0.80" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="76" x2="72" y2="92" stroke="var(--accent)" strokeOpacity="0.80" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function TalktopusPage() {
  return (
    <div className="px-8 py-16 pt-20 lg:pt-16 lg:px-16 lg:py-20 max-w-[1100px]">
      {/* Eyebrow */}
      <div className="flex items-center gap-4 mb-8">
        <p className="text-[11px] font-semibold tracking-widest text-text-muted uppercase shrink-0">
          <span className="text-accent">02</span> · LEADERSHIP &amp; ACTIVITIES
        </p>
        <Waveform />
      </div>

      {/* H1 */}
      <div className="flex flex-row items-center gap-3 mb-6">
        <div className="flex-1 min-w-0">
          <h1
            className="text-5xl font-semibold leading-tight text-text-primary mb-1"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            TALKTOPUS:
          </h1>
          <p
            className="text-5xl text-accent"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Echoes
          </p>
        </div>
        <BigMic className="w-20 h-20 lg:w-36 lg:h-36 shrink-0" />
      </div>

      {/* Meta line */}
      <p className="text-text-subtle text-xs uppercase tracking-widest mb-3">
        Head of Human Resources · TEDx-style English public speaking competition
      </p>

      <div className="mb-10">
        <FacebookButton
          href="https://web.facebook.com/talktopusgreenfield"
          ariaLabel="View TALKTOPUS Greenfield on Facebook"
        />
      </div>

      {/* HERO — "Our core team", 16:9 with contain so full bodies are visible */}
      <figure className="mb-16">
        <div
          className="relative w-full rounded overflow-hidden border border-border bg-bg-card"
          style={{ aspectRatio: "16/9" }}
        >
          <Image
            src="/images/talktopus/z7753385462058_44e3ae41d090daf820f6e8577b52439d.jpg"
            alt="Our core team"
            fill
            className="object-contain"
            priority
          />
        </div>
        <figcaption className="mt-3 text-xs text-text-muted italic">
          Our core team
        </figcaption>
      </figure>

      {/* Section 01: Why I took this role — prose left, MC image right */}
      <section className="mb-12">
        <SectionHeader num="01" title="Why I took this role" />
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Left: prose */}
          <div className="flex-1 min-w-0">
            <p className="text-text-muted text-base leading-[1.75]">
              TALKTOPUS was the first student-run TEDx-style competition at
              Greenfield School, built by a Grade 12 Global Citizen cohort to give
              high schoolers a platform for thinking out loud about issues that
              matter to them. I didn&apos;t take the HR role for the resume line, I
              took it because I wanted to test whether I could run the human side of
              a project, not just the numbers. Finance had taught me systems. This
              would teach me people.
            </p>
          </div>
          {/* Right: training cohort */}
          <figure className="w-full lg:w-[42%] shrink-0">
            <div
              className="relative w-full overflow-hidden rounded-lg"
              style={{ aspectRatio: "3/2" }}
            >
              <Image
                src="/images/talktopus/z7298091872004_60832bf3efc6f5c03b957c86a916aa4b.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* Full-width: Our committee */}
      <figure className="mb-16">
        <div className="w-full rounded overflow-hidden border border-border">
          <Image
            src="/images/talktopus/z7753385468477_7011c41040adba505c81d304bf2dcea3.jpg"
            alt="Our committee"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
        <figcaption className="mt-3 text-xs text-text-muted italic">
          Our committee
        </figcaption>
      </figure>

      {/* Section 02: What I built */}
      <section className="mb-12">
        <SectionHeader num="02" title="What I built" />
        <div className="max-w-[680px]">
          <p className="text-text-muted text-base leading-[1.75] mb-6">
            I owned the full participant and team journey end-to-end. I managed
            profiles and communication for the organising committee and guest
            speakers, ensuring every team lead had what they needed before they
            asked. I recruited and paired mentors from the organising team with
            each contestant, designed the online and offline training sessions, and
            planned the participant arc from onboarding to finals, so that a
            student walked in nervous and walked out having said something they
            meant.
          </p>
          <p className="text-text-muted text-base leading-[1.75] mb-8">
            Internally, I ran bonding activities for the core team to keep
            collaboration tight across a long build. When friction surfaced (at one
            point a member sent disrespectful messages in the group chat and
            refused to take on work) I didn&apos;t escalate. I asked him to delete
            the messages, then messaged him privately to understand what was
            driving it. He apologised to the team on his own. By the night of
            finals, he was one of the most reliable people on the floor.
          </p>
        </div>

        {/* MC photo pair — side-by-side */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <figure className="flex-1">
            <div
              className="relative w-full overflow-hidden rounded border border-border"
              style={{ height: "360px" }}
            >
              <Image
                src="/images/talktopus/601829296_1314166644087106_5118031519410606707_n.jpg"
                alt="Co-hosting finals, bilingual, first time MC-ing"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <figcaption className="mt-2 text-xs text-text-muted italic">
              Co-hosting finals, bilingual, first time MC-ing
            </figcaption>
          </figure>
          <div className="flex-1">
            <div
              className="relative w-full overflow-hidden rounded border border-border"
              style={{ height: "360px" }}
            >
              <Image
                src="/images/talktopus/604721227_1314168180753619_363208017132401692_n.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <div className="max-w-[680px]">
          <p className="text-text-muted text-base leading-[1.75]">
            On finals night, I also hosted as Master of Ceremonies. My first time
            MC-ing, in English, paired with a Vietnamese co-host. Kept rhythm on a
            bilingual script I had co-written.
          </p>
        </div>
      </section>

      <WaveformDivider />

      {/* Section 03: Impact */}
      <section className="mb-12">
        <SectionHeader num="03" title="Impact" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {[
            { value: "30+", label: "student participants in inaugural edition" },
            { value: "24", label: "training sessions delivered across formats" },
            { value: "40+", label: "core team members coordinated end-to-end" },
            {
              value: "100%",
              label: "task completion across the organising committee",
            },
          ].map(({ value, label }) => (
            <div key={label} className="bg-bg-card p-5">
              <p
                className="text-accent text-3xl mb-2"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontStyle: "italic",
                }}
              >
                {value}
              </p>
              <p className="text-text-muted text-xs leading-[1.5]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Side-by-side pair — finalists (larger) + backstage tie (smaller) */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="flex-1">
          <div
            className="relative w-full rounded overflow-hidden border border-border"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src="/images/talktopus/603951988_1314167660753671_2282637421783526554_n.jpg"
              alt="Finalists and the mentor team at the final round"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex-1">
          <div
            className="relative w-full rounded overflow-hidden border border-border"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src="/images/talktopus/573592111_122112147669016920_5448258543223957934_n.jpg"
              alt="Backstage — BTC supporting participants"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <WaveformDivider />

      {/* Section 04: Decision story — 2-col with right image */}
      <section className="mb-12">
        <SectionHeader num="04" title="The morning it almost went sideways" />
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Left: prose */}
          <div className="flex-1 min-w-0">
            <p className="text-text-muted text-base leading-[1.75] mb-4">
              Thirty minutes before doors opened, a teacher pulled me aside: one of
              our finalists was pulling out for personal reasons. Her introduction
              slide was already cued in the deck.
            </p>
            <p className="text-text-muted text-base leading-[1.75] mb-4">
              We had minutes. I coordinated with the Media team to pull her slide. I
              drafted a bilingual announcement for the audience (her classmates were
              in the hall and would notice) framing it respectfully without
              over-explaining. I briefed my co-MC on the new running order. We went
              live on time.
            </p>
            <p className="text-text-muted text-base leading-[1.75] mb-4">
              Then, halfway through the program, she messaged back: she could make
              it after all.
            </p>
            <p className="text-text-muted text-base leading-[1.75] mb-4">
              I had a choice. I could have held the line: she had withdrawn, the
              program was running, adding her back was a risk. Or I could make room.
              I moved her into the final speaking slot. It gave her the most recovery
              time, gave the audience a strong closer, and gave her the chance she
              had lost thirty minutes earlier. The Media team re-inserted her slide
              at the end. I rewrote her introduction, by then more personal than the
              original because I had spent the morning thinking about her, and
              re-briefed my co-MC mid-program.
            </p>
            <p className="text-text-muted text-base leading-[1.75]">
              She spoke last. It landed. Nobody in the audience knew what had
              happened in the hour before.
            </p>
          </div>

          {/* Right: image */}
          <div className="w-full lg:w-[40%] shrink-0">
            <div
              className="relative w-full overflow-hidden rounded-lg"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src="/images/talktopus/600342666_122117826447016920_7606025673357985351_n.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 05: What I'm taking forward */}
      <section className="mb-8">
        <SectionHeader num="05" title="What I'm taking forward" />
        <div className="max-w-[680px]">
          <p className="text-text-muted text-base leading-[1.75] mb-4">
            Running HR on TALKTOPUS taught me the lesson Finance hadn&apos;t:
            systems break the moment a person does, and leadership is mostly what
            you do in that gap. The angry member in the group chat, the finalist
            withdrawing thirty minutes before doors, neither was in any plan
            I&apos;d written. What mattered was how fast I could stop reacting to
            the surface of the problem and start asking what was underneath it.
          </p>
          <p className="text-text-muted text-base leading-[1.75]">
            I&apos;m going into Business and Finance knowing that every company
            I&apos;ll ever work with is a group of people who occasionally break,
            and that the quality of an organisation is not its plan, but how it
            holds together when the plan doesn&apos;t.
          </p>
        </div>

        {/* 2-image pair — closing */}
        <div className="flex flex-col sm:flex-row gap-3 mt-10">
          <div className="flex-1">
            <div
              className="relative w-full overflow-hidden rounded border border-border"
              style={{ height: "320px" }}
            >
              <Image
                src="/images/talktopus/572900159_122112020193016920_1955566168200678329_n.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="flex-1">
            <div
              className="relative w-full overflow-hidden rounded border border-border"
              style={{ height: "320px" }}
            >
              <Image
                src="/images/talktopus/602007789_1314166774087093_3590066483273616798_n.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

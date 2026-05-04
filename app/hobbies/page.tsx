import { type ReactNode } from "react";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

const BASE = "/images/hobbies/Personal%20Hobbies/";

function PianoIcon() {
  return (
    <svg
      width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="var(--accent)"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      strokeOpacity="0.8" aria-hidden="true"
    >
      {/* 3 white keys; middle key has a subtle pressed-fill */}
      <rect x="1" y="1" width="6" height="22" rx="1.5" />
      <rect x="9" y="1" width="6" height="22" rx="1.5" fill="rgba(255,122,122,0.18)" />
      <rect x="17" y="1" width="6" height="22" rx="1.5" />
    </svg>
  );
}

function SportsIcon() {
  return (
    <svg
      width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="var(--accent)"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      strokeOpacity="0.8" aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      {/* Basketball seam curves */}
      <path d="M3.5 12 Q12 7 20.5 12" />
      <path d="M3.5 12 Q12 17 20.5 12" />
      <path d="M12 3.5 Q7 12 12 20.5" />
    </svg>
  );
}

function WorkoutIcon() {
  return (
    <svg
      width="26" height="24" viewBox="0 0 26 24"
      fill="none" stroke="var(--accent)"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      strokeOpacity="0.8" aria-hidden="true"
    >
      {/* Left weight disc */}
      <rect x="0.75" y="7" width="4.5" height="10" rx="1.5" />
      {/* Bar */}
      <line x1="5.25" y1="12" x2="20.75" y2="12" />
      {/* Right weight disc */}
      <rect x="20.75" y="7" width="4.5" height="10" rx="1.5" />
    </svg>
  );
}

function NoteIcon() {
  return (
    <svg
      width="24" height="24" viewBox="0 0 24 24"
      fill="none" aria-hidden="true"
    >
      {/* Three dots — subtle, lighter than the other icons */}
      <circle cx="5"  cy="12" r="2" fill="var(--accent)" opacity="0.70" />
      <circle cx="12" cy="12" r="2" fill="var(--accent)" opacity="0.70" />
      <circle cx="19" cy="12" r="2" fill="var(--accent)" opacity="0.70" />
    </svg>
  );
}

function SectionHeading({ title, icon }: { title: string; icon: ReactNode }) {
  return (
    <FadeIn>
      <div className="flex items-center gap-3 mb-6">
        <span className="shrink-0 flex items-center">{icon}</span>
        <h2
          className="text-accent leading-tight"
          style={{
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            fontSize: "2rem",
          }}
        >
          {title}
        </h2>
      </div>
    </FadeIn>
  );
}

function DumbbellSVG() {
  return (
    <svg
      width="120"
      height="60"
      viewBox="0 0 120 60"
      fill="none"
      stroke="#ff7a7a"
      strokeOpacity="0.8"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Left outer disc */}
      <rect x="1" y="18" width="11" height="24" rx="3" />
      {/* Left inner disc */}
      <rect x="12" y="12" width="9" height="36" rx="3" />
      {/* Bar */}
      <line x1="21" y1="30" x2="99" y2="30" />
      {/* Right inner disc */}
      <rect x="99" y="12" width="9" height="36" rx="3" />
      {/* Right outer disc */}
      <rect x="108" y="18" width="11" height="24" rx="3" />
    </svg>
  );
}

export default function HobbiesPage() {
  return (
    <div className="px-8 py-16 pt-20 lg:pt-16 lg:px-16 lg:py-20 max-w-[1100px]">
      {/* Eyebrow */}
      <p className="text-[11px] font-semibold tracking-widest text-text-muted uppercase mb-8">
        <span className="text-accent">04</span> · PERSONAL HOBBIES
      </p>

      {/* H1 */}
      <h1
        className="text-5xl font-semibold leading-tight text-text-primary mb-1"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        THINGS I DO
      </h1>
      <p
        className="text-5xl text-accent mb-5"
        style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
      >
        outside of school
      </p>

      {/* Subtitle */}
      <p
        className="text-text-muted text-sm mb-14"
        style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
      >
        A different side of me. Things that make me, me.
      </p>

      {/* ── PIANO ── */}
      <section className="mb-14">
        <SectionHeading title="Piano" icon={<PianoIcon />} />

        <div className="max-w-[680px] mb-10">
          <p className="text-text-muted text-base leading-[1.75] mb-4">
            I started teaching myself piano in Grade 9 because a classmate of
            mine played, and I wanted to be able to do what he could do. I asked
            my mother for a keyboard and learned the rest on my own, notes, hand
            position, basic theory, chords, then chasing songs I liked and
            figuring them out by ear. The first piece I properly learned was
            Yiruma&apos;s Kiss the Rain. I can&apos;t play it anymore,
            I&apos;ve forgotten most of it, but I can still hear it clearly. It
            marked something for me.
          </p>
          <p className="text-text-muted text-base leading-[1.75]">
            What started as a private thing eventually became a public one.
            I&apos;ve performed at the school Music Festival, at Club Fair, at
            Nắng, and at events the music club has invited me to play. I still
            mostly play alone, though, when I feel like it.
          </p>
        </div>

        {/* 2×2 media grid — full container width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Video 1 — IMG_1415 */}
          <div
            className="relative overflow-hidden rounded-lg bg-bg-card"
            style={{ aspectRatio: "16/9" }}
          >
            <iframe
              src="https://www.youtube.com/embed/KtL61pwI5p4?rel=0&modestbranding=1"
              title="Piano performance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-lg"
            />
          </div>

          {/* Video 2 — IMG_1956 */}
          <div
            className="relative overflow-hidden rounded-lg bg-bg-card"
            style={{ aspectRatio: "16/9" }}
          >
            <iframe
              src="https://www.youtube.com/embed/UkHqVfIvvX0?rel=0&modestbranding=1"
              title="Piano performance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-lg"
            />
          </div>

          {/* Image 1 */}
          <div
            className="relative overflow-hidden rounded-lg"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src={`${BASE}IMG_9555.JPG`}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
            />
          </div>

          {/* Image 2 */}
          <div
            className="relative overflow-hidden rounded-lg"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src={`${BASE}IMG_2943.JPG`}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
            />
          </div>
        </div>
      </section>

      {/* ── SPORTS ── */}
      <section className="mb-14">
        <SectionHeading title="Sports" icon={<SportsIcon />} />

        <div className="max-w-[680px] mb-10">
          <p className="text-text-muted text-base leading-[1.75] mb-4">
            I started basketball in Grade 7. This matters more than it sounds.
            The year before, I was coming out of leukaemia treatment, and I was
            weak, overweight, and mostly indoors. I did not play anything.
            Basketball was the first sport that pulled me out of that version of
            myself. It made me stronger, lighter, and somehow more willing to be
            around people. By Grade 9 I was playing in a city-level tournament
            in Hanoi. I didn&apos;t place, but going was the point. I play
            shooting guard. I joined GBT as a player in Grade 10 before moving
            into the Head of Finance role in Grade 11, and I&apos;ve picked up a
            gold medal in basketball and a bronze in skill challenges at the
            school Olympics.
          </p>
          <p className="text-text-muted text-base leading-[1.75]">
            Pickleball came later, in Grade 11, and I play it with a friend. It
            is a different register than basketball, lower intensity, fewer
            collisions, less of the friction that comes with five people fighting
            for the same ball. I like that I can play both. I won gold in
            pickleball at the Grade 11 Olympics and bronze in Grade 12.
          </p>
        </div>

        {/* Basketball sub-group */}
        <div className="mb-8">
          <p
            className="text-accent mb-3"
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "1.375rem",
            }}
          >
            Basketball
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <div
              className="flex-1 relative overflow-hidden rounded-lg"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={`${BASE}z7764480322196_eb6264528a93db3e4e550b6e13e59e93.jpg`}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
              />
            </div>
            <div
              className="flex-1 relative overflow-hidden rounded-lg"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={`${BASE}z7764534082516_e87e364550fb467fbaf5fd7908dee024.jpg`}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
              />
            </div>
          </div>
        </div>

        {/* Pickleball sub-group */}
        <div>
          <p
            className="text-accent mb-3"
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "1.375rem",
            }}
          >
            Pickleball
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <div
              className="flex-1 relative overflow-hidden rounded-lg"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={`${BASE}DSC05077.jpeg`}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
              />
            </div>
            <div
              className="flex-1 relative overflow-hidden rounded-lg"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={`${BASE}IMG_8245.jpeg`}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WORKOUT ── */}
      <section className="mb-14">
        <SectionHeading title="Workout" icon={<WorkoutIcon />} />

        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Left: prose */}
          <div className="flex-1 min-w-0 max-w-[680px]">
            <p className="text-text-muted text-base leading-[1.75]">
              I&apos;ve been training calisthenics at home since Grade 11, four
              times a week, with stretching and jump rope mixed in. I started
              because I wanted to look and feel stronger. I kept going because,
              at some point, not training started feeling worse than training
              did.
            </p>
          </div>

          {/* Right: SVG + tags */}
          <div className="w-full lg:w-[40%] shrink-0 flex flex-col items-center gap-5 pt-1">
            <DumbbellSVG />
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "4× / week",
                "At home",
                "Calisthenics + Jump rope",
                "Since Grade 11",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-accent"
                  style={{ background: "rgba(255,122,122,0.15)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── A NOTE ON ALL THREE ── */}
      <section className="pb-12">
        <SectionHeading title="A note on all three" icon={<NoteIcon />} />
        <div className="max-w-[680px]">
          <p className="text-text-muted text-base leading-[1.75]">
            If you asked me which of these I could live without, the honest
            answer is none of them. They are all habits now, each doing a
            different piece of the work of keeping me in good shape to do
            everything else. Cutting any one of them would leave a hole the
            other two couldn&apos;t fill.
          </p>
        </div>
        {/* Closing decoration */}
        <div className="flex flex-col items-center gap-[10px] mt-12">
          <div
            className="h-px w-[120px]"
            style={{ backgroundColor: "rgba(255, 122, 122, 0.30)" }}
          />
          <p
            className="text-text-muted text-sm"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Three habits, one self.
          </p>
        </div>
      </section>
    </div>
  );
}

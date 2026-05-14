import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

const recordRows = [
  ["School", "Greenfield School, Hưng Yên"],
  [
    "Programme",
    "Global Citizen track (Vietnamese national curriculum + international electives)",
  ],
  ["Year", "Grade 12 · Class of 2026"],
  ["Class rank", "Top of class, Grades 10–12"],
  ["GPA (10-point scale)", "9.44 · 9.51 · 9.57 (Semester 1)"],
  ["IELTS", "8.0 overall"],
];

const awards = [
  "Rank 1/30, Grades 10, 11, and 12",
  "2nd place · Greenfield Music Festival",
  "4× gold medals · Greenfield annual sports tournaments (basketball, STEAM challenge, cheerleading, pickleball)",
  "Class representative · Go Finance (Finance–Math competition), 1 of 6 class delegates, participation only, no placement",
  "MOS Excel · 1000/1000",
];

export default function AcademicsPage() {
  return (
    <div className="px-8 py-16 pt-20 lg:pt-16 lg:px-16 lg:py-20 max-w-[1100px]">
      {/* Eyebrow */}
      <p className="text-[11px] font-semibold tracking-widest text-text-muted uppercase mb-8">
        <span className="text-accent">03</span> · ACADEMICS
      </p>

      {/* Two-line H1 */}
      <h1
        className="text-5xl font-semibold leading-tight text-text-primary mb-1"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        ACADEMIC
      </h1>
      <p
        className="text-5xl text-accent mb-10"
        style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
      >
        Record
      </p>

      {/* Intro prose */}
      <p className="text-text-muted text-base leading-[1.75] mb-16 max-w-[680px]">
        A quick picture of where I study, what I study, and how I&apos;ve done.
      </p>

      {/* Photo */}
      <div className="relative w-full aspect-video mb-16 rounded overflow-hidden border border-border">
        <Image
          src="/images/hobbies/Personal%20Hobbies/DSC04999.jpeg"
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1100px"
        />
      </div>

      {/* Block 1 — Record card */}
      <section className="mb-16">
        <div className="border border-border divide-y divide-border">
          {recordRows.map(([label, value]) => (
            <div key={label} className="flex flex-col sm:flex-row">
              <span className="sm:w-[220px] shrink-0 px-5 py-4 text-text-subtle text-sm">
                {label}
              </span>
              <span className="px-5 py-4 text-text-primary text-sm border-t border-border sm:border-t-0 sm:border-l sm:border-border">
                {value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Block 2 — What I study */}
      <section className="mb-16 space-y-6">
        <FadeIn>
          <h2
            className="text-[11px] font-semibold tracking-widest text-text-muted uppercase"
          >
            What I study
          </h2>
        </FadeIn>
        <p className="text-text-primary text-base leading-[1.75] max-w-[680px]">
          My strongest subjects this year are Mathematics, Chemistry, and
          English. The natural sciences are where I&apos;m most at home: I have
          always been curious about how systems work, and Math and Chemistry are
          where that curiosity gets to test itself against something real. I also
          like working with numbers. English came a different way. Somewhere along
          the line I realised how much of the world I&apos;d be locked out of
          without it, so I read in English, listen in English, and have made it a
          habit.
        </p>
      </section>

      {/* Block 3 — Awards & recognition */}
      <section>
        <FadeIn>
          <h2 className="text-[11px] font-semibold tracking-widest text-text-muted uppercase mb-8">
            Awards &amp; recognition
          </h2>
        </FadeIn>
        <ol className="space-y-5">
          {awards.map((text, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <li key={num} className="flex items-baseline gap-5">
                <span
                  className="text-accent text-sm shrink-0 w-6"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontStyle: "italic",
                  }}
                >
                  {num}
                </span>
                <span className="text-text-primary text-base leading-[1.65]">
                  {text}
                </span>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}

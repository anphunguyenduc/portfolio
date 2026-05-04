import Image from "next/image";
import { FacebookButton } from "@/components/FacebookButton";
import { FadeIn } from "@/components/FadeIn";

const BASE = "/images/gvc/nang/";

function TrackLabel({ num, title }: { num: string; title: string }) {
  return (
    <FadeIn>
      <div className="flex items-center gap-4 mb-6">
        <span
          className="text-accent shrink-0 text-sm tabular-nums"
          style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
        >
          {num}.
        </span>
        <span
          className="text-text-primary text-xs font-semibold tracking-[0.2em] uppercase shrink-0"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {title}
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>
    </FadeIn>
  );
}

export default function NangPage() {
  return (
    <div className="px-8 py-16 pt-20 lg:pt-16 lg:px-16 lg:py-20 max-w-[1100px]">
      {/* Eyebrow */}
      <p className="text-[11px] font-semibold tracking-widest text-text-muted uppercase mb-8">
        <span className="text-accent">02</span> · LEADERSHIP &amp; ACTIVITIES ·
        GREENFIELD VOLUNTEER CLUB
      </p>

      {/* H1 */}
      <h1
        className="text-5xl font-semibold leading-tight text-text-primary mb-1"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        NẮNG:
      </h1>
      <p
        className="text-5xl text-accent mb-6"
        style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
      >
        Vọng
      </p>

      {/* Meta */}
      <p className="text-text-subtle text-xs uppercase tracking-widest mb-3">
        Event committee member · GVC annual liveshow · 5th edition · 2025–26
      </p>

      <div className="mb-10">
        <FacebookButton
          href="https://web.facebook.com/share/p/1EPEtxpdx9/"
          ariaLabel="View Nắng: Vọng liveshow post on Facebook"
        />
      </div>

      {/* HERO VIDEO — stage-light glow behind */}
      <div
        className="relative mb-14"
        style={{ isolation: "isolate" }}
      >
        {/* Stage ambient glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-4rem",
            left: "-3rem",
            right: "-3rem",
            height: "300px",
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(255, 122, 122, 0.09) 0%, transparent 65%)",
            pointerEvents: "none",
            zIndex: -1,
          }}
        />
        <div
          className="rounded overflow-hidden"
          style={{ aspectRatio: "16/9" }}
        >
          <video
            src={`${BASE}mv.mp4`}
            controls
            preload="metadata"
            playsInline
            className="w-full h-full block"
          >
            <p className="text-text-muted text-sm text-center p-4">
              [video unavailable]
            </p>
          </video>
        </div>
      </div>

      {/* 01. What it is */}
      <section className="mb-12">
        <TrackLabel num="01" title="What it is" />
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 mb-10">
          {/* Left: prose */}
          <div className="flex-1 min-w-0">
            <p className="text-text-muted text-base leading-[1.75] mb-4">
              Nắng is GVC&apos;s flagship annual liveshow, now in its fifth year, a
              full-scale music event staged each December in partnership with Sol
              (Sound of Life), Glee Gia Thiều, participating teachers, and an
              invited guest artist. The 2025–26 edition, Vọng, carried the theme{" "}
              <em>Someday we will dream about today</em> and featured Pay performing
              &ldquo;Bận lòng&rdquo; and &ldquo;All In&rdquo;. We ran at 300+
              attendees and sold 310 tickets.
            </p>
            <p className="text-text-muted text-base leading-[1.75]">
              I joined as a member of the event committee. My work sat in two
              places: before the doors opened, I contributed to the creative
              direction (ideating the kickoff concept, designing the check-in area,
              and developing the stage layout from concept through material
              sourcing). On the night itself, I ran guest reception at check-in,
              handled ticket control, and managed whatever went wrong in real time.
            </p>
          </div>
          {/* Right: image — height stretches to match prose column */}
          <div className="w-full lg:w-[45%] shrink-0">
            <div className="relative w-full h-full min-h-[300px] overflow-hidden rounded-lg">
              <Image
                src={`${BASE}674212536_1410838381086598_5566537997706523188_n.jpg`}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 440px"
              />
            </div>
          </div>
        </div>

        {/* Ticket-stub impact grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { value: "₫95M", label: "revenue generated" },
            { value: "310", label: "tickets sold" },
            { value: "300+", label: "attendees in the hall" },
            { value: "5th", label: "annual edition" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="p-5"
              style={{ border: "1px dashed rgba(153, 153, 153, 0.45)" }}
            >
              <p
                className="text-accent text-3xl mb-2 leading-none"
                style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
              >
                {value}
              </p>
              <p className="text-text-muted text-xs leading-[1.5]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 02. The part nobody sees */}
      <section className="mb-12">
        <TrackLabel num="02" title="The part nobody sees" />
        <div className="max-w-[680px]">
          <p className="text-text-muted text-base leading-[1.75] mb-4">
            Event work has a split personality. There is the part that happens on
            stage, which people remember, and the part that happens before the
            audience arrives, which is where a liveshow actually gets built or
            falls apart. I spent most of my time in the second half.
          </p>
          <p className="text-text-muted text-base leading-[1.75] mb-4">
            The creative work was harder than I expected. Designing a check-in
            area sounds minor until you realise the first ten seconds a guest
            spends at an event permanently sets the tone for the next three hours.
            Every decision (colour palette, lighting, materials, placement
            relative to the surrounding architecture) had to work together and
            match the show&apos;s concept. Get it right and 300 people walk in
            already on your side. Get it wrong and they spend the first half hour
            sceptical.
          </p>
          <p className="text-text-muted text-base leading-[1.75]">
            The stage required more. I helped source and install physical
            infrastructure (frames, signage, LED strips, wiring) working outdoors
            in 35°C heat with no shade, borrowing ladders, fixing things that had
            broken in transit. I learned to join LED cable from scratch, because
            nobody else on our sub-team knew how. I also learned what happens when
            you wire something wrong. At one point I tripped a power circuit and
            briefly blacked out the entire admissions building, offices of the
            people who decide whether students like me get into university. It was
            the most professional mistake I&apos;ve ever made.
          </p>
        </div>
      </section>

      {/* MID-IMAGE — cinematic 21:9 */}
      <div
        className="relative w-full overflow-hidden mb-14"
        style={{ aspectRatio: "21/9" }}
      >
        <Image
          src={`${BASE}670482621_981202197798590_7193008566450108890_n.jpg`}
          alt=""
          fill
          className="object-cover"
          priority={false}
          sizes="(max-width: 1024px) 100vw, 1100px"
        />
      </div>

      {/* 03. The night */}
      <section className="mb-12">
        <TrackLabel num="03" title="The night" />
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Left: two stacked images (mobile: appears above prose) */}
          <div className="w-full lg:w-[45%] shrink-0 flex flex-col gap-3">
            <div
              className="relative w-full overflow-hidden rounded-lg"
              style={{ aspectRatio: "3/2" }}
            >
              <Image
                src={`${BASE}670859137_1410833534420416_4605124902523732334_n.jpg`}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 440px"
              />
            </div>
            <div
              className="relative w-full overflow-hidden rounded-lg"
              style={{ aspectRatio: "3/2" }}
            >
              <Image
                src={`${BASE}671200851_1410837911086645_3455872831940479989_n.jpg`}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 440px"
              />
            </div>
          </div>
          {/* Right: prose */}
          <div className="flex-1 min-w-0">
            <p className="text-text-muted text-base leading-[1.75] mb-4">
              My sharpest memory from the evening itself is a family that arrived at
              7:15 PM. Check-in had closed at 6:30. By the rulebook, they should
              not have been let in. They had paid, though, and the father had called
              ahead. I got approval from our lead, took them in personally, and
              seated them. They caught most of the show. The father found me
              afterward to thank me. That moment stayed with me longer than I
              expected it to, because it was the first time I understood that
              operations is not about enforcing rules. It is about knowing when
              rules serve the person, and when they obstruct them.
            </p>
            <p className="text-text-muted text-base leading-[1.75]">
              Around 9 PM, as the hall was settling into its last hour, our team
              went on for the closing song, &ldquo;Phép màu&rdquo;. I played
              strings. The audience had not thinned as much as I feared a
              late-running event would cause. Afterwards, two of my teachers, my
              Math teacher and my Vietnamese teacher, told me the performance had
              landed, and that the show had run with real professionalism. The theme
              of the night, <em>Someday we will dream about today</em>, did not feel
              like a slogan by then. It felt like a description of what had just
              happened.
            </p>
          </div>
        </div>
      </section>

      {/* 04. What I'm taking forward */}
      <section className="mb-14">
        <TrackLabel num="04" title="What I'm taking forward" />
        <div className="max-w-[680px]">
          <p className="text-text-muted text-base leading-[1.75]">
            There is a lesson I keep relearning across every project: the visible
            part of any organisation is about five percent of the work. The other
            ninety-five percent is setup, repair, judgment calls made in the dark,
            and the quiet competence of people who know how to hold a room
            together when the plan drifts. I want to be one of those people. Nắng
            is where I first saw what that looks like at the scale of 300
            strangers in a hall.
          </p>
        </div>
      </section>

      {/* CLOSING VIDEO */}
      <div>
        <div
          className="rounded overflow-hidden mb-3"
          style={{ aspectRatio: "16/9" }}
        >
          <video
            src={`${BASE}phepmau.mp4`}
            controls
            preload="metadata"
            playsInline
            className="w-full h-full block"
          >
            <p className="text-text-muted text-sm text-center p-4">
              [video unavailable]
            </p>
          </video>
        </div>
        <p className="text-xs text-text-muted italic">
          &ldquo;Phép màu&rdquo; (the closing song of the night)
        </p>
      </div>
    </div>
  );
}

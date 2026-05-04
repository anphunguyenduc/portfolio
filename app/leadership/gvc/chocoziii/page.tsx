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

const BASE = "/images/gvc/chocoziii/";

export default function ChocoziiPage() {
  return (
    <div className="px-8 py-16 pt-20 lg:pt-16 lg:px-16 lg:py-20 max-w-[1100px]">
      {/* Eyebrow — breadcrumb */}
      <p className="text-[11px] font-semibold tracking-widest text-text-muted uppercase mb-8">
        <span className="text-accent">02</span> · LEADERSHIP &amp; ACTIVITIES ·
        GREENFIELD VOLUNTEER CLUB
      </p>

      {/* H1 */}
      <h1
        className="text-5xl font-semibold leading-tight text-text-primary mb-1"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        CHOCOZIII
      </h1>
      <p
        className="text-5xl text-accent mb-6"
        style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
      >
        A gift, wrapped
      </p>

      {/* Meta */}
      <p className="text-text-subtle text-xs uppercase tracking-widest mb-3">
        Event team sub-lead · GVC × Greenfield Baking Club · Nov–Dec 2025
      </p>

      <div className="mb-10">
        <FacebookButton
          href="https://web.facebook.com/share/p/1EAbWJMnP4/"
          ariaLabel="View Chocoziii event post on Facebook"
        />
      </div>

      {/* HERO — cinematic 2:1 */}
      <div
        className="relative w-full overflow-hidden mb-14"
        style={{
          aspectRatio: "2/1",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Image
          src={`${BASE}603072154_892868756631935_7091721940731787692_n.jpg`}
          alt="Chocoziii fundraiser"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 1100px"
        />
      </div>

      {/* Section 01: What I did */}
      <section className="mb-10">
        <SectionLabel num="01" title="What I did" />
        <div className="max-w-[680px]">
          <p className="text-text-muted text-base leading-[1.75] mb-4">
            Chocoziii was a joint project with Greenfield Baking Club, a
            baking-and-selling fundraiser with proceeds going to Mái Ấm Thánh
            Tâm, a shelter for children with illness and disability. I joined as a
            small-team lead under the event committee, running a 5-person squad
            across three workstreams.
          </p>
          <p className="text-text-muted text-base leading-[1.75]">
            I led ideation and execution for the project kickoff, a launch
            designed to maximise recognition on a deliberately tight budget,
            because every VND we spent on marketing was a VND that didn&apos;t
            reach Mái Ấm. I coordinated packaging and delivery operations for
            customer orders. And at Merryland, the school&apos;s Christmas fair, I
            co-designed and ran our merchandise booth.
          </p>
        </div>
      </section>

      {/* SCRAPBOOK STRIP — 3 images, staggered heights, middle rotated */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end mb-12">
        <div
          className="relative overflow-hidden w-full sm:flex-1"
          style={{
            height: "220px",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <Image
            src={`${BASE}599342292_888478247070986_508746832910685794_n.jpg`}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 240px"
          />
        </div>
        <div
          className="relative overflow-hidden w-full sm:flex-1 sm:[transform:rotate(-1deg)]"
          style={{
            height: "260px",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <Image
            src={`${BASE}600300146_888478177070993_3055161717436356291_n.jpg`}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 240px"
          />
        </div>
        <div
          className="relative overflow-hidden w-full sm:flex-1"
          style={{
            height: "220px",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <Image
            src={`${BASE}596464612_882832190968925_1614537656708540163_n.jpg`}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 240px"
          />
        </div>
      </div>

      {/* IMPACT GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border mb-14">
        {[
          { value: "₫21M", label: "raised for Mái Ấm Thánh Tâm" },
          { value: "20%", label: "profit uplift vs. initial forecast" },
          {
            value: "3",
            label: "top contributors recognised (of a larger committee)",
          },
          { value: "5", label: "team members I directly led" },
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

      {/* Section 02: The decision that taught me the most */}
      <section className="mb-12">
        <SectionLabel num="02" title="The decision that taught me the most" />
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Left: prose */}
          <div className="flex-1 min-w-0">
            <p className="text-text-muted text-base leading-[1.75] mb-4">
              A few weeks into the project, our small team did the math on
              pre-orders and realised a hard truth: if we sold only baked goods, the
              final donation to Mái Ấm was going to be smaller than what the shelter
              actually needed.
            </p>
            <p className="text-text-muted text-base leading-[1.75] mb-4">
              We could have accepted the number. Fundraisers miss forecasts all the
              time, it&apos;s not a failure, it&apos;s just reality. Instead, our
              group proposed adding a second revenue stream: a merchandise booth at
              Merryland selling small accessories, toy cards, and gift items targeted
              at the school&apos;s younger students. We sourced low-cost inventory
              and priced with a healthy margin, the kind of margin a pop-up at a
              children&apos;s Christmas fair can actually support without anyone
              feeling overcharged.
            </p>
            <p className="text-text-muted text-base leading-[1.75] mb-4">
              On the day, we sold through completely. Nothing left at the end of the
              fair. Final project profit came in roughly 20% above our original
              forecast, the difference between &ldquo;we did okay&rdquo; and
              &ldquo;Mái Ấm gets what it actually needs.&rdquo;
            </p>
            <p className="text-text-muted text-base leading-[1.75]">
              The lesson wasn&apos;t about margin or pricing. It was that in a
              fundraiser, accepting the forecast is the ethical problem. Every VND
              we didn&apos;t find was a VND the shelter didn&apos;t get. After GBT
              had taught me to protect a budget, Chocoziii taught me the opposite
              instinct: when the cause is real, the number on the forecast is not a
              ceiling, it&apos;s a question.
            </p>
          </div>
          {/* Right: 2 stacked images */}
          <div className="w-full lg:w-[40%] shrink-0">
            <div className="flex flex-col gap-2">
              <div
                className="relative w-full overflow-hidden rounded-lg"
                style={{ height: "200px" }}
              >
                <Image
                  src={`${BASE}602465814_892868799965264_3350684789521642284_n.jpg`}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 380px"
                />
              </div>
              <div
                className="relative w-full overflow-hidden rounded-lg"
                style={{ height: "200px" }}
              >
                <Image
                  src={`${BASE}603079566_892868866631924_5014073987816295759_n.jpg`}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 380px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03: What I'm taking forward */}
      <section>
        <SectionLabel num="03" title="What I'm taking forward" />
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Left: prose */}
          <div className="flex-1 min-w-0">
            <p className="text-text-muted text-base leading-[1.75] mb-4">
              There is a particular kind of tiredness that comes from selling things
              all day, and a different kind that comes from knowing the money at the
              end of the day is not going to be enough. For a few weeks in November,
              I was carrying both. I kept thinking about the children at Mái Ấm,
              children I had never met, would probably never meet, and about how the
              gap between our forecast and their need was not an abstraction. It was
              a number I had helped build, and it was too small. That feeling was new
              to me. At GBT I had worried about budgets the way you worry about a
              scoreboard. At Chocoziii I worried about a budget the way you worry
              about someone.
            </p>
            <p className="text-text-muted text-base leading-[1.75]">
              What I remember most is the end of Merryland, standing at a booth with
              nothing left on it. Empty shelves at a school fair do not look like
              much. But I knew what they meant, and I remember the quiet that came
              with that knowing, not pride exactly, something closer to relief. For
              the first time I understood why my mother had stayed up so many nights
              working. It is not that money makes you good. It is that having enough
              of it, at the right moment, for the right person, is sometimes the
              only form love gets to take. I had spent my whole life on the receiving
              end of that arithmetic. Chocoziii was the first time I did the math
              from the other side.
            </p>
          </div>
          {/* Right: 2 stacked images */}
          <div className="w-full lg:w-[40%] shrink-0">
            <div className="flex flex-col gap-2">
              <div
                className="relative w-full overflow-hidden rounded-lg"
                style={{ height: "200px" }}
              >
                <Image
                  src={`${BASE}605124503_896356036283207_1385932323272102063_n.jpg`}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 380px"
                />
              </div>
              <div
                className="relative w-full overflow-hidden rounded-lg"
                style={{ height: "200px" }}
              >
                <Image
                  src={`${BASE}605541040_896355979616546_3989103344900278293_n.jpg`}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 380px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

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

export default function MayXanhPage() {
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
        MÂY XANH
      </h1>
      <p
        className="text-5xl text-accent mb-6"
        style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
      >
        Chấp cánh tri thức
      </p>

      {/* Meta */}
      <p className="text-text-subtle text-xs uppercase tracking-widest mb-3">
        Event committee member · GVC × Greenfield Student Council · January 2026
      </p>

      <div className="mb-14">
        <FacebookButton
          href="https://web.facebook.com/share/p/1BLjymxkzP/"
          ariaLabel="View Mây Xanh Chấp Cánh Tri Thức event post on Facebook"
        />
      </div>

      {/* Section 01: What it was — prose left, image right */}
      <section className="mb-12">
        <SectionLabel num="01" title="What it was" />
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Left: prose */}
          <div className="flex-1 min-w-0">
            <p className="text-text-muted text-base leading-[1.75]">
              A January 2026 outreach project run by GVC in partnership with the
              school&apos;s Student Council, collecting books, stuffed toys, uniforms,
              and supplies for Lũng Cà, a mountain school in Thái Nguyên Province. I
              worked the collection phase at school (running booths, reselling old
              uniforms) and then traveled with the team to the school itself in the
              weeks before Tết.
            </p>
          </div>
          {/* Right: image */}
          <div className="w-full lg:w-[45%] shrink-0">
            <div
              className="relative w-full overflow-hidden rounded-lg"
              style={{ aspectRatio: "3/2" }}
            >
              <Image
                src="/images/gvc/may-xanh/DSC09634.JPG"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 440px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: What I actually did there — image left, prose right */}
      <section className="mb-12">
        <SectionLabel num="02" title="What I actually did there" />
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Left: image (mobile: appears above prose) */}
          <div className="w-full lg:w-[45%] shrink-0">
            <div
              className="relative w-full overflow-hidden rounded-lg"
              style={{ aspectRatio: "3/2" }}
            >
              <Image
                src="/images/gvc/may-xanh/DSC00678.JPG"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 440px"
              />
            </div>
          </div>
          {/* Right: prose */}
          <div className="flex-1 min-w-0">
            <p className="text-text-muted text-base leading-[1.75]">
              I played the fox in a student performance of{" "}
              <em>Con cóc kiện ông trời</em> for the children. I helped mark out a
              football pitch, strung nets on the goals, handed out food, and planted
              trees on the school grounds. I had been to a mountain school once before,
              so I knew the drive would be long and hard. I didn&apos;t know yet what
              the air would feel like when we got there.
            </p>
          </div>
        </div>
      </section>

      {/* Section 03: What I want to tell you about — prose left, 2 stacked images right */}
      <section className="mb-12">
        <SectionLabel num="03" title="What I want to tell you about" />
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Left: prose */}
          <div className="flex-1 min-w-0">
            <p className="text-text-muted text-base leading-[1.75] mb-4">
              What I want to tell you about is the moment after we finished the play.
              I asked the children a question to keep them in the story a little
              longer, and they answered, loud, immediate, completely in it. Not the
              polite response of children who have been told to be grateful. The actual
              laughter of children who had forgotten, for a few minutes, that anything
              about their lives was hard.
            </p>
            <p className="text-text-muted text-base leading-[1.75]">
              I grew up in a hospital for a stretch of my childhood. I know that kind
              of laughter from the other side. I remember what it felt like when an
              adult came into the ward and made us forget, for an hour, where we were.
              I did not expect to be the adult in that equation. Standing on the other
              side of it, in a pitch I had just helped mark out, in front of children I
              would probably never see again, was the strangest gift of my Grade 12.
            </p>
          </div>
          {/* Right: two stacked images */}
          <div className="w-full lg:w-[42%] shrink-0 flex flex-col gap-2">
            <div
              className="relative w-full overflow-hidden rounded-lg"
              style={{ aspectRatio: "3/2" }}
            >
              <Image
                src="/images/gvc/may-xanh/DSC00675.JPG"
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
                src="/images/gvc/may-xanh/DSC00759.JPG"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: What it told me — image left, prose right */}
      <section className="mb-12">
        <SectionLabel num="04" title="What it told me" />
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Left: image (mobile: appears above prose) */}
          <div className="w-full lg:w-[45%] shrink-0">
            <div
              className="relative w-full overflow-hidden rounded-lg"
              style={{ aspectRatio: "3/2" }}
            >
              <Image
                src="/images/gvc/may-xanh/DSC00983.JPG"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 440px"
              />
            </div>
          </div>
          {/* Right: prose */}
          <div className="flex-1 min-w-0">
            <p className="text-text-muted text-base leading-[1.75]">
              I went to Lũng Cà because I believed in a thesis: that earning money and
              sending some of it to children who need it is a life worth building.
              Before this trip, that thesis was an argument I made to myself. After
              Lũng Cà, it is also a thing I have stood inside of. The difference
              between the two is the whole reason I am applying to study Finance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

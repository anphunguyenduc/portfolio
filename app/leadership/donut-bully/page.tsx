import Image from "next/image";
import { FacebookButton } from "@/components/FacebookButton";

export default function DonutBullyPage() {
  return (
    <div className="px-8 py-16 pt-20 lg:pt-16 lg:px-16 lg:py-20 max-w-[1100px]">
      {/* Eyebrow */}
      <p className="text-[11px] font-semibold tracking-widest text-text-muted uppercase mb-8">
        <span className="text-accent">02</span> · LEADERSHIP &amp; ACTIVITIES
        <span className="text-text-subtle"> / EARLIER WORK</span>
      </p>

      {/* H1 */}
      <h1
        className="text-5xl font-semibold leading-tight text-text-primary mb-1"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        DONUT BULLY
      </h1>
      <p
        className="text-5xl text-accent mb-6"
        style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
      >
        Campaign
      </p>

      {/* Meta line */}
      <p className="text-text-subtle text-xs uppercase tracking-widest mb-3">
        Team participant · School anti-bullying campaign · September 2024
      </p>

      <div className="flex gap-2 mb-10">
        <FacebookButton
          href="https://web.facebook.com/share/p/18HERm5JaH/"
          label="CAMPAIGN ↗"
          ariaLabel="View Donut Bully campaign post on Facebook"
        />
        <FacebookButton
          href="https://web.facebook.com/share/p/1CcXzzuJ4E/"
          label="COMPETITION ↗"
          ariaLabel="View Donut Bully competition post on Facebook"
        />
      </div>

      {/* Body prose */}
      <p className="text-text-muted text-base leading-[1.75] mb-12 max-w-[680px]">
        I joined Donut Bully at the start of Grade 11 with one classmate,
        entering as a team in the school&apos;s annual anti-bullying campaign.
        Our format was a short video calling for the rejection of school
        bullying. The work behind it taught me more than I expected. Researching
        the topic gave me a deeper view of how school bullying actually operates
        in Vietnam and elsewhere, and what the long-term cost of it looks like
        for the children who go through it. The moment I remember most is filming
        with the students who agreed to appear in our video. When I explained
        what the project was for, every single one of them said yes immediately,
        and many of them seemed genuinely happy to be part of it. That afternoon
        was the first time I understood that meaningful work attracts people, not
        the other way around. Our video won the award for The Influential
        Changemaker.
      </p>

      {/* Image + Award — side by side, same height */}
      <div className="flex items-stretch gap-4">
        <div
          className="relative overflow-hidden rounded-lg shrink-0"
          style={{ width: "160px", aspectRatio: "3/4" }}
        >
          <Image
            src="/images/hobbies/Personal%20Hobbies/IMG_3031.JPG"
            alt=""
            fill
            className="object-cover"
            sizes="160px"
          />
        </div>

        {/* Award callout */}
        <div className="border border-border bg-bg-card px-6 py-5 flex flex-col justify-center">
          <p className="text-[10px] font-semibold tracking-widest text-text-subtle uppercase mb-2">
            Award
          </p>
          <p
            className="text-accent text-lg"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            The Influential Changemaker
          </p>
        </div>
      </div>
    </div>
  );
}

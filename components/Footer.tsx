"use client";

import { usePathname } from "next/navigation";

const quoteMap: Record<string, { quote: string; author: string }> = {
  "/": {
    quote:
      "We are all shaped by the people who believed in us before we believed in ourselves.",
    author: "Howard Schultz",
  },
  "/leadership": {
    quote:
      "Leadership is not about being in charge. It is about taking care of those in your charge.",
    author: "Simon Sinek",
  },
  "/leadership/gbt": {
    quote:
      "Talent wins games, but teamwork and intelligence win championships.",
    author: "Michael Jordan",
  },
  "/leadership/talktopus": {
    quote:
      "The most important thing in communication is hearing what isn't said.",
    author: "Peter Drucker",
  },
  "/leadership/gvc": {
    quote: "No one has ever become poor by giving.",
    author: "Anne Frank",
  },
  "/leadership/gvc/chocoziii": {
    quote:
      "Christmas is not a time nor a season, but a state of mind.",
    author: "Calvin Coolidge",
  },
  "/leadership/gvc/may-xanh": {
    quote:
      "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
  },
  "/leadership/gvc/nang": {
    quote:
      "What we have done for ourselves alone dies with us; what we have done for others and the world remains and is immortal.",
    author: "Albert Pike",
  },
  "/leadership/donut-bully": {
    quote: "The opposite of love is not hate, it's indifference.",
    author: "Elie Wiesel",
  },
  "/academics": {
    quote:
      "The mind is not a vessel to be filled, but a fire to be kindled.",
    author: "Plutarch",
  },
  "/personal-projects": {
    quote:
      "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  "/hobbies": {
    quote:
      "Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything.",
    author: "Plato",
  },
  "/references": {
    quote:
      "Surround yourself with only people who are going to lift you higher.",
    author: "Oprah Winfrey",
  },
};

const defaultQuote = quoteMap["/"];

const contacts = [
  {
    label: "Open Facebook profile",
    href: "https://web.facebook.com/anphu.nguyenduc.92",
    target: "_blank" as const,
    rel: "noopener noreferrer",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Open LinkedIn profile",
    href: "https://www.linkedin.com/in/tomm-nguyen-493a70397/",
    target: "_blank" as const,
    rel: "noopener noreferrer",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Send email",
    href: "mailto:anphunguyen266@gmail.com",
    target: undefined,
    rel: undefined,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Call phone number",
    href: "tel:+84936232088",
    target: undefined,
    rel: undefined,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const pathname = usePathname();
  const { quote, author } = quoteMap[pathname] ?? defaultQuote;

  return (
    <footer className="lg:ml-[220px] border-t border-border bg-bg-card">
      {/* Page-specific quote */}
      <div className="flex flex-col items-center px-8 pt-12 pb-12">
        <div
          className="h-px w-[120px] mb-6"
          style={{ backgroundColor: "rgba(255, 122, 122, 0.2)" }}
        />
        <p
          className="text-center max-w-[600px] leading-[1.6] mb-4"
          style={{
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            fontSize: "19px",
            color: "#e5e7eb",
          }}
        >
          &#x201C;{quote}&#x201D;
        </p>
        <p
          className="text-[12px] tracking-widest uppercase text-text-subtle"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          &mdash; {author}
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 px-8 pb-14">
        <p
          className="text-[11px] font-semibold tracking-widest text-text-subtle uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Let&apos;s connect
        </p>

        <div className="flex items-center gap-10 flex-wrap justify-center">
          {contacts.map(({ label, href, target, rel, icon }) => (
            <a
              key={label}
              href={href}
              target={target}
              rel={rel}
              aria-label={label}
              className="text-text-muted hover:text-accent transition-colors duration-200 rounded-full p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              {icon}
            </a>
          ))}
        </div>

        <p className="text-[11px] text-text-subtle">
          An Phu Nguyen Duc · Greenfield School, Hanoi · 2026
        </p>
      </div>
    </footer>
  );
}

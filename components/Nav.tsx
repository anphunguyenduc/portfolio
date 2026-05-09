"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { num: "01", label: "About me", href: "/" },
  { num: "02", label: "Leadership & Activities", href: "/leadership" },
  { num: "03", label: "Academics", href: "/academics" },
  { num: "04", label: "Personal Projects", href: "/personal-projects" },
  { num: "05", label: "Personal Hobbies", href: "/hobbies" },
  { num: "06", label: "References", href: "/references" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger */}
      <button
        className="lg:hidden fixed top-5 left-5 z-50 flex flex-col gap-1.5 p-1"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span className="block w-5 h-px bg-text-primary" />
        <span className="block w-5 h-px bg-text-primary" />
        <span className="block w-5 h-px bg-text-primary" />
      </button>

      {/* Sidebar */}
      <nav
        className={[
          "fixed top-0 left-0 h-full w-[220px] bg-bg border-r border-border",
          "flex flex-col pt-10 pb-8 px-6 z-40",
          "transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        ].join(" ")}
      >
        {/* Avatar — TODO: update src when final photo chosen */}
        <div className="mb-2">
          <div className="relative w-[52px] h-[52px] rounded-full overflow-hidden shrink-0 avatar-glow">
            <Image
              src="/images/hobbies/Personal%20Hobbies/DSC05037.jpeg"
              alt="An Phu Nguyen Duc"
              fill
              className="object-cover"
              style={{ objectPosition: "center 30%" }}
              sizes="52px"
            />
          </div>
        </div>

        {/* School label */}
        <p
          className="text-text-muted text-xs mb-1"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Greenfield School
        </p>

        {/* Name */}
        <div className="mb-10">
          <p
            className="font-semibold text-sm tracking-widest text-text-primary"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            AN PHU
          </p>
          <p
            className="text-accent text-base"
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
            }}
          >
            Nguyen Duc
          </p>
        </div>

        {/* Nav items */}
        <ul className="space-y-1 flex-1">
          {navItems.map(({ num, label, href }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={[
                    "nav-link flex items-baseline gap-2 py-2 text-sm transition-colors",
                    isActive
                      ? "text-text-primary is-active"
                      : "text-text-muted hover:text-text-primary",
                  ].join(" ")}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  <span className="text-accent text-[11px] font-semibold shrink-0">
                    {num}
                  </span>
                  <span>{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

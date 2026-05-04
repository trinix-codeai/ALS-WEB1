"use client";

import { memo, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Legal Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

function SiteHeaderComponent() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${scrolled
          ? "border-[#17314a] bg-[#0b1c2c]/96 shadow-[0_18px_40px_rgba(5,13,22,0.28)]"
          : "border-[#17314a] bg-[#0b1c2c]/92 shadow-[0_10px_30px_rgba(5,13,22,0.18)]"
        }`}
    >
      <div className="als-container">
        <div className={`grid items-center gap-4 md:grid-cols-[auto_1fr_auto] ${scrolled ? "py-3" : "py-4"}`}>
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-white/5 text-xs font-semibold tracking-[0.16em] text-white">
              ALS
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#d4dde8]">
                Law Firm
              </p>
              <p className="text-xl text-white">Alpha Legal Solutions</p>
            </div>
          </Link>

          <nav className="hidden items-center justify-center gap-8 md:flex">
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`site-header__nav-link link-underline text-base font-bold tracking-[0.03em] transition-colors ${
                    isActive
                      ? "site-header__nav-link--active text-white"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link href="/consult" className="btn-primary justify-self-start md:justify-self-end">
            Consult Now
          </Link>
        </div>

        <nav className="flex flex-wrap gap-4 pb-4 md:hidden">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`site-header__nav-link link-underline text-base font-bold tracking-[0.03em] transition-colors ${
                  isActive
                    ? "site-header__nav-link--active text-white"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export const SiteHeader = memo(SiteHeaderComponent);

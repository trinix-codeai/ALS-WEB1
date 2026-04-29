import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[#dce5ee] bg-[#0b1c2c]">
      <div className="als-container grid gap-10 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-2xl text-white">Alpha Legal Solutions</p>
          <p className="mt-3 max-w-md text-sm text-[#d7e0ea]">
            Premium legal counsel for complex personal, corporate, and litigation
            matters. Confidential. Strategic. Outcome-focused.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-[#c8a96a]">Quick Links</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-[#d7e0ea]">
            <Link href="/about" className="link-underline w-fit hover:text-[#4fd1c5]">
              About
            </Link>
            <Link href="/services" className="link-underline w-fit hover:text-[#4fd1c5]">
              Services
            </Link>
            <Link href="/case-studies" className="link-underline w-fit hover:text-[#4fd1c5]">
              Case Studies
            </Link>
            <Link href="/contact" className="link-underline w-fit hover:text-[#4fd1c5]">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-[#c8a96a]">Office</p>
          <p className="mt-4 text-sm text-[#d7e0ea]">401, Apex Chambers, Connaught Place</p>
          <p className="text-sm text-[#d7e0ea]">New Delhi, India 110001</p>
          <p className="mt-3 text-sm text-[#d7e0ea]">+91 72848 72848</p>
          <p className="text-sm text-[#d7e0ea]">contact@alphalegal.in</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-[#9fb0c3]">
        Copyright {new Date().getFullYear()} Alpha Legal Solutions. All rights reserved.
      </div>
    </footer>
  );
}

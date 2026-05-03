"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LumaxLogo from "./LumaxLogo";

interface NavbarProps {
  onCtaClick: () => void;
}

export default function Navbar({ onCtaClick }: NavbarProps) {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const close = () => setOpen(false);

  const links = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#free-tips",    label: "Free Tips"    },
    { href: "#faq",          label: "FAQ"           },
  ];

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-sm border-b border-[#E8F5E9]"
          : "bg-white/90 backdrop-blur-sm border-b border-[#E8F5E9]/60",
      ].join(" ")}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" aria-label="Lumax Results home" className="shrink-0">
          <LumaxLogo className="h-8 w-auto" dark />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#374151]">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hover:text-[#34A853] transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={onCtaClick}
          className="btn-primary hidden md:inline-flex text-sm px-6 py-2.5"
        >
          Get Free Tips
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#374151] hover:text-[#34A853] p-2 transition-colors cursor-pointer rounded-lg hover:bg-[#E8F5E9]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={[
          "md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-[#E8F5E9]",
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <nav className="px-5 py-5 flex flex-col gap-1">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="text-[#374151] font-medium py-3 px-2 rounded-lg hover:bg-[#E8F5E9] hover:text-[#34A853] transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="mt-3 pt-3 border-t border-[#E8F5E9]">
            <button
              onClick={() => { close(); onCtaClick(); }}
              className="btn-primary w-full py-3.5"
            >
              Get Free Tips
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export default function FounderSection() {
  return (
    <section className="section-white py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* ── Badge ─────────────────────────────────────────────────────────── */}
        <RevealOnScroll>
          <p className="text-center mb-12">
            <span className="badge-green">A word from the founder</span>
          </p>
        </RevealOnScroll>

        {/* ── Main row: portrait + quote ────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 mb-16">

          {/* Portrait */}
          <RevealOnScroll direction="left" className="shrink-0">
            <div className="relative">
              {/* Circular profile photo */}
              <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-[#D1FAE5] shadow-xl">
                <Image
                  src="/images/team/kristens.jpg"
                  alt="Kristens Batna, Founder of Lumax Results"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 208px, 256px"
                  priority
                />
              </div>

              {/* KB initials badge */}
              <div className="absolute -bottom-3 -right-3 w-14 h-14 rounded-full bg-[#34A853] border-4 border-white shadow-md flex items-center justify-center">
                <span className="text-white font-black text-sm tracking-wide">KB</span>
              </div>

              {/* Decorative ring */}
              <div
                aria-hidden
                className="absolute -inset-3 rounded-full border border-[#D1FAE5] pointer-events-none"
              />
            </div>
          </RevealOnScroll>

          {/* Quote + bio */}
          <RevealOnScroll direction="right" className="flex-1">
            <blockquote className="text-2xl sm:text-3xl font-bold text-[#1C2B1C] leading-snug mb-6">
              &ldquo;Huntsville businesses don&apos;t have a{" "}
              <span className="gradient-text">results</span> problem. They have a{" "}
              <span className="gradient-text">visibility</span> problem. Fix the
              visibility, and the results follow.&rdquo;
            </blockquote>

            <p className="text-[#374151] text-base leading-relaxed mb-7">
              I built Lumax Results because I watched too many great local businesses in the
              Rocket City get outranked by inferior competitors who simply knew how to be seen.
              My mission is simple: give you the exact playbook to show up where your customers
              are already searching — and turn that visibility into real revenue.
            </p>

            {/* Name + title row */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D1FAE5] shrink-0">
                <Image
                  src="/images/team/kristens.jpg"
                  alt="Kristens Batna"
                  width={48}
                  height={48}
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <div>
                <p className="text-[#1C2B1C] font-bold">Kristens Batna</p>
                <p className="text-[#34A853] text-sm font-medium">Founder, Lumax Results</p>
                <p className="text-[#9CA3AF] text-xs">Huntsville, Alabama</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* ── Action shot — full-width banner ───────────────────────────────── */}
        <RevealOnScroll delay={0.1}>
          <div className="relative w-full rounded-2xl overflow-hidden border border-[#E8F5E9] shadow-sm" style={{ height: 300 }}>
            <Image
              src="/images/team/kristens-action.jpg"
              alt="Kristens Batna at work"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 960px"
            />
            {/* Subtle green gradient overlay — keeps it on-brand */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C2B1C]/60 via-transparent to-transparent" />

            {/* Overlay text */}
            <div className="absolute inset-0 flex items-center px-8 sm:px-12">
              <div className="max-w-sm">
                <p className="text-white font-black text-xl sm:text-2xl leading-snug mb-2">
                  Real work. Real results.
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  We put in the work so your Huntsville business shows up first.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export default function FounderSection() {
  return (
    <section className="section-white py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        <RevealOnScroll>
          <p className="text-center mb-12">
            <span className="badge-green">A word from the founder</span>
          </p>
        </RevealOnScroll>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* ── Portrait ──────────────────────────────────────────────────────── */}
          <RevealOnScroll direction="left" className="shrink-0">
            <div className="relative">
              {/* Circular photo */}
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-[#D1FAE5] shadow-xl">
                <Image
                  src="/images/team/kristens.jpg"
                  alt="Kristens Batna, Founder of Lumax Results"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 224px, 288px"
                  priority
                />
              </div>

              {/* KB green badge */}
              <div className="absolute -bottom-2 -right-2 w-14 h-14 rounded-full bg-[#34A853] border-4 border-white shadow-md flex items-center justify-center">
                <span className="text-white font-black text-sm tracking-wide">KB</span>
              </div>

              {/* Decorative ring */}
              <div
                aria-hidden
                className="absolute -inset-3 rounded-full border border-[#D1FAE5] pointer-events-none"
              />
            </div>
          </RevealOnScroll>

          {/* ── Quote + bio ────────────────────────────────────────────────────── */}
          <RevealOnScroll direction="right" className="flex-1">
            <blockquote className="text-2xl sm:text-3xl font-bold text-[#1C2B1C] leading-snug mb-6">
              &ldquo;Huntsville businesses don&apos;t have a{" "}
              <span className="gradient-text">results</span> problem. They have a{" "}
              <span className="gradient-text">visibility</span> problem. Fix the
              visibility, and the results follow.&rdquo;
            </blockquote>

            <p className="text-[#374151] text-base leading-relaxed mb-8">
              I built Lumax Results because I watched too many great local businesses in
              the Rocket City get outranked by inferior competitors who simply knew how to
              be seen. My mission is simple: give you the exact playbook to show up where
              your customers are already searching — and turn that visibility into real revenue.
            </p>

            {/* Name card */}
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
      </div>
    </section>
  );
}

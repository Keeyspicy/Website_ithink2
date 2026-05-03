"use client";

import Image from "next/image";
import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

export default function FounderSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="section-white py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <p className="text-center mb-10">
            <span className="badge-green">A word from our founder</span>
          </p>
        </RevealOnScroll>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Portrait */}
          <RevealOnScroll direction="left" className="shrink-0">
            <div className="relative">
              <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-[#D1FAE5] shadow-lg bg-[#EEF9EE] flex items-center justify-center">
                {!imgError ? (
                  <Image
                    src="/images/team/kristens.jpg"
                    alt="Kristens Batna, Founder of Lumax Results"
                    fill
                    className="object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  /* Placeholder until photo is uploaded */
                  <div className="flex flex-col items-center gap-2 text-center px-4">
                    <div className="w-16 h-16 rounded-full bg-[#34A853] flex items-center justify-center text-white text-2xl font-black">
                      KB
                    </div>
                    <span className="text-[#6B7280] text-xs leading-tight">
                      Photo coming soon
                    </span>
                  </div>
                )}
              </div>
              {/* Decorative ring */}
              <div
                aria-hidden
                className="absolute -inset-2 rounded-full pointer-events-none border border-[#D1FAE5]"
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
              are already searching.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#34A853] flex items-center justify-center text-white font-bold text-sm shrink-0">
                KB
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

"use client";

import { GraduationCap } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

interface FreeResourceSectionProps {
  onCtaClick: () => void;
}

export default function FreeResourceSection({ onCtaClick }: FreeResourceSectionProps) {
  return (
    <section id="free-tips" className="section-white py-20 px-4 sm:px-6">
      <div className="max-w-xl mx-auto text-center">
        <RevealOnScroll>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1C2B1C] mb-6 shadow-md">
            <GraduationCap size={32} className="text-white" />
          </div>

          <p className="mb-5">
            <span className="badge-green">Free stuff</span>
          </p>

          <h2 className="text-3xl sm:text-4xl font-black text-[#1C2B1C] mb-5 leading-tight">
            3 Tips to Rank Higher on Google
          </h2>

          <p className="text-[#374151] text-base leading-relaxed mb-3">
            Get a free video showing you the first three things we do when we start
            working with a local business to get them ranking in the top 3.
          </p>

          <p className="text-[#6B7280] text-sm mb-2">No technical know-how needed.</p>
          <p className="text-[#6B7280] text-sm mb-8">Enter your email and you&apos;ll get instant access.</p>

          <button
            onClick={onCtaClick}
            className="btn-primary text-base px-10 py-4 w-full sm:w-auto"
          >
            Get 3 FREE Tips
          </button>

          <p className="text-[#9CA3AF] text-xs mt-4">No spam. Unsubscribe anytime.</p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

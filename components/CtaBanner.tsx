"use client";

import RevealOnScroll from "./RevealOnScroll";

interface CtaBannerProps {
  onCtaClick: () => void;
}

export default function CtaBanner({ onCtaClick }: CtaBannerProps) {
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#1C2B1C] relative overflow-hidden">

      {/* Subtle background pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #34A853 0%, transparent 50%),
                            radial-gradient(circle at 80% 50%, #34A853 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <RevealOnScroll>
          <p className="mb-4">
            <span className="inline-flex items-center gap-1.5 bg-[#34A853]/20 border border-[#34A853]/30 rounded-full px-4 py-1.5 text-[#81C995] text-xs font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34A853] animate-pulse" />
              Free for a limited time
            </span>
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Stop letting Huntsville&apos;s market<br className="hidden sm:block" /> pass you by.
          </h2>

          <p className="text-[#A7C4A7] text-base sm:text-lg mb-8 leading-relaxed max-w-xl mx-auto">
            Get your 3 free tips and discover exactly what&apos;s stopping you from
            ranking in the top 3 — and how to fix it this week.
          </p>

          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 bg-[#34A853] hover:bg-[#2A8944] text-white font-black text-lg px-10 py-4 rounded-full shadow-lg cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(52,168,83,0.40)] active:translate-y-0"
          >
            Get My 3 Free Tips →
          </button>

          <p className="text-[#6B7280] text-xs mt-5">
            No credit card. No commitment. 100% free.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

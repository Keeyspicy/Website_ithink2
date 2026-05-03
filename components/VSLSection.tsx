"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

interface VSLSectionProps {
  onCtaClick: () => void;
}

export default function VSLSection({ onCtaClick }: VSLSectionProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="how-it-works" className="section-mist py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll>
          <p className="text-center mb-3">
            <span className="badge-green">Free training</span>
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-black text-[#1C2B1C] mb-4 leading-tight">
            The Only Two Things You Need to Know<br className="hidden sm:block" />
            About Growing Locally on Google
          </h2>
          <p className="text-center text-[#6B7280] max-w-lg mx-auto mb-10 text-base leading-relaxed">
            Watch this free training to discover exactly why local businesses stay
            invisible — and the precise moves to fix it this week.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div
            className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-white border border-[#D1FAE5]"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={onCtaClick}
            style={{
              boxShadow: hovered
                ? "0 24px 64px rgba(52,168,83,0.18), 0 4px 16px rgba(0,0,0,0.07)"
                : "0 8px 32px rgba(0,0,0,0.07), 0 2px 8px rgba(0,0,0,0.04)",
              transition: "box-shadow 0.35s ease",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 select-none bg-[#EEF9EE]">
              <p
                className="text-[#1C2B1C] font-black text-center px-8 leading-none"
                style={{
                  fontSize: "clamp(2rem, 6vw, 3.5rem)",
                  transition: "transform 0.28s ease",
                  transform: hovered ? "scale(1.03)" : "scale(1)",
                }}
              >
                Click To Watch
              </p>

              <div
                style={{
                  width: 76, height: 76,
                  borderRadius: "50%",
                  background: hovered ? "#34A853" : "#ffffff",
                  border: "2.5px solid #34A853",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: hovered
                    ? "0 0 0 12px rgba(52,168,83,0.14)"
                    : "0 4px 16px rgba(52,168,83,0.24)",
                  transition: "all 0.28s ease",
                  transform: hovered ? "scale(1.1)" : "scale(1)",
                }}
              >
                <Play
                  size={28}
                  fill={hovered ? "#fff" : "#34A853"}
                  color={hovered ? "#fff" : "#34A853"}
                  style={{ marginLeft: 3 }}
                />
              </div>

              <div className="flex items-center gap-2 bg-white/90 border border-[#D1FAE5] rounded-full px-4 py-1.5">
                <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
                <span className="text-[#374151] text-xs font-medium">Free · ~10 min</span>
              </div>
            </div>
            {/* TODO: Replace with video embed when ready */}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.18}>
          <div className="mt-8 text-center">
            <button onClick={onCtaClick} className="btn-primary text-base px-8 py-4">
              Get My 3 Free Tips →
            </button>
            <p className="text-[#9CA3AF] text-xs mt-3">No credit card. No commitment. 100% free.</p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

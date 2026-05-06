"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

interface VSLSectionProps {
  onCtaClick: () => void;
}

// YouTube Shorts embed URL — video ID: ogz1tDiANEI
const VIDEO_URL =
  "https://www.youtube.com/embed/ogz1tDiANEI?autoplay=1&rel=0&modestbranding=1&playsinline=1";

export default function VSLSection({ onCtaClick }: VSLSectionProps) {
  const [playing, setPlaying] = useState(false);
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
          {/* Portrait container — centred, max 380px wide so the Short looks natural */}
          <div className="mx-auto" style={{ maxWidth: 380 }}>
            <div
              className="relative w-full rounded-2xl overflow-hidden border border-[#D1FAE5]"
              style={{
                aspectRatio: "9 / 16",
                boxShadow: hovered
                  ? "0 24px 64px rgba(52,168,83,0.20), 0 4px 16px rgba(0,0,0,0.08)"
                  : "0 8px 32px rgba(0,0,0,0.08)",
                transition: "box-shadow 0.35s ease",
              }}
            >
              {/* ── Playing: YouTube embed ── */}
              {playing && (
                <iframe
                  src={VIDEO_URL}
                  title="Lumax Results — Free Training"
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              )}

              {/* ── Thumbnail (shown until play is clicked) ── */}
              {!playing && (
                <button
                  type="button"
                  aria-label="Play free training video"
                  className="absolute inset-0 w-full h-full cursor-pointer group"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  onClick={() => setPlaying(true)}
                >
                  {/* Cover image */}
                  <Image
                    src="/images/vsl-cover.jpg"
                    alt="Free training — how to rank higher on Google"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Overlay */}
                  <span className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Play button + label */}
                  <span className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <span
                      style={{
                        width: 76, height: 76,
                        borderRadius: "50%",
                        background: hovered ? "#34A853" : "rgba(255,255,255,0.92)",
                        border: "3px solid #34A853",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        boxShadow: hovered
                          ? "0 0 0 14px rgba(52,168,83,0.18)"
                          : "0 4px 24px rgba(0,0,0,0.30)",
                        transition: "all 0.28s ease",
                        transform: hovered ? "scale(1.1)" : "scale(1)",
                      }}
                    >
                      <Play
                        size={28}
                        fill={hovered ? "#fff" : "#34A853"}
                        color={hovered ? "#fff" : "#34A853"}
                        style={{ marginLeft: 4 }}
                      />
                    </span>

                    <span className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
                      <span className="text-white text-xs font-medium">Click to watch</span>
                    </span>
                  </span>
                </button>
              )}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.18}>
          <div className="mt-10 text-center">
            <button onClick={onCtaClick} className="btn-primary text-base px-8 py-4">
              Get My 3 Free Tips →
            </button>
            <p className="text-[#9CA3AF] text-xs mt-3">
              No credit card. No commitment. 100% free.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

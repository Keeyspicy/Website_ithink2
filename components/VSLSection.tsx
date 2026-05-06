"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

interface VSLSectionProps {
  onCtaClick: () => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// TO ADD YOUR VIDEO:
//   Option A — YouTube/Vimeo (recommended):
//     1. Upload your video to YouTube (can be "Unlisted") or Vimeo
//     2. Paste the embed URL below, e.g.:
//        YouTube: "https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&rel=0"
//        Vimeo:   "https://player.vimeo.com/video/YOUR_VIDEO_ID?autoplay=1"
//     3. Set VIDEO_URL to that string — the iframe will render automatically
//
//   Option B — self-hosted (file must be under 100 MB for Vercel):
//     Put the .mp4 in /public/videos/ and set:
//        VIDEO_URL = "/videos/your-video.mp4"
// ─────────────────────────────────────────────────────────────────────────────
const VIDEO_URL = ""; // ← paste your URL here

export default function VSLSection({ onCtaClick }: VSLSectionProps) {
  const [playing, setPlaying]   = useState(false);
  const [hovered, setHovered]   = useState(false);

  const isYouTubeOrVimeo = VIDEO_URL.startsWith("http");
  const isSelfHosted     = VIDEO_URL.startsWith("/");

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
            className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[#D1FAE5]"
            style={{
              boxShadow: hovered
                ? "0 24px 64px rgba(52,168,83,0.18), 0 4px 16px rgba(0,0,0,0.07)"
                : "0 8px 32px rgba(0,0,0,0.07)",
              transition: "box-shadow 0.35s ease",
            }}
          >
            {/* ── Playing: YouTube / Vimeo embed ── */}
            {playing && isYouTubeOrVimeo && (
              <iframe
                src={VIDEO_URL}
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            )}

            {/* ── Playing: self-hosted MP4 ── */}
            {playing && isSelfHosted && (
              <video
                src={VIDEO_URL}
                autoPlay
                controls
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            {/* ── Thumbnail / placeholder (shown until user clicks play) ── */}
            {!playing && (
              <button
                type="button"
                aria-label="Play video"
                className="absolute inset-0 w-full h-full cursor-pointer group"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => VIDEO_URL ? setPlaying(true) : onCtaClick()}
              >
                {/* Cover image */}
                <Image
                  src="/images/vsl-cover.jpg"
                  alt="Free training: rank higher on Google"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Dark overlay */}
                <span
                  className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"
                />

                {/* Play button circle */}
                <span className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <span
                    style={{
                      width: 80, height: 80,
                      borderRadius: "50%",
                      background: hovered ? "#34A853" : "rgba(255,255,255,0.92)",
                      border: "3px solid #34A853",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: hovered
                        ? "0 0 0 14px rgba(52,168,83,0.18)"
                        : "0 4px 24px rgba(0,0,0,0.28)",
                      transition: "all 0.28s ease",
                      transform: hovered ? "scale(1.1)" : "scale(1)",
                    }}
                  >
                    <Play
                      size={30}
                      fill={hovered ? "#fff" : "#34A853"}
                      color={hovered ? "#fff" : "#34A853"}
                      style={{ marginLeft: 4 }}
                    />
                  </span>

                  <span className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
                    <span className="text-white text-xs font-medium">Free · ~10 min</span>
                  </span>
                </span>
              </button>
            )}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.18}>
          <div className="mt-8 text-center">
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

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, CheckCircle } from "lucide-react";

interface HeroSectionProps {
  onCtaClick: () => void;
}

const bullets = [
  "Rank in the top 3 on Google Maps",
  "More calls from local customers",
  "No tech skills needed",
];

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  const [videoHovered, setVideoHovered] = useState(false);

  return (
    <section className="section-white pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: Copy ──────────────────────────────────────────────────── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-5"
            >
              <span className="badge-green">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34A853] animate-pulse" />
                Free for Huntsville businesses
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] }}
              className="text-4xl sm:text-5xl font-black text-[#1C2B1C] leading-[1.1] tracking-tight mb-5"
            >
              Is Your Huntsville Business{" "}
              <span className="gradient-text">Invisible on Google?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] }}
              className="text-[#374151] text-base sm:text-lg leading-relaxed mb-5"
            >
              Watch this short video to learn why you&apos;re not ranking in the top 3 —
              then sign up for <strong className="text-[#1C2B1C]">3 FREE tips</strong> you
              can implement today to start climbing.
            </motion.p>

            {/* Bullet list */}
            <motion.ul
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="flex flex-col gap-2.5 mb-8"
            >
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-[#374151] text-sm sm:text-base">
                  <CheckCircle size={17} className="text-[#34A853] shrink-0" />
                  {b}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.28 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={onCtaClick}
                className="btn-primary text-base px-8 py-4"
              >
                Get 3 FREE Tips
              </button>
              <a
                href="#how-it-works"
                className="btn-outline text-sm flex items-center justify-center gap-2 py-4"
              >
                <Play size={14} className="text-[#34A853]" fill="#34A853" />
                Watch the video
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="text-[#9CA3AF] text-xs mt-4"
            >
              No credit card. No commitment. 100% free.
            </motion.p>
          </div>

          {/* ── Right: Video placeholder ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] }}
          >
            <div
              className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-[#EEF9EE] border border-[#D1FAE5]"
              onMouseEnter={() => setVideoHovered(true)}
              onMouseLeave={() => setVideoHovered(false)}
              onClick={onCtaClick}
              style={{
                boxShadow: videoHovered
                  ? "0 20px 56px rgba(52,168,83,0.20), 0 4px 16px rgba(0,0,0,0.08)"
                  : "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
                transition: "box-shadow 0.3s ease",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 select-none">
                <p
                  className="text-[#1C2B1C] font-black text-center px-6 leading-tight"
                  style={{
                    fontSize: "clamp(1.4rem, 4vw, 2rem)",
                    transition: "transform 0.25s ease",
                    transform: videoHovered ? "scale(1.03)" : "scale(1)",
                  }}
                >
                  Click To Watch
                </p>

                {/* Play circle */}
                <div
                  style={{
                    width: 68, height: 68,
                    borderRadius: "50%",
                    background: videoHovered ? "#34A853" : "#ffffff",
                    border: "2.5px solid #34A853",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: videoHovered
                      ? "0 0 0 10px rgba(52,168,83,0.15)"
                      : "0 4px 16px rgba(52,168,83,0.22)",
                    transition: "all 0.25s ease",
                    transform: videoHovered ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  <Play
                    size={26}
                    style={{ color: videoHovered ? "#fff" : "#34A853", marginLeft: 3 }}
                    fill={videoHovered ? "#fff" : "#34A853"}
                  />
                </div>

                <div className="flex items-center gap-2 bg-white/80 border border-[#D1FAE5] rounded-full px-4 py-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
                  <span className="text-[#374151] text-xs font-medium">Free · ~10 min</span>
                </div>
              </div>
              {/* TODO: Replace div with your video embed */}
            </div>

            <p className="text-center text-[#9CA3AF] text-xs mt-3">
              ↓ Sign up below to get 3 free tips you can use today
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

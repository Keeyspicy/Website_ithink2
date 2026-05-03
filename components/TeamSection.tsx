"use client";

import { useState } from "react";
import Image from "next/image";
import { Globe, Link2 } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

// ─── Team data ────────────────────────────────────────────────────────────────
// To add real photos:
//   1. Drop the headshot into  public/images/team/<filename>.jpg
//   2. Update the `photo` field below to match the filename
//   Recommended: 600 × 800 px, JPG/WebP, face centred in upper-half
// ─────────────────────────────────────────────────────────────────────────────
const team = [
  {
    name: "Arno Wingen",
    role: "Founder & CEO",
    initials: "AW",
    photo: "/images/team/arno.jpg",      // ← swap with real file
    socials: [{ icon: Globe,  href: "#", label: "Website" }],
  },
  {
    name: "Can Ersöz",
    role: "Head of Sales",
    initials: "CE",
    photo: "/images/team/can.jpg",        // ← swap with real file
    socials: [{ icon: Link2, href: "#", label: "LinkedIn" }],
  },
  {
    name: "Ilango Senthivel",
    role: "Customer Success Manager",
    initials: "IS",
    photo: "/images/team/ilango.jpg",     // ← swap with real file
    socials: [{ icon: Link2, href: "#", label: "LinkedIn" }],
  },
];

// ─── Photo card with auto-fallback to initials avatar ────────────────────────
function PhotoCard({
  photo,
  name,
  initials,
}: {
  photo: string;
  name: string;
  initials: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    // Placeholder shown until real photo is added
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#0D1526] to-[#141B2D]">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-[#050B18] text-2xl font-black"
          style={{ background: "linear-gradient(135deg,#00C8FF,#0091CC)", boxShadow: "0 0 24px rgba(0,200,255,0.35)" }}
        >
          {initials}
        </div>
        <p className="text-slate-600 text-xs text-center px-4">
          Add photo to
          <br />
          <code className="text-slate-500">public/images/team/</code>
        </p>
      </div>
    );
  }

  return (
    <Image
      src={photo}
      alt={name}
      fill
      sizes="(max-width: 768px) 90vw, 33vw"
      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      onError={() => setFailed(true)}
    />
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export default function TeamSection() {
  return (
    <section id="team" className="py-24 px-4 sm:px-6 section-alt">
      <div className="max-w-5xl mx-auto">

        <RevealOnScroll>
          <div className="text-center mb-14">
            <p className="text-[#00C8FF] font-semibold text-xs uppercase tracking-widest mb-3">
              Our Team
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Meet the team
            </h2>
            <p className="text-slate-400 mt-3 max-w-lg mx-auto text-base">
              Small, focused, and accountable — you always know exactly who&apos;s
              working on your account.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-3 gap-6">
          {team.map(({ name, role, initials, photo, socials }, i) => (
            <RevealOnScroll key={name} delay={i * 0.1}>
              <div
                className="group rounded-2xl overflow-hidden border border-white/[0.08] hover:border-[#00C8FF]/30 transition-all duration-300"
                style={{
                  background: "rgba(13,21,38,0.8)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                {/* Photo area — tall, full-bleed */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#0D1526]">
                  <PhotoCard photo={photo} name={name} initials={initials} />

                  {/* Subtle gradient fade at bottom of photo */}
                  <div
                    className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
                    style={{ background: "linear-gradient(to bottom, transparent, rgba(13,21,38,0.85))" }}
                  />
                </div>

                {/* Name / role / socials */}
                <div className="p-5 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-white font-bold text-base leading-tight">{name}</h3>
                    <p className="text-[#00C8FF] text-sm font-medium mt-0.5">{role}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {socials.map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-[#00C8FF]/20 border border-white/[0.08] hover:border-[#00C8FF]/40 flex items-center justify-center transition-all duration-200"
                      >
                        <Icon size={14} className="text-slate-400" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

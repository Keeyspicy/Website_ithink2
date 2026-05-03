"use client";

import { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, ChevronDown } from "lucide-react";
import confetti from "canvas-confetti";
import RevealOnScroll from "./RevealOnScroll";

// ─── Green confetti ───────────────────────────────────────────────────────────
function fireConfetti() {
  const fire = (opts: confetti.Options) =>
    confetti({ disableForReducedMotion: true, ...opts });
  fire({
    particleCount: 140, spread: 85,
    origin: { y: 0.55, x: 0.5 },
    colors: ["#34A853", "#81C995", "#ffffff", "#D1FAE5", "#1C2B1C"],
    gravity: 0.88, scalar: 1.1,
  });
  setTimeout(() => fire({
    particleCount: 70, angle: 58, spread: 52,
    origin: { x: 0, y: 0.68 },
    colors: ["#34A853", "#81C995", "#ffffff"],
  }), 180);
  setTimeout(() => fire({
    particleCount: 70, angle: 122, spread: 52,
    origin: { x: 1, y: 0.68 },
    colors: ["#34A853", "#81C995", "#ffffff"],
  }), 360);
}

const SERVICE_OPTIONS = [
  { value: "",                            label: "What can we help with? (select one)" },
  { value: "Google Rankings / Local SEO", label: "Google Rankings / Local SEO"         },
  { value: "Google Ads / Paid Search",    label: "Google Ads / Paid Search"             },
  { value: "Full Marketing Audit",        label: "Full Marketing Audit"                 },
  { value: "Website Redesign",            label: "Website Redesign"                     },
  { value: "Social Media Growth",         label: "Social Media Growth"                  },
  { value: "Other",                       label: "Something else…"                      },
];

interface LeadCaptureSectionProps {
  formspreeId: string;
  inline?: boolean;
  onSuccess?: () => void;
}

export default function LeadCaptureSection({
  formspreeId,
  inline = false,
  onSuccess,
}: LeadCaptureSectionProps) {
  const [state, handleSubmit] = useForm(formspreeId);

  useEffect(() => {
    if (!state.succeeded) return;
    fireConfetti();
    if (onSuccess) {
      const t = setTimeout(onSuccess, 4200);
      return () => clearTimeout(t);
    }
  }, [state.succeeded, onSuccess]);

  const inputCls =
    "w-full rounded-xl bg-white border border-[#D1FAE5] text-[#1C2B1C] placeholder:text-[#9CA3AF] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#34A853]/30 focus:border-[#34A853] transition";

  // ── Success ───────────────────────────────────────────────────────────────
  const successPanel = (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
      className="flex flex-col items-center gap-4 py-10 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 240, damping: 18 }}
        className="w-20 h-20 rounded-full bg-[#E8F5E9] border-2 border-[#34A853] flex items-center justify-center"
      >
        <CheckCircle2 size={36} className="text-[#34A853]" />
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="text-2xl font-black text-[#1C2B1C]"
      >
        You&apos;re in! 🎉
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="text-[#6B7280] text-sm max-w-xs mx-auto leading-relaxed"
      >
        Your 3 free tips are on the way. Check your inbox in the next 2 minutes.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-[#34A853] text-xs font-semibold"
      >
        No spam. No commitment. Just results.
      </motion.p>
    </motion.div>
  );

  // ── Form ──────────────────────────────────────────────────────────────────
  const formPanel = (
    <motion.form
      key="form"
      onSubmit={handleSubmit}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col gap-4"
      noValidate
    >
      <input type="hidden" name="_subject" value="New Lumax Lead" />

      <div>
        <input type="text" name="name" required placeholder="Your full name"
          autoComplete="name" className={inputCls} />
        <ValidationError field="name" errors={state.errors}
          className="text-red-500 text-xs mt-1 block" />
      </div>

      <div>
        <input type="email" name="email" required placeholder="Your best email address"
          autoComplete="email" className={inputCls} />
        <ValidationError field="email" errors={state.errors}
          className="text-red-500 text-xs mt-1 block" />
      </div>

      <div>
        <input type="text" name="city" placeholder="Your city"
          autoComplete="address-level2" defaultValue="Huntsville, AL" className={inputCls} />
        <ValidationError field="city" errors={state.errors}
          className="text-red-500 text-xs mt-1 block" />
      </div>

      <div className="relative">
        <select name="service_needed" required defaultValue="" className={`${inputCls} appearance-none pr-10 cursor-pointer`}>
          {SERVICE_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value} disabled={value === ""}>{label}</option>
          ))}
        </select>
        <ChevronDown size={16}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none" />
        <ValidationError field="service_needed" errors={state.errors}
          className="text-red-500 text-xs mt-1 block" />
      </div>

      <ValidationError errors={state.errors}
        className="text-red-500 text-sm text-center block" />

      <button
        type="submit"
        disabled={state.submitting}
        className="btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed py-4 text-base mt-1 w-full"
      >
        {state.submitting ? (
          <><Loader2 size={18} className="animate-spin" /> Sending…</>
        ) : (
          "Get My 3 Free Tips →"
        )}
      </button>

      <p className="text-[#9CA3AF] text-xs text-center">
        100% free. No spam. Unsubscribe anytime.
      </p>
    </motion.form>
  );

  const content = (
    <AnimatePresence mode="wait">
      {state.succeeded ? successPanel : formPanel}
    </AnimatePresence>
  );

  if (inline) return content;

  return (
    <section id="sign-up" className="section-mist py-24 px-4 sm:px-6">
      <div className="max-w-lg mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-8">
            <p className="mb-3">
              <span className="badge-green">Free tips</span>
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1C2B1C] mb-4 leading-tight">
              Get 3 Free Tips to Rank Higher
            </h2>
            <p className="text-[#6B7280] text-base leading-relaxed">
              Sign up below to get three FREE tips you can implement today
              to start climbing Google&apos;s local rankings in Huntsville.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8F5E9] shadow-sm">
            {content}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

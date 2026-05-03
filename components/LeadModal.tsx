"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import LeadCaptureSection from "./LeadCaptureSection";
import LumaxLogo from "./LumaxLogo";

interface LeadModalProps {
  open: boolean;
  onClose: () => void;
  formspreeId?: string;
}

export default function LeadModal({ open, onClose, formspreeId }: LeadModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/50 backdrop-blur-sm p-4 sm:items-center overflow-y-auto"
    >
      <div className="relative w-full max-w-md my-4 overflow-hidden rounded-2xl shadow-2xl bg-white border border-[#E8F5E9]">

        {/* Green top accent line */}
        <div className="h-1 w-full bg-gradient-to-r from-[#34A853] via-[#81C995] to-[#34A853]" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#9CA3AF] hover:text-[#1C2B1C] transition-colors cursor-pointer z-10 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#E8F5E9]"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="p-7 pt-6">
          {/* Logo */}
          <div className="flex justify-center mb-5">
            <LumaxLogo className="h-8 w-auto" dark />
          </div>

          {/* Heading */}
          <div className="text-center mb-6">
            <p className="mb-2">
              <span className="badge-green">Free tips</span>
            </p>
            <h2 className="text-2xl font-black text-[#1C2B1C] mb-2 leading-tight">
              Get Your 3 Free Tips
            </h2>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              Enter your details and we&apos;ll send you the exact first three steps
              to start ranking higher on Google in Huntsville.
            </p>
          </div>

          <LeadCaptureSection
            formspreeId={formspreeId ?? "mwvykpqp"}
            inline
            onSuccess={() => setTimeout(onClose, 3500)}
          />
        </div>
      </div>
    </div>
  );
}

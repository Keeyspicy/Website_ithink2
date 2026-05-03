"use client";

import { useState } from "react";
import ScrollProgressBar   from "@/components/ScrollProgressBar";
import Navbar              from "@/components/Navbar";
import HeroSection         from "@/components/HeroSection";
import SocialProofSection  from "@/components/SocialProofSection";
import VSLSection          from "@/components/VSLSection";
import FeaturesSection     from "@/components/FeaturesSection";
import FreeResourceSection from "@/components/FreeResourceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadCaptureSection  from "@/components/LeadCaptureSection";
import FounderSection      from "@/components/FounderSection";
import FAQSection          from "@/components/FAQSection";
import CtaBanner           from "@/components/CtaBanner";
import LeadModal           from "@/components/LeadModal";
import Footer              from "@/components/Footer";

// Formspree endpoint: https://formspree.io/f/mwvykpqp
// Destination: kristens@lumaxresults.com
const FORMSPREE_ID = "mwvykpqp";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const open  = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  return (
    <>
      {/* Scroll progress bar */}
      <ScrollProgressBar />

      {/* Fixed nav */}
      <Navbar onCtaClick={open} />

      <main>
        {/* 1 — Hero */}
        <HeroSection onCtaClick={open} />

        {/* 2 — Social proof logos */}
        <SocialProofSection />

        {/* 3 — VSL (video) */}
        <VSLSection onCtaClick={open} />

        {/* 4 — 3 feature pillars */}
        <FeaturesSection />

        {/* 5 — Free resource teaser */}
        <FreeResourceSection onCtaClick={open} />

        {/* 6 — Testimonials */}
        <TestimonialsSection />

        {/* 7 — Inline lead capture form */}
        <LeadCaptureSection formspreeId={FORMSPREE_ID} />

        {/* 8 — Founder */}
        <FounderSection />

        {/* 9 — FAQ */}
        <FAQSection />

        {/* 10 — Final CTA banner */}
        <CtaBanner onCtaClick={open} />
      </main>

      <Footer />

      {/* Modal — triggered by all CTA buttons */}
      <LeadModal open={modalOpen} onClose={close} formspreeId={FORMSPREE_ID} />
    </>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const faqs = [
  {
    q: "What exactly are the 3 free tips?",
    a: "They're the first three things we do for every new local business client to get them ranking in Google's top 3. They cover your Google Business Profile, your local citations, and on-page signals. Each tip takes less than 30 minutes to implement — no tech skills required.",
  },
  {
    q: "Do I need technical knowledge to use these tips?",
    a: "Not at all. These tips are designed specifically for business owners, not developers. If you can log into Gmail and fill in a form, you can implement every single one. We walk you through each step in plain English.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most of our clients start seeing movement in Google Maps rankings within 2–6 weeks of implementing the tips. Results vary based on your industry and competition, but the strategies are proven to work consistently for local Huntsville businesses.",
  },
  {
    q: "Is this really free? What's the catch?",
    a: "Yes, completely free. We share these tips because we believe in leading with value. Some businesses implement them on their own — which is great! Others decide they'd like our team to do it for them, and that's when they become clients. No pressure either way.",
  },
  {
    q: "How is Lumax Results different from other marketing agencies?",
    a: "We focus exclusively on local search visibility for Huntsville businesses. We don't do generic marketing — everything we do is designed to get you ranking higher in Google Maps and local search so your phone rings more. We're your on-demand marketing department, not just an agency sending you monthly reports.",
  },
  {
    q: "What kind of businesses do you work with?",
    a: "We work with local service businesses across Huntsville and the surrounding area — roofing, HVAC, dental, legal, chiropractic, auto services, and more. If your customers search Google to find a local provider, we can help you get found first.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="section-white py-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <RevealOnScroll>
          <p className="text-center mb-3">
            <span className="badge-green">FAQ</span>
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-black text-[#1C2B1C] mb-12 leading-tight">
            Frequently asked questions
          </h2>
        </RevealOnScroll>

        <div className="rounded-2xl border border-[#E8F5E9] overflow-hidden">
          {faqs.map(({ q, a }, i) => {
            const isOpen = openIndex === i;
            return (
              <RevealOnScroll key={q} delay={i * 0.06}>
                <div className={`faq-item ${i === faqs.length - 1 ? "border-b-0" : ""}`}>
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left cursor-pointer hover:bg-[#F7FDF7] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[#1C2B1C] font-semibold text-sm sm:text-base leading-snug">
                      {q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={[
                        "text-[#34A853] shrink-0 mt-0.5 transition-transform duration-300",
                        isOpen ? "rotate-180" : "",
                      ].join(" ")}
                    />
                  </button>

                  <div
                    className={[
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
                    ].join(" ")}
                  >
                    <p className="px-6 pb-5 text-[#6B7280] text-sm leading-relaxed">
                      {a}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        <RevealOnScroll delay={0.1}>
          <p className="text-center text-[#9CA3AF] text-sm mt-8">
            Still have questions?{" "}
            <a
              href="mailto:kristens@lumaxresults.com"
              className="text-[#34A853] font-medium hover:underline"
            >
              Email us directly
            </a>
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

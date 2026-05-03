import RevealOnScroll from "./RevealOnScroll";

const logos = [
  "Redstone Dental Group",
  "Harvest Roofing & Solar",
  "Bridge City Auto Spa",
  "Madison HVAC Pros",
  "Meridian Legal Group",
  "Crestview Chiropractic",
];

export default function SocialProofSection() {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 border-y border-[#E8F5E9]">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <p className="text-center text-[#9CA3AF] text-xs font-semibold uppercase tracking-widest mb-7">
            Trusted by local businesses across Huntsville
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {logos.map((name) => (
              <span
                key={name}
                className="text-[#6B7280] text-sm font-semibold tracking-wide"
              >
                {name}
              </span>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

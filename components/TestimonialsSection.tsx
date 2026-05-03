import RevealOnScroll from "./RevealOnScroll";

const testimonials = [
  {
    quote: "Within 6 weeks we went from page 3 to the top of Google Maps. My phone has not stopped ringing. Absolutely worth it.",
    name: "Marcus T.",
    business: "Harvest Roofing, Huntsville AL",
    initials: "MT",
  },
  {
    quote: "I had zero technical knowledge and still managed to implement all three tips in one afternoon. We moved from invisible to top 3 in our area.",
    name: "Sarah K.",
    business: "Madison HVAC Pros",
    initials: "SK",
  },
  {
    quote: "40% of our new patients now come directly from Google. Before this we were completely off the map. Simple, practical, and it actually works.",
    name: "Dr. James W.",
    business: "Redstone Dental Group",
    initials: "JW",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-mist py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <p className="text-center mb-3">
            <span className="badge-green">Real results</span>
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-black text-[#1C2B1C] mb-12 leading-tight">
            What local businesses are saying
          </h2>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, business, initials }, i) => (
            <RevealOnScroll key={name} delay={i * 0.1}>
              <div className="card-lift h-full bg-white rounded-2xl p-6 border border-[#E8F5E9] flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 fill-current text-[#34A853]" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-[#374151] text-sm leading-relaxed mb-5 flex-1">
                  &ldquo;{quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 pt-4 border-t border-[#E8F5E9]">
                  <div className="w-9 h-9 rounded-full bg-[#34A853] flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {initials}
                  </div>
                  <div>
                    <p className="text-[#1C2B1C] text-sm font-semibold">{name}</p>
                    <p className="text-[#9CA3AF] text-xs">{business}</p>
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

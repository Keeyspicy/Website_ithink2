import { PhoneCall, TrendingUp, Zap } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const features = [
  {
    icon: TrendingUp,
    title: "Rank Higher on Google",
    body: "We identify exactly why you're not showing up in the top 3 — and give you the precise steps to climb there fast.",
  },
  {
    icon: PhoneCall,
    title: "Get More Calls & Leads",
    body: "Higher rankings mean more phone calls from people in Huntsville actively searching for your service right now.",
  },
  {
    icon: Zap,
    title: "No Technical Knowledge Needed",
    body: "Our tips are designed for business owners, not tech experts. If you can send an email, you can implement these.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="section-white py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <p className="text-center mb-3">
            <span className="badge-green">Why it works</span>
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-black text-[#1C2B1C] mb-12 leading-tight">
            Everything your business needs<br className="hidden sm:block" /> to dominate local search
          </h2>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, body }, i) => (
            <RevealOnScroll key={title} delay={i * 0.1}>
              <div className="card-lift h-full bg-[#F7FDF7] rounded-2xl p-7 border border-[#E8F5E9]">
                <div className="w-12 h-12 rounded-xl bg-[#E8F5E9] flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[#34A853]" />
                </div>
                <h3 className="text-[#1C2B1C] font-bold text-lg mb-3">{title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

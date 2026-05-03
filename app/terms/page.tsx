import Link from "next/link";
import LumaxLogo from "@/components/LumaxLogo";

export const metadata = {
  title: "Terms of Service | Lumax Results",
  description: "Terms of Service for Lumax Results — the rules governing use of our website and services.",
};

export default function TermsPage() {
  const updated = "May 3, 2025";

  return (
    <div className="min-h-screen bg-white">
      {/* Simple nav */}
      <header className="border-b border-[#E8F5E9] py-4 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" aria-label="Home">
            <LumaxLogo className="h-8 w-auto" dark />
          </Link>
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#34A853] transition-colors">
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-black text-[#1C2B1C] mb-3">Terms of Service</h1>
        <p className="text-[#9CA3AF] text-sm mb-10">Last updated: {updated}</p>

        <div className="prose prose-sm max-w-none text-[#374151] space-y-8">

          <section>
            <h2 className="text-xl font-bold text-[#1C2B1C] mb-3">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing or using the Lumax Results website (lumaxresults.com) and any
              services we provide, you agree to be bound by these Terms of Service. If you do
              not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C2B1C] mb-3">2. Description of Services</h2>
            <p className="leading-relaxed">
              Lumax Results provides online marketing services, including local SEO, Google
              Business Profile optimization, and related digital marketing services to local
              businesses primarily in Huntsville, Alabama and surrounding areas. We also offer
              free educational resources, including tips and training videos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C2B1C] mb-3">3. Free Resources</h2>
            <p className="leading-relaxed">
              The free tips and training materials we provide are for informational purposes
              only. While we strive to provide accurate, up-to-date information, we cannot
              guarantee specific results from implementing our recommendations. Results will
              vary based on your specific business, industry, location, and how consistently
              you apply the strategies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C2B1C] mb-3">4. No Guarantee of Results</h2>
            <p className="leading-relaxed">
              Lumax Results does not guarantee any specific results including, but not limited
              to, rankings on search engines, increased phone calls, or revenue growth. Marketing
              results depend on many factors outside our control, including search engine
              algorithm changes, competition, and your business&apos;s unique circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C2B1C] mb-3">5. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content on this website, including text, graphics, logos, images, and
              downloadable materials, is the property of Lumax Results and is protected by
              applicable intellectual property laws. You may not reproduce, distribute, or
              create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C2B1C] mb-3">6. User Conduct</h2>
            <p className="leading-relaxed mb-3">When using our website, you agree not to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#374151]">
              <li>Submit false or misleading information in our forms</li>
              <li>Use our website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of our systems</li>
              <li>Transmit any harmful, offensive, or disruptive content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C2B1C] mb-3">7. Third-Party Links</h2>
            <p className="leading-relaxed">
              Our website may contain links to third-party websites. These links are provided
              for your convenience only. Lumax Results has no control over the content of those
              sites and accepts no responsibility for them or for any loss or damage that may
              arise from your use of them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C2B1C] mb-3">8. Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the fullest extent permitted by law, Lumax Results shall not be liable for
              any indirect, incidental, special, consequential, or punitive damages arising
              from your use of our website or services, even if we have been advised of the
              possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C2B1C] mb-3">9. Privacy</h2>
            <p className="leading-relaxed">
              Your use of our website is also governed by our{" "}
              <Link href="/privacy" className="text-[#34A853] hover:underline">
                Privacy Policy
              </Link>
              , which is incorporated into these Terms by reference.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C2B1C] mb-3">10. Governing Law</h2>
            <p className="leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with
              the laws of the State of Alabama, without regard to its conflict of law provisions.
              Any disputes arising under these terms shall be resolved in the courts of
              Madison County, Alabama.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C2B1C] mb-3">11. Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will
              be effective immediately upon posting to the website. Your continued use of the
              website after any changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C2B1C] mb-3">12. Contact</h2>
            <p className="leading-relaxed">
              If you have questions about these Terms of Service, please contact us:<br />
              <strong className="text-[#1C2B1C]">Lumax Results</strong><br />
              Huntsville, Alabama<br />
              <a href="mailto:kristens@lumaxresults.com" className="text-[#34A853] hover:underline">
                kristens@lumaxresults.com
              </a>
            </p>
          </section>

        </div>
      </main>

      <footer className="border-t border-[#E8F5E9] py-6 px-4 text-center text-[#9CA3AF] text-xs">
        © {new Date().getFullYear()} Lumax Results. All rights reserved.{" "}
        <Link href="/privacy" className="hover:text-[#34A853] transition-colors">Privacy Policy</Link>
      </footer>
    </div>
  );
}

import Link from "next/link";
import LumaxLogo from "@/components/LumaxLogo";

export const metadata = {
  title: "Privacy Policy | Lumax Results",
  description: "Privacy Policy for Lumax Results — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
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
        <h1 className="text-3xl sm:text-4xl font-black text-[#1C2B1C] mb-3">Privacy Policy</h1>
        <p className="text-[#9CA3AF] text-sm mb-10">Last updated: {updated}</p>

        <div className="prose prose-sm max-w-none text-[#374151] space-y-8">

          <section>
            <h2 className="text-xl font-bold text-[#1C2B1C] mb-3">1. Who We Are</h2>
            <p className="leading-relaxed">
              Lumax Results (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is an online marketing agency based in
              Huntsville, Alabama. We help local businesses rank higher on Google and grow their
              customer base. You can contact us at{" "}
              <a href="mailto:kristens@lumaxresults.com" className="text-[#34A853] hover:underline">
                kristens@lumaxresults.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C2B1C] mb-3">2. Information We Collect</h2>
            <p className="leading-relaxed mb-3">
              When you submit a form on our website we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#374151]">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your city or location</li>
              <li>The service or topic you selected</li>
            </ul>
            <p className="leading-relaxed mt-3">
              We do not collect payment information, social security numbers, or any sensitive
              personal data through this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C2B1C] mb-3">3. How We Use Your Information</h2>
            <p className="leading-relaxed mb-3">We use the information you provide to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#374151]">
              <li>Send you the free tips and resources you requested</li>
              <li>Follow up about our marketing services if relevant</li>
              <li>Respond to your inquiries</li>
              <li>Improve our website and services</li>
            </ul>
            <p className="leading-relaxed mt-3">
              We will never sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C2B1C] mb-3">4. Email Communications</h2>
            <p className="leading-relaxed">
              By submitting our form you agree to receive email communications from Lumax Results,
              including the free tips you requested and occasional marketing emails. You can
              unsubscribe at any time by clicking the unsubscribe link in any email we send.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C2B1C] mb-3">5. Third-Party Services</h2>
            <p className="leading-relaxed">
              We use Formspree (formspree.io) to process form submissions. Your submitted data
              is transmitted to and stored by Formspree in accordance with their privacy policy.
              We may also use standard analytics tools to understand how visitors use our website.
              These services may use cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C2B1C] mb-3">6. Cookies</h2>
            <p className="leading-relaxed">
              Our website may use cookies to improve your browsing experience. You can disable
              cookies in your browser settings. Some functionality may not work correctly if
              cookies are disabled.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C2B1C] mb-3">7. Data Retention</h2>
            <p className="leading-relaxed">
              We retain your contact information for as long as necessary to provide you with
              the services you requested, or until you ask us to delete it. To request deletion
              of your data, email us at{" "}
              <a href="mailto:kristens@lumaxresults.com" className="text-[#34A853] hover:underline">
                kristens@lumaxresults.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C2B1C] mb-3">8. Your Rights</h2>
            <p className="leading-relaxed">
              You have the right to access, correct, or delete the personal information we hold
              about you. To exercise these rights, contact us at{" "}
              <a href="mailto:kristens@lumaxresults.com" className="text-[#34A853] hover:underline">
                kristens@lumaxresults.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C2B1C] mb-3">9. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. When we do, we will update
              the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of our website
              after any changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C2B1C] mb-3">10. Contact</h2>
            <p className="leading-relaxed">
              If you have questions about this Privacy Policy, please contact us:<br />
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
        <Link href="/terms" className="hover:text-[#34A853] transition-colors">Terms of Service</Link>
      </footer>
    </div>
  );
}

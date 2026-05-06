import LumaxLogo from "./LumaxLogo";

// Instagram SVG icon (lucide-react doesn't include it)
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#E8F5E9] py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-8">

          {/* Brand + tagline */}
          <div className="flex flex-col gap-2">
            <LumaxLogo className="h-8 w-auto" dark />
            <p className="text-[#9CA3AF] text-xs max-w-xs leading-relaxed mt-1">
              Your Huntsville business&apos;s marketing department on-demand.
              We get you found where your customers are searching.
            </p>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/lumaxresults"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Lumax Results on Instagram"
              className="inline-flex items-center gap-2 text-[#9CA3AF] hover:text-[#34A853] transition-colors duration-200 mt-1 w-fit"
            >
              <InstagramIcon size={17} />
              <span className="text-xs font-medium">@lumaxresults</span>
            </a>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#6B7280]">
            <a href="#how-it-works" className="hover:text-[#34A853] transition-colors">How It Works</a>
            <a href="#free-tips"    className="hover:text-[#34A853] transition-colors">Free Tips</a>
            <a href="#faq"          className="hover:text-[#34A853] transition-colors">FAQ</a>
            <a href="/privacy"      className="hover:text-[#34A853] transition-colors">Privacy Policy</a>
            <a href="/terms"        className="hover:text-[#34A853] transition-colors">Terms of Service</a>
          </nav>
        </div>

        <div className="divider mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9CA3AF]">
          <p>© {year} Lumax Results. Huntsville, Alabama. All rights reserved.</p>
          <a
            href="mailto:kristens@lumaxresults.com"
            className="text-[#34A853] hover:text-[#2A8944] transition-colors font-medium"
          >
            kristens@lumaxresults.com
          </a>
        </div>
      </div>
    </footer>
  );
}

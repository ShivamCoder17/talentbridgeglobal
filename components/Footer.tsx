import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              TalentBridgeGlobal
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Connecting talent with opportunities worldwide.
            </p>
            <h3 className="pt-2 text-lg font-semibold text-foreground">
              Smita Keshri |
              <span className="text-zinc-600 dark:text-zinc-400"> Founder</span>
            </h3>
            <a
              href="https://linkedin.com/in/smitakeshri303"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-0 text-sm text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors"
            >
              linkedin.com/in/smitakeshri303
            </a>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-zinc-600 transition-colors hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-zinc-600 transition-colors hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/challenges"
                  className="text-zinc-600 transition-colors hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Challenges & Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm">
              {/* <li>
                <Link
                  href="/jobs"
                  className="text-zinc-600 transition-colors hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Browse Jobs
                </Link>
              </li> */}
              {/* <li>
                <Link
                  href="/apply"
                  className="text-zinc-600 transition-colors hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Apply Now
                </Link>
              </li> */}
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-600 transition-colors hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-zinc-600 transition-colors hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} TalentBridgeGlobal. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

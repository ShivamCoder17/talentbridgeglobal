import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home | TalentBridgeGlobal",
  description: "Connecting talent with opportunities worldwide. Find your next career move or discover exceptional professionals.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-6 flex justify-center">
      <Image
        src="/images/tbg.png"
        alt="TalentBridge Global Logo"
        width={180}
        height={60}
        priority
      />
    </div>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold text-foreground sm:text-6xl lg:text-7xl">
            TalentBridgeGlobal
            <span className="text-foreground/80"> - Strategic Vendor Partnership</span>
          </h1>
          <p className="mb-8 text-xl text-zinc-600 dark:text-zinc-400 sm:text-2xl">
            Your bridge to world-class career opportunities and exceptional
            professionals.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/apply"
              className="rounded-full bg-foreground px-8 py-4 text-base font-medium text-background transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
            >
              Apply Now
            </Link>
            <Link
              href="/jobs"
              className="rounded-full border border-zinc-300 bg-white px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:hover:bg-zinc-900"
            >
              Browse Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl">
              Why Choose TalentBridge Global?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 text-4xl">🌍</div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Global Reach
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Access opportunities and talent from around the world.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 text-4xl">🎯</div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Perfect Matches
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Advanced matching algorithms connect the right people with the
                  right opportunities.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 text-4xl">⚡</div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Fast Process
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Streamlined processes get you from application to placement faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
            Join thousands of professionals and companies already using TalentBridge
            Global.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-foreground px-8 py-4 text-base font-medium text-background transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

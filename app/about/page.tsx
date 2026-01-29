import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | TalentBridgeGlobal",
  description: "Learn about TalentBridgeGlobal and our mission to connect talent with opportunities worldwide.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-bold text-foreground sm:text-5xl">
            About TalentBridgeGlobal
          </h1>
          <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6 text-lg leading-8">
            <p className="text-zinc-600 dark:text-zinc-400">
              TalentBridge Global is a founder-led recruitment firm working with
              growing companies accross IT and non-IT domains.
              It is also a leading talent acquisition and placement
              platform dedicated to connecting exceptional professionals with
              world-class opportunities across the globe.
            </p>
            <h2 className="mt-8 text-2xl font-semibold text-foreground">
              Our Mission
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              We believe that talent knows no boundaries. Our mission is to
              bridge the gap between exceptional professionals and innovative
              companies, creating meaningful connections that drive success for
              both individuals and organizations.
            </p>
            <h2 className="mt-8 text-2xl font-semibold text-foreground">
              What We Do
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              We specialize in identifying, vetting, and placing top-tier talent
              across various industries including technology, finance, healthcare,
              and more. Our comprehensive approach ensures the right fit for
              both candidates and employers.
            </p>
            <h2 className="mt-8 text-2xl font-semibold text-foreground">
              Our Values
            </h2>
            <ul className="list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
              <li>Integrity and transparency in all our interactions</li>
              <li>Commitment to excellence and continuous improvement</li>
              <li>Respect for diversity and inclusion</li>
              <li>Innovation in talent acquisition solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

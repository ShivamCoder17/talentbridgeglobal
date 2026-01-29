import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | TalentBridgeGlobal",
  description: "Read our privacy policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-bold text-foreground sm:text-5xl">
            Privacy Policy
          </h1>
          <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6 text-base leading-7">
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <section>
              <h2 className="mt-8 text-2xl font-semibold text-foreground">
                Introduction
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                TalentBridgeGlobal (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website and use our services.
              </p>
            </section>
            <section>
              <h2 className="mt-8 text-2xl font-semibold text-foreground">
                Information We Collect
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
                <li>Personal identification information (name, email, phone number)</li>
                <li>Resume and professional background information</li>
                <li>Job preferences and career goals</li>
                <li>Communication records</li>
              </ul>
            </section>
            <section>
              <h2 className="mt-8 text-2xl font-semibold text-foreground">
                How We Use Your Information
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                We use the information we collect to:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
                <li>Match you with relevant job opportunities</li>
                <li>Communicate with you about our services</li>
                <li>Improve our platform and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>
            <section>
              <h2 className="mt-8 text-2xl font-semibold text-foreground">
                Information Sharing
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                We do not sell your personal information. We may share your
                information with:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
                <li>Potential employers (with your consent)</li>
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>
            <section>
              <h2 className="mt-8 text-2xl font-semibold text-foreground">
                Data Security
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                We implement appropriate technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction.
              </p>
            </section>
            <section>
              <h2 className="mt-8 text-2xl font-semibold text-foreground">
                Your Rights
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                You have the right to:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of certain communications</li>
              </ul>
            </section>
            <section>
              <h2 className="mt-8 text-2xl font-semibold text-foreground">
                Contact Us
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                If you have questions about this Privacy Policy, please contact
                us at{" "}
                <a
                  href="mailto:privacy@talentbridgeglobal.com"
                  className="text-foreground underline"
                >
                  connect@talentbridgeglobal.in
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

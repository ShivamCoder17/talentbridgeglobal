import type { Metadata } from "next";
import ApplyForm from "@/components/ApplyForm";

export const metadata: Metadata = {
  title: "Apply Now | TalentBridge Global",
  description: "Submit your application and take the next step in your career journey.",
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8">
            <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
              Apply Now
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Ready to take the next step in your career? Fill out the form below
              and we&apos;ll get back to you soon.
            </p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
            <ApplyForm />
          </div>
        </div>
      </div>
    </div>
  );
}

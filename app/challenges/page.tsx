import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Market Challenges & Solutions | TalentBridge Global",
  description: "Explore the market challenges we help solve in talent acquisition and workforce development, and our innovative solutions.",
};

export default function ChallengesPage() {
  const challenges = [
    {
      title: "Talent Shortage",
      description:
        "Many companies struggle to find qualified candidates in specialized fields, leading to prolonged hiring cycles and missed opportunities.",
    },
    {
      title: "Geographic Barriers",
      description:
        "Talent and opportunities are often separated by geographic boundaries, limiting access to the best matches.",
    },
    {
      title: "Skills Mismatch",
      description:
        "There's often a disconnect between the skills candidates possess and what employers actually need.",
    },
    {
      title: "Cultural Fit",
      description:
        "Finding candidates who not only have the right skills but also align with company culture is challenging.",
    },
    {
      title: "Time to Hire",
      description:
        "Lengthy hiring processes can result in losing top talent to competitors and increased costs.",
    },
    {
      title: "Diversity & Inclusion",
      description:
        "Building diverse teams requires intentional strategies and access to broader talent pools.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Market Challenges & Solutions
          </h1>
          <p className="mb-12 text-lg text-zinc-600 dark:text-zinc-400">
            The modern workforce faces numerous challenges. We&apos;re here to help
            solve them.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  {challenge.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-lg bg-zinc-50 p-8 dark:bg-zinc-950">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              Our Solutions
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Through our innovative platform and expert team, we provide
              comprehensive solutions that address these challenges head-on. We
              leverage technology, data insights, and human expertise to create
              better matches and streamline the hiring process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

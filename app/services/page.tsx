import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | TalentBridgeGlobal",
  description: "Discover our comprehensive talent acquisition and placement services.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Permanent Hiring",
      description:
        "Executive to entry-level talent acquisition accross all departments.",
      icon: "✅",
    },
    {
      title: "Contract Hiring",
      description:
        "Project-based staffing solutions for peak capacity needs.",
      icon: "🔍",
    },
    {
      title: "RPO",
      description:
        "Recruitment Process Outsourcing for end-to-end talent acquisition.",
      icon: "📊",
    },
    {
      title: "Bulk & Lateral Hiring",
      description:
        "Large-scale workforce expansion and mid-career transitions.",
      icon: "🎯",
    },
    {
      title: "Campus and Off-Campus Placement",
      description:
        "Placement assistance for both campus and off-campus candidates.",
      icon: "💼",
    },
    {
      title: "Dedicated Support",
      description:
        "Full recruitment lifecycle management.",
      icon: "🤝",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Our Services
          </h1>
          <p className="mb-12 text-lg text-zinc-600 dark:text-zinc-400">
            Comprehensive talent solutions tailored to your needs.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-lg border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="mb-4 text-4xl">{service.icon}</div>
                <h2 className="mb-3 text-xl font-semibold text-foreground">
                  {service.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="/contact"
              className="inline-block rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

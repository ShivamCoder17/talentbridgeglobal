import type { Metadata } from "next";
import JobCard from "@/components/JobCard";

export const metadata: Metadata = {
  title: "Job Opportunities | TalentBridge Global",
  description: "Browse available job opportunities and find your next career move.",
};

// Mock job data - in a real app, this would come from an API or database
const jobs = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "We're looking for an experienced software engineer to join our growing team. You'll work on cutting-edge projects using modern technologies.",
  },
  {
    id: "2",
    title: "Product Manager",
    company: "Digital Solutions Ltd.",
    location: "Remote",
    type: "Full-time",
    description:
      "Lead product strategy and development for our flagship platform. Work with cross-functional teams to deliver exceptional user experiences.",
  },
  {
    id: "3",
    title: "UX Designer",
    company: "Creative Agency",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Design beautiful and intuitive user interfaces. Collaborate with developers and stakeholders to bring designs to life.",
  },
  {
    id: "4",
    title: "Data Analyst",
    company: "Analytics Corp",
    location: "Austin, TX",
    type: "Full-time",
    description:
      "Analyze complex datasets to provide actionable insights. Help drive data-driven decision making across the organization.",
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "Cloud Services",
    location: "Seattle, WA",
    type: "Full-time",
    description:
      "Build and maintain scalable infrastructure. Ensure high availability and performance of our cloud-based systems.",
  },
  {
    id: "6",
    title: "Marketing Specialist",
    company: "Growth Marketing",
    location: "Los Angeles, CA",
    type: "Full-time",
    description:
      "Develop and execute marketing campaigns. Drive brand awareness and customer acquisition through various channels.",
  },
];

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
              Job Opportunities
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Discover your next career opportunity with leading companies
              worldwide.
            </p>
          </div>
          <div className="mb-8 flex flex-wrap gap-4">
            <button className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:hover:bg-zinc-900">
              All Jobs
            </button>
            <button className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:hover:bg-zinc-900">
              Remote
            </button>
            <button className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:hover:bg-zinc-900">
              Full-time
            </button>
            <button className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:hover:bg-zinc-900">
              Part-time
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

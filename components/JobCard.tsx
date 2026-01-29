import Link from "next/link";

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
}

export default function JobCard({
  id,
  title,
  company,
  location,
  type,
  description,
}: JobCardProps) {
  return (
    <div className="group rounded-lg border border-zinc-200 bg-white p-6 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground/80">
            {title}
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {company}
          </p>
        </div>
      </div>
      <p className="mb-4 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
          {location}
        </span>
        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
          {type}
        </span>
      </div>
      <Link
        href={`/jobs/${id}`}
        className="inline-block text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
      >
        View Details →
      </Link>
    </div>
  );
}

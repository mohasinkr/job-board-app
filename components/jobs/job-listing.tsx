"use client";

import { useInfiniteJobs } from "@/services/job-listing";
import { useEffect, useRef } from "react";
import JobCardSkeleton from "../ui/job-card-skeleton";
import { JobCard } from "./job-card";

export function JobListing() {
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isPending,
    error,
  } = useInfiniteJobs();

  useEffect(() => {
    const el = loadMoreRef.current;
    if (!el || !hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [loadMoreRef.current, hasNextPage]);

  if (isPending) return <JobCardSkeleton />;
  if (status === "error")
    return <div className="text-red-500">{(error as Error).message}</div>;

  const jobs = data?.pages.flatMap((page) => page.data) ?? [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {jobs.map((job) => (
        <JobCard key={job.slug} job={job} />
      ))}

      {hasNextPage && (
        <div ref={loadMoreRef} className="h-10 col-span-full">
          {isFetchingNextPage && <JobCardSkeleton />}
        </div>
      )}
    </div>
  );
}

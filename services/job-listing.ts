import { useInfiniteQuery } from "@tanstack/react-query";
import { jobListingInstance } from "@/lib/axios";
import { JobApiResponse } from "@/types/jobs";

async function fetchJobs({ pageParam = 1 }) {
  const res = (await jobListingInstance.get("/job-board-api", {
    params: {
      page: pageParam,
    },
  })) as JobApiResponse;

  return res;
}

export const useInfiniteJobs = () => {
  return useInfiniteQuery<JobApiResponse>({
    queryKey: ["job-postings"],
    queryFn: fetchJobs,
    getNextPageParam: (lastPage) => {
      const nextUrl = lastPage.links?.next;
      if (!nextUrl) return undefined;

      const url = new URL(nextUrl);
      const nextPage = url.searchParams.get("page");
      return nextPage ? Number(nextPage) : undefined;
    },
    initialPageParam: 1,
  });
};

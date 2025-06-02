import { Card, CardContent } from "@/components/ui/card";
import { Job } from "@/types/jobs";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="h-full flex flex-col justify-between">
      <CardContent>
        <h2 className="text-lg font-semibold">{job.title}</h2>
        <p className="text-sm text-gray-500">{job.company_name}</p>
        <p className="text-sm">{job.location}</p>
        <div className="flex gap-2 mt-2 flex-wrap">
          {job.remote && (
            <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
              Remote
            </span>
          )}
          {job.job_types.map((type) => (
            <span
              key={type}
              className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
            >
              {type}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

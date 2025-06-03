import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Job } from "@/types/jobs";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Link href={`/job/${job.slug}`}>
      <Card className="h-full">
        <CardContent className="h-full flex flex-col justify-between p-4">
          <div>
            <h2 className="text-lg font-semibold mb-1">{job.title}</h2>
            <p className="text-sm text-muted-foreground">{job.company_name}</p>
            <p className="text-sm">{job.location}</p>
          </div>

          <div className="flex gap-2 mt-4 flex-wrap">
            {job.remote && (
              <Badge
                variant="outline"
                className="bg-gray-100 text-gray-700 border-gray-300"
              >
                Remote
              </Badge>
            )}

            {job.job_types.map((type) => (
              <Badge
                key={type}
                variant="secondary"
                className="bg-blue-100 text-blue-800 border-blue-200"
              >
                {type}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

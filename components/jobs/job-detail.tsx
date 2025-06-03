import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Job } from "@/types/jobs";
import ApplyJobForm from "./job-form";
import JobDescription from "./job-description";

interface JobDetailPageProps {
  job: Job;
}

export default function JobDetail({ job }: JobDetailPageProps) {
  return (
    <section className="max-w-5xl mx-auto py-8 px-4 space-y-6">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p className="text-muted-foreground">{job.company_name}</p>
      <p className="text-sm text-gray-500">{job.location}</p>

      <div className="flex flex-wrap gap-2">
        {job.remote && <Badge variant="outline">Remote</Badge>}
        {job.job_types.map((type) => (
          <Badge key={type}>{type}</Badge>
        ))}
        {job.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <JobDescription description={job.description} />

      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-4">Apply Now</Button>
        </DialogTrigger>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-lg">Apply for {job.title}</DialogTitle>
          </DialogHeader>
          <ApplyJobForm />
        </DialogContent>
      </Dialog>
    </section>
  );
}

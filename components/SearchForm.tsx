"use client";
import { Input } from "./ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JobStatus } from "@/utils/types";

function SearchContainer() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const jobStatus = searchParams.get("jobStatus") || "all";

  const router = useRouter();
  const pathname = usePathname();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();

    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    const jobStatus = formData.get("jobStatus") as string;
    params.set("search", search);
    params.set("jobStatus", jobStatus);

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <form
      className="bg-gray-100 dark:bg-gray-800 shadow-md mb-16 p-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="relative">
        <Input
          type="text"
          placeholder="Search jobs"
          name="search"
          defaultValue={search}
          className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-800 dark:text-gray-200"
        />
      </div>
      <Select defaultValue={jobStatus} name="jobStatus">
        <SelectTrigger className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 text-gray-800 dark:text-gray-200">
          <SelectValue placeholder="Select job status" />
        </SelectTrigger>
        <SelectContent className="z-50 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200">
          {["all", ...Object.values(JobStatus)].map((jobStatus) => (
            <SelectItem key={jobStatus} value={jobStatus}>
              {jobStatus.charAt(0).toUpperCase() + jobStatus.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        type="submit"
        className="bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-700 text-white py-2 px-6 rounded-lg hover:scale-105 hover:shadow-lg focus:ring-4 focus:ring-indigo-400 focus:outline-none transition-all duration-300 ease-in-out shadow-md"
      >
        Search
      </Button>
    </form>
  );
}

export default SearchContainer;
    
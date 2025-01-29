"use client";
import { useQuery } from "@tanstack/react-query";
import { getStatsAction } from "@/utils/actions";
import StatsCard, { StatsLoadingCard } from "./StatsCard";

function StatsContainer() {
  const { data, isPending } = useQuery({
    queryKey: ["stats"],
    queryFn: () => getStatsAction(),
  });

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 p-4 animate-fadeIn">
      {isPending ? (
        <>
          <div className="animate-pulse">
            <StatsLoadingCard />
          </div>
          <div className="animate-pulse">
            <StatsLoadingCard />
          </div>
          <div className="animate-pulse">
            <StatsLoadingCard />
          </div>
        </>
      ) : (
        <>
          <div className="transition-transform transform hover:scale-105 hover:shadow-lg">
            <StatsCard title="Pending Jobs" value={data?.pending || 0} />
          </div>
          <div className="transition-transform transform hover:scale-105 hover:shadow-lg">
            <StatsCard title="Interviews Set" value={data?.interview || 0} />
          </div>
          <div className="transition-transform transform hover:scale-105 hover:shadow-lg">
            <StatsCard title="Jobs Declined" value={data?.declined || 0} />
          </div>
        </>
      )}
    </div>
  );
}

export default StatsContainer;

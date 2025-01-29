"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useQuery } from "@tanstack/react-query";
import { getChartsDataAction } from "@/utils/actions";

function ChartsContainer() {
  const { data, isPending } = useQuery({
    queryKey: ["charts"],
    queryFn: () => getChartsDataAction(),
  });

  if (isPending)
    return <h2 className="text-xl font-medium text-center mt-10 animate-pulse">Please wait...</h2>;

  if (!data || data.length < 1) return null;

  return (
    <section className="mt-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
        Monthly Applications
      </h1>
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900 shadow-xl rounded-2xl p-8">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data} margin={{ top: 50, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
            <XAxis 
              dataKey="date" 
              tick={{ fill: "white", fontSize: 14, fontWeight: "bold" }} 
              tickLine={false} 
              axisLine={{ stroke: "white" }} 
            />
            <YAxis 
              allowDecimals={false} 
              tick={{ fill: "white", fontSize: 14, fontWeight: "bold" }} 
              tickLine={false} 
              axisLine={{ stroke: "white" }} 
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "rgba(0,0,0,0.7)", 
                borderRadius: "8px", 
                border: "none", 
                color: "#fff" 
              }} 
              cursor={{ fill: "rgba(255,255,255,0.1)" }} 
            />
            <Bar 
              dataKey="count" 
              fill="url(#colorGradient)" 
              barSize={60} 
              radius={[10, 10, 0, 0]} 
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default ChartsContainer;

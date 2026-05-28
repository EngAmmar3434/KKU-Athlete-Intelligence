"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { chartTheme, chartTooltipStyle } from "@/components/charts/chart-theme";
import type { PerformanceTrend } from "@/types/athlete";

type PerformanceLineChartProps = {
  data: PerformanceTrend[];
  height?: number;
};

export function PerformanceLineChart({
  data,
  height = 280,
}: PerformanceLineChartProps) {
  const chartData = data.map((item) => ({
    name: item.opponent,
    rating: item.overallRating,
    readiness: item.readiness,
  }));

  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 12, right: 8, left: 0, bottom: 8 }}>
          <CartesianGrid stroke={chartTheme.grid} strokeDasharray="4 4" />
          <XAxis dataKey="name" tick={{ fill: chartTheme.axis }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: chartTheme.axis }} axisLine={false} tickLine={false} domain={[0, 100]} />
          <Tooltip contentStyle={chartTooltipStyle} />
          <Line
            type="monotone"
            dataKey="rating"
            name="التقييم"
            stroke={chartTheme.primary}
            strokeWidth={3}
            dot={{ fill: chartTheme.primary, stroke: chartTheme.surface, strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="readiness"
            name="الجاهزية"
            stroke={chartTheme.secondary}
            strokeWidth={2}
            dot={{ fill: chartTheme.secondary, stroke: chartTheme.surface, strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

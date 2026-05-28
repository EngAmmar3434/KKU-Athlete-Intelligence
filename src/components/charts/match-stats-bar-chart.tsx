"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { chartTheme, chartTooltipStyle } from "@/components/charts/chart-theme";
import type { MatchStatComparison } from "@/types/athlete";

type MatchStatsBarChartProps = {
  data: MatchStatComparison[];
  height?: number;
};

export function MatchStatsBarChart({
  data,
  height = 280,
}: MatchStatsBarChartProps) {
  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 12, right: 8, left: 0, bottom: 8 }}>
          <CartesianGrid stroke={chartTheme.grid} strokeDasharray="4 4" />
          <XAxis dataKey="label" tick={{ fill: chartTheme.axis }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: chartTheme.axis }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={chartTooltipStyle} />
          <Bar dataKey="kku" name="جامعة الملك خالد" fill={chartTheme.primary} radius={[6, 6, 0, 0]} />
          <Bar dataKey="opponent" name="المنافس" fill={chartTheme.secondary} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

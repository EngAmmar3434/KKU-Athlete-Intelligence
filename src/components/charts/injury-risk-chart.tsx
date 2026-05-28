"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { chartTheme, chartTooltipStyle } from "@/components/charts/chart-theme";
import type { PerformanceTrend } from "@/types/athlete";

type InjuryRiskChartProps = {
  data: PerformanceTrend[];
  height?: number;
};

export function InjuryRiskChart({ data, height = 240 }: InjuryRiskChartProps) {
  const chartData = data.map((item) => ({
    name: item.opponent,
    risk: item.injuryRiskScore,
    workload: item.workload,
  }));

  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} margin={{ top: 12, right: 8, left: 0, bottom: 8 }}>
          <CartesianGrid stroke={chartTheme.grid} strokeDasharray="4 4" />
          <XAxis dataKey="name" tick={{ fill: chartTheme.axis }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: chartTheme.axis }} axisLine={false} tickLine={false} domain={[0, 100]} />
          <Tooltip contentStyle={chartTooltipStyle} />
          <Area
            type="monotone"
            dataKey="risk"
            name="مخاطر الإصابة"
            stroke={chartTheme.risk}
            fill={chartTheme.risk}
            fillOpacity={0.2}
          />
          <Area
            type="monotone"
            dataKey="workload"
            name="الحمل"
            stroke={chartTheme.secondary}
            fill={chartTheme.secondary}
            fillOpacity={0.14}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

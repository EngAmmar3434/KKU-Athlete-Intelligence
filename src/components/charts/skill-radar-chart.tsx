"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { chartTheme, chartTooltipStyle } from "@/components/charts/chart-theme";
import { skillLabels } from "@/lib/athlete-labels";
import type { PlayerSkillRatings } from "@/types/athlete";

type SkillRadarChartProps = {
  skills: PlayerSkillRatings;
  height?: number;
};

export function SkillRadarChart({ skills, height = 280 }: SkillRadarChartProps) {
  const data = [
    { skill: skillLabels.passing, value: skills.passing },
    { skill: skillLabels.shooting, value: skills.shooting },
    { skill: skillLabels.dribbling, value: skills.dribbling },
    { skill: skillLabels.defense, value: skills.defense },
    { skill: skillLabels.stamina, value: skills.stamina },
    { skill: skillLabels.speed, value: skills.speed },
  ];

  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} outerRadius="72%">
          <PolarGrid stroke={chartTheme.grid} />
          <PolarAngleAxis dataKey="skill" tick={{ fill: chartTheme.axis }} />
          <Tooltip contentStyle={chartTooltipStyle} />
          <Radar
            name="المهارة"
            dataKey="value"
            stroke={chartTheme.primary}
            fill={chartTheme.primary}
            fillOpacity={0.22}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

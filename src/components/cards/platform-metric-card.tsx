import type { PlatformMetric } from "@/types/platform";

type PlatformMetricCardProps = {
  metric: PlatformMetric;
};

export function PlatformMetricCard({ metric }: PlatformMetricCardProps) {
  return (
    <div className="rounded-lg border border-border bg-card/70 p-4 text-card-foreground token-elevated">
      <p className="text-sm text-muted-foreground">{metric.label}</p>
      <p className="mt-3 text-3xl font-extrabold leading-none text-foreground">
        {metric.value}
      </p>
      <p className="mt-2 text-sm leading-6 text-text-muted">{metric.detail}</p>
    </div>
  );
}

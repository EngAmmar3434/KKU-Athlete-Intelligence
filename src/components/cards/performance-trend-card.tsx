import { TrendingUp } from "lucide-react";

import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { PerformanceTrend } from "@/types/athlete";

type PerformanceTrendCardProps = {
  title?: string;
  trend: PerformanceTrend;
};

export function PerformanceTrendCard({
  title = "مؤشر الأداء الأخير",
  trend,
}: PerformanceTrendCardProps) {
  return (
    <Card className="token-elevated">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardDescription>{trend.opponent}</CardDescription>
            <CardTitle>{title}</CardTitle>
          </div>
          <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-primary/10 text-primary">
            <TrendingUp className="size-5" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {[
          ["التقييم", trend.overallRating],
          ["الجاهزية", trend.readiness],
          ["التحمل", trend.stamina],
          ["الحمل", trend.workload],
        ].map(([label, value]) => (
          <div key={label} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{label}</span>
              <span className="font-semibold text-foreground">{value}</span>
            </div>
            <Progress value={Number(value)} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

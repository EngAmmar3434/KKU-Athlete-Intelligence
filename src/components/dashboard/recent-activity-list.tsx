import { Activity } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { videoStatusLabels } from "@/lib/athlete-labels";
import type { RecentActivity } from "@/types/athlete";

type RecentActivityListProps = {
  activities: RecentActivity[];
  title?: string;
};

export function RecentActivityList({
  activities,
  title = "النشاط الأخير",
}: RecentActivityListProps) {
  return (
    <Card className="token-elevated">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-3 rounded-lg border border-border bg-muted/40 p-3"
          >
            <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-primary">
              <Activity className="size-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-medium text-foreground">{activity.title}</p>
                <ActivityBadge activity={activity} />
              </div>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {activity.description}
              </p>
              <p className="mt-2 text-xs text-muted-foreground/80">
                {activity.timestamp}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function ActivityBadge({ activity }: { activity: RecentActivity }) {
  if (activity.status === "insight") {
    return <Badge variant="outline">مؤشر</Badge>;
  }

  if (activity.status === "training") {
    return <Badge variant="secondary">تدريب</Badge>;
  }

  return (
    <Badge variant={activity.status === "failed" ? "attention" : "outline"}>
      {videoStatusLabels[activity.status]}
    </Badge>
  );
}

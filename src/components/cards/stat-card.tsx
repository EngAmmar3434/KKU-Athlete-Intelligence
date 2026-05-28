import type { LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type StatCardProps = {
  title: string;
  value: string | number;
  description?: string;
  icon?: LucideIcon;
  trend?: string;
  className?: string;
};

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  className,
}: StatCardProps) {
  return (
    <Card className={cn("token-elevated", className)}>
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardDescription>{title}</CardDescription>
            <CardTitle className="mt-2 text-3xl font-extrabold text-foreground">
              {value}
            </CardTitle>
          </div>
          {Icon ? (
            <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-primary/10 text-primary">
              <Icon className="size-5" />
            </div>
          ) : null}
        </div>
      </CardHeader>
      {(description || trend) && (
        <CardContent className="space-y-2">
          {description ? (
            <p className="text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          ) : null}
          {trend ? <p className="text-xs font-medium text-primary">{trend}</p> : null}
        </CardContent>
      )}
    </Card>
  );
}

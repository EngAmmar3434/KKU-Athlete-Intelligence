import { BrainCircuit } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { priorityLabels } from "@/lib/athlete-labels";
import type { AIRecommendation } from "@/types/athlete";

type AIInsightCardProps = {
  recommendation: AIRecommendation;
};

export function AIInsightCard({ recommendation }: AIInsightCardProps) {
  const variant =
    recommendation.priority === "high"
      ? "attention"
      : recommendation.priority === "medium"
        ? "secondary"
        : "outline";

  return (
    <Card className="token-elevated">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <CardDescription>توصية واجهة ذكية</CardDescription>
            <CardTitle>{recommendation.title}</CardTitle>
          </div>
          <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-primary/10 text-primary">
            <BrainCircuit className="size-5" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-7 text-muted-foreground">
          {recommendation.description}
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant={variant}>{priorityLabels[recommendation.priority]}</Badge>
          {recommendation.evidence.slice(0, 2).map((item) => (
            <Badge key={item} variant="outline">
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

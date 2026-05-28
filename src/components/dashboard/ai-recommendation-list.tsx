import { BrainCircuit } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { priorityLabels } from "@/lib/athlete-labels";
import type { AIRecommendation } from "@/types/athlete";

type AIRecommendationListProps = {
  recommendations: AIRecommendation[];
  title?: string;
};

export function AIRecommendationList({
  recommendations,
  title = "توصيات الذكاء الرياضي",
}: AIRecommendationListProps) {
  return (
    <Card className="token-elevated">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {recommendations.map((recommendation) => (
          <div
            key={recommendation.id}
            className="rounded-lg border border-border bg-card p-4"
          >
            <div className="flex items-start gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-primary/10 text-primary">
                <BrainCircuit className="size-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold text-foreground">
                    {recommendation.title}
                  </p>
                  <Badge
                    variant={
                      recommendation.priority === "high"
                        ? "attention"
                        : recommendation.priority === "medium"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {priorityLabels[recommendation.priority]}
                  </Badge>
                </div>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {recommendation.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

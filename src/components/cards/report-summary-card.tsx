import { ClipboardCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { MatchReport } from "@/types/athlete";

type ReportSummaryCardProps = {
  report: MatchReport;
};

export function ReportSummaryCard({ report }: ReportSummaryCardProps) {
  return (
    <Card className="token-elevated">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardDescription>تقرير أداء تجريبي</CardDescription>
            <CardTitle>{report.title}</CardTitle>
          </div>
          <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-primary/10 text-primary">
            <ClipboardCheck className="size-5" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-7 text-muted-foreground">{report.summary}</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">ثقة {report.confidenceScore}%</Badge>
          {report.keyFindings.slice(0, 2).map((finding) => (
            <Badge key={finding} variant="outline">
              {finding}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

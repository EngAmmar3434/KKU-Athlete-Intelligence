import { FileVideo } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { videoStatusLabels, videoStatusProgress } from "@/lib/athlete-labels";
import type { Match, VideoAnalysisStatus } from "@/types/athlete";

type VideoAnalysisStatusCardProps = {
  status: VideoAnalysisStatus;
  title: string;
  description?: string;
  match?: Pick<Match, "opponent" | "date" | "competition">;
};

export function VideoAnalysisStatusCard({
  status,
  title,
  description,
  match,
}: VideoAnalysisStatusCardProps) {
  const progress = videoStatusProgress[status];

  return (
    <Card className="token-elevated">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardDescription>{match?.competition ?? "تحليل فيديو"}</CardDescription>
            <CardTitle>{title}</CardTitle>
          </div>
          <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-primary/10 text-primary">
            <FileVideo className="size-5" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {description ? (
          <p className="text-sm leading-7 text-muted-foreground">{description}</p>
        ) : null}
        {match ? (
          <div className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            <span>المنافس: {match.opponent}</span>
            <span>التاريخ: {match.date}</span>
          </div>
        ) : null}
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <Badge variant={status === "failed" ? "attention" : "secondary"}>
              {videoStatusLabels[status]}
            </Badge>
            <span className="text-sm font-semibold text-foreground">
              {progress}%
            </span>
          </div>
          <Progress value={progress} />
        </div>
      </CardContent>
    </Card>
  );
}

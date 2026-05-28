import { CalendarDays, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { videoStatusLabels } from "@/lib/athlete-labels";
import type { Match } from "@/types/athlete";

type MatchCardProps = {
  match: Match;
};

const resultLabels: Record<Match["result"], string> = {
  win: "فوز",
  draw: "تعادل",
  loss: "خسارة",
  scheduled: "مجدولة",
};

export function MatchCard({ match }: MatchCardProps) {
  return (
    <Card className="token-elevated">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardDescription>{match.competition}</CardDescription>
            <CardTitle>جامعة الملك خالد ضد {match.opponent}</CardTitle>
          </div>
          <Badge variant={match.result === "win" ? "default" : "secondary"}>
            {resultLabels[match.result]}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-end justify-between rounded-lg border border-border bg-muted/50 p-4">
          <div>
            <p className="text-xs text-muted-foreground">النتيجة</p>
            <p className="mt-1 text-3xl font-extrabold text-foreground">
              {match.teamScore} - {match.opponentScore}
            </p>
          </div>
          <Badge variant="outline">{videoStatusLabels[match.videoAnalysisStatus]}</Badge>
        </div>
        <div className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <span className="flex items-center gap-2">
            <CalendarDays className="size-4" />
            {match.date}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="size-4" />
            {match.venue}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

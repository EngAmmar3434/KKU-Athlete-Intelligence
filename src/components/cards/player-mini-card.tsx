import { Activity } from "lucide-react";

import { InjuryRiskBadge } from "@/components/cards/injury-risk-badge";
import { PositionBadge } from "@/components/cards/position-badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Player } from "@/types/athlete";

type PlayerMiniCardProps = {
  player: Player;
};

export function PlayerMiniCard({ player }: PlayerMiniCardProps) {
  return (
    <Card className="token-elevated">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-border bg-primary text-sm font-bold text-primary-foreground">
            {player.avatarInitials}
          </div>
          <div className="min-w-0">
            <CardDescription>{player.studentId}</CardDescription>
            <CardTitle className="truncate">{player.name}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <PositionBadge position={player.position} />
          <InjuryRiskBadge
            level={player.injuryRisk.level}
            score={player.injuryRisk.score}
          />
        </div>
        <div className="flex items-center justify-between gap-3 rounded-lg border border-border bg-muted/50 p-3 text-sm">
          <span className="flex items-center gap-2 text-muted-foreground">
            <Activity className="size-4" />
            التقييم العام
          </span>
          <span className="font-bold text-foreground">{player.overallRating}</span>
        </div>
      </CardContent>
    </Card>
  );
}

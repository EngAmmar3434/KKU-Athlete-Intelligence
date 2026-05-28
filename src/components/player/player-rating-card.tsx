import { Gauge, ShieldCheck } from "lucide-react";

import { InjuryRiskBadge } from "@/components/cards/injury-risk-badge";
import { PositionBadge } from "@/components/cards/position-badge";
import { PlayerSkillList } from "@/components/player/player-skill-list";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { preferredFootLabels } from "@/lib/athlete-labels";
import type { Player } from "@/types/athlete";

type PlayerRatingCardProps = {
  player: Player;
};

export function PlayerRatingCard({ player }: PlayerRatingCardProps) {
  return (
    <Card className="token-elevated">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardDescription>{player.department}</CardDescription>
            <CardTitle>{player.name}</CardTitle>
          </div>
          <div className="flex size-12 items-center justify-center rounded-lg border border-border bg-primary text-lg font-extrabold text-primary-foreground">
            {player.overallRating}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="flex flex-wrap gap-2">
          <PositionBadge position={player.position} />
          <PositionBadge
            position={player.bestSuggestedPosition}
            labelPrefix="المركز الأنسب"
          />
          <InjuryRiskBadge
            level={player.injuryRisk.level}
            score={player.injuryRisk.score}
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-muted/50 p-3">
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <Gauge className="size-4" />
              المعدل الموسمي
            </p>
            <p className="mt-2 text-2xl font-bold text-foreground">
              {player.stats.averageRating}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-muted/50 p-3">
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="size-4" />
              القدم المفضلة
            </p>
            <p className="mt-2 text-2xl font-bold text-foreground">
              {preferredFootLabels[player.preferredFoot]}
            </p>
          </div>
        </div>
        <PlayerSkillList skills={player.skills} compact />
      </CardContent>
    </Card>
  );
}

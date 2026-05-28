import { Activity, ShieldAlert } from "lucide-react";

import { InjuryRiskBadge } from "@/components/cards/injury-risk-badge";
import { PositionBadge } from "@/components/cards/position-badge";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { positionLabels, skillLabels } from "@/lib/athlete-labels";
import type { Player } from "@/types/athlete";

type PlayerFifaCardPreviewProps = {
  player: Player;
  teamName: string;
};

export function PlayerFifaCardPreview({
  player,
  teamName,
}: PlayerFifaCardPreviewProps) {
  const skillRows = [
    [skillLabels.passing, player.skills.passing],
    [skillLabels.shooting, player.skills.shooting],
    [skillLabels.dribbling, player.skills.dribbling],
    [skillLabels.defense, player.skills.defense],
    [skillLabels.stamina, player.skills.stamina],
    [skillLabels.speed, player.skills.speed],
  ] as const;

  return (
    <Card className="relative overflow-hidden border-border bg-gradient-to-br from-card via-surface to-card p-5 text-card-foreground token-elevated">
      <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium text-muted-foreground">
            بطاقة لاعب تحليلية
          </p>
          <div className="mt-3 flex items-end gap-2">
            <span className="text-5xl font-extrabold leading-none text-foreground">
              {player.overallRating}
            </span>
            <span className="pb-1 text-sm font-semibold text-muted-foreground">
              OVR
            </span>
          </div>
          <p className="mt-2 text-sm font-semibold text-primary">
            {positionLabels[player.position]}
          </p>
        </div>
        <div className="flex size-20 items-center justify-center rounded-lg border border-border bg-primary text-xl font-extrabold text-primary-foreground">
          {player.avatarInitials}
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <div>
          <h3 className="text-2xl font-bold text-foreground">{player.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{teamName}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <PositionBadge
            position={player.bestSuggestedPosition}
            labelPrefix="أفضل مركز"
          />
          <InjuryRiskBadge level={player.injuryRisk.level} />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2">
        {skillRows.map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between rounded-lg border border-border bg-card/70 px-3 py-2 text-sm"
          >
            <span className="text-muted-foreground">{label}</span>
            <span className="font-bold text-foreground">{value}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        <Badge variant="secondary" className="justify-center">
          <Activity />
          جاهزية {player.trends.at(-1)?.readiness ?? player.overallRating}%
        </Badge>
        <Badge variant="outline" className="justify-center">
          <ShieldAlert />
          مخاطر {player.injuryRisk.score}%
        </Badge>
      </div>
    </Card>
  );
}

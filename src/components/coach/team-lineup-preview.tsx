import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { positionLabels } from "@/lib/athlete-labels";
import type { Player, TeamLineup } from "@/types/athlete";

type TeamLineupPreviewProps = {
  lineup: TeamLineup;
  players: Player[];
};

export function TeamLineupPreview({ lineup, players }: TeamLineupPreviewProps) {
  const playerNames = new Map(players.map((player) => [player.id, player.name]));

  return (
    <Card className="token-elevated">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardDescription>تشكيل مقترح</CardDescription>
            <CardTitle>{lineup.formation}</CardTitle>
          </div>
          <Badge variant="secondary">واجهة تدريبية</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="app-grid relative h-96 overflow-hidden rounded-lg border border-border bg-muted/50">
          <div className="absolute inset-x-4 top-1/2 h-px bg-border" />
          <div className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border" />
          {lineup.starters.map((slot) => (
            <div
              key={slot.id}
              className="absolute w-28 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-border bg-card/90 p-2 text-center token-elevated"
              style={{ right: `${slot.x}%`, top: `${slot.y}%` }}
            >
              <p className="truncate text-xs font-semibold text-foreground">
                {playerNames.get(slot.playerId) ?? slot.playerId}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {positionLabels[slot.position]}
              </p>
            </div>
          ))}
        </div>
        <div className="grid gap-2">
          {lineup.tacticalNotes.map((note) => (
            <div
              key={note}
              className="rounded-lg border border-border bg-muted/50 p-3 text-sm leading-6 text-muted-foreground"
            >
              {note}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

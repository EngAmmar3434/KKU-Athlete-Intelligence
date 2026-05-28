import { Progress } from "@/components/ui/progress";
import { skillLabels } from "@/lib/athlete-labels";
import type { PlayerSkillRatings } from "@/types/athlete";

type PlayerSkillListProps = {
  skills: PlayerSkillRatings;
  compact?: boolean;
};

export function PlayerSkillList({ skills, compact = false }: PlayerSkillListProps) {
  const rows = [
    ["passing", skillLabels.passing, skills.passing],
    ["shooting", skillLabels.shooting, skills.shooting],
    ["dribbling", skillLabels.dribbling, skills.dribbling],
    ["defense", skillLabels.defense, skills.defense],
    ["stamina", skillLabels.stamina, skills.stamina],
    ["speed", skillLabels.speed, skills.speed],
  ] as const;

  return (
    <div className={compact ? "grid gap-2" : "grid gap-3"}>
      {rows.map(([key, label, value]) => (
        <div key={key} className="space-y-1.5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{label}</span>
            <span className="font-semibold text-foreground">{value}</span>
          </div>
          <Progress value={value} />
        </div>
      ))}
    </div>
  );
}

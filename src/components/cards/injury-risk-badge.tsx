import { Badge } from "@/components/ui/badge";
import { injuryRiskLabels } from "@/lib/athlete-labels";
import type { InjuryRiskLevel } from "@/types/athlete";

type InjuryRiskBadgeProps = {
  level: InjuryRiskLevel;
  score?: number;
};

export function InjuryRiskBadge({ level, score }: InjuryRiskBadgeProps) {
  const variant =
    level === "high" ? "attention" : level === "medium" ? "secondary" : "outline";

  return (
    <Badge variant={variant}>
      مخاطر {injuryRiskLabels[level]}
      {typeof score === "number" ? ` · ${score}%` : null}
    </Badge>
  );
}

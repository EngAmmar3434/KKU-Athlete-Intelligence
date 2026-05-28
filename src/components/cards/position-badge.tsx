import { Badge } from "@/components/ui/badge";
import { positionLabels } from "@/lib/athlete-labels";
import type { PlayerPosition } from "@/types/athlete";

type PositionBadgeProps = {
  position: PlayerPosition;
  labelPrefix?: string;
};

export function PositionBadge({ position, labelPrefix }: PositionBadgeProps) {
  return (
    <Badge variant="outline">
      {labelPrefix ? `${labelPrefix} ` : null}
      {positionLabels[position]}
    </Badge>
  );
}

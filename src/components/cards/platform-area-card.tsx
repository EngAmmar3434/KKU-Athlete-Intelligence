import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { PlatformArea } from "@/types/platform";

type PlatformAreaCardProps = {
  area: PlatformArea;
};

export function PlatformAreaCard({ area }: PlatformAreaCardProps) {
  const Icon = area.icon;

  return (
    <Card id={area.href.replace("#", "")} className="scroll-mt-24 token-elevated">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-primary/15 text-primary">
              <Icon className="size-5" />
            </div>
            <div>
              <CardDescription>{area.eyebrow}</CardDescription>
              <CardTitle>{area.title}</CardTitle>
            </div>
          </div>
          <Badge variant="outline">{area.status}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-7 text-text-muted">{area.description}</p>
      </CardContent>
    </Card>
  );
}

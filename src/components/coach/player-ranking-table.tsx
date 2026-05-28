import { InjuryRiskBadge } from "@/components/cards/injury-risk-badge";
import { PositionBadge } from "@/components/cards/position-badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Player } from "@/types/athlete";

type PlayerRankingTableProps = {
  players: Player[];
  title?: string;
};

export function PlayerRankingTable({
  players,
  title = "ترتيب اللاعبين",
}: PlayerRankingTableProps) {
  const rankedPlayers = [...players].sort(
    (a, b) => b.overallRating - a.overallRating
  );

  return (
    <Card className="token-elevated">
      <CardHeader>
        <CardDescription>مقارنة أمامية</CardDescription>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>اللاعب</TableHead>
              <TableHead>المركز</TableHead>
              <TableHead>التقييم</TableHead>
              <TableHead>المخاطر</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rankedPlayers.map((player) => (
              <TableRow key={player.id}>
                <TableCell>
                  <div>
                    <p className="font-medium text-foreground">{player.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {player.studentId}
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <PositionBadge position={player.position} />
                </TableCell>
                <TableCell className="font-bold text-foreground">
                  {player.overallRating}
                </TableCell>
                <TableCell>
                  <InjuryRiskBadge level={player.injuryRisk.level} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

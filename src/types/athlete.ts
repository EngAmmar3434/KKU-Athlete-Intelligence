export type UserRole = "player" | "coach" | "admin";

export type PlayerPosition =
  | "GK"
  | "CB"
  | "LB"
  | "RB"
  | "CDM"
  | "CM"
  | "CAM"
  | "LW"
  | "RW"
  | "ST";

export type PreferredFoot = "right" | "left" | "both";

export type InjuryRiskLevel = "low" | "medium" | "high";

export type InjuryRiskTrend = "improving" | "stable" | "worsening";

export type RecommendationPriority = "low" | "medium" | "high";

export type AIRecommendationCategory =
  | "position"
  | "training"
  | "injury-prevention"
  | "match-tactics"
  | "development";

export type VideoAnalysisStatus =
  | "uploaded"
  | "processing"
  | "analyzing-players"
  | "generating-reports"
  | "completed"
  | "failed";

export type MatchResult = "win" | "draw" | "loss" | "scheduled";

export type MatchLocation = "home" | "away" | "neutral";

export interface PlayerSkillRatings {
  passing: number;
  shooting: number;
  dribbling: number;
  defense: number;
  stamina: number;
  speed: number;
}

export interface PlayerStats {
  matchesPlayed: number;
  minutesPlayed: number;
  goals: number;
  assists: number;
  shotsOnTarget: number;
  passAccuracy: number;
  tacklesWon: number;
  interceptions: number;
  distanceKmPerMatch: number;
  sprintCountPerMatch: number;
  topSpeedKmh: number;
  averageRating: number;
}

export interface PerformanceTrend {
  matchId: string;
  matchDate: string;
  opponent: string;
  overallRating: number;
  readiness: number;
  workload: number;
  stamina: number;
  injuryRiskScore: number;
}

export interface InjuryRisk {
  level: InjuryRiskLevel;
  score: number;
  trend: InjuryRiskTrend;
  summary: string;
  factors: string[];
  updatedAt: string;
}

export interface AIRecommendation {
  id: string;
  playerId?: string;
  teamId?: string;
  matchId?: string;
  category: AIRecommendationCategory;
  title: string;
  description: string;
  priority: RecommendationPriority;
  evidence: string[];
  createdAt: string;
}

export interface TrainingSession {
  id: string;
  title: string;
  focus: string;
  durationMinutes: number;
  intensity: "low" | "medium" | "high";
  drills: string[];
}

export interface TrainingPlan {
  id: string;
  playerId: string;
  weekStart: string;
  focusArea: string;
  summary: string;
  sessions: TrainingSession[];
  recommendations: AIRecommendation[];
}

export interface Player {
  id: string;
  role: "player";
  name: string;
  nameEn: string;
  studentId: string;
  department: string;
  academicLevel: string;
  age: number;
  heightCm: number;
  weightKg: number;
  preferredFoot: PreferredFoot;
  teamId: string;
  jerseyNumber: number;
  position: PlayerPosition;
  secondaryPositions: PlayerPosition[];
  bestSuggestedPosition: PlayerPosition;
  overallRating: number;
  potentialRating: number;
  avatarInitials: string;
  stats: PlayerStats;
  skills: PlayerSkillRatings;
  injuryRisk: InjuryRisk;
  trends: PerformanceTrend[];
  recommendations: AIRecommendation[];
}

export interface Coach {
  id: string;
  role: "coach";
  name: string;
  title: string;
  department: string;
  licenseLevel: string;
  email: string;
  phone: string;
  teamIds: string[];
}

export interface Team {
  id: string;
  name: string;
  shortName: string;
  category: string;
  season: string;
  department: string;
  coachId: string;
  captainPlayerId: string;
  playerIds: string[];
  homeVenue: string;
  achievements: string[];
}

export interface MatchTeamStats {
  possession: number;
  shots: number;
  shotsOnTarget: number;
  passAccuracy: number;
  expectedGoals: number;
  tacklesWon: number;
  recoveries: number;
}

export interface MatchPlayerRating {
  playerId: string;
  rating: number;
  minutes: number;
  keyMoment: string;
}

export interface Match {
  id: string;
  teamId: string;
  opponent: string;
  date: string;
  venue: string;
  competition: string;
  location: MatchLocation;
  result: MatchResult;
  teamScore: number;
  opponentScore: number;
  videoAnalysisStatus: VideoAnalysisStatus;
  stats: {
    kku: MatchTeamStats;
    opponent: MatchTeamStats;
  };
  playerRatings: MatchPlayerRating[];
}

export interface MatchReport {
  id: string;
  matchId: string;
  title: string;
  summary: string;
  generatedAt: string;
  confidenceScore: number;
  keyFindings: string[];
  weaknesses: string[];
  improvements: string[];
  recommendations: AIRecommendation[];
  playerHighlights: MatchPlayerRating[];
}

export interface LineupSlot {
  id: string;
  playerId: string;
  position: PlayerPosition;
  role: string;
  x: number;
  y: number;
}

export interface TeamLineup {
  id: string;
  teamId: string;
  matchId?: string;
  formation: string;
  starters: LineupSlot[];
  substitutes: string[];
  tacticalNotes: string[];
  createdByCoachId: string;
  updatedAt: string;
}

export interface MatchStatComparison {
  label: string;
  kku: number;
  opponent: number;
  unit?: string;
}

export interface RecentActivity {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  status: VideoAnalysisStatus | "insight" | "training";
}

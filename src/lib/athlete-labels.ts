import type {
  InjuryRiskLevel,
  InjuryRiskTrend,
  PlayerPosition,
  PreferredFoot,
  RecommendationPriority,
  VideoAnalysisStatus,
} from "@/types/athlete";

export const positionLabels: Record<PlayerPosition, string> = {
  GK: "حارس مرمى",
  CB: "قلب دفاع",
  LB: "ظهير أيسر",
  RB: "ظهير أيمن",
  CDM: "محور دفاعي",
  CM: "وسط",
  CAM: "صانع لعب",
  LW: "جناح أيسر",
  RW: "جناح أيمن",
  ST: "مهاجم",
};

export const skillLabels = {
  passing: "التمرير",
  shooting: "التسديد",
  dribbling: "المراوغة",
  defense: "الدفاع",
  stamina: "التحمل",
  speed: "السرعة",
} as const;

export const preferredFootLabels: Record<PreferredFoot, string> = {
  right: "اليمنى",
  left: "اليسرى",
  both: "كلتا القدمين",
};

export const injuryRiskLabels: Record<InjuryRiskLevel, string> = {
  low: "منخفض",
  medium: "متوسط",
  high: "مرتفع",
};

export const injuryTrendLabels: Record<InjuryRiskTrend, string> = {
  improving: "يتحسن",
  stable: "مستقر",
  worsening: "يتصاعد",
};

export const priorityLabels: Record<RecommendationPriority, string> = {
  low: "أولوية منخفضة",
  medium: "أولوية متوسطة",
  high: "أولوية عالية",
};

export const videoStatusLabels: Record<VideoAnalysisStatus, string> = {
  uploaded: "تم رفع الفيديو",
  processing: "قيد المعالجة",
  "analyzing-players": "تحليل اللاعبين",
  "generating-reports": "توليد التقارير",
  completed: "مكتمل",
  failed: "متعثر",
};

export const videoStatusProgress: Record<VideoAnalysisStatus, number> = {
  uploaded: 15,
  processing: 35,
  "analyzing-players": 58,
  "generating-reports": 82,
  completed: 100,
  failed: 100,
};

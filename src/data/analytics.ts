import type {
  AIRecommendation,
  MatchStatComparison,
  PerformanceTrend,
  RecentActivity,
  TeamLineup,
} from "@/types/athlete";

export const mockTeamLineups: TeamLineup[] = [
  {
    id: "lineup-kku-4231",
    teamId: "team-kku-varsity",
    matchId: "match-kku-ksu",
    formation: "4-2-3-1",
    starters: [
      {
        id: "slot-rb",
        playerId: "player-omar-alqahtani",
        position: "RB",
        role: "ظهير داعم",
        x: 78,
        y: 72,
      },
      {
        id: "slot-cb",
        playerId: "player-mohammed-assiri",
        position: "CB",
        role: "قائد الخط الخلفي",
        x: 58,
        y: 78,
      },
      {
        id: "slot-cm",
        playerId: "player-nawaf-alghamdi",
        position: "CM",
        role: "منظم اللعب",
        x: 50,
        y: 52,
      },
      {
        id: "slot-cam",
        playerId: "player-abdullah-alqahtani",
        position: "CAM",
        role: "صانع فرص",
        x: 50,
        y: 35,
      },
      {
        id: "slot-lw",
        playerId: "player-faisal-alshahrani",
        position: "LW",
        role: "اختراق طرفي",
        x: 22,
        y: 32,
      },
      {
        id: "slot-st",
        playerId: "player-salem-alyami",
        position: "ST",
        role: "مهاجم عمق",
        x: 50,
        y: 18,
      },
    ],
    substitutes: [],
    tacticalNotes: [
      "تقدم الظهير الأيمن عند ثبات المحور",
      "استغلال الجناح الأيسر في التحولات السريعة",
      "تقليل دقائق قلب الدفاع عند ارتفاع مؤشر الحمل",
    ],
    createdByCoachId: "coach-saeed-alasmari",
    updatedAt: "2026-05-21",
  },
];

export const mockCoachRecommendations: AIRecommendation[] = [
  {
    id: "coach-rec-high-press",
    teamId: "team-kku-varsity",
    category: "match-tactics",
    title: "ضغط موجه على جهة بناء المنافس",
    description:
      "مخرجات الواجهة تشير إلى أن المنافس يفقد الكرة أكثر عند إجباره على البناء من الجهة اليسرى.",
    priority: "high",
    evidence: ["استرجاع الكرة خلال 8 ثوان في 6 لقطات", "ضعف تمرير الظهير الأيسر"],
    createdAt: "2026-05-21",
  },
  {
    id: "coach-rec-defensive-load",
    teamId: "team-kku-varsity",
    playerId: "player-mohammed-assiri",
    category: "injury-prevention",
    title: "إدارة دقائق قلب الدفاع",
    description:
      "استخدام بديل في آخر نصف ساعة إذا تقدم الفريق لتقليل الحمل التراكمي.",
    priority: "high",
    evidence: ["مؤشر خطر 68", "تراكم دقائق لعب"],
    createdAt: "2026-05-21",
  },
  {
    id: "coach-rec-final-third",
    teamId: "team-kku-varsity",
    category: "development",
    title: "رفع جودة القرار في الثلث الأخير",
    description:
      "الجناح الأيسر يتجاوز المدافع الأول بنجاح، لكن التمريرة الأخيرة تحتاج إلى نمط تدريبي متكرر.",
    priority: "medium",
    evidence: ["مراوغات ناجحة عالية", "دقة عرضيات متوسطة"],
    createdAt: "2026-05-21",
  },
];

export const mockRecentActivities: RecentActivity[] = [
  {
    id: "activity-upload-ksu",
    title: "رفع فيديو مباراة جامعة الملك سعود",
    description: "الفيديو جاهز للدخول في مرحلة معالجة الواجهة التجريبية.",
    timestamp: "2026-05-24T18:20:00+03:00",
    status: "uploaded",
  },
  {
    id: "activity-report-taif",
    title: "ملخص أولي لمباراة جامعة الطائف",
    description: "تم توليد ملخص واجهة أولي مع توصيات لإدارة حمل خط الدفاع.",
    timestamp: "2026-05-06T23:00:00+03:00",
    status: "generating-reports",
  },
  {
    id: "activity-training-abdullah",
    title: "تحديث خطة تدريب عبدالله القحطاني",
    description: "إضافة حصة استشفاء نشط بعد ارتفاع حمل التسارعات.",
    timestamp: "2026-05-18T10:30:00+03:00",
    status: "training",
  },
  {
    id: "activity-insight-faisal",
    title: "رصد تفوق الطرف الأيسر",
    description: "مؤشرات الواجهة تبرز فيصل الشهراني كمصدر خطورة رئيسي.",
    timestamp: "2026-05-18T09:10:00+03:00",
    status: "insight",
  },
];

export const mockMatchStatComparison: MatchStatComparison[] = [
  {
    label: "الاستحواذ",
    kku: 48,
    opponent: 52,
    unit: "%",
  },
  {
    label: "التسديدات",
    kku: 10,
    opponent: 13,
  },
  {
    label: "على المرمى",
    kku: 4,
    opponent: 6,
  },
  {
    label: "دقة التمرير",
    kku: 79,
    opponent: 82,
    unit: "%",
  },
  {
    label: "استرجاع الكرة",
    kku: 54,
    opponent: 56,
  },
];

export const mockTeamPerformanceTrend: PerformanceTrend[] = [
  {
    matchId: "match-kku-najran",
    matchDate: "2026-03-05",
    opponent: "جامعة نجران",
    overallRating: 78,
    readiness: 81,
    workload: 64,
    stamina: 78,
    injuryRiskScore: 35,
  },
  {
    matchId: "match-kku-jazan",
    matchDate: "2026-03-22",
    opponent: "جامعة جازان",
    overallRating: 80,
    readiness: 83,
    workload: 67,
    stamina: 80,
    injuryRiskScore: 38,
  },
  {
    matchId: "match-kku-bisha",
    matchDate: "2026-04-12",
    opponent: "جامعة بيشة",
    overallRating: 82,
    readiness: 82,
    workload: 73,
    stamina: 81,
    injuryRiskScore: 44,
  },
  {
    matchId: "match-kku-taif",
    matchDate: "2026-05-06",
    opponent: "جامعة الطائف",
    overallRating: 77,
    readiness: 79,
    workload: 76,
    stamina: 79,
    injuryRiskScore: 47,
  },
];

export const featuredLineup = mockTeamLineups[0];

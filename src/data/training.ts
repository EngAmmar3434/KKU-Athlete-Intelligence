import type { TrainingPlan } from "@/types/athlete";

export const mockTrainingPlans: TrainingPlan[] = [
  {
    id: "training-abdullah-week-2026-05-18",
    playerId: "player-abdullah-alqahtani",
    weekStart: "2026-05-18",
    focusArea: "صناعة اللعب وخفض الحمل",
    summary:
      "برنامج أسبوعي يوازن بين تطوير القرار في الثلث الأخير وحماية اللاعب من تراكم الإجهاد.",
    sessions: [
      {
        id: "session-abdullah-1",
        title: "تمريرات بينية تحت ضغط",
        focus: "قرار هجومي",
        durationMinutes: 55,
        intensity: "medium",
        drills: ["روندو موجه", "تمرير بين الخطوط", "تحرك ثالث بدون كرة"],
      },
      {
        id: "session-abdullah-2",
        title: "استشفاء نشط ومرونة",
        focus: "وقاية",
        durationMinutes: 35,
        intensity: "low",
        drills: ["دراجة خفيفة", "مرونة ديناميكية", "تمارين تنفس"],
      },
    ],
    recommendations: [
      {
        id: "training-rec-abdullah-load",
        playerId: "player-abdullah-alqahtani",
        category: "injury-prevention",
        title: "خفض الشدة قبل المباراة القادمة",
        description:
          "تقليل التسارعات العالية في آخر حصة تدريبية للحفاظ على الجاهزية.",
        priority: "medium",
        evidence: ["مؤشر حمل متوسط", "دقائق لعب مرتفعة"],
        createdAt: "2026-05-18",
      },
    ],
  },
  {
    id: "training-mohammed-week-2026-05-18",
    playerId: "player-mohammed-assiri",
    weekStart: "2026-05-18",
    focusArea: "الوقاية الدفاعية وإدارة الحمل",
    summary:
      "خطة قصيرة لتخفيف الإجهاد العضلي مع الحفاظ على القراءة الدفاعية والتمركز.",
    sessions: [
      {
        id: "session-mohammed-1",
        title: "تمركز خط الدفاع",
        focus: "تنظيم دفاعي",
        durationMinutes: 45,
        intensity: "medium",
        drills: ["دفاع منطقة", "تغطية خلف الظهير", "خروج من الضغط"],
      },
      {
        id: "session-mohammed-2",
        title: "وقاية العضلة الضامة",
        focus: "استشفاء وقوة",
        durationMinutes: 40,
        intensity: "low",
        drills: ["تمارين مقاومة خفيفة", "إطالة موجهة", "توازن أحادي"],
      },
    ],
    recommendations: [
      {
        id: "training-rec-mohammed-rotation",
        playerId: "player-mohammed-assiri",
        category: "injury-prevention",
        title: "تدوير اللاعب في الودية القادمة",
        description:
          "الاكتفاء بشوط واحد أو استخدامه في آخر 30 دقيقة لتقليل خطر الإجهاد.",
        priority: "high",
        evidence: ["مؤشر خطر مرتفع", "دقائق لعب كاملة في آخر مباراتين"],
        createdAt: "2026-05-18",
      },
    ],
  },
  {
    id: "training-faisal-week-2026-05-18",
    playerId: "player-faisal-alshahrani",
    weekStart: "2026-05-18",
    focusArea: "الإنهاء بعد المراوغة",
    summary:
      "برنامج هجومي لتحويل التفوق الفردي على الطرف إلى فرص أكثر جودة داخل المنطقة.",
    sessions: [
      {
        id: "session-faisal-1",
        title: "مراوغة ثم قرار نهائي",
        focus: "ثلث أخير",
        durationMinutes: 50,
        intensity: "high",
        drills: ["1 ضد 1", "عرضية عكسية", "تسديد بعد دخول المنطقة"],
      },
      {
        id: "session-faisal-2",
        title: "سرعات متدرجة",
        focus: "جاهزية بدنية",
        durationMinutes: 35,
        intensity: "medium",
        drills: ["تسارع 20 متر", "تغيير اتجاه", "استشفاء بيني"],
      },
    ],
    recommendations: [
      {
        id: "training-rec-faisal-cross",
        playerId: "player-faisal-alshahrani",
        category: "development",
        title: "رفع دقة التمريرة الأخيرة",
        description:
          "تكرار سيناريو دخول الطرف ثم اختيار العرضية أو التمريرة الأرضية.",
        priority: "medium",
        evidence: ["مراوغات ناجحة عالية", "فرص صناعة غير مكتملة"],
        createdAt: "2026-05-18",
      },
    ],
  },
];

export const trainingPlansByPlayerId = new Map(
  mockTrainingPlans.map((plan) => [plan.playerId, plan])
);

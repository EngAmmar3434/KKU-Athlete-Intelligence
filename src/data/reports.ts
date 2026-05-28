import type { MatchReport } from "@/types/athlete";

export const mockMatchReports: MatchReport[] = [
  {
    id: "report-kku-najran",
    matchId: "match-kku-najran",
    title: "تقرير أداء مباراة جامعة نجران",
    summary:
      "أظهر فريق جامعة الملك خالد تفوقا في التحولات الهجومية واستثمار المساحات خلف خط الدفاع، مع حاجة لتحسين التمركز عند الكرات الثانية.",
    generatedAt: "2026-03-05T21:30:00+03:00",
    confidenceScore: 91,
    keyFindings: [
      "فاعلية عالية لصانع اللعب بين الخطوط",
      "الطرف الأيسر كان مصدر التفوق في المرتدات",
      "ضغط متوسط ناجح بعد فقدان الكرة",
    ],
    weaknesses: [
      "تراجع التركيز الدفاعي بعد الدقيقة 70",
      "بطء في تغطية المساحة خلف الظهير المتقدم",
    ],
    improvements: [
      "تدريب الكرات الثانية بعد العرضيات",
      "رفع جودة الخروج بالكرة تحت الضغط",
    ],
    recommendations: [
      {
        id: "report-rec-najran-midfield",
        matchId: "match-kku-najran",
        teamId: "team-kku-varsity",
        category: "match-tactics",
        title: "تثبيت محور دفاعي عند تقدم الظهير",
        description:
          "يفضل بقاء لاعب محور خلف خط الكرة عند تقدم الظهير لتقليل المساحة في التحولات العكسية.",
        priority: "high",
        evidence: ["فرصتان للمنافس من نفس القناة", "تقدم الظهير في 64% من الهجمات"],
        createdAt: "2026-03-05",
      },
    ],
    playerHighlights: [
      {
        playerId: "player-salem-alyami",
        rating: 8.1,
        minutes: 74,
        keyMoment: "تحرك ذكي خلف الدفاع وتسجيل الهدف الثاني",
      },
      {
        playerId: "player-abdullah-alqahtani",
        rating: 7.8,
        minutes: 82,
        keyMoment: "تمريرات بينية حاسمة في الثلث الأخير",
      },
    ],
  },
  {
    id: "report-kku-bisha",
    matchId: "match-kku-bisha",
    title: "تقرير أداء مباراة جامعة بيشة",
    summary:
      "اعتمد الفريق على الاستحواذ المنظم والحماية الدفاعية بعد الهدف، ونجح قلب الدفاع في السيطرة على الكرات الهوائية.",
    generatedAt: "2026-04-12T22:15:00+03:00",
    confidenceScore: 88,
    keyFindings: [
      "استحواذ إيجابي مع دقة تمرير مرتفعة",
      "تحسن واضح في التغطية العكسية",
      "إيقاع المباراة انخفض بعد الهدف",
    ],
    weaknesses: [
      "قلة التسديد من خارج المنطقة",
      "تأخر في تبديل اتجاه اللعب عند ضغط المنافس",
    ],
    improvements: [
      "إضافة نمط تسديد من لاعب الوسط الثاني",
      "تدريب تحويل اللعب من اليمين إلى اليسار بلمستين",
    ],
    recommendations: [
      {
        id: "report-rec-bisha-shots",
        matchId: "match-kku-bisha",
        teamId: "team-kku-varsity",
        category: "training",
        title: "سيناريوهات تسديد بعد الكرات المرتدة",
        description:
          "زيادة تمارين التسديد من حافة المنطقة بعد استرجاع الكرة في الثلث الأوسط.",
        priority: "medium",
        evidence: ["12 تسديدة منها 4 على المرمى", "سيطرة على مناطق الارتداد"],
        createdAt: "2026-04-12",
      },
    ],
    playerHighlights: [
      {
        playerId: "player-mohammed-assiri",
        rating: 8,
        minutes: 90,
        keyMoment: "قراءة دفاعية منعت فرصة محققة",
      },
    ],
  },
  {
    id: "report-kku-taif",
    matchId: "match-kku-taif",
    title: "ملخص أولي لمباراة جامعة الطائف",
    summary:
      "البيانات الأمامية تعرض ملخصا تجريبيا لمباراة قيد المعالجة، مع مؤشرات أولية حول التحولات الدفاعية وحمل اللاعبين.",
    generatedAt: "2026-05-06T23:00:00+03:00",
    confidenceScore: 73,
    keyFindings: [
      "المنافس تفوق في الكرات الثانية",
      "الجناح الأيسر صنع الخطورة الأبرز للفريق",
      "مؤشر الحمل الدفاعي مرتفع على قلبي الدفاع",
    ],
    weaknesses: [
      "فجوة بين خط الوسط والدفاع أثناء التحول",
      "انخفاض دقة التمرير تحت الضغط العالي",
    ],
    improvements: [
      "ضغط مضاد أسرع بعد فقدان الكرة",
      "تخفيف حمل قلبي الدفاع في الحصة التالية",
    ],
    recommendations: [
      {
        id: "report-rec-taif-load",
        matchId: "match-kku-taif",
        teamId: "team-kku-varsity",
        category: "injury-prevention",
        title: "مراجعة حمل خط الدفاع",
        description:
          "يوصى بتخفيض شدة الحصة التالية لقلب الدفاع الأساسي بسبب ارتفاع مؤشر المخاطر.",
        priority: "high",
        evidence: ["مؤشر حمل 86", "التحامات هوائية متكررة"],
        createdAt: "2026-05-06",
      },
    ],
    playerHighlights: [
      {
        playerId: "player-faisal-alshahrani",
        rating: 8.1,
        minutes: 78,
        keyMoment: "هدف من انتقال سريع على الطرف الأيسر",
      },
    ],
  },
];

export const latestReport = mockMatchReports[2];

export const reportsByMatchId = new Map(
  mockMatchReports.map((report) => [report.matchId, report])
);

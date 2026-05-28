import {
  Activity,
  BrainCircuit,
  ClipboardCheck,
  Dumbbell,
  LineChart,
  Radar,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import type { PlatformArea, PlatformMetric } from "@/types/platform";

export const platformMetrics: PlatformMetric[] = [
  {
    label: "رؤية اللاعب",
    value: "٣٦٠",
    detail: "مساحة موحدة للأداء والجاهزية والتطور الرياضي.",
  },
  {
    label: "مصدر التحليل",
    value: "CV",
    detail: "واجهة مهيأة لاحقا لمخرجات تحليل الفيديو.",
  },
  {
    label: "دعم القرار",
    value: "AI",
    detail: "تصميم يعرض التوصيات المستقبلية كبيانات واجهة فقط.",
  },
];

export const platformAreas: PlatformArea[] = [
  {
    title: "لوحة اللاعب",
    eyebrow: "مساحة اللاعب",
    description:
      "مساحة اللاعب الشخصية للأداء، الجاهزية، المركز الأنسب، وخطة التطوير.",
    status: "مرحلة قادمة",
    href: "#player-dashboard",
    icon: Activity,
  },
  {
    title: "لوحة المدرب",
    eyebrow: "قرارات فنية",
    description:
      "منطقة قرارات فنية لمقارنة اللاعبين، قراءة المخاطر، وتجهيز التشكيل.",
    status: "مرحلة قادمة",
    href: "#coach-dashboard",
    icon: BrainCircuit,
  },
  {
    title: "لوحة الإدارة",
    eyebrow: "إدارة البرنامج",
    description:
      "هيكل إداري مستقبلي للفرق والصلاحيات ومتابعة مؤشرات البرنامج.",
    status: "مرحلة قادمة",
    href: "#admin-dashboard",
    icon: ShieldCheck,
  },
  {
    title: "التقارير",
    eyebrow: "مخرجات التحليل",
    description:
      "واجهة مخصصة لاحقا لتقارير المباريات والتحسن ومخرجات الذكاء الرياضي.",
    status: "مرحلة قادمة",
    href: "#reports",
    icon: ClipboardCheck,
  },
  {
    title: "الفريق",
    eyebrow: "قائمة اللاعبين",
    description:
      "مخطط لاستعراض اللاعبين والأدوار والمراكز وجاهزية المجموعة.",
    status: "مرحلة قادمة",
    href: "#team",
    icon: UsersRound,
  },
  {
    title: "المباريات",
    eyebrow: "سجل المواجهات",
    description:
      "سجل مستقبلي للمواجهات ومؤشرات الأداء وملخصات التحليل بعد المباراة.",
    status: "مرحلة قادمة",
    href: "#matches",
    icon: LineChart,
  },
  {
    title: "مؤشرات المخاطر",
    eyebrow: "ذكاء المخاطر",
    description:
      "إطار واجهة لاحق لمخاطر الإصابة والحمل التدريبي والاستشفاء.",
    status: "تصميم تأسيسي",
    href: "#overview",
    icon: Radar,
  },
  {
    title: "التطور الرياضي",
    eyebrow: "نمو اللاعب",
    description:
      "إطار بصري لخطط التطوير ونقاط الضعف والتحسن عبر المباريات.",
    status: "تصميم تأسيسي",
    href: "#overview",
    icon: Dumbbell,
  },
];

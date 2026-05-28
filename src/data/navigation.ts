import {
  BarChart3,
  ClipboardList,
  LayoutDashboard,
  Shield,
  Trophy,
  Users,
  UserRound,
} from "lucide-react";

import type { NavigationItem } from "@/types/platform";

export const navigationItems: NavigationItem[] = [
  {
    title: "نظرة عامة",
    eyebrow: "مدخل المنصة",
    href: "#overview",
    icon: LayoutDashboard,
  },
  {
    title: "لوحة اللاعب",
    eyebrow: "مساحة اللاعب",
    href: "#player-dashboard",
    icon: UserRound,
  },
  {
    title: "لوحة المدرب",
    eyebrow: "قرارات فنية",
    href: "#coach-dashboard",
    icon: Trophy,
  },
  {
    title: "لوحة الإدارة",
    eyebrow: "إدارة البرنامج",
    href: "#admin-dashboard",
    icon: Shield,
  },
  {
    title: "التقارير",
    eyebrow: "مخرجات التحليل",
    href: "#reports",
    icon: ClipboardList,
  },
  {
    title: "الفريق",
    eyebrow: "قائمة اللاعبين",
    href: "#team",
    icon: Users,
  },
  {
    title: "المباريات",
    eyebrow: "سجل المواجهات",
    href: "#matches",
    icon: BarChart3,
  },
];

import type { Coach } from "@/types/athlete";

export const mockCoaches: Coach[] = [
  {
    id: "coach-saeed-alasmari",
    role: "coach",
    name: "سعيد الأسمري",
    title: "المدرب الرئيسي",
    department: "عمادة شؤون الطلاب",
    licenseLevel: "رخصة تدريب آسيوية B",
    email: "s.alasmari@kku.edu.sa",
    phone: "0172418000",
    teamIds: ["team-kku-varsity"],
  },
  {
    id: "coach-khaled-alshammari",
    role: "coach",
    name: "خالد الشمري",
    title: "محلل الأداء",
    department: "وحدة الأنشطة الرياضية",
    licenseLevel: "محلل أداء معتمد",
    email: "k.alshammari@kku.edu.sa",
    phone: "0172418000",
    teamIds: ["team-kku-varsity", "team-kku-development"],
  },
];

export const coachesById = new Map(mockCoaches.map((coach) => [coach.id, coach]));

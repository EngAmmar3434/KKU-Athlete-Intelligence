import type { Team } from "@/types/athlete";

export const mockTeams: Team[] = [
  {
    id: "team-kku-varsity",
    name: "منتخب جامعة الملك خالد لكرة القدم",
    shortName: "KKU Varsity",
    category: "الفريق الجامعي الأول",
    season: "2025/2026",
    department: "عمادة شؤون الطلاب",
    coachId: "coach-saeed-alasmari",
    captainPlayerId: "player-mohammed-assiri",
    playerIds: [
      "player-abdullah-alqahtani",
      "player-faisal-alshahrani",
      "player-mohammed-assiri",
      "player-nawaf-alghamdi",
      "player-salem-alyami",
      "player-omar-alqahtani",
    ],
    homeVenue: "ملعب المدينة الجامعية بأبها",
    achievements: ["وصيف بطولة الجامعات السعودية 2025", "أفضل دفاع في تصفيات عسير"],
  },
  {
    id: "team-kku-development",
    name: "فريق تطوير المواهب الرياضية",
    shortName: "KKU Development",
    category: "فريق التطوير",
    season: "2025/2026",
    department: "وحدة الأنشطة الرياضية",
    coachId: "coach-khaled-alshammari",
    captainPlayerId: "player-nawaf-alghamdi",
    playerIds: ["player-nawaf-alghamdi", "player-salem-alyami"],
    homeVenue: "ملعب عمادة شؤون الطلاب",
    achievements: ["برنامج اكتشاف المواهب الجامعية"],
  },
];

export const teamsById = new Map(mockTeams.map((team) => [team.id, team]));

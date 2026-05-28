import { ArrowUpLeft, CheckCircle2, FileVideo, UsersRound } from "lucide-react";

import { VideoAnalysisStatusCard } from "@/components/admin/video-analysis-status-card";
import { PlatformAreaCard } from "@/components/cards/platform-area-card";
import { PlatformMetricCard } from "@/components/cards/platform-metric-card";
import { ReportSummaryCard } from "@/components/cards/report-summary-card";
import { StatCard } from "@/components/cards/stat-card";
import { PerformanceLineChart } from "@/components/charts/performance-line-chart";
import { IntelligenceField } from "@/components/charts/intelligence-field";
import { AIRecommendationList } from "@/components/dashboard/ai-recommendation-list";
import { MetricGrid } from "@/components/dashboard/metric-grid";
import { SectionHeader } from "@/components/dashboard/section-header";
import { PlayerFifaCardPreview } from "@/components/player/player-fifa-card-preview";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  mockCoachRecommendations,
  mockTeamPerformanceTrend,
} from "@/data/analytics";
import { latestMatch, mockMatches } from "@/data/matches";
import { platformAreas, platformMetrics } from "@/data/overview";
import { featuredPlayer, mockPlayers } from "@/data/players";
import { latestReport } from "@/data/reports";
import { mockTeams } from "@/data/teams";

export default function Home() {
  const featuredTeam = mockTeams[0];

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
      <section
        id="overview"
        className="grid scroll-mt-24 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.78fr)]"
      >
        <div className="flex min-h-[28rem] flex-col justify-between rounded-lg border border-border bg-card p-6 text-card-foreground token-elevated sm:p-8">
          <div className="space-y-5">
            <Badge variant="secondary">جامعة الملك خالد</Badge>
            <div className="space-y-4">
              <h2 className="max-w-3xl text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
                KKU Athlete Intelligence
              </h2>
              <p className="max-w-2xl text-lg leading-9 text-text-muted">
                منصة أمامية لتأسيس تجربة تحليل رياضي جامعية تساعد على قراءة أداء
                لاعبي كرة القدم، وعرض مؤشرات الجاهزية والمخاطر والتطور بأسلوب
                رسمي متصل بهوية جامعة الملك خالد.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href="#platform-preview">
                  استعراض طبقة البيانات
                  <ArrowUpLeft />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#platform-areas">مسارات المنصة</a>
              </Button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {platformMetrics.map((metric) => (
              <PlatformMetricCard key={metric.label} metric={metric} />
            ))}
          </div>
        </div>

        <IntelligenceField />
      </section>

      <section id="platform-preview" className="scroll-mt-24 space-y-5">
        <SectionHeader
          eyebrow="طبقة بيانات ومكونات"
          title="مؤشرات قابلة لإعادة الاستخدام قبل بناء اللوحات"
          description="هذه المعاينة تستخدم بيانات ثابتة ومكونات مشتركة فقط، لتجهيز المرحلة التالية دون أي تكامل خلفي."
        />
        <MetricGrid className="xl:grid-cols-3">
          <StatCard
            title="لاعبون في البيانات التجريبية"
            value={mockPlayers.length}
            description="قائمة طلاب ولاعبين مرتبطة بالفريق الجامعي."
            icon={UsersRound}
          />
          <StatCard
            title="مباريات مهيأة للتحليل"
            value={mockMatches.length}
            description="حالات فيديو متعددة تشمل الرفع والمعالجة والاكتمال."
            icon={FileVideo}
          />
          <StatCard
            title="ثقة آخر تقرير"
            value={`${latestReport.confidenceScore}%`}
            description="قيمة واجهة تجريبية من تقرير أداء وهمي."
            trend="بيانات Mock فقط"
          />
        </MetricGrid>

        <div className="grid gap-5 xl:grid-cols-[minmax(18rem,0.85fr)_minmax(0,1.15fr)]">
          <PlayerFifaCardPreview
            player={featuredPlayer}
            teamName={featuredTeam.name}
          />
          <Card className="token-elevated">
            <CardHeader>
              <CardDescription>تطور الأداء</CardDescription>
              <CardTitle>تقدم الفريق عبر المباريات</CardTitle>
            </CardHeader>
            <CardContent>
              <PerformanceLineChart data={mockTeamPerformanceTrend} />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <VideoAnalysisStatusCard
            status={latestMatch.videoAnalysisStatus}
            title="حالة تحليل آخر مباراة"
            description="تمثيل أمامي لحالة فيديو المباراة دون رفع فعلي أو معالجة حقيقية."
            match={latestMatch}
          />
          <div className="lg:col-span-2">
            <AIRecommendationList
              recommendations={mockCoachRecommendations.slice(0, 2)}
              title="توصيات تجريبية للمدرب"
            />
          </div>
        </div>

        <ReportSummaryCard report={latestReport} />
      </section>

      <section
        id="platform-scope"
        className="grid scroll-mt-24 gap-4 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]"
      >
        <div className="rounded-lg border border-border bg-surface/80 p-5 text-foreground token-elevated">
          <p className="text-sm font-semibold text-primary">
            المرحلة الحالية
          </p>
          <h3 className="mt-3 text-2xl font-bold text-foreground">
            أساس رسمي للواجهة قبل بناء اللوحات
          </h3>
          <p className="mt-3 text-sm leading-7 text-text-muted">
            هذا الإصدار يركز على الهوية، التنقل، الوضعين الفاتح والداكن، وربط
            كل العناصر بنظام ألوان مركزي مستخرج من موقع جامعة الملك خالد.
          </p>
          <div className="mt-5 grid gap-3">
            {[
              "ألوان الواجهة تأتي من متغيرات مركزية في ملف الثيم العام.",
              "التنقل الجانبي والعلوي جاهزان لمسارات المنصة المستقبلية.",
              "كل المخرجات المعروضة في هذه المرحلة بيانات واجهة فقط.",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-sm text-foreground"
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="leading-6">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          id="platform-areas"
          className="grid scroll-mt-24 gap-4 sm:grid-cols-2"
        >
          {platformAreas.map((area) => (
            <PlatformAreaCard key={area.title} area={area} />
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-border bg-card p-6 text-card-foreground token-elevated">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-primary">
              نموذج أمامي فقط
            </p>
            <h3 className="mt-2 text-2xl font-bold text-foreground">
              جاهز لتوسيع لوحات اللاعب والمدرب والإدارة في المراحل القادمة
            </h3>
          </div>
          <Button variant="outline" asChild>
            <a href="#overview">العودة للبداية</a>
          </Button>
        </div>
      </section>
    </div>
  );
}

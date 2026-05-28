export function IntelligenceField() {
  return (
    <div className="relative min-h-[22rem] overflow-hidden rounded-lg border border-border bg-card token-elevated">
      <div className="app-grid absolute inset-0 opacity-70" />
      <div className="absolute inset-5 rounded-lg border border-border/70" />
      <div className="absolute left-1/2 top-5 h-[calc(100%-2.5rem)] w-px -translate-x-1/2 bg-border/70" />
      <div className="absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/70" />
      <div className="absolute right-5 top-1/2 h-32 w-16 -translate-y-1/2 rounded-l-lg border border-border/70 border-r-0" />
      <div className="absolute left-5 top-1/2 h-32 w-16 -translate-y-1/2 rounded-r-lg border border-border/70 border-l-0" />

      <div className="absolute inset-x-8 top-8 flex items-center justify-between gap-4 text-xs font-medium text-text-muted">
        <span>تحليل الفيديو</span>
        <span>ذكاء رياضي</span>
      </div>

      <div className="absolute bottom-8 right-8 max-w-56 rounded-lg border border-border bg-background/90 p-4 text-foreground backdrop-blur">
        <p className="text-xs font-semibold text-primary">إشارة تحليل ذكية</p>
        <p className="mt-2 text-sm leading-6 text-text-muted">
          مساحة أمامية مهيأة لاحقا لاستقبال قراءات الفيديو ومساندة القرار الفني.
        </p>
      </div>

      <div className="absolute left-10 top-16 flex h-24 w-24 items-center justify-center rounded-lg border border-primary bg-primary/15 text-primary">
        <span className="text-2xl font-extrabold">84</span>
      </div>
    </div>
  );
}

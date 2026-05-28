export const chartTheme = {
  axis: "var(--muted-foreground)",
  grid: "var(--border)",
  surface: "var(--popover)",
  text: "var(--popover-foreground)",
  primary: "var(--chart-1)",
  secondary: "var(--chart-2)",
  tertiary: "var(--chart-3)",
  quaternary: "var(--chart-4)",
  risk: "var(--chart-5)",
};

export const chartTooltipStyle = {
  backgroundColor: chartTheme.surface,
  borderColor: chartTheme.grid,
  color: chartTheme.text,
  borderRadius: "var(--radius-lg)",
};

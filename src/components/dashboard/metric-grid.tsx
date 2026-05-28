import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type MetricGridProps = {
  children: ReactNode;
  className?: string;
};

export function MetricGrid({ children, className }: MetricGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
        className
      )}
    >
      {children}
    </div>
  );
}

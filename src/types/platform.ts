import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  title: string;
  eyebrow: string;
  href: string;
  icon: LucideIcon;
};

export type PlatformMetric = {
  label: string;
  value: string;
  detail: string;
};

export type PlatformArea = {
  title: string;
  eyebrow: string;
  description: string;
  status: string;
  href: string;
  icon: LucideIcon;
};

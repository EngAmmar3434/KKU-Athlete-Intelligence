"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";
import type { NavigationItem } from "@/types/platform";
import { ThemeToggle } from "./theme-toggle";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="app-background min-h-screen text-foreground">
      <DesktopSidebar />

      <div className="flex min-h-screen flex-col lg:pr-72">
        <TopBar onOpenMobile={() => setMobileOpen(true)} />
        <main className="flex-1 px-4 py-5 sm:px-6 lg:px-8">{children}</main>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-sidebar/70 backdrop-blur-sm"
            aria-label="إغلاق التنقل"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute inset-y-0 right-0 flex w-80 max-w-[88vw] flex-col border-l border-sidebar-border bg-sidebar text-sidebar-foreground token-elevated">
            <div className="flex items-center justify-between gap-3 border-b border-sidebar-border p-4">
              <BrandBlock compact />
              <Button
                type="button"
                variant="ghost"
                size="icon-lg"
                className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                aria-label="إغلاق التنقل"
                onClick={() => setMobileOpen(false)}
              >
                <X />
              </Button>
            </div>
            <ShellNavigation onNavigate={() => setMobileOpen(false)} />
          </aside>
        </div>
      ) : null}
    </div>
  );
}

function DesktopSidebar() {
  return (
    <aside className="fixed inset-y-0 right-0 z-30 hidden w-72 flex-col border-l border-sidebar-border bg-sidebar text-sidebar-foreground lg:flex">
      <div className="border-b border-sidebar-border p-5">
        <BrandBlock />
      </div>
      <ShellNavigation />
      <div className="mt-auto border-t border-sidebar-border p-4">
        <div className="rounded-lg border border-sidebar-border bg-sidebar-accent p-3 text-sidebar-accent-foreground">
          <p className="text-xs font-semibold">مرحلة تأسيس الواجهة</p>
          <p className="mt-2 text-sm leading-6 text-sidebar-foreground/80">
            هيكل رسمي قابل للتوسع، مهيأ لربط لوحات اللاعب والمدرب والإدارة في
            المراحل القادمة دون أي تكامل خلفي.
          </p>
        </div>
      </div>
    </aside>
  );
}

function TopBar({ onOpenMobile }: { onOpenMobile: () => void }) {
  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="flex min-h-16 items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <Button
            type="button"
            variant="outline"
            size="icon-lg"
            className="lg:hidden"
            aria-label="فتح التنقل"
            onClick={onOpenMobile}
          >
            <Menu />
          </Button>
          <div className="min-w-0">
            <p className="text-xs font-medium text-text-muted">
              جامعة الملك خالد | التحليل الرياضي الذكي
            </p>
            <h1 className="truncate text-base font-semibold text-foreground sm:text-lg">
              منصة ذكاء رياضي جامعية
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="hidden sm:inline-flex">
            نموذج أولي
          </Badge>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function BrandBlock({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="#overview" className="flex min-w-0 items-center gap-3">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-sidebar-border bg-sidebar-primary text-sm font-bold text-sidebar-primary-foreground">
        KKU
      </div>
      <div className="min-w-0">
        <p
          className={cn(
            "truncate font-semibold text-sidebar-foreground",
            compact ? "text-sm" : "text-base"
          )}
        >
          KKU Athlete Intelligence
        </p>
        <p className="truncate text-xs text-sidebar-foreground/75">
          جامعة الملك خالد
        </p>
      </div>
    </Link>
  );
}

function ShellNavigation({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
      {navigationItems.map((item, index) => (
        <NavItem
          key={item.href}
          item={item}
          active={index === 0}
          onNavigate={onNavigate}
        />
      ))}
    </nav>
  );
}

function NavItem({
  item,
  active,
  onNavigate,
}: {
  item: NavigationItem;
  active: boolean;
  onNavigate?: () => void;
}) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className={cn(
        "group flex items-center gap-3 rounded-lg border px-3 py-2.5 text-sm transition-colors",
        active
          ? "border-sidebar-primary bg-sidebar-primary text-sidebar-primary-foreground"
          : "border-sidebar-border/0 text-sidebar-foreground/80 hover:border-sidebar-border hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      )}
    >
      <Icon className="size-4 shrink-0" />
      <span className="min-w-0 flex-1">
        <span className="block truncate font-medium">{item.title}</span>
        <span
          className={cn(
            "block truncate text-xs",
            active
              ? "text-sidebar-primary-foreground/80"
              : "text-sidebar-foreground/60 group-hover:text-sidebar-accent-foreground/80"
          )}
        >
          {item.eyebrow}
        </span>
      </span>
    </Link>
  );
}

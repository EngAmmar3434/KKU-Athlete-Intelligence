"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const Icon = isDark ? Sun : Moon;
  const label = isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن";

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-lg"
      aria-label={label}
      title={label}
      onClick={() => setIsDark((current) => !current)}
    >
      <Icon />
    </Button>
  );
}

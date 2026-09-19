import { Button } from "@dwikamekatama/ui/components/button";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme-provider";
import { useLanguage } from "@/i18n/language-provider";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useLanguage();

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">{isDark ? t.common.switchToLightAria : t.common.switchToDarkAria}</span>
    </Button>
  );
}

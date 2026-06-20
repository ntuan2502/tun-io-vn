"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Defer mounting update to prevent synchronous layout warnings in react-hooks/set-state-in-effect
    const animFrameId = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-4 max-w-5xl flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-mono font-bold text-lg tracking-tight hover:text-primary transition-colors">
          <Terminal className="size-5 text-primary" />
          <span>NAT</span>
        </a>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.about")}
            </a>
            <a href="#experience" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.experience")}
            </a>
            <a href="#skills" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.skills")}
            </a>
            <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.projects")}
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.contact")}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
              className="font-mono text-[10px] font-bold w-9 h-9 border border-border/50 bg-card/50 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 text-primary"
              aria-label="Toggle language"
            >
              {language === "vi" ? "EN" : "VI"}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full w-9 h-9 border border-border/50 bg-card/50 hover:bg-accent transition-all duration-300"
              aria-label="Toggle theme"
            >
              {mounted && (resolvedTheme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] text-primary rotate-0 scale-100 transition-all" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] text-primary rotate-0 scale-100 transition-all" />
              ))}
              {!mounted && <div className="h-[1.2rem] w-[1.2rem]" />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

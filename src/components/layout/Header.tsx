"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Terminal, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Defer mounting update to prevent synchronous layout warnings
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

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      setTimeout(() => {
        elem.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  };

  const menuItems = [
    { href: "#about", label: t("nav.about") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen
          ? "bg-background/95 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-4 max-w-5xl flex items-center justify-between">
        <a href="#" onClick={() => setIsOpen(false)} className="flex items-center gap-2 font-mono font-bold text-lg tracking-tight hover:text-primary transition-colors">
          <Terminal className="size-5 text-primary" />
          <span>NAT</span>
        </a>

        <div className="flex items-center gap-4 md:gap-8">
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
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

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden rounded-full w-9 h-9 border border-border/50 bg-card/50 hover:bg-accent transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-[1.2rem] w-[1.2rem] text-primary" />
              ) : (
                <Menu className="h-[1.2rem] w-[1.2rem] text-primary" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md overflow-hidden"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {menuItems.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleMobileNavClick(e, item.href)}
                  className="text-base font-semibold text-muted-foreground hover:text-primary transition-colors py-1.5 border-b border-border/30 last:border-0"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

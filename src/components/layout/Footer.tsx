"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, data } = useLanguage();
  const info = data.cvData.personalInfo;

  return (
    <footer className="py-8 bg-secondary/30 border-t border-border/50 text-center font-mono text-[10px] text-muted-foreground">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} {info.fullName}. All rights reserved.</p>
        <p className="mt-1 text-[9px] text-muted-foreground/60">
          {t("footer.built")}
        </p>
      </div>
    </footer>
  );
}

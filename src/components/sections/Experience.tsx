"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Terminal, Calendar, Briefcase, ChevronRight, Building2 } from "lucide-react";
import { Experience as ExpType } from "@/data/cv";
import { useLanguage } from "@/context/LanguageContext";

function ExpLogCard({ exp, index }: { exp: ExpType; index: number }) {
  const isCurrentlyActive = exp.status === "active";
  const { t } = useLanguage();
  const [logoError, setLogoError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 sm:pl-10 group"
    >
      {/* Timeline connector dot */}
      <div className="absolute left-0 top-1.5 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card group-hover:border-primary transition-all duration-300">
        <div
          className={`h-2.5 w-2.5 rounded-full ${
            isCurrentlyActive ? "bg-green-500 animate-pulse" : "bg-primary/50"
          }`}
        />
      </div>

      {/* Main Card */}
      <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm group-hover:shadow-md hover:border-primary/30 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/50 pb-4 mb-4">
          <div className="flex items-start gap-3">
            {exp.logoUrl && !logoError ? (
              <div className="relative w-10 h-10 rounded-xl bg-white border border-border/80 p-1 flex items-center justify-center overflow-hidden shrink-0 mt-1">
                <Image
                  src={exp.logoUrl}
                  alt={exp.company}
                  width={40}
                  height={40}
                  onError={() => setLogoError(true)}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-xl bg-secondary border border-border/80 flex items-center justify-center shrink-0 mt-1">
                <Building2 className="size-5 text-muted-foreground" />
              </div>
            )}
            <div className="space-y-1.5">
              <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-primary/10 text-primary w-fit inline-block">
                {isCurrentlyActive ? t("exp.active") : t("exp.archived")}
              </span>
              <h3 className="text-lg font-bold text-foreground leading-snug">
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    {exp.company}
                  </a>
                ) : (
                  exp.company
                )}
              </h3>
              <p className="text-sm font-semibold text-primary font-mono flex items-center gap-1">
                <ChevronRight className="size-4" /> {exp.role}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-2 text-xs font-mono text-muted-foreground shrink-0">
            <span className="flex items-center gap-1.5 bg-secondary/80 px-2.5 py-1 rounded-lg border border-border/50 whitespace-nowrap">
              <Calendar className="size-3.5" /> {exp.period}
            </span>
          </div>
        </div>

        {/* Responsibilities list */}
        <div className="space-y-3">
          <span className="font-mono text-[11px] font-bold text-muted-foreground block">
            {t("exp.log_header")}
          </span>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {exp.responsibilities.map((task, idx) => (
              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                <span className="text-primary font-mono text-xs select-none mt-1">[-]:</span>
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technology/Tags */}
        {exp.tags && (
          <div className="flex flex-wrap gap-1.5 pt-5 mt-4 border-t border-border/50">
            {exp.tags.map((tag, idx) => (
              <span
                key={idx}
                className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground border border-border/60 hover:border-primary/20 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { t, data } = useLanguage();
  const experiences = data.cvData.experience;

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] z-0">
        <Terminal className="absolute -right-20 top-20 size-96 rotate-12" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="space-y-12">
          {/* Section title */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <Briefcase className="size-6 text-primary" />
              <span>{t("exp.title")}</span>
            </h2>
            <div className="h-1 w-12 bg-primary rounded-full" />
          </div>

          {/* Timeline Wrapper */}
          <div className="relative border-l border-border/80 ml-3 sm:ml-4 py-2 space-y-10">
            {experiences.map((exp, idx) => (
              <ExpLogCard key={idx} exp={exp} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

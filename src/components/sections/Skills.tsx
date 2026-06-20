"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Skills() {
  const { t, data } = useLanguage();
  const skills = data.cvData.skills;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="skills" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="space-y-12">
          {/* Section title */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <Cpu className="size-6 text-primary" />
              <span>{t("skills.title")}</span>
            </h2>
            <div className="h-1 w-12 bg-primary rounded-full" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <h3 className="font-mono text-xs font-bold text-primary tracking-wider uppercase border-b border-border/60 pb-2 flex items-center gap-1.5">
                    <Terminal className="size-4" /> {skillGroup.category}
                  </h3>
                  <div className="grid grid-cols-1 gap-2.5">
                    {skillGroup.items.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                        <CheckCircle2 className="size-4 text-primary shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

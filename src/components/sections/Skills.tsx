"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, CheckCircle2, Globe } from "lucide-react";
import { cvData } from "@/data/cv";

export default function Skills() {
  const skills = cvData.skills;
  const languages = cvData.languages;

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
              <span>Kỹ năng & Chuyên môn</span>
            </h2>
            <div className="h-1 w-12 bg-primary rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Skill Dashboard grid (8 cols) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6"
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

            {/* Right: Languages & Certifications Side panel (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm space-y-6"
              >
                <h3 className="font-mono text-xs font-bold text-primary tracking-wider uppercase border-b border-border/60 pb-2 flex items-center gap-1.5">
                  <Globe className="size-4" /> Ngoại ngữ
                </h3>

                <div className="space-y-4">
                  {languages.map((lang, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between items-end text-sm font-mono">
                        <span className="text-foreground font-medium">{lang.language}</span>
                        <span className="text-xs text-muted-foreground">{lang.level}</span>
                      </div>
                      {/* Bar indicator */}
                      <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full rounded-full bg-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Operations Stats Widget */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl border border-primary/20 bg-primary/5 dark:bg-primary/5 p-6 shadow-sm space-y-4 font-mono text-xs text-muted-foreground"
              >
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Cpu className="size-4" />
                  <span>IT_SYSTEM_METRICS</span>
                </div>
                <div className="space-y-2 border-t border-primary/10 pt-3">
                  <div className="flex justify-between">
                    <span>Active Server Instances:</span>
                    <span className="text-foreground font-semibold">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Helpdesk Tickets Resolved:</span>
                    <span className="text-foreground font-semibold">1,200+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>PACS Network Nodes:</span>
                    <span className="text-foreground font-semibold">3 (Branches)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Backup Redundancy:</span>
                    <span className="text-foreground font-semibold">NAS RAID-5</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { User, Award, Calendar, Compass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t, data } = useLanguage();
  const info = data.cvData.personalInfo;
  const goals = data.cvData.goals;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section title */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <User className="size-6 text-primary" />
              <span>{t("about.title")}</span>
            </h2>
            <div className="h-1 w-12 bg-primary rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Short Introduction */}
            <motion.div variants={itemVariants} className="md:col-span-7 space-y-6">
              <p className="text-base text-muted-foreground leading-relaxed">
                {t("about.intro1")}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                {t("about.intro2")}
              </p>

              {/* Goals list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-5 rounded-xl border border-border/80 bg-card/50 space-y-3">
                  <h3 className="font-mono text-xs font-bold text-primary tracking-wider uppercase flex items-center gap-1.5">
                    <Compass className="size-4" /> {t("about.shortTerm")}
                  </h3>
                  <ul className="text-xs text-muted-foreground space-y-2 leading-relaxed list-disc list-inside pl-1">
                    {goals.shortTerm.map((goal, idx) => (
                      <li key={idx} className="marker:text-primary/70">{goal}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-xl border border-border/80 bg-card/50 space-y-3">
                  <h3 className="font-mono text-xs font-bold text-primary tracking-wider uppercase flex items-center gap-1.5">
                    <Award className="size-4" /> {t("about.longTerm")}
                  </h3>
                  <ul className="text-xs text-muted-foreground space-y-2 leading-relaxed list-disc list-inside pl-1">
                    {goals.longTerm.map((goal, idx) => (
                      <li key={idx} className="marker:text-primary/70">{goal}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Personal Details Widget */}
            <motion.div variants={itemVariants} className="md:col-span-5">
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-md space-y-6">
                <h3 className="font-mono text-xs font-bold tracking-wider text-muted-foreground uppercase pb-3 border-b border-border flex items-center gap-1.5">
                  <Calendar className="size-4 text-primary" /> {t("about.personalInfo")}
                </h3>

                <div className="space-y-4 text-sm font-mono">
                  <div className="flex justify-between py-1 border-b border-border/50">
                    <span className="text-muted-foreground">{t("about.dob")}:</span>
                    <span className="text-foreground font-medium">{info.dob}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/50">
                    <span className="text-muted-foreground">{t("about.gender")}:</span>
                    <span className="text-foreground font-medium">{info.gender}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/50">
                    <span className="text-muted-foreground">{t("about.nationality")}:</span>
                    <span className="text-foreground font-medium">{info.nationality}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/50">
                    <span className="text-muted-foreground">{t("about.marital")}:</span>
                    <span className="text-foreground font-medium">{info.maritalStatus}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-muted-foreground">{t("about.exp")}:</span>
                    <span className="text-primary font-bold">{info.experienceYears} {t("about.years")}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-secondary/40 border border-primary/10 text-xs text-muted-foreground space-y-2">
                  <span className="font-bold text-primary font-mono block">{t("about.education")}:</span>
                  {data.cvData.education.map((edu, idx) => (
                    <div key={idx} className="space-y-1">
                      <span className="text-foreground font-semibold block">{edu.school}</span>
                      <span className="text-[11px] block">{edu.degree}</span>
                      <span className="text-[11px] font-mono text-primary/70">{edu.period}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

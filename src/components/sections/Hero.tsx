"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Download, MapPin, RefreshCw, Cpu, Activity, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const [isFlipped, setIsFlipped] = useState(false);
  const { t, data } = useLanguage();
  const info = data.cvData.personalInfo;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background botanical grids and soft shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 rounded-full bg-secondary/50 blur-3xl" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(var(--border) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Text Area: 7 cols on medium+ */}
        <div className="md:col-span-7 flex flex-col space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-secondary/50 text-primary text-xs font-semibold font-mono w-fit"
          >
            <Activity className="size-3.5 animate-pulse" />
            <span>{t("hero.status.online")}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground leading-tight">
              <span dangerouslySetInnerHTML={{ __html: t("hero.greeting") }} /><br />
              <span className="text-primary font-extrabold tracking-tighter bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {info.fullName}
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-muted-foreground font-mono">
              {info.role}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            {t("hero.desc")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-muted-foreground font-mono"
          >
            <div className="flex items-center gap-1.5">
              <MapPin className="size-4 text-primary" />
              <span>{info.location}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button
              asChild
              className="bg-primary hover:bg-primary/95 text-primary-foreground font-medium px-6 py-5 rounded-xl transition-all duration-300 shadow-md shadow-primary/10 cursor-pointer"
            >
              <a href={`mailto:${info.email}`}>
                <Mail className="mr-2 size-4" /> {t("hero.btn.email")}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-border bg-card/50 hover:bg-accent font-medium px-6 py-5 rounded-xl transition-all duration-300 cursor-pointer"
            >
              <a href={info.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 size-4" /> {t("hero.btn.download")}
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Avatar Area: 5 cols on medium+ */}
        <div className="md:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="relative cursor-pointer select-none group w-64 h-80 perspective-1000"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <motion.div
              className="relative w-full h-full duration-500 transform-style-3d"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
            >
              {/* FRONT: Avatar Image Card */}
              <div className="absolute inset-0 w-full h-full rounded-2xl p-4 bg-card border border-border/80 shadow-xl backface-hidden flex flex-col items-center justify-between transition-all duration-300 group-hover:border-primary/40">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-secondary flex items-center justify-center">
                  <Image
                    src={info.avatarUrl}
                    alt={info.fullName}
                    fill
                    sizes="220px"
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="w-full text-center mt-3">
                  <h3 className="font-mono text-sm font-semibold tracking-wider text-muted-foreground uppercase flex items-center justify-center gap-1.5">
                    {info.fullName}
                  </h3>
                  <p className="text-[11px] text-primary/80 font-mono mt-1 flex items-center justify-center gap-1">
                    <RefreshCw className="size-3 animate-spin-slow" /> {t("hero.click.status")}
                  </p>
                </div>
              </div>

              {/* BACK: IT Operations Monitor Card */}
              <div className="absolute inset-0 w-full h-full rounded-2xl p-6 bg-card border border-primary/40 dark:border-primary/30 shadow-2xl backface-hidden rotate-y-180 flex flex-col justify-between font-mono text-xs text-foreground bg-gradient-to-br from-card to-secondary/30">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-border pb-2">
                    <span className="text-[10px] font-bold text-primary flex items-center gap-1">
                      <Activity className="size-3.5" /> SYS_MONITOR
                    </span>
                    <span className="text-[10px] text-green-500 font-bold px-1.5 py-0.5 rounded bg-green-500/10">
                      ONLINE
                    </span>
                  </div>

                  <div className="space-y-2.5 pt-1 text-muted-foreground">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1"><Clock className="size-3 text-primary" /> {t("hero.terminal.uptime")}</span>
                      <span className="text-foreground font-semibold">99.99%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1"><Cpu className="size-3 text-primary" /> {t("hero.terminal.skills")}</span>
                      <span className="text-foreground font-semibold">Windows/Linux</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1"><ShieldCheck className="size-3 text-primary" /> {t("hero.terminal.security")}</span>
                      <span className="text-foreground font-semibold">Fortinet FW</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1">📍 {t("hero.terminal.ping")}</span>
                      <span className="text-foreground font-semibold">{t("hero.terminal.pingval")}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-3 mt-4 text-[10px] text-center text-primary/80 flex items-center justify-center gap-1">
                  <RefreshCw className="size-3" /> {t("hero.click.avatar")}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

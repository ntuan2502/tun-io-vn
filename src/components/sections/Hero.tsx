"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, MapPin, RefreshCw, Cpu, Activity, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cvData } from "@/data/cv";

export default function Hero() {
  const [isFlipped, setIsFlipped] = useState(false);
  const info = cvData.personalInfo;

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
            <span>IT Operations Status: Online</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Xin chào, mình là <br />
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
            Chuyên viên CNTT với 3 năm kinh nghiệm thực tế về vận hành, tối ưu hóa hệ thống máy chủ,
            quản trị mạng và hỗ trợ kỹ thuật doanh nghiệp. Đam mê thiết lập hệ thống tự động,
            đảm bảo tính ổn định và an toàn thông tin tối đa cho hạ tầng số.
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
              className="bg-primary hover:bg-primary/95 text-primary-foreground font-medium px-6 py-5 rounded-xl transition-all duration-300 shadow-md shadow-primary/10"
            >
              <a href="https://zalo.me/0868608700">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 size-4 shrink-0"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  <path d="M9 10h6l-6 5h6" />
                </svg>
                Liên Hệ Qua Zalo
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-border bg-card/50 hover:bg-accent font-medium px-6 py-5 rounded-xl transition-all duration-300"
            >
              <a href={info.resumeUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 size-4" /> Xem Bản PDF
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
                    Nguyen Anh Tuan
                  </h3>
                  <p className="text-[11px] text-primary/80 font-mono mt-1 flex items-center justify-center gap-1">
                    <RefreshCw className="size-3 animate-spin-slow" /> Click để xem trạng thái hệ thống
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
                      <span className="flex items-center gap-1"><Clock className="size-3 text-primary" /> System Uptime:</span>
                      <span className="text-foreground font-semibold">99.99%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1"><Cpu className="size-3 text-primary" /> Active Skills:</span>
                      <span className="text-foreground font-semibold">Windows/Linux</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1"><ShieldCheck className="size-3 text-primary" /> Security Layer:</span>
                      <span className="text-foreground font-semibold">Fortinet FW</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1">📍 Local Ping:</span>
                      <span className="text-foreground font-semibold">2ms (Biên Hòa)</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-3 mt-4 text-[10px] text-center text-primary/80 flex items-center justify-center gap-1">
                  <RefreshCw className="size-3" /> Click để xem ảnh hồ sơ
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

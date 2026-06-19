"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Contact2, ShieldAlert, Award } from "lucide-react";
import { cvData } from "@/data/cv";

export default function Contact() {
  const info = cvData.personalInfo;
  const ref = cvData.references[0];

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="space-y-12">
          {/* Section title */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <Contact2 className="size-6 text-primary" />
              <span>Thông tin liên hệ</span>
            </h2>
            <div className="h-1 w-12 bg-primary rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Contact Details List (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-7 space-y-6"
            >
              <p className="text-base text-muted-foreground leading-relaxed">
                Nếu bạn đang tìm kiếm một nhân sự vận hành hệ thống IT (IT Operations), hỗ trợ kỹ thuật (IT Support) có tư duy lập trình và tối ưu hóa quy trình tự động, hãy kết nối với mình qua các kênh dưới đây. Mình luôn sẵn sàng cho những cơ hội hợp tác mới!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`mailto:${info.email}`}
                  className="p-5 rounded-2xl border border-border/80 bg-card hover:border-primary/20 hover:shadow-sm transition-all duration-300 flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-secondary/80 border border-border/50 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-muted-foreground block uppercase">Email</span>
                    <span className="text-sm font-semibold text-foreground group-hover:underline break-all">
                      {info.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${info.phone}`}
                  className="p-5 rounded-2xl border border-border/80 bg-card hover:border-primary/20 hover:shadow-sm transition-all duration-300 flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-secondary/80 border border-border/50 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-muted-foreground block uppercase">Điện thoại</span>
                    <span className="text-sm font-semibold text-foreground group-hover:underline">
                      {info.phone}
                    </span>
                  </div>
                </a>

                <div className="p-5 rounded-2xl border border-border/80 bg-card hover:border-primary/20 hover:shadow-sm transition-all duration-300 flex items-center gap-4 sm:col-span-2 group">
                  <div className="p-3 rounded-xl bg-secondary/80 border border-border/50 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-muted-foreground block uppercase">Địa chỉ</span>
                    <span className="text-sm font-semibold text-foreground">
                      {info.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Reference Card (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-5"
            >
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm space-y-4">
                <h3 className="font-mono text-xs font-bold tracking-wider text-muted-foreground uppercase pb-3 border-b border-border flex items-center gap-1.5">
                  <Award className="size-4 text-primary" /> Người tham khảo (Reference)
                </h3>

                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-bold text-foreground block">{ref.name}</span>
                    <span className="text-xs text-muted-foreground font-mono">{ref.role}{" // "}{ref.company}</span>
                  </div>

                  <div className="space-y-1.5 pt-2 font-mono text-[11px] text-muted-foreground border-t border-border/50">
                    <div className="flex items-center justify-between">
                      <span>Email:</span>
                      <a href={`mailto:${ref.email}`} className="text-foreground hover:underline">{ref.email}</a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Tel:</span>
                      <a href={`tel:${ref.phone}`} className="text-foreground hover:underline">{ref.phone}</a>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-primary/5 border border-primary/10 text-[11px] text-muted-foreground flex gap-2 items-start">
                  <ShieldAlert className="size-4 text-primary shrink-0 mt-0.5" />
                  <span className="leading-normal font-mono">
                    Để xác minh năng lực và thái độ làm việc tại DYM Medical Center, bạn có thể liên hệ trực tiếp với người quản lý của mình ở trên.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer inside Section */}
          <div className="pt-12 border-t border-border/50 text-center font-mono text-[10px] text-muted-foreground">
            <p>© {new Date().getFullYear()} Nguyễn Anh Tuấn. All rights reserved.</p>
            <p className="mt-1 text-[9px] text-muted-foreground/60">
              Built with Next.js (App Router), Tailwind CSS v4, and Framer Motion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

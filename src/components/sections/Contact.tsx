"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Contact2 } from "lucide-react";
import { cvData } from "@/data/cv";

export default function Contact() {
  const info = cvData.personalInfo;

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

          <div className="max-w-2xl mx-auto">
            {/* Contact Details List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p className="text-base text-muted-foreground leading-relaxed text-center">
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

                <div className="p-5 rounded-2xl border border-border/80 bg-card hover:border-primary/20 hover:shadow-sm transition-all duration-300 flex items-center gap-4 group">
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
          </div>
        </div>
      </div>
    </section>
  );
}

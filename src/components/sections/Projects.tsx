"use client";

import { motion } from "framer-motion";
import { FolderGit2, Cpu, ShieldCheck, FileSpreadsheet, Server, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  name: string;
  description: string;
  tags: string[];
  metrics?: string;
  icon: React.ReactNode;
  url?: string;
}

const projects: ProjectCardProps[] = [
  {
    name: "Triển khai Hệ thống PACS Y khoa",
    description: "Cấu hình và triển khai hệ thống Picture Archiving and Communication System (PACS) tại 3 chi nhánh Quận 1, Quận 7 và Hà Nội. Phân quyền truy cập an toàn cho đội ngũ bác sĩ, tối ưu hóa lưu trữ hình ảnh y khoa.",
    metrics: "Giảm 70% thời gian tìm kiếm hình ảnh, tiết kiệm chi phí in phim X-quang, tăng 15% lợi nhuận.",
    tags: ["PACS", "Windows Server AD", "Network Routing", "Healthcare IT"],
    icon: <ShieldCheck className="size-6 text-primary" />,
  },
  {
    name: "Tự động hóa Xử lý File Điện tâm đồ (ECG)",
    description: "Viết các script tự động hóa bằng Python để tiền xử lý, chuẩn hóa định dạng tên file điện tâm đồ theo chuẩn cấu trúc hệ thống phòng khám trước khi tải lên máy chủ lưu trữ.",
    metrics: "Giảm 50% lỗi nhập liệu thủ công của điều dưỡng, tiết kiệm 25 phút vận hành mỗi ngày.",
    tags: ["Python", "Scripting", "Automation", "Data Processing"],
    icon: <Cpu className="size-6 text-primary" />,
  },
  {
    name: "Headless CMS & Landing Pages",
    description: "Xây dựng hệ thống quản trị nội dung Headless CMS (Strapi) làm backend cấp dữ liệu tin tức cho ứng dụng di động; Triển khai và vận hành các landing page quảng cáo trên máy chủ web IIS.",
    metrics: "IIS Server, tamsoatungthuvu.dymmedicalcenter.com.vn",
    tags: ["Strapi CMS", "IIS Server", "Node.js", "Web Hosting"],
    icon: <Server className="size-6 text-primary" />,
    url: "https://tamsoatungthuvu.dymmedicalcenter.com.vn/",
  },
  {
    name: "Quản trị Tài nguyên & Hạ tầng IT",
    description: "Quản lý và vận hành hạ tầng CNTT toàn diện: 60 máy tính văn phòng, 70 tài khoản Google Workspace Admin, tổng đài thoại VoIP PBX (40 số nội bộ), cổng tin nhắn SMS Brandname.",
    metrics: "Đảm bảo 99% thời gian hoạt động hệ thống trong giờ làm việc, kiểm soát thất thoát tài sản IT 100%.",
    tags: ["Google Admin", "VoIP PBX", "Active Directory", "ITIL Support"],
    icon: <FileSpreadsheet className="size-6 text-primary" />,
  },
];

function ProjectCard({ project, index }: { project: ProjectCardProps; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
    >
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-secondary/80 border border-border/50">
            {project.icon}
          </div>
          <h3 className="text-base font-bold text-foreground leading-tight">
            {project.name}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {project.metrics && (
          <div className="p-3 rounded-xl bg-secondary/40 border border-primary/5 text-xs text-primary/80 font-mono">
            <span className="font-bold">KẾT QUẢ:</span> {project.metrics}
          </div>
        )}
      </div>

      <div className="space-y-4 pt-4 mt-4 border-t border-border/50">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground border border-border/40"
            >
              #{tag}
            </span>
          ))}
        </div>

        {project.url && (
          <Button
            asChild
            variant="link"
            className="text-xs text-primary font-mono hover:text-primary/80 p-0 h-auto flex items-center justify-start gap-1"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <LinkIcon className="size-3" /> Xem liên kết dự án
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="space-y-12">
          {/* Section title */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <FolderGit2 className="size-6 text-primary" />
              <span>Dự án nổi bật</span>
            </h2>
            <div className="h-1 w-12 bg-primary rounded-full" />
          </div>

          {/* Grid list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, idx) => (
              <ProjectCard key={idx} project={proj} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

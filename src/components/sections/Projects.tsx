"use client";

import { motion } from "framer-motion";
import { FolderGit2, Cpu, Server, Link as LinkIcon, Database, Layout, Globe, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Project as ProjType } from "@/data/cv";

const getProjectIcon = (index: number) => {
  switch (index) {
    case 0:
      return <Activity className="size-6 text-primary" />;
    case 1:
      return <Globe className="size-6 text-primary" />;
    case 2:
      return <Server className="size-6 text-primary" />;
    case 3:
      return <Cpu className="size-6 text-primary" />;
    case 4:
      return <Database className="size-6 text-primary" />;
    case 5:
      return <Layout className="size-6 text-primary" />;
    default:
      return <FolderGit2 className="size-6 text-primary" />;
  }
};

function ProjectCard({ project, index }: { project: ProjType; index: number }) {
  const { t } = useLanguage();
  const icon = getProjectIcon(index);

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
            {icon}
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
            <span className="font-bold">{t("projects.result")}:</span> {project.metrics}
          </div>
        )}
      </div>

      <div className="space-y-4 pt-4 mt-4 border-t border-border/50">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag: string, idx: number) => (
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
              <LinkIcon className="size-3" /> {t("projects.btn.view")}
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { t, data } = useLanguage();
  const projects = data.cvData.projects;

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="space-y-12">
          {/* Section title */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <FolderGit2 className="size-6 text-primary" />
              <span>{t("projects.title")}</span>
            </h2>
            <div className="h-1 w-12 bg-primary rounded-full" />
          </div>

          {/* Grid list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj: ProjType, idx: number) => (
              <ProjectCard key={idx} project={proj} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

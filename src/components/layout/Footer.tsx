import { cvData } from "@/data/cv";

export default function Footer() {
  const info = cvData.personalInfo;

  return (
    <footer className="py-8 bg-secondary/30 border-t border-border/50 text-center font-mono text-[10px] text-muted-foreground">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} {info.fullName}. All rights reserved.</p>
      </div>
    </footer>
  );
}

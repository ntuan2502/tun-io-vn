export interface Experience {
  company: string;
  companyUrl?: string;
  logoUrl?: string;
  role: string;
  period: string;
  status?: "active" | "completed";
  tags?: string[];
  achievements?: string[];
  responsibilities: string[];
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  url?: string;
  icon?: string;
  metrics?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface CVData {
  personalInfo: {
    fullName: string;
    role: string;
    experienceYears: number;
    email: string;
    location: string;
    dob: string;
    nationality: string;
    gender: string;
    avatarUrl: string;
    resumeUrl: string;
  };
  goals: {
    shortTerm: string[];
    longTerm: string[];
  };
  education: {
    school: string;
    degree: string;
    period: string;
  }[];
  experience: Experience[];
  skills: SkillCategory[];
  projects: Project[];
}

import { LocaleData } from "./vi";

export const en: LocaleData = {
  cvData: {
    personalInfo: {
      fullName: "Nguyen Anh Tuan",
      role: "IT Specialist / IT Operations & Support",
      experienceYears: 4,
      email: "ntuan.2502@gmail.com",
      location: "Tran Bien, Dong Nai, Vietnam",
      dob: "1997",
      nationality: "Vietnamese",
      gender: "Male",
      avatarUrl: "/avatar.png",
      resumeUrl: "/resume.pdf",
    },
    goals: {
      shortTerm: [
        "Enhance programming skills and master system automation tools (Python, PowerShell, Node.js) to streamline infrastructure administration and monitoring tasks.",
        "Streamline IT asset management and support workflows using specialized tools like Snipe-IT while acquiring professional network certifications (CCNP, Fortinet NSE)."
      ],
      longTerm: [
        "Advance into an IT Infrastructure Lead or IT Manager role, capable of designing and managing comprehensive IT setups for large-scale enterprises or industrial zones.",
        "Develop a comprehensive system planning mindset, focusing on designing high-reliability infrastructure architectures with proactive alerting and self-healing capabilities."
      ]
    },
    education: [
      {
        school: "University of Science - VNU-HCM (HCMUS)",
        degree: "Bachelor of Information Technology / Software Engineering Major",
        period: "09/2016 - 06/2022"
      }
    ],
    experience: [
      {
        company: "AMATA CITY LONGTHANH JOINT STOCK COMPANY",
        companyUrl: "https://amatavn.com/",
        logoUrl: "/logo/amata.png",
        role: "IT Staff",
        period: "03/2025 - Present",
        status: "active",
        tags: ["IT Support", "Fortinet Firewall", "Meeting Room Systems", "Asset Management", "Software Development"],
        responsibilities: [
          "Set up new enterprise network infrastructure featuring Fortinet firewalls and modern conference room solutions.",
          "Develop in-house support applications, administer asset management software, and provide end-user technical support."
        ]
      },
      {
        company: "DYM MEDICAL CENTER VIETNAM COMPANY LIMITED",
        companyUrl: "https://dymmedicalcenter.com.vn/",
        logoUrl: "/logo/dym.png",
        role: "IT Technician, Maintenance and Operations",
        period: "03/2023 - 02/2025",
        status: "completed",
        tags: ["Windows Server", "Networking", "Virtualization", "PowerShell Scripting", "Strapi CMS", "IIS Server"],
        responsibilities: [
          "Operated server infrastructure (maintained 99% uptime), set up branch networks, and deployed medical PACS for image archiving.",
          "Authored PowerShell automation scripts for ECG file pre-processing (saving 25 min/day), managed IT assets, and built web/CMS apps."
        ]
      },
      {
        company: "DYM MEDICAL CENTER VIETNAM COMPANY LIMITED",
        companyUrl: "https://dymmedicalcenter.com.vn/",
        logoUrl: "/logo/dym.png",
        role: "IT Collaborator",
        period: "09/2022 - 02/2023",
        status: "completed",
        tags: ["IT Support", "Hardware Deployment"],
        responsibilities: [
          "Installed and configured hardware equipment for mobile health check-up events outside the clinic.",
          "Configured computers connected to ultrasound devices to optimize on-site diagnostic workflows."
        ]
      },
      {
        company: "Freelancer",
        logoUrl: "/logo/freelance.png",
        role: "Freelance Developer",
        period: "09/2020 - 08/2022",
        status: "completed",
        tags: ["Node.js", "React", "Custom Tools"],
        responsibilities: [
          "Developed custom automation tools and provided technical support for system troubleshooting on-demand.",
          "Set up and administered Linux / Windows Server environments to facilitate software deployment testing."
        ]
      },
      {
        company: "TIDI VIETNAM COMPANY LIMITED",
        logoUrl: "/logo/tidi.png",
        role: "Backend Developer",
        period: "03/2020 - 08/2020",
        status: "completed",
        tags: [".NET", "C#", "SQL Server"],
        responsibilities: [
          "Co-designed and developed Backend API services utilizing the .NET framework.",
          "Designed SQL Server databases and optimized query performance for business logic flows."
        ]
      },
      {
        company: "SON VIET DIGITAL SOLUTIONS CONSULTING COMPANY LIMITED (PIXIO STUDIO)",
        companyUrl: "https://pixiostudio.com/",
        logoUrl: "/logo/pixio.png",
        role: "Backend Developer",
        period: "04/2019 - 12/2019",
        status: "completed",
        tags: ["PHP", "Laravel", "MySQL"],
        responsibilities: [
          "Developed and maintained Backend API systems for web projects using PHP Laravel.",
          "Optimized application logic and managed MySQL databases to ensure source code stability."
        ]
      }
    ],
    skills: [
      {
        category: "System Administration & Services",
        items: [
          "Windows Server",
          "Ubuntu / Linux",
          "IIS / Nginx / Caddy",
          "Microsoft 365 / Google Workspace",
          "VoIP PBX Systems",
          "Synology NAS Storage",
          "Access Control (RFID / Fingerprint / FaceID)"
        ]
      },
      {
        category: "Virtualization & Networking",
        items: [
          "Proxmox VE / VMware / Hyper-V",
          "Fortinet / OPNsense / DrayTek Firewalls",
          "Ruckus / Cambium Wi-Fi Systems",
          "Wireguard / Tailscale VPNs"
        ]
      },
      {
        category: "Frontend Development",
        items: [
          "JavaScript / TypeScript",
          "Next.js / React",
          "Tailwind CSS",
          "Shadcn UI"
        ]
      },
      {
        category: "Backend & Databases",
        items: [
          "Node.js (NestJS / Express)",
          "Firebase",
          "GraphQL",
          "PostgreSQL"
        ]
      },
      {
        category: "DevOps & Workflows",
        items: [
          "Docker / Containerization",
          "CI/CD Processes",
          "Vercel Deployment",
          "Git Version Control"
        ]
      },
      {
        category: "Operations & Support",
        items: [
          "Hardware & Software Support (Helpdesk)",
          "CCTV Systems (HikVision / Imou / Ezviz)",
          "Printers & Copiers (Ricoh / Canon / HP / Fujifilm)",
          "Engineering Management / Asset Management / Procurement"
        ]
      }
    ],
    projects: [
      {
        name: "Wastewater Online Monitoring System",
        description: "Developed and deployed the online wastewater monitoring system for AMATA Vietnam, tracking and displaying real-time wastewater metrics.",
        metrics: "Provided visual data measurements, supporting environmental protection efforts and automated operational reports.",
        tags: ["React", "Next.js", "Vercel", "Real-time Monitoring"],
        url: "https://wwtp-amata.vercel.app/"
      },
      {
        name: "Amata Vietnam Corporate Portal",
        description: "Contributed to the development and operations of the internal corporate portal for communication, information search, and internal workflow management at Amata Vietnam.",
        metrics: "Connected cross-departmental data and optimized corporate information sharing processes.",
        tags: ["Web Portal", "Next.js", "Enterprise Software"],
        url: "https://vnportal.amata.com/"
      },
      {
        name: "IT Asset Management via Snipe-IT",
        description: "Deployed and standardized the IT hardware and software asset management system using the open-source Snipe-IT platform.",
        metrics: "Digitalized handout and inventory processes, maintaining 100% IT asset accountability and reducing inventory audit time by 40%.",
        tags: ["Snipe-IT", "Asset Management", "Docker", "ITIL Tech Support"]
      },
      {
        name: "ECG File Processing Automation",
        description: "Authored PowerShell automation scripts to pre-process and standardize ECG file naming conventions before upload to central servers.",
        metrics: "Reduced manual data entry errors by 50% for nurses, saving 25 minutes of operations daily.",
        tags: ["PowerShell", "Automation Scripts", "Data Processing"]
      },
      {
        name: "Headless CMS for Mobile App",
        description: "Built a Strapi-based Headless CMS as the backend news feed and medical article provider for the clinic's mobile applications.",
        metrics: "Enabled instant content updates for mobile applications serving thousands of users.",
        tags: ["Strapi CMS", "Node.js", "API", "Web Hosting"]
      },
      {
        name: "Cancer Screening Landing Page",
        description: "Deployed and maintained marketing landing pages on IIS web servers for breast cancer screening campaigns.",
        metrics: "Marketing Campaign: Breast Cancer Screening 2025",
        tags: ["IIS Server", "HTML/CSS", "Web Hosting"],
        url: "https://tamsoatungthuvu.dymmedicalcenter.com.vn/"
      }
    ]
  },
  ui: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.subtitle": "IT Operations // IT Support // Developer",
    "hero.btn.download": "Download CV (PDF)",
    "hero.btn.contact": "Get in Touch",
    "about.title": "About Me",
    "about.shortTerm": "Short-Term Goals",
    "about.longTerm": "Long-Term Goals",
    "about.personalInfo": "Personal Information",
    "about.dob": "Year of Birth",
    "about.gender": "Gender",
    "about.nationality": "Nationality",
    "about.exp": "Experience",
    "about.years": "years +",
    "about.education": "FORMAL EDUCATION",
    "about.intro1": "Hello! I am Nguyen Anh Tuan, an IT Operations & Support specialist with a Software Engineering degree from the University of Science - VNU-HCM (HCMUS). My background as a Backend Developer provides me with a strong systems engineering and automation mindset, enabling a unique approach to IT infrastructure management.",
    "about.intro2": "With over 4 years of hands-on experience, I focus on corporate network architecture (Fortinet, Ruckus), server administration (Windows Server AD, Linux), and virtualization (Proxmox, VMware). I am passionate about digitalizing asset tracking (such as deploying Snipe-IT) and writing automation scripts (Python, PowerShell, Node.js) to eliminate manual tasks, ensuring systems are continuously available and secure.",
    "exp.title": "Work Experience",
    "exp.active": "Current",
    "exp.archived": "Previous",
    "exp.log_header": "Key Responsibilities:",
    "skills.title": "Skills & Expertise",
    "projects.title": "Featured Projects",
    "projects.btn.view": "View Project",
    "contact.title": "Contact Details",
    "contact.desc": "If you are looking for an IT Specialist / IT Operations / IT Support engineer with programming skills and a focus on automation, feel free to reach out. I am open to new career opportunities!",
    "contact.address": "Address",
    "contact.email": "Email",
    "footer.built": "Built with Next.js (App Router), Tailwind CSS v4, and Framer Motion.",
    "hero.status.online": "IT Operations Status: Online",
    "hero.greeting": "Hello, I am",
    "hero.desc": "IT Specialist with over 4 years of hands-on experience in operating network infrastructure, corporate server systems, and technical support. Passionate about automating operations via Python/PowerShell/Node.js and modern asset management to ensure maximum stability and security.",
    "hero.btn.email": "Contact via Email",
    "hero.btn.pdf": "View PDF Resume",
    "hero.click.status": "Click to view system status",
    "hero.click.avatar": "Click to view profile photo",
    "hero.terminal.uptime": "System Uptime:",
    "hero.terminal.status": "Infrastructure Status:",
    "hero.terminal.active": "Active // Optimal",
    "hero.terminal.skills": "Active Skills:",
    "hero.terminal.security": "Security Layer:",
    "hero.terminal.ping": "Local Ping:",
    "hero.terminal.pingval": "2ms (Bien Hoa)",
    "projects.result": "OUTCOME"
  }
};

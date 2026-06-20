export interface Experience {
  company: string;
  companyUrl?: string;
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
    maritalStatus: string;
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
}

export const cvData: CVData = {
  personalInfo: {
    fullName: "Nguyễn Anh Tuấn",
    role: "IT Specialist / IT Operations & Support",
    experienceYears: 3,
    email: "ntuan.2502@gmail.com",
    location: "Trấn Biên, Đồng Nai, Việt Nam",
    dob: "25/02/1997",
    nationality: "Việt Nam",
    maritalStatus: "Đã kết hôn",
    gender: "Nam",
    avatarUrl: "/avatar.png",
    resumeUrl: "/resume.pdf",
  },
  goals: {
    shortTerm: [
      "Phát triển kỹ năng chuyên môn và quản lý trong lĩnh vực CNTT, đặc biệt là bảo trì, triển khai và vận hành hệ thống phần cứng và phần mềm trong doanh nghiệp.",
      "Đạt được các chứng chỉ nâng cao về mạng, bảo mật hoặc quản lý hệ thống để gia tăng giá trị cho doanh nghiệp.",
    ],
    longTerm: [
      "Trở thành chuyên gia quản lý và tối ưu hóa hệ thống CNTT doanh nghiệp, đảm bảo vận hành ổn định và hiệu quả.",
      "Thăng tiến lên vị trí quản lý cấp cao trong lĩnh vực CNTT, có khả năng điều phối và phát triển đội ngũ, đồng thời đóng góp vào chiến lược công nghệ dài hạn của doanh nghiệp."
    ]
  },
  education: [
    {
      school: "Trường Đại học Khoa học Tự nhiên - ĐHQG TP.HCM (HCMUS)",
      degree: "Cử nhân Công nghệ Thông tin / Kỹ thuật Phần mềm",
      period: "09/2016 - 06/2022"
    }
  ],
  experience: [
    {
      company: "Amata City Long Thanh Joint Stock Company",
      role: "IT Staff",
      period: "03/2025 - Hiện tại",
      status: "active",
      tags: ["IT Support", "Fortinet Firewall", "Conference Room Systems", "Asset Management", "Software Dev"],
      responsibilities: [
        "Thiết lập hạ tầng mạng doanh nghiệp mới với tường lửa Fortinet và giải pháp phòng họp hội nghị (Conference Room) hiện đại.",
        "Phát triển các ứng dụng nội bộ hỗ trợ nghiệp vụ kết hợp quản trị phần mềm quản lý tài sản và hỗ trợ kỹ thuật người dùng cuối."
      ]
    },
    {
      company: "Dym Medical Center Vietnam Company Limited (Japanese Company)",
      companyUrl: "https://dymmedicalcenter.com.vn/",
      role: "IT Technician, Maintenance and Operations",
      period: "03/2023 - 02/2025",
      status: "completed",
      tags: ["Windows Server", "Networking", "Virtualization", "Python Scripting", "Strapi", "IIS"],
      responsibilities: [
        "Vận hành hạ tầng máy chủ (đạt 99% uptime), thiết lập mạng chi nhánh mới và triển khai hệ thống PACS lưu trữ hình ảnh y khoa.",
        "Viết các script Python tự động hóa xử lý file ECG (tiết kiệm 25p/ngày), quản lý tài sản CNTT và xây dựng ứng dụng web/CMS."
      ]
    },
    {
      company: "Dym Medical Center Vietnam Company Limited",
      role: "IT Collaborator",
      period: "09/2022 - 02/2023",
      status: "completed",
      tags: ["IT Support", "Hardware Deployment"],
      responsibilities: [
        "Lắp đặt và bàn giao thiết bị phần cứng phục vụ các sự kiện khám sức khỏe lưu động ngoại viện.",
        "Cấu hình máy tính kết nối với thiết bị siêu âm nhằm tối ưu hóa quá trình đo khám tại chỗ."
      ]
    },
    {
      company: "Tự do (Freelancer)",
      role: "Freelance Developer",
      period: "09/2020 - 09/2022",
      status: "completed",
      tags: ["Node.js", "React", "Custom Tools"],
      responsibilities: [
        "Phát triển công cụ tự động hóa nhỏ và hỗ trợ kỹ thuật xử lý sự cố hệ thống theo yêu cầu.",
        "Thiết lập, quản trị máy chủ Linux / Windows Server phục vụ chạy thử nghiệm phần mềm."
      ]
    },
    {
      company: "TIDI",
      role: "Backend Developer",
      period: "03/2020 - 08/2020",
      status: "completed",
      tags: [".NET", "C#", "SQL Server"],
      responsibilities: [
        "Tham gia thiết kế và xây dựng hệ thống API phía Backend sử dụng nền tảng .NET.",
        "Thiết kế cơ sở dữ liệu SQL Server và tối ưu hóa hiệu năng truy vấn cho các luồng nghiệp vụ."
      ]
    },
    {
      company: "PIXIO STUDIO",
      role: "Backend Developer",
      period: "04/2019 - 12/2019",
      status: "completed",
      tags: ["PHP", "Laravel", "MySQL"],
      responsibilities: [
        "Phát triển và bảo trì hệ thống API cho các dự án ứng dụng web sử dụng PHP Laravel.",
        "Tối ưu hóa logic xử lý và quản trị cơ sở dữ liệu MySQL nhằm duy trì tính ổn định của mã nguồn."
      ]
    }
  ],
  skills: [
    {
      category: "Quản trị Hệ thống & Dịch vụ",
      items: [
        "Windows Server",
        "Ubuntu / Linux",
        "IIS / Nginx / Caddy",
        "Microsoft 365 / Google Workspace",
        "VoIP PBX Systems",
        "Synology NAS",
        "Access Control (RFID / Fingerprint / FaceID)"
      ]
    },
    {
      category: "Ảo hóa & Hạ tầng Mạng",
      items: [
        "Proxmox VE / VMware / Hyper-V",
        "Fortinet / OPNsense / DrayTek",
        "Ruckus / Cambium Wi-Fi",
        "Wireguard / Tailscale VPN"
      ]
    },
    {
      category: "Lập trình Frontend",
      items: [
        "JavaScript / TypeScript",
        "Next.js / React",
        "Tailwind CSS",
        "Shadcn UI"
      ]
    },
    {
      category: "Lập trình Backend & Database",
      items: [
        "Node.js (NestJS / Express)",
        "Firebase",
        "GraphQL",
        "PostgreSQL"
      ]
    },
    {
      category: "DevOps & Quy trình",
      items: [
        "Docker / Containerization",
        "CI/CD Processes",
        "Vercel Deployment",
        "Git Version Control"
      ]
    },
    {
      category: "Vận hành & Hỗ trợ Kỹ thuật",
      items: [
        "Helpdesk / Support hardware & software",
        "CCTV (HikVision / Imou / Ezviz)",
        "Printers (Ricoh / Canon / HP / Fujifilm)",
        "Engineering Management / Quản lý tài sản / Mua sắm vật tư"
      ]
    }
  ]
};

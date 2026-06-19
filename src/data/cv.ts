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
    phone: string;
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
  languages: {
    language: string;
    level: string;
    percentage: number;
  }[];
  references: {
    name: string;
    role: string;
    company: string;
    email: string;
    phone: string;
  }[];
}

export const cvData: CVData = {
  personalInfo: {
    fullName: "Nguyễn Anh Tuấn",
    role: "IT Specialist / IT Operations & Support",
    experienceYears: 3,
    phone: "+84 868 608 700",
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
        "Thiết lập và cấu hình hệ thống mạng doanh nghiệp mới tích hợp tường lửa Fortinet bảo mật cao.",
        "Triển khai và vận hành giải pháp trang thiết bị cho hệ thống các phòng họp hội nghị (Conference Room) hiện đại.",
        "Quản trị và tối ưu quy trình vận hành phần mềm quản lý tài sản thiết bị CNTT của toàn doanh nghiệp.",
        "Tham gia thiết kế, phát triển và bảo trì các ứng dụng/phần mềm nội bộ phục vụ nhu cầu nghiệp vụ của các phòng ban.",
        "Duy trì hoạt động ổn định của hệ thống CNTT và cung cấp dịch vụ hỗ trợ kỹ thuật người dùng cuối (Helpdesk) chất lượng cao."
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
        "Quản trị hạ tầng máy chủ, mạng nội bộ và hệ thống CCTV; duy trì tỷ lệ hoạt động (uptime) 99% trong giờ làm việc và thiết lập hệ thống UPS dự phòng.",
        "Thiết lập các giải pháp CNTT lưu động (máy tính, máy chủ, máy siêu âm) phục vụ khám sức khỏe ngoại viện và đồng bộ dữ liệu thời gian thực giữa onsite/insite.",
        "Thiết lập mạng và phần cứng máy tính cho chi nhánh mới tại Quận 7 (10/2023) và dự án mở rộng chi nhánh Quận 1 (08/2024) giúp tối ưu thời gian triển khai.",
        "Triển khai phần mềm PACS lưu trữ hình ảnh y khoa cho 3 chi nhánh (Q1, Q7, HN), tối ưu hóa thời gian truy xuất hình ảnh 70% và giảm chi phí in phim.",
        "Quản lý cấp phát và kiểm kê tài sản IT (60 máy tính, 70 tài khoản Google Workspace, VoIP PBX) kết hợp quản trị Active Directory.",
        "Viết các script Python tự động tiền xử lý và chuẩn hóa tên file điện tâm đồ (ECG), tiết kiệm 25 phút vận hành mỗi ngày và giảm lỗi nhập liệu.",
        "Xây dựng backend Strapi Headless CMS hỗ trợ ứng dụng di động và triển khai các landing page chạy quảng cáo trên máy chủ web IIS."
      ]
    },
    {
      company: "Dym Medical Center Vietnam Company Limited",
      role: "IT Collaborator",
      period: "09/2022 - 02/2023",
      status: "completed",
      tags: ["IT Support", "Hardware Deployment"],
      responsibilities: [
        "Hỗ trợ vận chuyển, lắp đặt phần cứng phục vụ các sự kiện khám sức khỏe lưu động ngoại viện.",
        "Thiết lập cấu hình máy tính kết nối trực tiếp với thiết bị siêu âm để tối ưu hóa quá trình đo khám tại chỗ."
      ]
    },
    {
      company: "Tự do (Freelancer)",
      role: "Freelance Developer",
      period: "09/2020 - 09/2022",
      status: "completed",
      tags: ["Node.js", "React", "Custom Tools"],
      responsibilities: [
        "Phát triển các công cụ tự động hóa nhỏ và hỗ trợ kỹ thuật xử lý sự cố hệ thống theo yêu cầu của khách hàng cá nhân.",
        "Thiết lập và quản trị các máy chủ chạy môi trường Linux / Windows Server cá nhân phục vụ mục đích chạy thử nghiệm phần mềm."
      ]
    },
    {
      company: "TIDI",
      role: "Backend Developer",
      period: "03/2020 - 08/2020",
      status: "completed",
      tags: [".NET", "C#", "SQL Server"],
      responsibilities: [
        "Tham gia thiết kế và xây dựng các dịch vụ API phía Backend sử dụng nền tảng .NET.",
        "Thiết kế cấu trúc cơ sở dữ liệu SQL Server, tối ưu hóa hiệu năng truy vấn phục vụ các luồng dữ liệu nghiệp vụ chính."
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
        "Tối ưu hóa logic xử lý nghiệp vụ của phần mềm và làm việc với hệ cơ sở dữ liệu MySQL nhằm duy trì tính ổn định của mã nguồn."
      ]
    }
  ],
  skills: [
    {
      category: "Quản trị Hệ thống & Máy chủ",
      items: ["Windows Server AD", "File Sharing", "IIS Web Server", "Google Workspace Admin", "VoIP PBX System", "Synology NAS", "Access Control (RFID/Fingerprint/FaceID)", "Ubuntu/Linux"]
    },
    {
      category: "Ảo hóa & Cloud",
      items: ["Hyper-V", "Proxmox VE", "VMware vSphere", "AWS (EC2, S3)"]
    },
    {
      category: "Mạng & Bảo mật (Networking)",
      items: ["Fortinet Firewall", "Barracuda", "Ruckus / Cambium Wifi", "TP-Link / DrayTek", "VPN Site-to-Site", "VPN Wireguard/Tailscale"]
    },
    {
      category: "Lập trình & Tự động hóa",
      items: ["Python Scripting", "JavaScript / TypeScript", "Node.js (Express)", "React / Next.js", "PostgreSQL"]
    },
    {
      category: "Vận hành & Hỗ trợ Kỹ thuật",
      items: ["Helpdesk / End-user Support", "Hardware Maintenance (PC/UPS)", "CCTV Systems (Hikvision, Imou)", "Printers & Copiers (Ricoh, FujiXerox, Canon)"]
    },
    {
      category: "Kỹ năng mềm",
      items: ["Quản lý thời gian", "Làm việc nhóm", "Giải quyết sự cố (Troubleshooting)", "Giao tiếp & Tư duy dịch vụ (Customer Support)"]
    }
  ],
  languages: [
    {
      language: "Tiếng Việt",
      level: "Bản xứ",
      percentage: 100
    },
    {
      language: "Tiếng Anh",
      level: "Giao tiếp cơ bản / Đọc hiểu tài liệu kỹ thuật",
      percentage: 60
    }
  ],
  references: [
    {
      name: "Tạ Phi Long",
      role: "IT Leader",
      company: "DYM Medical Center Vietnam",
      email: "long.ta@dymmedicalcenter.com.vn",
      phone: "+84 964 109 375"
    }
  ]
};

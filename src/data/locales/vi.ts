import { CVData } from "../cv";

export interface LocaleData {
  cvData: CVData;
  ui: Record<string, string>;
}

export const vi: LocaleData = {
  cvData: {
    personalInfo: {
      fullName: "Nguyễn Anh Tuấn",
      role: "Chuyên viên IT / Vận hành & Hỗ trợ Kỹ thuật",
      experienceYears: 4,
      email: "ntuan.2502@gmail.com",
      location: "Trấn Biên, Đồng Nai, Việt Nam",
      dob: "1997",
      nationality: "Việt Nam",
      gender: "Nam",
      avatarUrl: "/avatar.png",
      resumeUrl: "/resume.pdf",
    },
    goals: {
      shortTerm: [
        "Nâng cao kỹ năng lập trình và làm chủ các công cụ tự động hóa hệ thống (Python, PowerShell, Node.js) để phục vụ cho công tác tự động hóa quản trị và giám sát hạ tầng.",
        "Nâng cao quy trình kiểm soát tài sản và hỗ trợ kỹ thuật bằng cách chuẩn hóa công cụ quản trị (như Snipe-IT) và đạt các chứng chỉ chuyên nghiệp về mạng/bảo mật (CCNP, Fortinet NSE)."
      ],
      longTerm: [
        "Phát triển thành một Trưởng nhóm hạ tầng IT (IT Infrastructure Lead) có năng lực quy hoạch hạ tầng CNTT toàn diện cho các tổ chức quy mô lớn hoặc khu công nghiệp.",
        "Xây dựng và hoàn thiện tư duy quy hoạch hệ thống, hướng tới khả năng thiết kế các kiến trúc hạ tầng có độ tin cậy cao, tích hợp cảnh báo sự cố chủ động và tự động phục hồi."
      ]
    },
    education: [
      {
        school: "Trường Đại học Khoa học Tự nhiên - ĐHQG TP.HCM (HCMUS)",
        degree: "Cử nhân Công nghệ Thông tin / Chuyên ngành Kỹ thuật Phần mềm",
        period: "09/2016 - 06/2022"
      }
    ],
    experience: [
      {
        company: "CÔNG TY CỔ PHẦN ĐÔ THỊ AMATA LONG THÀNH",
        companyUrl: "https://amatavn.com/vi/",
        logoUrl: "/logo/amata.png",
        role: "Nhân viên IT",
        period: "03/2025 - Hiện tại",
        status: "active",
        tags: ["Hỗ trợ IT", "Tường lửa Fortinet", "Hệ thống phòng họp", "Quản lý tài sản", "Phát triển phần mềm"],
        responsibilities: [
          "Thiết lập hạ tầng mạng doanh nghiệp mới với tường lửa Fortinet và các giải pháp phòng họp hội nghị hiện đại.",
          "Phát triển các ứng dụng nội bộ hỗ trợ nghiệp vụ, quản trị phần mềm quản lý tài sản và hỗ trợ kỹ thuật người dùng cuối."
        ]
      },
      {
        company: "CÔNG TY TNHH DYM MEDICAL CENTER VIỆT NAM",
        companyUrl: "https://dymmedicalcenter.com.vn/",
        logoUrl: "/logo/dym.png",
        role: "Kỹ thuật viên IT, Bảo trì và Vận hành",
        period: "03/2023 - 02/2025",
        status: "completed",
        tags: ["Windows Server", "Mạng máy tính", "Ảo hóa", "Lập trình PowerShell", "Strapi", "IIS"],
        responsibilities: [
          "Vận hành hạ tầng máy chủ (đạt tỷ lệ hoạt động liên tục 99%), thiết lập mạng chi nhánh mới và triển khai hệ thống lưu trữ hình ảnh y khoa PACS.",
          "Viết các kịch bản tự động hóa bằng PowerShell để xử lý tệp tin ECG (tiết kiệm 25 phút mỗi ngày), quản lý tài sản CNTT và xây dựng ứng dụng web/CMS."
        ]
      },
      {
        company: "CÔNG TY TNHH DYM MEDICAL CENTER VIỆT NAM",
        companyUrl: "https://dymmedicalcenter.com.vn/",
        logoUrl: "/logo/dym.png",
        role: "Cộng tác viên IT",
        period: "09/2022 - 02/2023",
        status: "completed",
        tags: ["Hỗ trợ IT", "Triển khai phần cứng"],
        responsibilities: [
          "Lắp đặt và bàn giao thiết bị phần cứng phục vụ các sự kiện khám sức khỏe lưu động ngoài phòng khám.",
          "Cấu hình máy tính kết nối với thiết bị siêu âm nhằm tối ưu hóa quá trình đo khám tại chỗ."
        ]
      },
      {
        company: "Tự do",
        logoUrl: "/logo/freelance.png",
        role: "Lập trình viên tự do",
        period: "09/2020 - 08/2022",
        status: "completed",
        tags: ["Node.js", "React", "Công cụ tùy chỉnh"],
        responsibilities: [
          "Phát triển công cụ tự động hóa quy mô nhỏ và hỗ trợ kỹ thuật xử lý sự cố hệ thống theo yêu cầu.",
          "Thiết lập, quản trị máy chủ Linux / Windows Server phục vụ chạy thử nghiệm và kiểm thử phần mềm."
        ]
      },
      {
        company: "CÔNG TY TNHH TIDI VIETNAM",
        logoUrl: "/logo/tidi.png",
        role: "Lập trình viên Backend",
        period: "03/2020 - 08/2020",
        status: "completed",
        tags: [".NET", "C#", "SQL Server"],
        responsibilities: [
          "Tham gia thiết kế và xây dựng hệ thống API phía Backend sử dụng nền tảng .NET.",
          "Thiết kế cơ sở dữ liệu SQL Server và tối ưu hóa hiệu năng truy vấn cho các luồng nghiệp vụ."
        ]
      },
      {
        company: "CÔNG TY TNHH TƯ VẤN GIẢI PHÁP SỐ SƠN VIỆT (PIXIO STUDIO)",
        companyUrl: "https://pixiostudio.com/",
        logoUrl: "/logo/pixio.png",
        role: "Lập trình viên Backend",
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
          "Tổng đài VoIP PBX",
          "Thiết bị lưu trữ Synology NAS",
          "Kiểm soát ra vào (RFID / Vân tay / FaceID)"
        ]
      },
      {
        category: "Ảo hóa & Hạ tầng Mạng",
        items: [
          "Proxmox VE / VMware / Hyper-V",
          "Tường lửa Fortinet / OPNsense / DrayTek",
          "Hệ thống Wi-Fi Ruckus / Cambium",
          "Mạng riêng ảo Wireguard / Tailscale VPN"
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
          "Docker / Container hóa",
          "Quy trình CI/CD",
          "Triển khai Vercel",
          "Quản lý mã nguồn Git"
        ]
      },
      {
        category: "Vận hành & Hỗ trợ Kỹ thuật",
        items: [
          "Hỗ trợ kỹ thuật phần cứng & phần mềm (Helpdesk)",
          "Hệ thống camera giám sát (HikVision / Imou / Ezviz)",
          "Hệ thống máy in (Ricoh / Canon / HP / Fujifilm)",
          "Quản lý kỹ thuật / Quản lý tài sản / Mua sắm vật tư"
        ]
      }
    ],
    projects: [
      {
        name: "Hệ thống Quan trắc Nước thải Online",
        description: "Phát triển và triển khai hệ thống quan trắc nước thải trực tuyến cho AMATA Vietnam, theo dõi và hiển thị chỉ số nước thải thời gian thực.",
        metrics: "Cung cấp số liệu đo lường trực quan, hỗ trợ công tác bảo vệ môi trường và báo cáo vận hành tự động.",
        tags: ["React", "Next.js", "Vercel", "Giám sát thời gian thực"],
        url: "https://wwtp-amata.vercel.app/"
      },
      {
        name: "Cổng Thông tin Nội bộ Amata Vietnam",
        description: "Tham gia phát triển và vận hành Cổng thông tin nội bộ (Portal) phục vụ việc truyền thông, tra cứu thông tin và quản trị quy trình nội bộ của Amata Vietnam.",
        metrics: "Kết nối dữ liệu đa phòng ban, tối ưu hóa quy trình chia sẻ thông tin doanh nghiệp.",
        tags: ["Cổng thông tin Web", "Next.js", "Phần mềm doanh nghiệp"],
        url: "https://vnportal.amata.com/"
      },
      {
        name: "Quản lý Tài sản CNTT qua Snipe-IT",
        description: "Triển khai và chuẩn hóa hệ thống quản lý tài sản phần cứng, phần mềm doanh nghiệp sử dụng nền tảng mã nguồn mở Snipe-IT.",
        metrics: "Số hóa quy trình bàn giao, kiểm kê, kiểm soát tài sản CNTT chính xác 100% và giảm 40% thời gian kiểm kê định kỳ.",
        tags: ["Snipe-IT", "Quản lý tài sản", "Docker", "Hỗ trợ kỹ thuật ITIL"]
      },
      {
        name: "Tự động hóa Xử lý File Điện tâm đồ (ECG)",
        description: "Phát triển các kịch bản tự động hóa bằng PowerShell để tiền xử lý, chuẩn hóa định dạng tên tệp điện tâm đồ theo quy chuẩn trước khi tải lên máy chủ lưu trữ trung tâm.",
        metrics: "Giảm 50% lỗi nhập liệu thủ công của điều dưỡng, tiết kiệm 25 phút vận hành mỗi ngày.",
        tags: ["PowerShell", "Kịch bản tự động hóa", "Xử lý dữ liệu"]
      },
      {
        name: "Hệ thống Headless CMS cho Thiết bị Di động",
        description: "Xây dựng hệ thống quản trị nội dung CMS (Strapi) làm backend cấp dữ liệu tin tức cho ứng dụng di động phục vụ phòng khám.",
        metrics: "Hỗ trợ cập nhật nội dung tức thời cho ứng dụng di động với hàng ngàn người dùng.",
        tags: ["Strapi CMS", "Node.js", "API", "Web Hosting"]
      },
      {
        name: "Trang Đích (Landing Page) Tầm Soát Ung Thư",
        description: "Triển khai và vận hành các trang đích quảng cáo cho chiến dịch tầm soát ung thư vú trên máy chủ web IIS.",
        metrics: "Chiến dịch Marketing: Tầm soát ung thư vú 2025",
        tags: ["IIS Server", "HTML/CSS", "Web Hosting"],
        url: "https://tamsoatungthuvu.dymmedicalcenter.com.vn/"
      }
    ]
  },
  ui: {
    "nav.about": "Giới thiệu",
    "nav.experience": "Kinh nghiệm",
    "nav.skills": "Kỹ năng",
    "nav.projects": "Dự án",
    "nav.contact": "Liên hệ",
    "hero.subtitle": "Vận hành IT // Hỗ trợ kỹ thuật // Lập trình viên",
    "hero.btn.download": "Tải CV (PDF)",
    "hero.btn.contact": "Liên hệ với mình",
    "about.title": "Giới thiệu bản thân",
    "about.shortTerm": "Mục tiêu ngắn hạn",
    "about.longTerm": "Mục tiêu dài hạn",
    "about.personalInfo": "Thông tin cá nhân",
    "about.dob": "Năm sinh",
    "about.gender": "Giới tính",
    "about.nationality": "Quốc tịch",
    "about.exp": "Kinh nghiệm",
    "about.years": "năm +",
    "about.education": "HỌC VẤN CHÍNH QUY",
    "about.intro1": "Xin chào! Mình là Nguyễn Anh Tuấn, chuyên viên IT Operations & Support tốt nghiệp chuyên ngành Kỹ thuật Phần mềm từ Trường Đại học Khoa học Tự nhiên TP.HCM (HCMUS). Xuất phát điểm từ lập trình viên Backend giúp mình sở hữu tư duy hệ thống và khả năng lập trình tự động hóa mạnh mẽ, tạo nên cách tiếp cận khác biệt trong công việc vận hành CNTT.",
    "about.intro2": "Với hơn 4 năm kinh nghiệm, mình tập trung vào thiết kế hạ tầng mạng doanh nghiệp (Fortinet, Ruckus), quản trị máy chủ (Windows Server AD, Linux) và ảo hóa (Proxmox, VMware). Mình luôn hướng tới việc số hóa quy trình quản trị tài sản (như triển khai Snipe-IT) và viết các kịch bản tự động hóa (Python, PowerShell, Node.js) để cắt giảm tác vụ thủ công, đảm bảo hệ thống doanh nghiệp hoạt động liên tục và an toàn.",
    "exp.title": "Kinh nghiệm làm việc",
    "exp.active": "Đang làm việc",
    "exp.archived": "Công việc trước đây",
    "exp.log_header": "Nhiệm vụ chính:",
    "skills.title": "Kỹ năng & Chuyên môn",
    "projects.title": "Dự án tiêu biểu",
    "projects.btn.view": "Xem dự án",
    "contact.title": "Thông tin liên hệ",
    "contact.desc": "Nếu bạn đang tìm kiếm một nhân sự vận hành hệ thống IT (IT Operations), hỗ trợ kỹ thuật (IT Support) có tư duy lập trình và tối ưu hóa quy trình tự động, hãy kết nối với mình qua các kênh dưới đây. Mình luôn sẵn sàng cho những cơ hội hợp tác mới!",
    "contact.address": "Địa chỉ",
    "contact.email": "Email",
    "footer.built": "Được xây dựng bằng Next.js (App Router), Tailwind CSS v4 và Framer Motion.",
    "hero.status.online": "Trạng thái IT: Đang hoạt động",
    "hero.greeting": "Xin chào, mình là",
    "hero.desc": "Chuyên viên IT với hơn 4 năm kinh nghiệm thực tế về vận hành hạ tầng mạng, hệ thống máy chủ doanh nghiệp và hỗ trợ kỹ thuật. Đam mê thiết lập hệ thống tự động bằng Python/PowerShell/Node.js và quản trị tài sản chuyên nghiệp để đảm bảo tính ổn định và bảo mật tối đa cho doanh nghiệp.",
    "hero.btn.email": "Liên Hệ Qua Email",
    "hero.btn.pdf": "Xem Bản PDF",
    "hero.click.status": "Click để xem trạng thái hệ thống",
    "hero.click.avatar": "Click để xem ảnh hồ sơ",
    "hero.terminal.uptime": "Thời gian hoạt động:",
    "hero.terminal.status": "Trạng thái hạ tầng:",
    "hero.terminal.active": "Đang hoạt động // Tối ưu",
    "hero.terminal.skills": "Kỹ năng đang chạy:",
    "hero.terminal.security": "Lớp bảo mật mạng:",
    "hero.terminal.ping": "Độ trễ cục bộ:",
    "hero.terminal.pingval": "2ms (Biên Hòa)",
    "projects.result": "KẾT QUẢ"
  }
};

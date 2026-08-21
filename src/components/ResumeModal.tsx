import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Copy, 
  Check, 
  Printer, 
  ShieldCheck, 
  GraduationCap, 
  BookOpen, 
  Award, 
  Mail, 
  Linkedin, 
  Github, 
  Instagram,
  Terminal,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Lock,
  Briefcase,
  MapPin,
  Building2,
  FileText,
  CheckCircle2
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'OVERVIEW' | 'EXPERIENCE' | 'PROJECTS' | 'SKILLS' | 'ACADEMICS';

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('OVERVIEW');
  const [projectTierFilter, setProjectTierFilter] = useState<'ALL' | 'BASIC' | 'INTERMEDIATE' | 'EXPERT'>('ALL');

  if (!isOpen) return null;

  const atsResumeText = `=============================================================
METTU SABARISH — CURRICULUM VITAE
Cyber Security Engineer | Full-Stack Developer | AI/ML & Cloud
=============================================================

CONTACT & PROFILES
• Email: mettusabarish96@gmail.com
• LinkedIn: https://www.linkedin.com/in/sabarish-mettu/
• GitHub: https://github.com/sabarishmettu
• Instagram: https://www.instagram.com/x.sabarish_1st?igsi=anIzZzR1ZWJlcDV4
• Portfolio: https://ais-pre-w5o7qdytad6dobmzjyfkss-871153359608.asia-southeast1.run.app
• Location: Amaravati / Andhra Pradesh, India

PROFESSIONAL SUMMARY
Cyber Security Graduate (Class of 2024) from SRM University-AP with deep hands-on expertise in defensive cybersecurity, penetration testing methodologies, cryptographic implementations, and full-stack software development. Author of published research on Nanoscale Communication (Paper ID: 1570959583) at the International Conference on Applied Soft Computing and Communication Networks (ACN'23, Bengaluru). Proven track record through 11 technical internships across AI/ML, cloud architecture, cybersecurity, and enterprise systems.

EDUCATION
Bachelor of Technology (B.Tech) in Computer Science & Engineering
Specialization: Cyber Security
Institution: SRM University–AP, Amaravati
Graduation Year: 2024
Key Coursework: Cryptography & Network Security, Penetration Testing & Vulnerability Assessment, Operating Systems Security, Data Structures & Algorithms, Cloud Infrastructure Security, Database Management Systems.

RESEARCH & PUBLICATION
ACN'23 · Bengaluru
The International Conference on Applied Soft Computing and Communication Networks (ACN'23)
Published Research Paper:
Paper ID: 1570959583
"1570959583: Characterization of Heart-Centric Nanoscale Communication at Terahertz and Optical Bands"
SRM University–AP · Dec 18–20, 2023 · Bengaluru

PRACTICAL INTERNSHIPS & PROFESSIONAL EXPERIENCE (11 PROGRAMS)
1. YBI Foundation — AIML Fundamental & Python Fundamental Internship (AI & Python Foundations)
2. _VOIS — Virtual Micro-Internship: Image Steganography (Cybersecurity, Cloud & AI)
3. SmartKnower — Artificial Intelligence Internship (AI & Deep Learning)
4. Salesforce — Salesforce Developer Virtual Internship (Enterprise Cloud Architecture)
5. SRM University–AP — Academic Research Internship (ACN'23 Nanoscale Telecommunications)
6. JPMorgan Chase & Co. — Cybersecurity & Investment Banking Virtual Experience (Cyber Security & FinTech)
7. Code Clause — Web Development Internship (Full-Stack Software Development)
8. British Airways — Data Science Virtual Experience Programme (Data Science & NLP)
9. Mosaique Pvt Ltd — IoT Systems Internship (Internet of Things & Embedded Telemetry)
10. Deloitte — Data Analytics Internship (Enterprise Business Intelligence)
11. PwC Switzerland — Power BI Virtual Internship (Data Visualization & BI)

FEATURED TECHNICAL PROJECTS (10 REPOSITORIES)
1. USB-Rubber Ducky (Physical Attack HID) — ATtiny85 BadUSB scripts for automated Wi-Fi password harvesting & PIN bypass.
2. Image-Steganography — LSB manipulation spatial steganography embedding secret byte streams into lossless PNG/BMP carriers.
3. AutoTyper & Desktop Automation — Keystroke injection with stochastic micro-delay jitter mimicking human typing rhythms (350+ WPM).
4. Flappy-Bird Canvas Arcade — 60 FPS delta-time physics arcade with AABB collision and procedural obstacle engine.
5. OWASP-Sentinel Web Scanner — Automated DAST auditor evaluating endpoints against OWASP Top 10 vulnerabilities.
6. Aegis SIEM Threat Analyzer — High-throughput log ingestion dashboard parsing server access streams and PCAP dumps.
7. Micro-Sniffer IoT Packet Auditor — Raw socket packet analyzer capturing WLAN/MQTT telemetry for unencrypted credentials.
8. Secure Data Transmission — Dual-layer quantum-resilient (2,2) Visual Cryptography + spatial LSB concealment.
9. Zero-Trust Access Controller — Identity-aware proxy with continuous device posture checks, dynamic RBAC, and JWT lifecycles.
10. Firmware-Shield Binary Guard — Embedded IoT firmware defense with SHA-256 HMAC digest chains and ECDSA handshake.

CORE TECHNICAL SKILLS
• Cyber Security & Defense: Ethical Hacking, Cryptography & PKI, Steganography, Zero-Trust Architecture, Penetration Testing, OWASP Top 10, Network Vulnerability Assessment, Threat Analysis
• Development & Frameworks: React, TypeScript, JavaScript, Python, C++, HTML5, Tailwind CSS, Node.js, Express, REST APIs
• Cloud, Systems & Tools: AWS (EC2, S3, IAM), Linux / Kali Linux, Docker, Git & GitHub, Wireshark, Burp Suite, Nmap, Metasploit, VS Code

CERTIFICATIONS & ACCREDITATIONS
• Cisco Certified Network Security & Cybersecurity Essentials
• AWS Solutions Architecture Fundamentals
• SkillUp Certified Ethical Hacker & Security Practitioner
• Python & Advanced Software Development Certifications
=============================================================`;

  const internshipsList = [
    {
      company: 'YBI Foundation',
      role: 'AIML Fundamental & Python Fundamental Internship',
      domain: 'AI & Python Foundations',
      badge: 'AIML & Python',
      tag: 'TECH / AI',
      description: 'Completed comprehensive practical training in AI/ML fundamentals, predictive modeling pipelines, and core Python algorithm design.',
      date: '2023',
      location: 'Virtual / Remote'
    },
    {
      company: '_VOIS',
      role: 'Virtual Micro-Internship: Image Steganography',
      domain: 'Cybersecurity, Cloud & AI',
      badge: 'Steganography / AI',
      tag: 'CYBERSECURITY',
      description: 'Under _VOIS for Tech University Engagement Program Innovation Marathon 2022: Developed project on Image Steganography, Cloud Computing Basics, and AI/ML.',
      date: '2022',
      location: 'Corporate Virtual'
    },
    {
      company: 'SmartKnower',
      role: 'Artificial Intelligence Internship',
      domain: 'AI & Deep Learning',
      badge: 'Deep Learning',
      tag: 'TECH / AI',
      description: 'Engineered neural network architectures, computer vision pipelines, and deep learning models for classification tasks.',
      date: '2023',
      location: 'Virtual'
    },
    {
      company: 'Salesforce',
      role: 'Salesforce Developer Virtual Internship',
      domain: 'Enterprise Cloud Architecture',
      badge: 'Apex & Automation',
      tag: 'CLOUD / SAAS',
      description: 'Engineered automated cloud business logic, custom Apex triggers, SOQL queries, and schema architectures on Salesforce Cloud.',
      date: '2023',
      location: 'Salesforce Developer Program'
    },
    {
      company: 'SRM University–AP',
      role: 'Academic Research Internship (ACN\'23)',
      domain: 'Nanoscale Telecommunications',
      badge: 'Paper 1570959583',
      tag: 'RESEARCH',
      description: 'Presented research at The International Conference on Applied Soft Computing and Communication Networks (ACN\'23, Bengaluru): "Characterization of Heart-Centric Nanoscale Communication at Terahertz and Optical Bands" (Paper ID: 1570959583).',
      date: '2023',
      location: 'Amaravati / Bengaluru'
    },
    {
      company: 'JPMorgan Chase & Co.',
      role: 'Cybersecurity & Investment Banking Virtual Experience',
      domain: 'Cyber Security & FinTech',
      badge: 'Financial Systems Sec',
      tag: 'SECURITY / FINTECH',
      description: 'Completed both the Investment Banking Virtual Experience and Cybersecurity Virtual Experience Program, analyzing enterprise threats, cryptography, and zero-trust controls.',
      date: '2023',
      location: 'Forage Virtual Experience'
    },
    {
      company: 'Code Clause',
      role: 'Web Development Internship',
      domain: 'Full-Stack Software',
      badge: 'Full-Stack Web',
      tag: 'DEVELOPMENT',
      description: 'Constructed responsive, interactive web applications, secure REST APIs, and modern frontend client components.',
      date: '2023',
      location: 'Remote'
    },
    {
      company: 'British Airways',
      role: 'Data Science Virtual Experience Programme',
      domain: 'Data Science & NLP',
      badge: 'Customer Analytics',
      tag: 'DATA SCIENCE',
      description: 'Performed customer predictive modeling, natural language sentiment processing on flight reviews, and end-to-end data pipelines.',
      date: '2023',
      location: 'Forage Experience'
    },
    {
      company: 'Mosaique Pvt Ltd',
      role: 'IoT Systems Internship',
      domain: 'Internet of Things & Embedded Telemetry',
      badge: 'Sensors & Hardware',
      tag: 'IOT / EMBEDDED',
      description: 'Developed embedded IoT telemetry streams, microcontroller sensor integration, and MQTT lightweight network protocols.',
      date: '2022 - 2023',
      location: 'Technical Internship'
    },
    {
      company: 'Deloitte',
      role: 'Data Analytics Internship',
      domain: 'Business Intelligence',
      badge: 'Enterprise Analytics',
      tag: 'ANALYTICS',
      description: 'Conducted large-scale enterprise data wrangling, statistical analysis, and dashboard synthesis to produce actionable executive business intelligence.',
      date: '2023',
      location: 'Corporate Virtual'
    },
    {
      company: 'PwC Switzerland',
      role: 'Power BI Virtual Internship',
      domain: 'Data Visualization & BI',
      badge: 'Power BI DAX',
      tag: 'BUSINESS INTEL',
      description: 'Engineered executive dashboards, DAX KPI calculators, and risk assessment visualizations in Power BI for corporate decision-making.',
      date: '2023',
      location: 'Virtual Experience'
    },
  ];

  const projectsList = [
    {
      id: 'rubber-ducky',
      title: 'USB-Rubber Ducky (Physical Attack HID)',
      tier: 'BASIC' as const,
      category: 'PHYSICAL / BADUSB',
      badgeColor: 'border-blue-500/40 bg-blue-500/15 text-blue-400',
      description: 'Custom Digispark ATtiny85 BadUSB scripts for automated Wi-Fi password harvesting, instant file exfiltration (.env, .pdf), and Android PIN brute-force simulations with OTG bypass.',
      tech: ['DuckyScript', 'ATtiny85', 'C++', 'PowerShell', 'Bash'],
      highlights: 'Automated 5s injection exfiltration & keystroke injection payload',
    },
    {
      id: 'image-stego',
      title: 'Image-Steganography Carrier Engine',
      tier: 'BASIC' as const,
      category: 'CRYPTO / STEGO',
      badgeColor: 'border-blue-500/40 bg-blue-500/15 text-blue-400',
      description: 'Spatial-domain digital steganography application embedding secret byte streams into lossless PNG/BMP carriers via LSB manipulation with zero perceptual distortion (PSNR > 45dB).',
      tech: ['Python', 'OpenCV', 'NumPy', 'Cryptography'],
      highlights: 'Lossless bit-carrier injection with zero visual artifacting',
    },
    {
      id: 'autotyper',
      title: 'AutoTyper & Macro Keystroke Engine',
      tier: 'BASIC' as const,
      category: 'DESKTOP UTIL / AUTOMATION',
      badgeColor: 'border-blue-500/40 bg-blue-500/15 text-blue-400',
      description: 'High-speed keystroke injection tool with stochastic micro-delay jitter mimicking human typing rhythms (up to 350+ WPM) and customizable global macro hotkeys.',
      tech: ['Python', 'PyAutoGUI', 'pynput', 'Tkinter'],
      highlights: 'Sub-millisecond jitter variance to bypass anti-automation detection',
    },
    {
      id: 'flappy-bird',
      title: 'Flappy-Bird Physics Arcade Engine',
      tier: 'BASIC' as const,
      category: 'GAME ENGINE / MATH',
      badgeColor: 'border-blue-500/40 bg-blue-500/15 text-blue-400',
      description: 'Custom 60 FPS physics arcade game engine with delta-time gravity kinematics, AABB hitbox collision algorithms, and procedural obstacle generation.',
      tech: ['JavaScript', 'HTML5 Canvas API', 'Web Audio API'],
      highlights: 'Locked 60 FPS delta-time physics with zero external game frameworks',
    },
    {
      id: 'owasp-sentinel',
      title: 'OWASP-Sentinel Web Vulnerability Scanner',
      tier: 'INTERMEDIATE' as const,
      category: 'DAST / WEB AUDIT',
      badgeColor: 'border-amber-500/40 bg-amber-500/15 text-amber-400',
      description: 'Automated audit framework verifying target web endpoints against OWASP Top 10 vulnerabilities including SQL injection, XSS vectors, and header misconfigurations.',
      tech: ['Python', 'Burp Suite API', 'Requests', 'Linux'],
      highlights: 'Dynamic payload generation across 150+ common test vectors',
    },
    {
      id: 'aegis-siem',
      title: 'Aegis SIEM Threat Telemetry Analyzer',
      tier: 'INTERMEDIATE' as const,
      category: 'SOC / LOG INGESTION',
      badgeColor: 'border-amber-500/40 bg-amber-500/15 text-amber-400',
      description: 'Real-time log ingestion dashboard parsing server request access logs and network PCAP dumps to flag anomalous scanning, brute force, and known IOC patterns.',
      tech: ['React', 'TypeScript', 'Node.js', 'Wireshark'],
      highlights: 'High-throughput access stream parsing with IOC correlation',
    },
    {
      id: 'micro-sniffer',
      title: 'Micro-Sniffer: IoT Network Packet Auditor',
      tier: 'INTERMEDIATE' as const,
      category: 'NETWORK / MITM',
      badgeColor: 'border-amber-500/40 bg-amber-500/15 text-amber-400',
      description: 'Raw socket packet analyzer capturing WLAN and MQTT telemetry to detect unencrypted sensor credentials and active ARP poisoning intrusions.',
      tech: ['Python', 'Scapy', 'Raw Sockets', 'Linux'],
      highlights: 'Promiscuous mode IoT telemetry inspector & MitM warning engine',
    },
    {
      id: 'secure-data-transmission',
      title: 'Secure Data Transmission (Stego + Visual Crypto)',
      tier: 'EXPERT' as const,
      category: 'ADVANCED CRYPTOGRAPHY',
      badgeColor: 'border-[#ff1a1a]/60 bg-[#ff1a1a]/20 text-[#ff1a1a]',
      description: 'Dual-layer quantum-resilient cryptographic system combining (2,2) Visual Secret Sharing threshold scheme with spatial LSB carrier concealment with zero plaintext footprint.',
      tech: ['Python', 'OpenCV', 'NumPy', 'React', 'PyCryptodome'],
      highlights: 'Dual-layer threshold secret sharing; eliminates single points of failure',
    },
    {
      id: 'zero-trust',
      title: 'Zero-Trust Network Access Controller',
      tier: 'EXPERT' as const,
      category: 'IDENTITY / PROXY',
      badgeColor: 'border-[#ff1a1a]/60 bg-[#ff1a1a]/20 text-[#ff1a1a]',
      description: 'Identity-aware enterprise reverse proxy enforcing continuous device posture health checks, ephemeral short-lived JWTs, and dynamic RBAC access control.',
      tech: ['TypeScript', 'OAuth / JWT', 'Docker', 'AWS IAM'],
      highlights: 'Continuous posture evaluation & automated token revocation pipeline',
    },
    {
      id: 'firmware-shield',
      title: 'Firmware-Shield: Cryptographic Binary Guard',
      tier: 'EXPERT' as const,
      category: 'EMBEDDED SEC / BOOTLOADER',
      badgeColor: 'border-[#ff1a1a]/60 bg-[#ff1a1a]/20 text-[#ff1a1a]',
      description: 'Embedded defense platform protecting IoT firmware with SHA-256 HMAC digest chains, asymmetric ECDSA bootloader handshakes, and anti-tamper zeroization.',
      tech: ['C/C++', 'ARM Cortex', 'Cryptography', 'Linux CLI'],
      highlights: 'Hardware-backed tamper detection & cryptographic boot integrity',
    }
  ];

  const filteredProjects = projectsList.filter(proj => {
    return projectTierFilter === 'ALL' || proj.tier === projectTierFilter;
  });

  const handleCopyATS = () => {
    navigator.clipboard.writeText(atsResumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const element = document.createElement('a');
    const file = new Blob([atsResumeText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'Mettu_Sabarish_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/90 backdrop-blur-2xl">
      {/* Modal Shell Container */}
      <div className="relative w-full max-w-5xl h-[90vh] bg-[#070911] border border-[#ff1a1a]/40 rounded-2xl shadow-[0_0_60px_rgba(255,26,26,0.3)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* ============================================================ */}
        {/* ROW 1: TOP HEADER WITH CORNER 'X' CLOSE BUTTON               */}
        {/* ============================================================ */}
        <div className="shrink-0 px-5 sm:px-7 py-3.5 border-b border-white/[0.08] bg-[#0c0f1a] flex items-center justify-between gap-4 select-none">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#ff1a1a]/15 border border-[#ff1a1a]/40 flex items-center justify-center text-[#ff1a1a] shadow-[0_0_15px_rgba(255,26,26,0.3)] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 className="font-orbitron font-extrabold text-white text-base sm:text-lg tracking-wider truncate">
                  DOSSIER <span className="text-[#ff1a1a] drop-shadow-[0_0_8px_rgba(255,26,26,0.5)]">CURRICULUM VITAE</span>
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-chakra font-black tracking-widest bg-green-500/15 text-green-400 border border-green-500/30 uppercase shrink-0">
                  VERIFIED 2024
                </span>
              </div>
              <p className="text-xs font-space text-zinc-400 truncate hidden sm:block">
                Mettu Sabarish · SRM University–AP Graduate · Cyber Security & Software Engineer
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            id="resume-top-right-close-btn"
            className="w-9 h-9 rounded-xl bg-white/[0.06] hover:bg-[#ff1a1a]/25 border border-white/[0.1] hover:border-[#ff1a1a]/60 text-zinc-400 hover:text-white flex items-center justify-center transition-all shadow-md cursor-pointer group shrink-0"
            title="Close Dossier (Esc)"
          >
            <X className="w-5 h-5 group-hover:scale-110 text-zinc-300 group-hover:text-[#ff1a1a] transition-all" />
          </button>
        </div>

        {/* ============================================================ */}
        {/* ROW 2: EXPORT & QUICK ACTIONS (COPY ATS, PRINT, DOWNLOAD)    */}
        {/* ============================================================ */}
        <div className="shrink-0 px-5 sm:px-7 py-2.5 bg-[#090b14] border-b border-white/[0.06] flex items-center justify-between flex-wrap gap-2.5 select-none">
          <div className="flex items-center gap-2 text-xs font-chakra font-bold text-zinc-400 shrink-0">
            <FileText className="w-3.5 h-3.5 text-[#ff1a1a]" />
            <span className="tracking-wider uppercase text-zinc-300">CV Export & Quick Actions:</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-chakra font-bold flex-wrap">
            <button
              onClick={handleCopyATS}
              id="resume-copy-ats-btn"
              className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-[#ff1a1a]/60 text-zinc-200 text-xs font-chakra font-bold tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shadow-sm shrink-0"
              title="Copy ATS friendly plaintext"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5 text-[#ff1a1a]" />}
              <span>{copied ? 'COPIED!' : 'COPY ATS'}</span>
            </button>

            <button
              onClick={handlePrint}
              id="resume-print-btn"
              className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-[#ff1a1a]/60 text-zinc-200 text-xs font-chakra font-bold tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shadow-sm shrink-0"
              title="Print or export as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#ff1a1a]" />
              <span>PRINT / PDF</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              id="resume-download-btn"
              className="px-3.5 py-1.5 rounded-lg bg-[#ff1a1a] hover:bg-[#ff3333] text-white text-xs font-chakra font-black tracking-widest flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,26,26,0.4)] transition-all cursor-pointer shrink-0"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>DOWNLOAD TXT</span>
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* ROW 3: CATEGORY NAVIGATION TABS (BELOW EXPORT BAR)          */}
        {/* ============================================================ */}
        <div className="shrink-0 px-5 sm:px-7 py-2.5 bg-[#060810] border-b border-white/[0.08] flex items-center justify-start gap-2 select-none overflow-x-auto">
          <button
            onClick={() => setActiveTab('OVERVIEW')}
            id="resume-tab-overview"
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap text-xs font-chakra font-bold shrink-0 ${
              activeTab === 'OVERVIEW'
                ? 'bg-[#ff1a1a]/20 border border-[#ff1a1a]/60 text-white shadow-[0_0_10px_rgba(255,26,26,0.3)]'
                : 'text-zinc-400 hover:text-zinc-200 bg-white/[0.02] border border-transparent hover:border-white/[0.05]'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-[#ff1a1a]" />
            <span>OVERVIEW</span>
          </button>
          <button
            onClick={() => setActiveTab('EXPERIENCE')}
            id="resume-tab-experience"
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap text-xs font-chakra font-bold shrink-0 ${
              activeTab === 'EXPERIENCE'
                ? 'bg-[#ff1a1a]/20 border border-[#ff1a1a]/60 text-white shadow-[0_0_10px_rgba(255,26,26,0.3)]'
                : 'text-zinc-400 hover:text-zinc-200 bg-white/[0.02] border border-transparent hover:border-white/[0.05]'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5 text-[#ff1a1a]" />
            <span>INTERNSHIPS ({internshipsList.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('PROJECTS')}
            id="resume-tab-projects"
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap text-xs font-chakra font-bold shrink-0 ${
              activeTab === 'PROJECTS'
                ? 'bg-[#ff1a1a]/20 border border-[#ff1a1a]/60 text-white shadow-[0_0_10px_rgba(255,26,26,0.3)]'
                : 'text-zinc-400 hover:text-zinc-200 bg-white/[0.02] border border-transparent hover:border-white/[0.05]'
            }`}
          >
            <Code2 className="w-3.5 h-3.5 text-[#ff1a1a]" />
            <span>PROJECTS (10)</span>
          </button>
          <button
            onClick={() => setActiveTab('SKILLS')}
            id="resume-tab-skills"
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap text-xs font-chakra font-bold shrink-0 ${
              activeTab === 'SKILLS'
                ? 'bg-[#ff1a1a]/20 border border-[#ff1a1a]/60 text-white shadow-[0_0_10px_rgba(255,26,26,0.3)]'
                : 'text-zinc-400 hover:text-zinc-200 bg-white/[0.02] border border-transparent hover:border-white/[0.05]'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-[#ff1a1a]" />
            <span>SKILLS & STACK</span>
          </button>
          <button
            onClick={() => setActiveTab('ACADEMICS')}
            id="resume-tab-academics"
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap text-xs font-chakra font-bold shrink-0 ${
              activeTab === 'ACADEMICS'
                ? 'bg-[#ff1a1a]/20 border border-[#ff1a1a]/60 text-white shadow-[0_0_10px_rgba(255,26,26,0.3)]'
                : 'text-zinc-400 hover:text-zinc-200 bg-white/[0.02] border border-transparent hover:border-white/[0.05]'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5 text-[#ff1a1a]" />
            <span>RESEARCH & ACADEMICS</span>
          </button>
        </div>

        {/* ============================================================ */}
        {/* ROW 4: SCROLLABLE RESUME CONTENT BODY                        */}
        {/* ============================================================ */}
        <div className="flex-1 min-h-0 overflow-y-auto p-5 sm:p-7 space-y-6 text-zinc-300 font-space text-sm leading-relaxed" id="printable-resume">
          
          {/* Identity Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-white/[0.03] to-[#ff1a1a]/[0.05] border border-white/[0.08] shadow-inner flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#ff1a1a]/20 border border-[#ff1a1a]/40 text-[#ff1a1a] text-[10px] font-chakra font-black tracking-widest uppercase">
                  OFFICIAL DOSSIER
                </span>
                <span className="text-zinc-500 text-xs font-chakra font-bold">SRM-AP CSE (CYBER SECURITY) '24</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-orbitron font-extrabold text-white tracking-wider">
                METTU SABARISH
              </h1>
              <p className="text-sm font-space text-[#ff1a1a] font-bold tracking-wide">
                Cyber Security Graduate (2024) · Full-Stack Developer · Cloud & AI/ML
              </p>
              <div className="flex items-center gap-2 text-xs text-zinc-400 pt-0.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>SRM University–AP Alumni · Amaravati, Andhra Pradesh, India</span>
              </div>
            </div>

            {/* Direct Social & Contact Links */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-chakra">
              <a
                href="mailto:mettusabarish96@gmail.com"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-[#ff1a1a] text-zinc-300 hover:text-white transition-all shadow-sm"
              >
                <Mail className="w-3.5 h-3.5 text-[#ff1a1a]" />
                <span>mettusabarish96@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sabarish-mettu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-[#0077b5] text-zinc-300 hover:text-white transition-all shadow-sm"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/sabarishmettu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-white text-zinc-300 hover:text-white transition-all shadow-sm"
              >
                <Github className="w-3.5 h-3.5 text-white" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.instagram.com/x.sabarish_1st?igsi=anIzZzR1ZWJlcDV4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-[#e1306c] text-zinc-300 hover:text-white transition-all shadow-sm"
              >
                <Instagram className="w-3.5 h-3.5 text-[#e1306c]" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Stat Highlights */}
          {activeTab === 'OVERVIEW' && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xl font-orbitron font-bold text-[#ff1a1a]">11</div>
                <div className="text-[11px] font-chakra text-zinc-400 uppercase mt-0.5">Internship Programs</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xl font-orbitron font-bold text-white">10</div>
                <div className="text-[11px] font-chakra text-zinc-400 uppercase mt-0.5">Security Repositories</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xl font-orbitron font-bold text-green-400">ACN'23</div>
                <div className="text-[11px] font-chakra text-zinc-400 uppercase mt-0.5">Published Research</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xl font-orbitron font-bold text-amber-400">2024</div>
                <div className="text-[11px] font-chakra text-zinc-400 uppercase mt-0.5">B.Tech Graduate</div>
              </div>
            </div>
          )}

          {/* Executive Summary */}
          {(activeTab === 'OVERVIEW' || activeTab === 'SKILLS') && (
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center gap-2 mb-2 text-white font-orbitron font-bold text-xs tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#ff1a1a]" />
                <span>EXECUTIVE SUMMARY</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-space">
                Motivated <strong className="text-white">Cyber Security Graduate (Class of 2024)</strong> from <strong className="text-white">SRM University–AP</strong> equipped with a solid foundation in offensive and defensive security operations, penetration testing, network auditing, cryptographic protocol design, and modern full-stack web engineering. Author of published research on Nanoscale Communication (Paper ID: 1570959583) at <strong className="text-white font-semibold">ACN'23, Bengaluru</strong>. Completed 11 practical and corporate virtual internships across AI/ML, cloud systems, enterprise architecture, and cybersecurity.
              </p>
            </div>
          )}

          {/* ============================================================ */}
          {/* SECTION: ACADEMICS & RESEARCH */}
          {/* ============================================================ */}
          {(activeTab === 'OVERVIEW' || activeTab === 'ACADEMICS') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white font-orbitron font-bold text-sm tracking-wider uppercase border-b border-white/[0.08] pb-1.5">
                <GraduationCap className="w-4 h-4 text-[#ff1a1a]" />
                <span>ACADEMIC BACKGROUND & CONFERENCES</span>
              </div>

              {/* University Card */}
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-zinc-700 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="font-bold text-white text-base font-space">
                    SRM University–AP, Amaravati
                  </h4>
                  <p className="text-xs sm:text-sm text-[#ff1a1a] font-medium font-chakra">
                    Bachelor of Technology (B.Tech) — Computer Science & Engineering (Specialization: Cyber Security)
                  </p>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Comprehensive coursework: Applied Cryptography, Web Penetration Testing, Network Security, Vulnerability Analysis, Operating System Internals, Data Structures & Algorithms, Cloud Infrastructure.
                  </p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                  <span className="px-3 py-1 rounded-full bg-[#ff1a1a]/15 text-[#ff1a1a] border border-[#ff1a1a]/40 text-xs font-chakra font-black tracking-widest uppercase whitespace-nowrap">
                    GRADUATED 2024
                  </span>
                  <span className="text-[11px] text-zinc-500 font-chakra">B.Tech Degree Conferred</span>
                </div>
              </div>

              {/* Published Research Card */}
              <div className="p-5 rounded-xl bg-[#ff1a1a]/[0.06] border border-[#ff1a1a]/30 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <BookOpen className="w-4 h-4 text-[#ff1a1a]" />
                      <span className="text-xs font-chakra font-black text-[#ff1a1a] tracking-wider uppercase">
                        RESEARCH & PUBLICATION
                      </span>
                      <span className="text-zinc-400 text-xs font-chakra font-bold">· ACN'23 · Bengaluru</span>
                    </div>
                    <p className="text-xs font-chakra text-zinc-300">
                      The International Conference on Applied Soft Computing and Communication Networks (ACN'23)
                    </p>
                    <div className="pt-1">
                      <div className="text-[11px] font-chakra font-bold text-zinc-400 uppercase tracking-wide">
                        Published Research Paper: <span className="text-white font-mono">Paper ID: 1570959583</span>
                      </div>
                      <h4 className="font-bold text-white text-sm sm:text-base font-space mt-0.5 leading-snug">
                        "1570959583: Characterization of Heart-Centric Nanoscale Communication at Terahertz and Optical Bands"
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-400 font-chakra pt-0.5">
                      <strong className="text-zinc-200">SRM University–AP</strong> · Dec 18–20, 2023 · Bengaluru
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#ff1a1a]/20 text-[#ff1a1a] border border-[#ff1a1a]/40 text-[10px] font-chakra font-black uppercase whitespace-nowrap shrink-0">
                    PUBLISHED PAPER
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* SECTION: INTERNSHIPS (11 PROGRAMS) */}
          {/* ============================================================ */}
          {(activeTab === 'OVERVIEW' || activeTab === 'EXPERIENCE') && (
            <div>
              <div className="flex items-center justify-between gap-2 mb-3 border-b border-white/[0.08] pb-1.5">
                <div className="flex items-center gap-2 text-white font-orbitron font-bold text-sm tracking-wider uppercase">
                  <Briefcase className="w-4 h-4 text-[#ff1a1a]" />
                  <span>PRACTICAL INTERNSHIPS & PROFESSIONAL EXPERIENCE</span>
                </div>
                <span className="text-xs font-chakra text-[#ff1a1a] font-bold">
                  {internshipsList.length} PROGRAMS
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {internshipsList.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#ff1a1a]/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <Building2 className="w-3.5 h-3.5 text-[#ff1a1a]" />
                            <h4 className="font-bold text-white text-sm font-space group-hover:text-white">
                              {item.company}
                            </h4>
                          </div>
                          <p className="text-xs font-chakra text-[#ff1a1a] font-semibold mt-0.5">
                            {item.role}
                          </p>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-chakra font-bold bg-[#ff1a1a]/15 text-[#ff1a1a] border border-[#ff1a1a]/30 whitespace-nowrap shrink-0">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-2.5 mt-3 border-t border-white/[0.04] text-[11px] font-chakra text-zinc-400">
                      <span className="text-zinc-500 uppercase tracking-wider">{item.domain}</span>
                      <span className="text-[#ff1a1a] font-bold">{item.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* SECTION: SECURITY & SOFTWARE PROJECTS (CATEGORIZED) */}
          {/* ============================================================ */}
          {(activeTab === 'OVERVIEW' || activeTab === 'PROJECTS') && (
            <div className="space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.08] pb-1.5">
                <div className="flex items-center gap-2 text-white font-orbitron font-bold text-sm tracking-wider uppercase">
                  <Code2 className="w-4 h-4 text-[#ff1a1a]" />
                  <span>FEATURED PROJECTS REPOSITORY ({projectsList.length} SYSTEMS)</span>
                </div>

                {/* Sub-Filter Toolbar when on PROJECTS Tab */}
                {activeTab === 'PROJECTS' && (
                  <div className="flex items-center gap-1 text-[11px] font-chakra font-bold">
                    {(['ALL', 'BASIC', 'INTERMEDIATE', 'EXPERT'] as const).map(tier => (
                      <button
                        key={tier}
                        onClick={() => setProjectTierFilter(tier)}
                        className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                          projectTierFilter === tier
                            ? 'bg-[#ff1a1a] text-white'
                            : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/[0.06]'
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {filteredProjects.map((project) => (
                  <div 
                    key={project.id}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#ff1a1a]/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-bold text-white text-sm font-space">{project.title}</h4>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-chakra font-bold border whitespace-nowrap shrink-0 ${project.badgeColor}`}>
                          {project.tier} · {project.category}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-white/[0.05] space-y-1.5">
                      <div className="text-[11px] font-chakra text-zinc-400">
                        <span className="text-[#ff1a1a] font-bold">Highlight: </span>
                        <span>{project.highlights}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-chakra text-zinc-400">
                        <span className="text-zinc-500">Tech:</span>
                        {project.tech.map((t, idx) => (
                          <React.Fragment key={idx}>
                            <span className="text-zinc-300">{t}</span>
                            {idx < project.tech.length - 1 && <span>·</span>}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* SECTION: TECHNICAL SKILLS & CERTIFICATIONS */}
          {/* ============================================================ */}
          {(activeTab === 'OVERVIEW' || activeTab === 'SKILLS') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white font-orbitron font-bold text-sm tracking-wider uppercase border-b border-white/[0.08] pb-1.5">
                <Award className="w-4 h-4 text-[#ff1a1a]" />
                <span>TECHNICAL COMPETENCY & DOMAIN STACK</span>
              </div>

              {/* 3-Column Skills Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <div className="flex items-center gap-2 text-[#ff1a1a] font-chakra font-bold text-xs uppercase tracking-wider">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Cyber Security & Defense</span>
                  </div>
                  <ul className="space-y-1 text-zinc-300 leading-relaxed font-space">
                    <li>• Ethical Hacking & Pentesting</li>
                    <li>• Cryptography & PKI Systems</li>
                    <li>• Steganography & Steganalysis</li>
                    <li>• Zero-Trust & Identity Governance</li>
                    <li>• OWASP Top 10 Web Vulnerabilities</li>
                    <li>• Network Vulnerability Assessment</li>
                    <li>• Threat Analysis & IOC Modeling</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <div className="flex items-center gap-2 text-[#ff1a1a] font-chakra font-bold text-xs uppercase tracking-wider">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Development & Frameworks</span>
                  </div>
                  <ul className="space-y-1 text-zinc-300 leading-relaxed font-space">
                    <li>• React, TypeScript & JavaScript</li>
                    <li>• Python (OpenCV, NumPy, Scapy)</li>
                    <li>• C / C++ Systems Engineering</li>
                    <li>• Tailwind CSS & UI Design</li>
                    <li>• Node.js, Express & REST APIs</li>
                    <li>• HTML5 Canvas & Audio APIs</li>
                    <li>• Shell Scripting (Bash & PowerShell)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <div className="flex items-center gap-2 text-[#ff1a1a] font-chakra font-bold text-xs uppercase tracking-wider">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Cloud, Systems & Tools</span>
                  </div>
                  <ul className="space-y-1 text-zinc-300 leading-relaxed font-space">
                    <li>• AWS (EC2, S3, IAM Security)</li>
                    <li>• Linux & Kali Linux Distros</li>
                    <li>• Docker Containerization</li>
                    <li>• Wireshark & Nmap Auditing</li>
                    <li>• Burp Suite Web Security</li>
                    <li>• Git & GitHub Version Control</li>
                    <li>• Power BI DAX & Analytics</li>
                  </ul>
                </div>
              </div>

              {/* Certifications Block */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <span className="text-[11px] font-chakra font-bold text-zinc-400 uppercase tracking-widest">
                  VERIFIED INDUSTRY CERTIFICATIONS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-chakra">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                    <span>Cisco Certified Network Security & Cybersecurity Essentials</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                    <span>AWS Solutions Architecture Fundamentals</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                    <span>SkillUp Certified Ethical Hacker & Security Practitioner</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                    <span>Python & Advanced Software Development Certifications</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* ============================================================ */}
        {/* ROW 5: MODAL FOOTER STATUS BAR                               */}
        {/* ============================================================ */}
        <div className="shrink-0 px-5 sm:px-7 py-2.5 bg-[#05070d] border-t border-white/[0.08] flex items-center justify-between text-xs font-chakra select-none">
          <div className="flex items-center gap-2 text-zinc-400 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span>AUTHENTICATED DOSSIER · METTU SABARISH (2024 GRADUATE)</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-zinc-400 text-[11px] hidden sm:inline">mettusabarish96@gmail.com</span>
            <button
              onClick={onClose}
              id="resume-bottom-close-btn"
              className="px-3 py-1 rounded-md bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 hover:text-white text-xs font-bold transition-all cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

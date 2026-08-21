import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  GraduationCap, 
  Award, 
  Briefcase, 
  Code2, 
  Cloud, 
  BrainCircuit, 
  Cpu, 
  Layers, 
  BarChart3, 
  Palette, 
  ArrowRight, 
  CheckCircle2, 
  Radio, 
  Linkedin, 
  Github, 
  Instagram,
  Mail, 
  BookOpen, 
  ExternalLink,
  Download,
  FileText
} from 'lucide-react';
import { CyberOutlineBtn } from './CyberOutlineBtn.tsx';
import { CtaHeroBanner } from './CtaHeroBanner.tsx';
import { CyberTypewriterSkills } from './CyberTypewriterSkills.tsx';

interface AboutSectionProps {
  onOpenCertifications?: (category?: string) => void;
  onConnectClick?: () => void;
  onSocialClick?: (platform: string) => void;
  onOpenResume?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenCertifications,
  onConnectClick,
  onSocialClick,
  onOpenResume,
}) => {
  const [activeTimelineTab, setActiveTimelineTab] = useState<'ALL' | 'CORPORATE' | 'TECH_AI' | 'RESEARCH'>('ALL');

  const internships = [
    {
      company: 'YBI Foundation',
      role: 'AIML Fundamental & Python Fundamental Internship',
      domain: 'AI & Python Foundations',
      badge: 'AIML & Python',
      category: 'TECH_AI',
      description: 'Completed comprehensive practical training in AI/ML fundamentals, predictive modeling pipelines, and core Python algorithm design.',
    },
    {
      company: 'VOIS',
      role: 'Virtual Micro-Internship: Image Steganography',
      domain: 'Cybersecurity & Cloud',
      badge: 'Steganography / AI',
      category: 'TECH_AI',
      description: 'Under _VOIS for Tech University Engagement Program Innovation Marathon 2022: Developed project on Image Steganography, Cloud Computing Basics, and AI/ML.',
    },
    {
      company: 'SmartKnower',
      role: 'Artificial Intelligence Internship',
      domain: 'AI & Deep Learning',
      badge: 'Deep Learning',
      category: 'TECH_AI',
      description: 'Engineered neural network architectures, computer vision pipelines, and deep learning models for classification tasks.',
    },
    {
      company: 'Salesforce',
      role: 'Salesforce Developer Virtual Internship',
      domain: 'Enterprise Cloud',
      badge: 'Apex & Automation',
      category: 'CORPORATE',
      description: 'Engineered automated cloud business logic, custom Apex triggers, SOQL queries, and schema architectures on Salesforce Cloud.',
    },
    {
      company: 'SRM University–AP',
      role: 'Academic Research Internship (ACN\'23)',
      domain: 'Nanoscale Telecommunications',
      badge: 'Paper 1570959583',
      category: 'RESEARCH',
      description: 'Presented research at The International Conference on Applied Soft Computing and Communication Networks (ACN\'23, Bengaluru): "Characterization of Heart-Centric Nanoscale Communication at Terahertz and Optical Bands" (Paper ID: 1570959583).',
    },
    {
      company: 'JPMorgan Chase & Co.',
      role: 'Cybersecurity & Investment Banking Virtual Experience',
      domain: 'Cyber Security & FinTech',
      badge: 'Financial Systems Sec',
      category: 'CORPORATE',
      description: 'Completed both the Investment Banking Virtual Experience and Cybersecurity Virtual Experience Program, analyzing enterprise threats, cryptography, and zero-trust controls.',
    },
    {
      company: 'Code Clause',
      role: 'Web Development Internship',
      domain: 'Full-Stack Software',
      badge: 'Full-Stack Web',
      category: 'TECH_AI',
      description: 'Constructed responsive, interactive web applications, secure REST APIs, and modern frontend client components.',
    },
    {
      company: 'British Airways',
      role: 'Data Science Virtual Experience Programme',
      domain: 'Data Science & NLP',
      badge: 'Customer Analytics',
      category: 'CORPORATE',
      description: 'Performed customer predictive modeling, natural language sentiment processing on flight reviews, and end-to-end data pipelines.',
    },
    {
      company: 'Mosaique Pvt Ltd',
      role: 'IoT Systems Internship',
      domain: 'Internet of Things',
      badge: 'Sensors & Hardware',
      category: 'TECH_AI',
      description: 'Developed embedded IoT telemetry streams, microcontroller sensor integration, and MQTT lightweight network protocols.',
    },
    {
      company: 'Deloitte',
      role: 'Data Analytics Internship',
      domain: 'Business Intelligence',
      badge: 'Enterprise Analytics',
      category: 'CORPORATE',
      description: 'Conducted large-scale enterprise data wrangling, statistical analysis, and dashboard synthesis to produce actionable executive business intelligence.',
    },
    {
      company: 'PwC Switzerland',
      role: 'Power BI Virtual Internship',
      domain: 'Data Visualization & BI',
      badge: 'Power BI DAX',
      category: 'CORPORATE',
      description: 'Engineered executive dashboards, DAX KPI calculators, and risk assessment visualizations in Power BI for corporate decision-making.',
    },
  ];

  const hackerRankSkills = [
    { name: 'SQL (5★)', level: 'Verified 5★' },
    { name: 'Python (5★)', level: 'Verified 5★' },
    { name: 'Problem Solving', level: 'Intermediate' },
    { name: 'Java', level: 'Verified' },
    { name: 'C Programming', level: 'Verified' },
    { name: 'C#', level: 'Verified' },
    { name: 'JavaScript', level: 'Verified' },
    { name: 'CSS', level: 'Verified' },
  ];

  const skillMatrix = [
    {
      category: 'Cyber Security',
      icon: ShieldCheck,
      color: 'text-red-400',
      skills: ['Ethical Hacking (SkillUp & Cisco)', 'Cryptography & PKI', 'Steganography', 'Zero-Trust Architecture', 'Security Audit Reporting'],
    },
    {
      category: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'text-sky-400',
      skills: ['AWS (11 Serverless / Lambda / API GW Certs)', 'Microsoft Azure (AZ-104 Storage, Blob, Files)', 'Google Cloud (Security & Infra Foundations)', 'Oracle Cloud Infrastructure (OCI 2025 AI)'],
    },
    {
      category: 'Programming & Logic',
      icon: Code2,
      color: 'text-orange-400',
      skills: ['Python (5★ HackerRank)', 'SQL (5★ HackerRank)', 'Java', 'C & C#', 'JavaScript & TypeScript', 'Data Structures & Algorithms'],
    },
    {
      category: 'AI / ML & Data Science',
      icon: BrainCircuit,
      color: 'text-purple-400',
      skills: ['AI / ML Fundamentals (YBI & SmartKnower)', 'Infosys Data Science & AI Primer', 'Oracle OCI AI Foundations', 'Deep Learning & Computer Vision'],
    },
    {
      category: 'Web Development',
      icon: Layers,
      color: 'text-emerald-400',
      skills: ['React & Next.js', 'Node.js & Express', 'REST APIs & WebSockets', 'Tailwind CSS', 'Responsive HUD Interfaces'],
    },
    {
      category: 'Data Analytics & BI',
      icon: BarChart3,
      color: 'text-amber-400',
      skills: ['Power BI DAX (PwC)', 'Data Analytics (Deloitte)', 'Citizen Data Science (Infosys)', 'Predictive NLP (British Airways)'],
    },
    {
      category: 'IoT & Systems',
      icon: Cpu,
      color: 'text-cyan-400',
      skills: ['Cisco Packet Tracer IoT', 'MQTT Protocol', 'Microcontroller Telemetry (Mosaique)', 'Nanoscale THz Communications (ACN\'23)'],
    },
    {
      category: 'Design & Visual Systems',
      icon: Palette,
      color: 'text-pink-400',
      skills: ['Adobe Photoshop (Eduonix/Educba/GreatLearning)', 'Adobe InDesign (Eduonix)', 'Adobe Illustrator (Eduonix)', 'Adobe Flash (Eduonix)', 'Graphic Design (LinkedIn)'],
    },
  ];

  const filteredInternships = internships.filter(
    (item) => activeTimelineTab === 'ALL' || item.category === activeTimelineTab
  );

  return (
    <section id="about" className="w-full max-w-[1720px] 2xl:max-w-[1900px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 relative z-20">
      {/* Top Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 text-[#ff1a1a] font-chakra text-xs sm:text-sm tracking-[0.25em] uppercase font-black mb-3">
            <Sparkles className="w-4 h-4 drop-shadow-[0_0_8px_#ff1a1a]" />
            <span>&lt;PROFILE_DOSSIER // METTU_SABARISH&gt;</span>
          </div>
          {/* Section Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-extrabold text-white tracking-wider uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            ABOUT <span className="text-[#ff1a1a] drop-shadow-[0_0_8px_rgba(255,26,26,0.35)]">METTU SABARISH</span>
          </h2>
          <p className="text-sm sm:text-base font-space text-zinc-400 mt-2 max-w-2xl">
            Cyber Security Graduate from <span className="text-white font-semibold">SRM University–AP</span> · Full-Stack Developer · AI/ML & Cloud Enthusiast
          </p>
        </div>

        {/* Action Button: View Full Certifications Dossier */}
        <div>
          <CyberOutlineBtn
            id="btn-view-certifications"
            label="VIEW ALL CERTIFICATES"
            onClick={() => onOpenCertifications && onOpenCertifications('ALL')}
          />
        </div>
      </div>

      {/* Grid: Main Bio Dossier & Key Positioning */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Left Column: Bio Story (7 Columns) */}
        <div className="lg:col-span-7 bg-[#090b12]/60 backdrop-blur-xl border border-white/[0.08] hover:border-[#ff1a1a]/40 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] relative overflow-hidden group transition-all duration-300">
          {/* Subtle Glass Specular Top Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
          {/* Subtle Top Red Circuit Border Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff1a1a] to-transparent opacity-80" />

          {/* Core Bio Content */}
          <div className="space-y-4 text-zinc-300 font-space text-sm sm:text-[15px] leading-relaxed">
            <p>
              I’m <strong className="text-white font-semibold">Mettu Sabarish</strong>, a Cyber Security graduate from <strong className="text-[#ff1a1a]">SRM University–AP</strong> with a multidisciplinary technical foundation spanning cybersecurity, cloud computing, artificial intelligence, machine learning, software development, data science, and IoT.
            </p>
            <p>
              My background integrates academic research, 11 industry-oriented virtual internships, hands-on enterprise certifications, and 5-star competitive coding. I have completed programs associated with top global enterprises including <strong className="text-zinc-100">JPMorgan, Salesforce, Deloitte, PwC, British Airways, VOIS, AWS, Microsoft, Google Cloud, Cisco, Oracle, Infosys</strong>, and more.
            </p>
            <p>
              Additionally, I hold certifications in Adobe creative tools (Photoshop, InDesign, Illustrator, Flash) and have completed Japanese Language Proficiency <strong className="text-[#ff1a1a]">JLPT N5 & N4</strong>, combining analytical and creative thinking.
            </p>
          </div>

          {/* Positioning Pills Matrix */}
          <div className="mt-6 pt-6 border-t border-white/[0.08] flex flex-wrap gap-2.5 items-center">
            <span className="text-xs font-chakra font-black tracking-wider uppercase text-zinc-400 mr-1">
              Core Specialization:
            </span>
            <span className="px-3 py-1 rounded-full bg-[#ff1a1a]/15 text-[#ff1a1a] border border-[#ff1a1a]/40 font-chakra text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              Cyber Security
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.05] text-white border border-white/[0.1] font-chakra text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              Software Development
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.05] text-white border border-white/[0.1] font-chakra text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              Cloud Computing
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.05] text-white border border-white/[0.1] font-chakra text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              AI / Machine Learning
            </span>
          </div>

          {/* Social Quick Connects & Resume CTA inside Bio */}
          <div className="mt-6 pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2.5">
              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ff1a1a] hover:bg-[#ff3333] text-white transition-all text-xs font-chakra font-black tracking-wider uppercase shadow-[0_0_15px_rgba(255,26,26,0.4)] hover:shadow-[0_0_25px_rgba(255,26,26,0.6)] cursor-pointer mr-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>DOWNLOAD CV / DOSSIER</span>
                </button>
              )}
              <a
                href="https://www.linkedin.com/in/sabarish-mettu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.04] backdrop-blur-md border border-white/[0.08] hover:border-[#0077b5] text-zinc-300 hover:text-[#0077b5] transition-all text-xs font-chakra font-bold uppercase cursor-pointer"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/sabarishmettu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.04] backdrop-blur-md border border-white/[0.08] hover:border-white text-zinc-300 hover:text-white transition-all text-xs font-chakra font-bold uppercase cursor-pointer"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.instagram.com/x.sabarish_1st?igsi=anIzZzR1ZWJlcDV4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.04] backdrop-blur-md border border-white/[0.08] hover:border-[#e1306c] text-zinc-300 hover:text-[#e1306c] transition-all text-xs font-chakra font-bold uppercase cursor-pointer"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
              <a
                href="mailto:mettusabarish96@gmail.com"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.04] backdrop-blur-md border border-white/[0.08] hover:border-[#ff1a1a] text-zinc-300 hover:text-[#ff1a1a] transition-all text-xs font-chakra font-bold uppercase cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Research Highlight & Academic Achievement (5 Columns) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Research & Publication Feature Card */}
          <div className="bg-[#090b12]/60 backdrop-blur-xl border border-white/[0.08] hover:border-[#ff1a1a]/60 rounded-2xl p-6 sm:p-7 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] relative overflow-hidden transition-all duration-300 group">
            {/* Subtle Glass Specular Top Highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            <div className="flex items-center justify-between mb-3">
              <span className="flex items-center gap-1.5 text-xs font-chakra font-black tracking-widest uppercase text-[#ff1a1a] bg-[#ff1a1a]/15 px-3 py-1 rounded-full border border-[#ff1a1a]/30 backdrop-blur-md">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                RESEARCH & PUBLICATION
              </span>
              <span className="text-xs font-chakra font-bold text-zinc-400">
                ACN'23 · Bengaluru
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-orbitron font-bold text-white group-hover:text-[#ff1a1a] transition-colors leading-snug">
              The International Conference on Applied Soft Computing and Communication Networks (ACN'23)
            </h3>

            <div className="mt-3 p-3.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/[0.08]">
              <div className="flex items-center justify-between text-xs font-chakra font-bold uppercase text-zinc-400 tracking-wider mb-1">
                <span>Published Research Paper:</span>
                <span className="text-[#ff1a1a]">Paper ID: 1570959583</span>
              </div>
              <p className="text-xs sm:text-sm font-space text-zinc-200 italic leading-relaxed">
                "1570959583: Characterization of Heart-Centric Nanoscale Communication at Terahertz and Optical Bands"
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs font-chakra text-zinc-400">
              <span className="flex items-center gap-1 text-emerald-400 font-bold">
                <GraduationCap className="w-4 h-4" />
                SRM University–AP
              </span>
              <span className="text-zinc-400">
                Dec 18–20, 2023 · Bengaluru
              </span>
            </div>
          </div>

          {/* Education & Degree Summary Box */}
          <div className="bg-[#090b12]/60 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 relative overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
            {/* Subtle Glass Specular Top Highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#ff1a1a]/15 border border-[#ff1a1a]/40 flex items-center justify-center text-[#ff1a1a] shrink-0 backdrop-blur-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-orbitron font-bold text-white">
                  SRM University–AP
                </h4>
                <p className="text-xs sm:text-sm font-chakra font-semibold text-[#ff1a1a] tracking-wide">
                  Graduate · Specialization: Cyber Security
                </p>
                <p className="text-xs text-zinc-400 font-space mt-0.5">
                  Applied cryptography, ethical hacking, secure system architectures, networking, and distributed software engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Core Credential Hub Cards (Internships, HackerRank, Courses/Certifications) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {/* Hub Card 1: 11 Virtual & Industry Internships */}
        <div 
          onClick={() => onOpenCertifications && onOpenCertifications('Internships')}
          className="bg-[#090b12]/60 backdrop-blur-xl border border-white/[0.08] hover:border-[#ff1a1a] rounded-2xl p-6 sm:p-7 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(255,26,26,0.25)] transition-all duration-300 cursor-pointer group flex flex-col justify-between relative overflow-hidden"
        >
          {/* Subtle Glass Specular Top Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-xl bg-[#ff1a1a]/15 border border-[#ff1a1a]/40 flex items-center justify-center text-[#ff1a1a] group-hover:scale-110 transition-transform backdrop-blur-md">
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="text-xs font-chakra font-black tracking-widest uppercase text-[#ff1a1a] bg-[#ff1a1a]/10 px-3 py-1 rounded-full border border-[#ff1a1a]/20 backdrop-blur-md">
                11 INTERNSHIPS
              </span>
            </div>

            <h3 className="text-lg font-orbitron font-bold text-white group-hover:text-[#ff1a1a] transition-colors mb-2">
              Internship Certificates
            </h3>
            <p className="text-xs text-zinc-400 font-space leading-relaxed mb-4">
              YBI Foundation · VOIS · SmartKnower · Salesforce · SRM Research · JPMorgan · Code Clause · British Airways · Mosaique Pvt Ltd · Deloitte · PwC
            </p>
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-chakra font-bold text-[#ff1a1a]">
            <span>VIEW ALL 11 EXPERIENCES</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Hub Card 2: HackerRank Skill Certifications */}
        <div 
          onClick={() => onOpenCertifications && onOpenCertifications('HackerRank')}
          className="bg-[#090b12]/60 backdrop-blur-xl border border-white/[0.08] hover:border-[#ff1a1a] rounded-2xl p-6 sm:p-7 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(255,26,26,0.25)] transition-all duration-300 cursor-pointer group flex flex-col justify-between relative overflow-hidden"
        >
          {/* Subtle Glass Specular Top Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-xl bg-[#ff1a1a]/15 border border-[#ff1a1a]/40 flex items-center justify-center text-[#ff1a1a] group-hover:scale-110 transition-transform backdrop-blur-md">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-xs font-chakra font-black tracking-widest uppercase text-[#ff1a1a] bg-[#ff1a1a]/10 px-3 py-1 rounded-full border border-[#ff1a1a]/20 backdrop-blur-md">
                8 SKILL CERTS
              </span>
            </div>

            <h3 className="text-lg font-orbitron font-bold text-white group-hover:text-[#ff1a1a] transition-colors mb-2">
              HackerRank Verified Skills
            </h3>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {hackerRankSkills.map((s, idx) => (
                <span key={idx} className="text-[11px] font-space px-2 py-0.5 rounded bg-black/40 border border-white/[0.08] text-zinc-300 backdrop-blur-md">
                  {s.name}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-chakra font-bold text-[#ff1a1a]">
            <span>VIEW HACKERRANK DOSSIER</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Hub Card 3: Cloud & Industry Certifications */}
        <div 
          onClick={() => onOpenCertifications && onOpenCertifications('AWS')}
          className="bg-[#090b12]/60 backdrop-blur-xl border border-white/[0.08] hover:border-[#ff1a1a] rounded-2xl p-6 sm:p-7 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(255,26,26,0.25)] transition-all duration-300 cursor-pointer group flex flex-col justify-between relative overflow-hidden"
        >
          {/* Subtle Glass Specular Top Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-xl bg-[#ff1a1a]/15 border border-[#ff1a1a]/40 flex items-center justify-center text-[#ff1a1a] group-hover:scale-110 transition-transform backdrop-blur-md">
                <Cloud className="w-5 h-5" />
              </div>
              <span className="text-xs font-chakra font-black tracking-widest uppercase text-[#ff1a1a] bg-[#ff1a1a]/10 px-3 py-1 rounded-full border border-[#ff1a1a]/20 backdrop-blur-md">
                COURSES & CLOUD
              </span>
            </div>

            <h3 className="text-lg font-orbitron font-bold text-white group-hover:text-[#ff1a1a] transition-colors mb-2">
              Courses & Certifications
            </h3>
            <p className="text-xs text-zinc-400 font-space leading-relaxed mb-4">
              AWS (11 Certs) · Microsoft Azure · Google Cloud · Oracle AI · Cisco · SkillUp · Infosys · Eduonix · Great Learning · Educba · LinkedIn
            </p>
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-chakra font-bold text-[#ff1a1a]">
            <span>VIEW ALL COURSE CERTS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* Section: 11 Internships Timeline */}
      <div className="mb-14" id="internships-section">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-orbitron font-extrabold text-white tracking-wider uppercase">
              INTERNSHIP & VIRTUAL EXPERIENCE TIMELINE
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-space mt-1">
              11 completed industry-oriented virtual internships, research programs, and technical roles.
            </p>
          </div>

          {/* Timeline Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {[
              { id: 'ALL', label: 'All 11 Experiences' },
              { id: 'CORPORATE', label: 'Enterprise / Corporate' },
              { id: 'TECH_AI', label: 'AI, Cloud & Web' },
              { id: 'RESEARCH', label: 'Research & Comms' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveTimelineTab(f.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-chakra font-bold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                  activeTimelineTab === f.id
                    ? 'bg-[#ff1a1a] text-black shadow-[0_0_15px_rgba(255,26,26,0.6)] font-black'
                    : 'bg-white/[0.04] backdrop-blur-md text-zinc-400 border border-white/[0.08] hover:text-white hover:border-white/20'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredInternships.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-[#090b12]/60 backdrop-blur-xl border border-white/[0.08] hover:border-[#ff1a1a]/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(255,26,26,0.18)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle Glass Specular Top Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-chakra font-bold uppercase tracking-wider text-[#ff1a1a] bg-[#ff1a1a]/10 px-2.5 py-0.5 rounded border border-[#ff1a1a]/20 backdrop-blur-md">
                    {item.company}
                  </span>
                  <span className="text-[11px] font-chakra font-bold text-zinc-400">
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-orbitron font-bold text-white group-hover:text-[#ff1a1a] transition-colors leading-snug mb-1.5">
                  {item.role}
                </h4>
                <p className="text-xs text-zinc-400 font-space leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-chakra text-zinc-500">
                <span>Domain: {item.domain}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ff1a1a]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* USER REQUESTED: MOVE "LET'S BUILD SOMETHING AMAZING" AFTER INTERNSHIPS */}
      <div className="my-12">
        <CtaHeroBanner onConnectClick={onConnectClick} />
      </div>

      {/* Section: Technical Range & Skills Matrix */}
      <div className="mt-16">
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-orbitron font-extrabold text-white tracking-wider uppercase">
            TECHNICAL DOMAIN MATRIX
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-space mt-1">
            Structured overview of core proficiencies across cybersecurity, cloud, development, AI, data, and systems engineering.
          </p>
        </div>

        {/* 8 Technical Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillMatrix.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#090b12]/60 backdrop-blur-xl border border-white/[0.08] hover:border-[#ff1a1a]/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle Glass Specular Top Highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="p-2 rounded-lg bg-white/[0.05] backdrop-blur-md border border-white/[0.08] text-[#ff1a1a]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-orbitron font-bold text-white tracking-wide">
                      {item.category}
                    </h4>
                  </div>
                  <CyberTypewriterSkills skills={item.skills} cardIndex={idx} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { X, Award, ExternalLink, CheckCircle2, ShieldCheck, Search, Sparkles, Filter, Briefcase, Code2, Cloud, BookOpen, Layers, Cpu } from 'lucide-react';

interface CertificationsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  category: 'Internships' | 'HackerRank' | 'AWS' | 'Cloud/DevOps' | 'CyberSecurity' | 'AI/Data' | 'Design' | 'Enterprise';
  skills: string[];
  paperId?: string;
  verified?: boolean;
}

export const certificatesData: CertificateItem[] = [
  // ==========================================
  // 1. INTERNSHIP CERTIFICATES (11 Programs)
  // ==========================================
  {
    id: 'intern-ybi',
    title: 'AIML Fundamental & Python Fundamental Internship',
    issuer: 'YBI Foundation',
    category: 'Internships',
    skills: ['AI / ML Fundamentals', 'Python Fundamentals', 'Scikit-Learn', 'Predictive Modeling'],
    verified: true,
  },
  {
    id: 'intern-vois',
    title: 'Virtual Micro-Internship: Image Steganography, Cloud & AI',
    issuer: 'VOIS (_VOIS for Tech Innovation Marathon 2022)',
    category: 'Internships',
    skills: ['Image Steganography', 'Cloud Computing Basics', 'AI / Machine Learning', 'Security'],
    verified: true,
  },
  {
    id: 'intern-smartknower',
    title: 'Artificial Intelligence & Neural Systems Internship',
    issuer: 'SmartKnower',
    category: 'Internships',
    skills: ['Artificial Intelligence', 'Neural Architectures', 'Computer Vision', 'Deep Learning'],
    verified: true,
  },
  {
    id: 'intern-salesforce',
    title: 'Salesforce Developer Virtual Internship',
    issuer: 'Salesforce',
    category: 'Internships',
    skills: ['Salesforce Developer', 'Apex Triggers', 'SOQL/SOSL', 'Cloud Workflow Automation'],
    verified: true,
  },
  {
    id: 'intern-srm-research',
    title: 'Academic Research Internship: Heart-Centric Nanoscale Comms',
    issuer: 'SRM University–AP (ACN\'23 Bengaluru)',
    category: 'Internships',
    paperId: '1570959583',
    skills: ['Paper 1570959583', 'Nanoscale Communications', 'Terahertz & Optical Bands', 'Applied Soft Computing'],
    verified: true,
  },
  {
    id: 'intern-jpmorgan',
    title: 'Investment Banking & Cybersecurity Virtual Experience Program',
    issuer: 'JPMorgan Chase & Co.',
    category: 'Internships',
    skills: ['Cybersecurity Experience', 'Investment Banking Systems', 'Threat Modeling', 'Financial Security'],
    verified: true,
  },
  {
    id: 'intern-codeclause',
    title: 'Web Development Internship',
    issuer: 'Code Clause',
    category: 'Internships',
    skills: ['Full-Stack Web Dev', 'Frontend/Backend Integration', 'REST APIs', 'UI Engineering'],
    verified: true,
  },
  {
    id: 'intern-ba',
    title: 'Data Science Virtual Experience Programme',
    issuer: 'British Airways',
    category: 'Internships',
    skills: ['Data Science', 'Customer Predictive Modeling', 'NLP Sentiment Analysis', 'Python ML'],
    verified: true,
  },
  {
    id: 'intern-mosaique',
    title: 'IoT (Internet of Things) Systems Internship',
    issuer: 'Mosaique Pvt Ltd',
    category: 'Internships',
    skills: ['IoT Systems', 'Embedded Sensors', 'MQTT Protocol', 'Microcontroller Telemetry'],
    verified: true,
  },
  {
    id: 'intern-deloitte',
    title: 'Data Analytics Internship',
    issuer: 'Deloitte',
    category: 'Internships',
    skills: ['Data Analytics', 'Business Intelligence', 'Data Wrangling', 'Executive Insights'],
    verified: true,
  },
  {
    id: 'intern-pwc',
    title: 'Power BI Virtual Internship',
    issuer: 'PwC Switzerland',
    category: 'Internships',
    skills: ['Power BI', 'DAX Formulas', 'Executive Dashboards', 'KPI Risk Analytics'],
    verified: true,
  },

  // ==========================================
  // 2. HACKERRANK SKILL CERTIFICATIONS (8 Skills)
  // ==========================================
  {
    id: 'hr-sql',
    title: 'SQL Skill Certification (5★ Verified)',
    issuer: 'HackerRank',
    category: 'HackerRank',
    skills: ['SQL 5-Star', 'Complex Joins', 'Aggregations', 'Subqueries', 'Query Optimization'],
    verified: true,
  },
  {
    id: 'hr-python',
    title: 'Python Skill Certification (5★ Verified)',
    issuer: 'HackerRank',
    category: 'HackerRank',
    skills: ['Python 5-Star', 'OOP', 'Data Pipelines', 'Lambda Functions', 'Algorithms'],
    verified: true,
  },
  {
    id: 'hr-c',
    title: 'C Programming Certification',
    issuer: 'HackerRank',
    category: 'HackerRank',
    skills: ['C Language', 'Pointers & Memory', 'Data Structures', 'Low-Level Optimization'],
    verified: true,
  },
  {
    id: 'hr-csharp',
    title: 'C# Skill Certification',
    issuer: 'HackerRank',
    category: 'HackerRank',
    skills: ['C# Language', '.NET Core', 'LINQ Queries', 'Asynchronous Execution'],
    verified: true,
  },
  {
    id: 'hr-java',
    title: 'Java Skill Certification',
    issuer: 'HackerRank',
    category: 'HackerRank',
    skills: ['Core Java', 'OOP Design Patterns', 'Multithreading', 'Collections Framework'],
    verified: true,
  },
  {
    id: 'hr-problem-solving',
    title: 'Problem Solving (Basic & Intermediate)',
    issuer: 'HackerRank',
    category: 'HackerRank',
    skills: ['Problem Solving', 'Data Structures', 'Dynamic Programming', 'Big-O Analysis'],
    verified: true,
  },
  {
    id: 'hr-javascript',
    title: 'JavaScript Skill Certification',
    issuer: 'HackerRank',
    category: 'HackerRank',
    skills: ['JavaScript ES6+', 'Async/Await', 'DOM & Events', 'Functional Programming'],
    verified: true,
  },
  {
    id: 'hr-css',
    title: 'CSS Skill Certification',
    issuer: 'HackerRank',
    category: 'HackerRank',
    skills: ['CSS Layouts', 'Flexbox & CSS Grid', 'Responsive Design', 'CSS Keyframes'],
    verified: true,
  },

  // ==========================================
  // 3. AWS (AMAZON WEB SERVICES) CERTIFICATIONS (11 Badges/Courses)
  // ==========================================
  {
    id: 'aws-badge',
    title: 'Serverless Knowledge Badge Assessment',
    issuer: 'Amazon Web Services (AWS)',
    category: 'AWS',
    skills: ['AWS Serverless Badge', 'Lambda', 'EventBridge', 'API Gateway', 'DynamoDB'],
    verified: true,
  },
  {
    id: 'aws-lambda-intro',
    title: 'Introduction to AWS Lambda',
    issuer: 'Amazon Web Services (AWS)',
    category: 'AWS',
    skills: ['AWS Lambda', 'Serverless Compute', 'Event Triggers', 'FaaS Architecture'],
    verified: true,
  },
  {
    id: 'aws-tech-essentials',
    title: 'AWS Technical Essentials',
    issuer: 'Amazon Web Services (AWS)',
    category: 'AWS',
    skills: ['Compute (EC2)', 'Storage (S3)', 'Networking (VPC)', 'IAM Security'],
    verified: true,
  },
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services (AWS)',
    category: 'AWS',
    skills: ['Cloud Architecture', 'Global Infrastructure', 'Billing & Support', 'Security'],
    verified: true,
  },
  {
    id: 'aws-serverless-mindset',
    title: 'Getting into the Serverless Mindset',
    issuer: 'Amazon Web Services (AWS)',
    category: 'AWS',
    skills: ['Serverless Mindset', 'Microservices', 'Asynchronous Flow', 'Cost Optimization'],
    verified: true,
  },
  {
    id: 'aws-event-driven',
    title: 'Designing Event-Driven Architectures',
    issuer: 'Amazon Web Services (AWS)',
    category: 'AWS',
    skills: ['EventBridge', 'Amazon SQS', 'Amazon SNS', 'Decoupled Systems'],
    verified: true,
  },
  {
    id: 'aws-api-gateway',
    title: 'Amazon API Gateway for Serverless Applications',
    issuer: 'Amazon Web Services (AWS)',
    category: 'AWS',
    skills: ['REST APIs', 'HTTP APIs', 'API Throttling', 'Cognito Integration'],
    verified: true,
  },
  {
    id: 'aws-lambda-foundations',
    title: 'AWS Lambda Foundations',
    issuer: 'Amazon Web Services (AWS)',
    category: 'AWS',
    skills: ['Lambda Lifecycle', 'Execution Environment', 'Concurrency', 'Memory Tuning'],
    verified: true,
  },
  {
    id: 'aws-sec-obs',
    title: 'Security and Observability for Serverless Applications',
    issuer: 'Amazon Web Services (AWS)',
    category: 'AWS',
    skills: ['AWS X-Ray', 'CloudWatch Logs/Metrics', 'IAM Principle of Least Privilege'],
    verified: true,
  },
  {
    id: 'aws-scaling',
    title: 'Scaling Serverless Architectures',
    issuer: 'Amazon Web Services (AWS)',
    category: 'AWS',
    skills: ['Auto-scaling', 'Provisioned Concurrency', 'Fault Tolerance', 'Disaster Recovery'],
    verified: true,
  },
  {
    id: 'aws-deploying',
    title: 'Deploying Serverless Applications',
    issuer: 'Amazon Web Services (AWS)',
    category: 'AWS',
    skills: ['AWS SAM', 'CloudFormation', 'CI/CD Pipelines', 'Blue/Green Deployments'],
    verified: true,
  },

  // ==========================================
  // 4. ORACLE
  // ==========================================
  {
    id: 'oracle-ai-2025',
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    category: 'Enterprise',
    skills: ['Oracle OCI AI', 'Generative AI Foundations', 'Machine Learning on OCI', 'AI Security'],
    verified: true,
  },

  // ==========================================
  // 5. MICROSOFT AZURE
  // ==========================================
  {
    id: 'ms-az104-storage',
    title: 'AZ-104: Implement and Manage Storage in Azure',
    issuer: 'Microsoft',
    category: 'Cloud/DevOps',
    skills: ['Azure Storage', 'AZ-104', 'Storage Accounts', 'Access Tiering', 'Data Replication'],
    verified: true,
  },
  {
    id: 'ms-blob-storage',
    title: 'Configure Azure Blob Storage',
    issuer: 'Microsoft',
    category: 'Cloud/DevOps',
    skills: ['Blob Storage Containers', 'Lifecycle Management', 'Object Replication'],
    verified: true,
  },
  {
    id: 'ms-azure-files',
    title: 'Configure Azure Files',
    issuer: 'Microsoft',
    category: 'Cloud/DevOps',
    skills: ['Azure Files Shares', 'SMB/NFS Protocols', 'Azure File Sync'],
    verified: true,
  },
  {
    id: 'ms-storage-sec',
    title: 'Configure Azure Storage Security',
    issuer: 'Microsoft',
    category: 'Cloud/DevOps',
    skills: ['Shared Access Signatures (SAS)', 'Storage Encryption Keys', 'Firewalls & VNet Access'],
    verified: true,
  },
  {
    id: 'ms-storage-accounts',
    title: 'Configure Storage Accounts',
    issuer: 'Microsoft',
    category: 'Cloud/DevOps',
    skills: ['Storage Account Redundancy (LRS/GRS/ZRS)', 'Identity Integration'],
    verified: true,
  },
  {
    id: 'ms-guided-project',
    title: 'Guided Project: Azure Files and Azure Blobs',
    issuer: 'Microsoft',
    category: 'Cloud/DevOps',
    skills: ['Azure CLI', 'PowerShell Deployment', 'Blob & File Management'],
    verified: true,
  },
  {
    id: 'ms-secure-storage',
    title: 'Secure Storage for Azure Files and Azure Blob Storage',
    issuer: 'Microsoft',
    category: 'Cloud/DevOps',
    skills: ['Azure Key Vault', 'Customer-Managed Keys (CMK)', 'Zero-Trust Storage Protection'],
    verified: true,
  },

  // ==========================================
  // 6. GOOGLE CLOUD (GCP)
  // ==========================================
  {
    id: 'gcp-net-sec',
    title: 'Google Cloud Computing Foundations: Networking and Security in Google Cloud',
    issuer: 'Google Cloud',
    category: 'Cloud/DevOps',
    skills: ['VPC Networks', 'Cloud Armor', 'Cloud IAM Security', 'Firewall Rules'],
    verified: true,
  },
  {
    id: 'gcp-infra',
    title: 'Google Cloud Computing Foundations: Infrastructure in Google Cloud',
    issuer: 'Google Cloud',
    category: 'Cloud/DevOps',
    skills: ['Compute Engine (VMs)', 'Cloud Run', 'Kubernetes (GKE)', 'Cloud Storage'],
    verified: true,
  },
  {
    id: 'gcp-fund',
    title: 'Google Cloud Computing Foundations: Cloud Computing Fundamentals',
    issuer: 'Google Cloud',
    category: 'Cloud/DevOps',
    skills: ['Cloud Concepts', 'Resource Hierarchy', 'GCP Management Console', 'Billing'],
    verified: true,
  },

  // ==========================================
  // 7. CISCO
  // ==========================================
  {
    id: 'cisco-iot-packet',
    title: 'Exploring Internet of Things with Cisco Packet Tracer',
    issuer: 'Cisco Networking Academy',
    category: 'CyberSecurity',
    skills: ['Cisco Packet Tracer', 'IoT Topologies', 'Network Sensors', 'Actuators'],
    verified: true,
  },
  {
    id: 'cisco-ethical-hacker',
    title: 'Ethical Hacker Certification',
    issuer: 'Cisco Networking Academy',
    category: 'CyberSecurity',
    skills: ['Ethical Hacking', 'Penetration Testing', 'Vulnerability Assessment', 'Threat Mitigation'],
    verified: true,
  },
  {
    id: 'cisco-reports',
    title: 'Creating Compelling Reports',
    issuer: 'Cisco',
    category: 'Enterprise',
    skills: ['Technical Documentation', 'Security Audit Reporting', 'Stakeholder Communication'],
    verified: true,
  },

  // ==========================================
  // 8. SKILLUP (SIMPLILEARN)
  // ==========================================
  {
    id: 'skillup-cyber-intro',
    title: 'Introduction to Cyber Security',
    issuer: 'SkillUp by Simplilearn',
    category: 'CyberSecurity',
    skills: ['Cybersecurity Core Principles', 'CIA Triad', 'Malware Analysis', 'Defensive Controls'],
    verified: true,
  },
  {
    id: 'skillup-crypto',
    title: 'Introduction to Cryptography for Beginners',
    issuer: 'SkillUp by Simplilearn',
    category: 'CyberSecurity',
    skills: ['Symmetric & Asymmetric Ciphers', 'Public Key Infrastructure (PKI)', 'Hash Functions'],
    verified: true,
  },
  {
    id: 'skillup-ethical-hack',
    title: 'Ethical Hacking for Beginners',
    issuer: 'SkillUp by Simplilearn',
    category: 'CyberSecurity',
    skills: ['Footprinting & Reconnaissance', 'Network Scanning', 'Exploitation Basics'],
    verified: true,
  },

  // ==========================================
  // 9. INFOSYS SPRINGBOARD
  // ==========================================
  {
    id: 'infosys-data-science',
    title: 'Data Science Foundation Certification',
    issuer: 'Infosys Springboard',
    category: 'AI/Data',
    skills: ['Data Science Foundations', 'Statistical Inference', 'Data Cleaning', 'Data Modeling'],
    verified: true,
  },
  {
    id: 'infosys-citizen-ds',
    title: 'Citizen Data Science using Python Certification',
    issuer: 'Infosys Springboard',
    category: 'AI/Data',
    skills: ['Python Data Analysis', 'Pandas', 'NumPy', 'Matplotlib/Seaborn'],
    verified: true,
  },
  {
    id: 'infosys-it-python',
    title: 'Associate in IT Foundation Skills (Python)',
    issuer: 'Infosys Springboard',
    category: 'Enterprise',
    skills: ['Python Foundations', 'Modular Programming', 'Data Structuring', 'File I/O'],
    verified: true,
  },
  {
    id: 'infosys-it-java',
    title: 'Associate in IT Foundation Skills (Java)',
    issuer: 'Infosys Springboard',
    category: 'Enterprise',
    skills: ['Core Java', 'OOP Paradigms', 'Exception Handling', 'Clean Code'],
    verified: true,
  },
  {
    id: 'infosys-ai-primer',
    title: 'Artificial Intelligence Primer Certification',
    issuer: 'Infosys Springboard',
    category: 'AI/Data',
    skills: ['AI Concepts', 'Supervised & Unsupervised Learning', 'Natural Language Processing'],
    verified: true,
  },

  // ==========================================
  // 10. DESIGN CERTIFICATIONS (Eduonix, Educba, Great Learning, LinkedIn)
  // ==========================================
  {
    id: 'eduonix-photoshop',
    title: 'Learn Designing Using Adobe Photoshop from Scratch',
    issuer: 'Eduonix',
    category: 'Design',
    skills: ['Adobe Photoshop', 'Layer Masking', 'Photo Manipulation', 'Graphic Assets'],
    verified: true,
  },
  {
    id: 'eduonix-indesign',
    title: 'Learn Adobe InDesign From Scratch',
    issuer: 'Eduonix',
    category: 'Design',
    skills: ['Adobe InDesign', 'Editorial Layout', 'Typography & Grids', 'Print/Digital Publishing'],
    verified: true,
  },
  {
    id: 'eduonix-illustrator',
    title: 'Learn Adobe Illustrator Course From Scratch',
    issuer: 'Eduonix',
    category: 'Design',
    skills: ['Adobe Illustrator', 'Vector Graphics', 'Logo & Icon Design', 'Pen Tool Precision'],
    verified: true,
  },
  {
    id: 'eduonix-flash',
    title: 'Learn Adobe Flash From Scratch For Beginners',
    issuer: 'Eduonix',
    category: 'Design',
    skills: ['Adobe Flash/Animate', 'Timeline Animation', 'Vector Assets', 'Motion Tweens'],
    verified: true,
  },
  {
    id: 'educba-photoshop',
    title: 'Photoshop Professional Certification',
    issuer: 'Educba',
    category: 'Design',
    skills: ['Photoshop Workflows', 'Color Grading', 'UI Mockups', 'Visual Crafting'],
    verified: true,
  },
  {
    id: 'greatlearning-photoshop',
    title: 'Intro to Graphic Design with Photoshop',
    issuer: 'Great Learning',
    category: 'Design',
    skills: ['Graphic Design Fundamentals', 'Photoshop Tools', 'Composition & Visual Balance'],
    verified: true,
  },
  {
    id: 'linkedin-graphic-design',
    title: 'What is Graphic Design?',
    issuer: 'LinkedIn Learning',
    category: 'Design',
    skills: ['Visual Design Principles', 'Color Theory', 'Typographic Hierarchy', 'Branding'],
    verified: true,
  },

  // ==========================================
  // 11. JAPANESE LANGUAGE PROFICIENCY
  // ==========================================
  {
    id: 'lang-jlpt-n5-n4',
    title: 'Japanese Language Proficiency (JLPT N5 & JLPT N4 Completed)',
    issuer: 'Japan Foundation / JEES',
    category: 'Enterprise',
    skills: ['JLPT N5 Completed', 'JLPT N4 Completed', 'Kanji & Grammar', 'Professional Japanese'],
    verified: true,
  },
];

export const CertificationsDrawer: React.FC<CertificationsDrawerProps> = ({
  isOpen,
  onClose,
  initialTab = 'ALL',
}) => {
  const [activeFilter, setActiveFilter] = useState<string>(initialTab);
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!isOpen) return null;

  const categories = [
    { id: 'ALL', label: 'All Credentials' },
    { id: 'Internships', label: 'Internships (11 Programs)' },
    { id: 'AWS', label: 'AWS (11 Badges/Certs)' },
    { id: 'HackerRank', label: 'HackerRank (8 Skills)' },
    { id: 'Cloud/DevOps', label: 'Cloud (Azure, GCP, OCI)' },
    { id: 'CyberSecurity', label: 'Cyber Security (SkillUp, Cisco)' },
    { id: 'AI/Data', label: 'AI & Data (Infosys, etc.)' },
    { id: 'Design', label: 'Design (Adobe Suite)' },
  ];

  const filteredCerts = certificatesData.filter((cert) => {
    const matchesFilter = activeFilter === 'ALL' || cert.category === activeFilter;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (cert.paperId && cert.paperId.includes(searchQuery)) ||
      cert.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#090b12] border border-[#ff1a1a]/50 rounded-2xl p-5 sm:p-8 shadow-[0_0_60px_rgba(255,26,26,0.35)]"
        id="certifications-modal"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-zinc-800 transition-colors z-20 cursor-pointer"
          aria-label="Close Certifications Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 sm:mb-8 pr-8">
          <div className="flex items-center gap-2 text-[#ff1a1a] font-chakra text-xs tracking-widest uppercase font-bold mb-1.5">
            <Sparkles className="w-3.5 h-3.5 drop-shadow-[0_0_6px_#ff1a1a]" />
            <span>&lt;CREDENTIALS_DOSSIER // METTU_SABARISH_PORTFOLIO&gt;</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h3 className="text-2xl sm:text-3xl font-orbitron font-extrabold text-white tracking-wider">
              CERTIFICATIONS & PROFESSIONAL RECORD
            </h3>
            <span className="text-xs sm:text-sm font-chakra font-bold text-[#ff1a1a] bg-[#ff1a1a]/10 border border-[#ff1a1a]/30 px-3 py-1 rounded-full self-start sm:self-auto">
              {filteredCerts.length} VERIFIED CREDENTIALS
            </span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 font-space mt-1.5 leading-relaxed">
            Full directory of verified certifications across <span className="text-zinc-200 font-semibold">AWS, Google Cloud, Microsoft Azure, Oracle, Cisco, HackerRank, Infosys, SkillUp, Eduonix, Great Learning, and Corporate Internships</span>.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search certificates, skills (e.g. AWS Lambda, Azure, SQL, Steganography, Photoshop)..."
              className="w-full bg-[#111422] border border-zinc-800 focus:border-[#ff1a1a] rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 outline-none transition-colors"
            />
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-chakra font-bold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === cat.id
                    ? 'bg-[#ff1a1a] text-black shadow-[0_0_15px_rgba(255,26,26,0.6)] font-black'
                    : 'bg-[#111422] text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="p-4 sm:p-5 rounded-xl bg-[#111422] border border-zinc-800 hover:border-[#ff1a1a]/60 hover:shadow-[0_0_20px_rgba(255,26,26,0.12)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Issuer & Verified Badge */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-chakra font-bold uppercase tracking-wider text-[#ff1a1a] bg-[#ff1a1a]/10 px-2.5 py-0.5 rounded border border-[#ff1a1a]/20">
                    {cert.issuer}
                  </span>
                  {cert.verified && (
                    <span className="flex items-center gap-1 text-[11px] font-chakra font-bold text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  )}
                </div>

                {/* Title */}
                <h4 className="text-sm sm:text-[15px] font-orbitron font-bold text-white group-hover:text-[#ff1a1a] transition-colors leading-snug mb-2.5">
                  {cert.title}
                </h4>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10.5px] font-space px-2 py-0.5 rounded bg-black/40 border border-zinc-800 text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-chakra text-zinc-400">
                <span className="text-zinc-500 uppercase tracking-wider">
                  Category: {cert.category}
                </span>
                <span className="text-[#ff1a1a] font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  Credential Ready <CheckCircle2 className="w-3 h-3 text-[#ff1a1a]" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredCerts.length === 0 && (
          <div className="py-12 text-center text-zinc-500 font-chakra text-sm">
            No credentials found matching "{searchQuery}". Try selecting another category or clear the search.
          </div>
        )}
      </div>
    </div>
  );
};

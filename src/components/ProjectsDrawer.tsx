import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ShieldAlert, 
  Lock, 
  Cpu, 
  Terminal, 
  Code2, 
  Gamepad2, 
  Usb, 
  Radio, 
  Layers, 
  Key, 
  ExternalLink,
  ChevronRight,
  Filter
} from 'lucide-react';

interface ProjectsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export type ProjectTier = 'ALL' | 'BASIC' | 'INTERMEDIATE' | 'EXPERT';

export interface ProjectItem {
  id: string;
  title: string;
  tier: 'BASIC' | 'INTERMEDIATE' | 'EXPERT';
  category: 'HARDWARE & ATTACK' | 'CRYPTOGRAPHY' | 'SECURITY AUTOMATION' | 'WEB & OS' | 'GAMES & UTILS';
  tag: string;
  summary: string;
  description: string;
  features: string[];
  tech: string[];
  metrics: string;
  icon: 'usb' | 'stego' | 'autotyper' | 'game' | 'scanner' | 'threat' | 'zerotrust' | 'firmware';
}

export const ProjectsDrawer: React.FC<ProjectsDrawerProps> = ({ isOpen, onClose }) => {
  const [selectedTier, setSelectedTier] = useState<ProjectTier>('ALL');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  if (!isOpen) return null;

  const projectCatalog: ProjectItem[] = [
    // --- BASIC / FOUNDATIONAL PROJECTS ---
    {
      id: 'image-steganography',
      title: 'Image-Steganography',
      tier: 'BASIC',
      category: 'CRYPTOGRAPHY',
      tag: 'Information Concealment',
      summary: 'Dual-method image carrier encoding using spatial LSB (Least Significant Bit) manipulation for covert plaintext and payload transport.',
      description: 'Engineered a spatial-domain digital steganography application allowing users to securely encode and decode hidden messages or secret byte streams within PNG/BMP/JPEG lossless carrier images. Integrates pixel bit-plane inspection and histogram preservation to evade visual and simple statistical detection.',
      features: [
        'LSB (Least Significant Bit) 1-bit & 2-bit channel bit-plane embedding',
        'AES-256 pre-encryption before spatial carrier injection',
        'Pixel difference analysis and carrier integrity validator',
        'Interactive preview comparing clean carrier vs stego-image with zero perceptual distortion'
      ],
      tech: ['Python', 'OpenCV', 'NumPy', 'Cryptography', 'Pillow'],
      metrics: 'Zero Perceptual Distortion (PSNR > 45dB)',
      icon: 'stego'
    },
    {
      id: 'usb-rubber-ducky',
      title: 'USB-Rubber Ducky (Physical Attack HID)',
      tier: 'BASIC',
      category: 'HARDWARE & ATTACK',
      tag: 'HID Injection & Exfiltration',
      summary: 'Custom USB HID keystroke injection payload suite for automated Wi-Fi credential harvesting, fast file exfiltration, and Android PIN brute-force simulation.',
      description: 'Constructed an automated BadUSB/Rubber Ducky physical security demonstration tool leveraging microcontroller HID emulation (Digispark ATtiny85 / Raspberry Pi Pico). Executes pre-programmed lightning keystroke scripts within seconds of physical connection to audit physical endpoint resistance.',
      features: [
        'Wi-Fi Password Harvesting: Instant extraction of stored WLAN cleartext profiles via netsh CLI to concealed webhook / flash drive',
        'Rapid File Stealing & Shadow Copy: Target exfiltration of specific file extensions (.docx, .env, .pdf) to hidden partitions within 5 seconds',
        'Android Lock PIN Cracker: Automated brute-force dictionary simulation with OTG connection and timing delay throttle management',
        'Custom Ducky Script compiler with payload toggle switches'
      ],
      tech: ['DuckyScript', 'Digispark (ATtiny85)', 'C++', 'PowerShell', 'Bash', 'OTG Android Protocol'],
      metrics: '< 5s Keystroke Execution Window',
      icon: 'usb'
    },
    {
      id: 'autotyper',
      title: 'AutoTyper (Automated Keystroke Utility)',
      tier: 'BASIC',
      category: 'GAMES & UTILS',
      tag: 'Desktop Automation',
      summary: 'High-speed keyboard input emulator with configurable human typing variance, delay triggers, and clipboard macro automation.',
      description: 'A native utility designed to automate high-volume repetitive text input, typing test benchmarks, and form submissions. Features realistic stochastic delay algorithms to mimic natural human typing variance or achieve blazing mechanical write speeds up to 300+ WPM.',
      features: [
        'Customizable WPM (Words Per Minute) throttle and stochastic micro-delay jitter',
        'Global system hotkey triggers (F6/F8 start/pause/kill switches)',
        'Clipboard buffer watcher with multi-line auto-indent preservation',
        'Multi-profile macro preset storage for repetitive dev workflows'
      ],
      tech: ['Python', 'PyAutoGUI', 'Tkinter / PyQt', 'pynput', 'Threading'],
      metrics: '350+ WPM Turbo Keystroke Rate',
      icon: 'autotyper'
    },
    {
      id: 'flappy-bird',
      title: 'Flappy-Bird (Custom Physics Arcade)',
      tier: 'BASIC',
      category: 'GAMES & UTILS',
      tag: 'Game Engine & Physics',
      summary: 'Retro arcade game built with native frame-locked canvas physics, collision bounding boxes, and dynamic obstacle procedural generation.',
      description: 'Classic side-scrolling arcade remake built to master real-time 60 FPS physics loops, kinematic jump velocities, gravity simulation, pipe coordinate generation, and spatial hitbox collision detection algorithms.',
      features: [
        'Smooth delta-time kinematics with sub-pixel gravity and flap impulses',
        'AABB (Axis-Aligned Bounding Box) tight polygon collision detection',
        'Procedural obstacle pipe gap generation and difficulty scaling',
        'Local high score persistent storage and retro 8-bit sound effects synthesizer'
      ],
      tech: ['JavaScript / TypeScript', 'HTML5 Canvas API', 'Web Audio API', 'CSS Animations'],
      metrics: 'Solid 60 FPS Engine • 0ms Lag',
      icon: 'game'
    },

    // --- INTERMEDIATE PROJECTS ---
    {
      id: 'web-vuln-scanner',
      title: 'OWASP-Sentinel: Web Vulnerability Scanner',
      tier: 'INTERMEDIATE',
      category: 'SECURITY AUTOMATION',
      tag: 'DAST & Web Audit',
      summary: 'Automated dynamic application security testing (DAST) scanner auditing endpoints against OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF).',
      description: 'An automated vulnerability assessment engine that crawls target web applications, crawls dynamic query parameters, and injects safe diagnostic fuzzing payloads to detect SQL injections, Cross-Site Scripting (Reflected & Stored), missing security headers, and open CORS misconfigurations.',
      features: [
        'Automated spider and parameter fuzzing pipeline with heuristic response analysis',
        'Detection modules for SQLi (error & time-based blind), XSS, open redirects, and CSRF',
        'Automated HTTP security header posture scoring (CSP, HSTS, X-Frame-Options)',
        'Generates comprehensive executive summary and developer remediation JSON/HTML reports'
      ],
      tech: ['Python', 'Requests', 'BeautifulSoup4', 'Burp Suite REST API', 'Docker', 'SQLite'],
      metrics: 'Scans 150+ Endpoints in < 45s',
      icon: 'scanner'
    },
    {
      id: 'threat-telemetry-siem',
      title: 'Aegis SIEM: Real-Time Threat Telemetry Engine',
      tier: 'INTERMEDIATE',
      category: 'SECURITY AUTOMATION',
      tag: 'SOC & Log Intelligence',
      summary: 'High-throughput security log ingestion pipeline and SOC monitoring dashboard parsing live Nginx/Apache logs and network PCAP dumps.',
      description: 'A modular security information and event management (SIEM) dashboard designed to aggregate distributed access logs and packet captures. Automatically correlates IP reputation, flags brute-force bursts, and triggers alert webhooks upon detecting known Indicator of Compromise (IOC) signatures.',
      features: [
        'Real-time streaming parser for Nginx, Apache, and Linux auth.log streams',
        'Automated detection of brute-force SSH attacks, directory busting, and port scans',
        'Threat intelligence enrichment integrating AbuseIPDB & VirusTotal APIs',
        'Interactive visual threat map with geographic IP clustering and severity meters'
      ],
      tech: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Wireshark / Scapy', 'Recharts'],
      metrics: 'Parses 5,000+ Events / Sec',
      icon: 'threat'
    },
    {
      id: 'iot-packet-sniffer',
      title: 'Micro-Sniffer: IoT Network Packet Auditor',
      tier: 'INTERMEDIATE',
      category: 'HARDWARE & ATTACK',
      tag: 'Network Forensics',
      summary: 'Promiscuous packet analyzer capturing local WLAN and MQTT telemetry to detect unencrypted credentials and rogue network hosts.',
      description: 'A network packet auditing tool engineered to capture raw Ethernet/Wi-Fi frames and parse IoT communication protocols. Unpacks MQTT, HTTP, DNS, and ARP broadcast packets to discover unencrypted cleartext sensor transmissions and active ARP spoofing intrusions.',
      features: [
        'Promiscuous raw socket packet sniffing with live BPF (Berkeley Packet Filter) syntax',
        'Deep protocol decoder for ARP, DNS, DHCP, HTTP, and MQTT sensor payloads',
        'ARP poisoning and Man-in-the-Middle (MitM) intrusion detector with visual alerts',
        'Automated PCAP file export for downstream Wireshark forensics'
      ],
      tech: ['Python', 'Scapy', 'Socket Programming', 'Linux Raw Sockets', 'Tkinter UI'],
      metrics: 'Zero Packet Loss on 100Mbps Link',
      icon: 'firmware'
    },

    // --- EXPERT / ADVANCED RESEARCH PROJECTS ---
    {
      id: 'visual-crypto-stego',
      title: 'Secure Data Transmission: Stego + Visual Cryptography',
      tier: 'EXPERT',
      category: 'CRYPTOGRAPHY',
      tag: 'Cryptographic Security',
      summary: 'Dual-layer quantum-resilient cryptographic system uniting (2,2) Visual Secret Sharing pixel expansion with spatial carrier steganography.',
      description: 'An advanced dual-layer cryptographic transmission framework. Deconstructs confidential images into two random noise shares using (2,2) Visual Cryptography threshold scheme. Each share is camouflaged inside distinct spatial image carriers using advanced LSB steganography, ensuring mathematical zero plaintext metadata is ever exposed to network sniffers.',
      features: [
        'Threshold (2,2) Visual Cryptography pixel expansion matrix transformation',
        'Lossless secret reconstruction through optical share superposition (Boolean XOR/OR)',
        'Carrier-in-carrier LSB spatial camouflage with dynamic pixel key distribution',
        'Mathematically immune to brute-force frequency and structural histogram steganalysis'
      ],
      tech: ['Python', 'NumPy', 'OpenCV', 'PyCryptodome', 'React', 'Tailwind CSS'],
      metrics: 'Zero Plaintext Leakage • (2,2) VSS',
      icon: 'stego'
    },
    {
      id: 'zero-trust-gateway',
      title: 'Zero-Trust Micro-Segmented Access Controller',
      tier: 'EXPERT',
      category: 'WEB & OS',
      tag: 'Enterprise Architecture',
      summary: 'Identity-aware zero-trust proxy with continuous device posture verification, ephemeral mTLS certificates, and dynamic RBAC policies.',
      description: 'An enterprise-grade reverse proxy enforcing zero-trust architecture ("Never Trust, Always Verify"). Replaces traditional perimeter VPNs by inspecting every single request for valid device health assertions, cryptographically signed short-lived JWT tokens, and geographic risk anomaly scores before granting access to internal microservices.',
      features: [
        'Continuous device posture verification (OS integrity, secure boot, patch levels)',
        'Short-lived ephemeral JWT token generation with automated cryptographic rotation',
        'Fine-grained attribute-based access control (ABAC) and role-based policies (RBAC)',
        'Real-time anomaly scoring with automated session revocation and step-up MFA challenge'
      ],
      tech: ['Node.js', 'TypeScript', 'Express', 'Docker', 'AWS IAM / S3', 'Redis', 'WebCrypto API'],
      metrics: '< 8ms Proxy Latency Overhead',
      icon: 'zerotrust'
    },
    {
      id: 'anti-tamper-firmware',
      title: 'Firmware-Shield: Cryptographic Binary Guard',
      tier: 'EXPERT',
      category: 'HARDWARE & ATTACK',
      tag: 'Embedded & Binary Security',
      summary: 'Hardware-backed firmware integrity verification system utilizing SHA-256 HMAC digest chains and encrypted bootloader handshake.',
      description: 'An embedded defense platform designed to protect microcontroller firmware and IoT hardware against physical memory readout, unauthorized firmware flashing, and cold-boot binary modifications through cryptographic root-of-trust validation.',
      features: [
        'Secure boot simulation with asymmetric ECDSA signature validation on boot cycle',
        'Runtime integrity check calculating continuous memory block HMAC hashes',
        'Tamper-triggered auto-zeroization of sensitive cryptographic key storage',
        'Encrypted OTA (Over-The-Air) firmware update pipeline with rollback prevention'
      ],
      tech: ['C / C++', 'ARM Cortex Architecture', 'Cryptography Libraries', 'Linux', 'Python Host CLI'],
      metrics: '100% Tamper Detection Rate',
      icon: 'firmware'
    }
  ];

  const filteredProjects = selectedTier === 'ALL' 
    ? projectCatalog 
    : projectCatalog.filter(p => p.tier === selectedTier);

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'BASIC':
        return 'bg-blue-500/15 text-blue-400 border-blue-500/30';
      case 'INTERMEDIATE':
        return 'bg-amber-500/15 text-amber-400 border-amber-500/30';
      case 'EXPERT':
        return 'bg-[#ff1a1a]/20 text-[#ff1a1a] border-[#ff1a1a]/40 shadow-[0_0_12px_rgba(255,26,26,0.3)]';
      default:
        return 'bg-white/10 text-zinc-300 border-white/20';
    }
  };

  const getProjectIcon = (icon: string) => {
    switch (icon) {
      case 'usb':
        return <Usb className="w-5 h-5 text-[#ff1a1a]" />;
      case 'stego':
        return <Lock className="w-5 h-5 text-[#ff1a1a]" />;
      case 'autotyper':
        return <Terminal className="w-5 h-5 text-[#ff1a1a]" />;
      case 'game':
        return <Gamepad2 className="w-5 h-5 text-[#ff1a1a]" />;
      case 'scanner':
        return <ShieldAlert className="w-5 h-5 text-[#ff1a1a]" />;
      case 'threat':
        return <Radio className="w-5 h-5 text-[#ff1a1a]" />;
      case 'zerotrust':
        return <Key className="w-5 h-5 text-[#ff1a1a]" />;
      case 'firmware':
        return <Cpu className="w-5 h-5 text-[#ff1a1a]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#ff1a1a]" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-2xl animate-fadeIn overflow-y-auto">
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-[#070911] border border-[#ff1a1a]/40 rounded-2xl shadow-[0_0_70px_rgba(255,26,26,0.3)] overflow-hidden"
        id="projects-modal"
      >
        {/* Header Bar */}
        <div className="px-5 sm:px-8 py-4 border-b border-white/[0.08] bg-[#0c0f1a]/95 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ff1a1a]/15 border border-[#ff1a1a]/40 flex items-center justify-center text-[#ff1a1a] shadow-[0_0_15px_rgba(255,26,26,0.3)]">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h3 className="font-orbitron font-extrabold text-white text-base sm:text-lg tracking-wider">
                  PROJECTS <span className="text-[#ff1a1a] drop-shadow-[0_0_8px_rgba(255,26,26,0.5)]">ARCHIVE</span>
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-chakra font-black tracking-widest bg-[#ff1a1a]/20 text-[#ff1a1a] border border-[#ff1a1a]/40 uppercase">
                  {projectCatalog.length} REPOSITORIES
                </span>
              </div>
              <p className="text-xs font-space text-zinc-400">
                From foundational physical exploits to published cryptographic research & enterprise tools
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tier Filter Bar */}
        <div className="px-5 sm:px-8 py-3 bg-[#090b14] border-b border-white/[0.06] flex items-center justify-between flex-wrap gap-2 text-xs font-chakra font-bold">
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="text-zinc-500 flex items-center gap-1 mr-1 text-[11px]">
              <Filter className="w-3.5 h-3.5" /> LEVEL:
            </span>
            {(['ALL', 'BASIC', 'INTERMEDIATE', 'EXPERT'] as ProjectTier[]).map((tier) => {
              const count = tier === 'ALL' ? projectCatalog.length : projectCatalog.filter(p => p.tier === tier).length;
              return (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier)}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                    selectedTier === tier
                      ? 'bg-[#ff1a1a] text-white shadow-[0_0_15px_rgba(255,26,26,0.5)] font-black'
                      : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.07] border border-white/[0.05]'
                  }`}
                >
                  <span>{tier}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${selectedTier === tier ? 'bg-black/40 text-white' : 'bg-zinc-800 text-zinc-400'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <span className="text-[11px] text-zinc-500 hidden sm:inline font-mono">
            Click any card to inspect full security specs
          </span>
        </div>

        {/* Projects Grid Container */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredProjects.map((proj) => (
              <div 
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-[#ff1a1a]/60 hover:bg-gradient-to-br hover:from-[#ff1a1a]/[0.05] hover:to-transparent transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(255,26,26,0.15)]"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#ff1a1a]/15 border border-[#ff1a1a]/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        {getProjectIcon(proj.icon)}
                      </div>
                      <div>
                        <h4 className="text-base font-orbitron font-extrabold text-white group-hover:text-[#ff1a1a] transition-colors leading-tight">
                          {proj.title}
                        </h4>
                        <span className="text-[10px] font-chakra uppercase font-bold text-zinc-400 tracking-wider">
                          {proj.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span className={`text-[10px] font-chakra font-black tracking-wider px-2 py-0.5 rounded border uppercase whitespace-nowrap ${getTierColor(proj.tier)}`}>
                        {proj.tier}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-zinc-300 font-space leading-relaxed line-clamp-3 mb-3">
                    {proj.summary}
                  </p>

                  {/* Key Feature Highlight */}
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.04] mb-3">
                    <div className="flex items-center gap-1.5 text-[11px] font-chakra font-bold text-[#ff1a1a] mb-1">
                      <Sparkles className="w-3 h-3" />
                      <span>KEY HIGHLIGHT:</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 font-space line-clamp-2">
                      {proj.features[0]}
                    </p>
                  </div>
                </div>

                {/* Bottom Tech Stack & Metrics */}
                <div className="pt-3 border-t border-white/[0.06] flex flex-col gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900/90 text-zinc-300 border border-zinc-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-chakra pt-1">
                    <span className="text-zinc-400 font-medium">
                      {proj.metrics}
                    </span>
                    <span className="text-[#ff1a1a] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      INSPECT SPECS <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deep Dive Project Detail Modal Overlay */}
        {selectedProject && (
          <div className="absolute inset-0 z-20 bg-black/95 backdrop-blur-md p-5 sm:p-8 flex flex-col overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#ff1a1a]/20 border border-[#ff1a1a]/50 flex items-center justify-center text-[#ff1a1a]">
                  {getProjectIcon(selectedProject.icon)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-chakra font-black tracking-widest px-2 py-0.5 rounded border uppercase ${getTierColor(selectedProject.tier)}`}>
                      {selectedProject.tier} LEVEL
                    </span>
                    <span className="text-xs font-chakra text-zinc-400 uppercase tracking-wider font-bold">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-orbitron font-extrabold text-white mt-0.5">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-5 text-zinc-300 font-space text-xs sm:text-sm leading-relaxed flex-1">
              <div>
                <h4 className="text-xs font-orbitron font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#ff1a1a]" />
                  <span>ARCHITECTURE & SYSTEM OVERVIEW</span>
                </h4>
                <p className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-zinc-300">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-orbitron font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#ff1a1a]" />
                  <span>CORE TECHNICAL CAPABILITIES & PAYLOADS</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.features.map((feat, i) => (
                    <div key={i} className="p-3 rounded-lg bg-black/40 border border-white/[0.05] flex items-start gap-2.5">
                      <span className="text-[#ff1a1a] font-bold mt-0.5">▸</span>
                      <span className="text-xs text-zinc-300 leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-orbitron font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#ff1a1a]" />
                  <span>TECHNOLOGY STACK & INTEGRATIONS</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 rounded-lg bg-[#ff1a1a]/10 border border-[#ff1a1a]/30 text-white font-mono text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#ff1a1a]/[0.08] border border-[#ff1a1a]/30 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-[#ff1a1a]" />
                  <span className="text-xs font-chakra font-bold text-white uppercase tracking-wider">
                    PERFORMANCE & SECURITY BENCHMARK:
                  </span>
                </div>
                <span className="text-xs font-chakra font-black text-[#ff1a1a] px-3 py-1 rounded bg-black/50 border border-[#ff1a1a]/40">
                  {selectedProject.metrics}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-xl bg-[#ff1a1a] hover:bg-[#ff3333] text-white text-xs font-chakra font-black tracking-widest transition-all cursor-pointer shadow-[0_0_15px_rgba(255,26,26,0.4)]"
              >
                RETURN TO REPOSITORIES
              </button>
            </div>
          </div>
        )}

        {/* Footer info */}
        <div className="px-5 sm:px-8 py-3 border-t border-white/[0.08] bg-[#0c0f1a]/95 flex items-center justify-between gap-3 text-xs font-chakra text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>CATEGORIZED BY DOMAIN COMPLEXITY (BASIC · INTERMEDIATE · EXPERT)</span>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 hover:text-white transition-colors cursor-pointer"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

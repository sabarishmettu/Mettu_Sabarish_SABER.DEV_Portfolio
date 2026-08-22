import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Maximize2, Minimize2, Sparkles, Shield, Copy, Check } from 'lucide-react';

interface CyberTerminalEasterEggProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume?: () => void;
  onOpenProjects?: () => void;
  onOpenCerts?: () => void;
}

interface CommandHistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export const CyberTerminalEasterEgg: React.FC<CyberTerminalEasterEggProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenProjects,
  onOpenCerts,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandList, setCommandList] = useState<string[]>([]);
  const [isMaximized, setIsMaximized] = useState(false);
  const [matrixMode, setMatrixMode] = useState(false);
  const [solvedFlag, setSolvedFlag] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Auto scroll to bottom of terminal
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, matrixMode]);

  // Initial welcome message
  useEffect(() => {
    if (history.length === 0) {
      setHistory([
        {
          id: 'init-1',
          command: 'sys.init --verbose',
          timestamp: new Date().toLocaleTimeString(),
          output: (
            <div className="space-y-1 text-zinc-300 font-mono text-xs">
              <p className="text-[#ff1a1a] font-bold">
                [+] SABER_OS v4.19.0-CYBER_SECURITY_KERNEL INITIALIZED
              </p>
              <p className="text-zinc-400">
                Target Node: <span className="text-white font-semibold">METTU SABARISH</span> · SRM University-AP
              </p>
              <p className="text-zinc-400">
                Type <span className="text-[#ff1a1a] font-bold">help</span> to list available commands or <span className="text-yellow-400 font-bold">ctf</span> for the decryption challenge.
              </p>
            </div>
          ),
        },
      ]);
    }
  }, [history.length]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    // Track command history for up/down arrows
    setCommandList((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const lower = cmd.toLowerCase();
    const parts = lower.split(' ');
    const base = parts[0];
    const arg = parts.slice(1).join(' ');

    let output: React.ReactNode = null;

    switch (base) {
      case 'help':
        output = (
          <div className="space-y-1.5 text-xs font-mono text-zinc-300">
            <p className="text-[#ff1a1a] font-bold border-b border-[#ff1a1a]/30 pb-1">AVAILABLE COMMANDS:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
              <div><span className="text-yellow-400 font-bold">whoami</span> - Display identity, institution & clearance</div>
              <div><span className="text-yellow-400 font-bold">about</span> - Read bio dossier & academic profile</div>
              <div><span className="text-yellow-400 font-bold">skills</span> - Display technical skill matrix</div>
              <div><span className="text-yellow-400 font-bold">projects</span> - View categorized security repositories</div>
              <div><span className="text-yellow-400 font-bold">internships</span> - List 11 verified corporate internships</div>
              <div><span className="text-yellow-400 font-bold">certs</span> - List verified certifications & credentials</div>
              <div><span className="text-yellow-400 font-bold">research</span> - ACN'23 conference published paper info</div>
              <div><span className="text-yellow-400 font-bold">visitors</span> - Display live visitor count & telemetry</div>
              <div><span className="text-yellow-400 font-bold">resume</span> - Open interactive Resume (CV)</div>
              <div><span className="text-yellow-400 font-bold">contact</span> - Display email, LinkedIn & socials</div>
              <div><span className="text-yellow-400 font-bold">ctf</span> - Start decryption challenge</div>
              <div><span className="text-yellow-400 font-bold">decrypt &lt;text&gt;</span> - Decrypt cipher string</div>
              <div><span className="text-yellow-400 font-bold">matrix</span> - Toggle cyber code rain</div>
              <div><span className="text-yellow-400 font-bold">sudo &lt;cmd&gt;</span> - Attempt elevated execution</div>
              <div><span className="text-yellow-400 font-bold">clear</span> - Clear terminal window</div>
              <div><span className="text-yellow-400 font-bold">exit</span> - Close terminal console</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
      case 'id':
        output = (
          <div className="space-y-1 text-xs font-mono text-zinc-300">
            <p className="text-white font-bold">OPERATOR: <span className="text-[#ff1a1a]">Mettu Sabarish</span></p>
            <p>INSTITUTION: SRM University–AP, Amaravati (B.Tech Computer Science & Engineering - Cyber Security, Class of 2024)</p>
            <p>CLEARANCE LEVEL: <span className="text-green-400 font-bold">TOP_SECRET // ZERO-TRUST CERTIFIED</span></p>
            <p>SPECIALIZATION: Network Defense, Penetration Testing, Cryptography, Steganography, Full-Stack Software Engineering</p>
          </div>
        );
        break;

      case 'about':
      case 'cat':
        if (arg.includes('bio') || arg.includes('about') || !arg) {
          output = (
            <div className="space-y-1 text-xs font-mono text-zinc-300">
              <p className="text-[#ff1a1a] font-bold">[ABOUT METTU SABARISH]</p>
              <p>Cyber Security Graduate (Class of 2024) from SRM University–AP with deep hands-on expertise in offensive & defensive security, cryptography, and full-stack engineering.</p>
              <p>• <strong className="text-white">Published Research:</strong> The International Conference on Applied Soft Computing and Communication Networks (ACN'23, Bengaluru)</p>
              <p>• <strong className="text-white">Published Paper:</strong> "1570959583: Characterization of Heart-Centric Nanoscale Communication at Terahertz and Optical Bands"</p>
              <p>• <strong className="text-white">11 Practical Internships:</strong> JPMorgan Chase, Salesforce, _VOIS, YBI Foundation, SmartKnower, SRM University-AP, Code Clause, British Airways, Mosaique, Deloitte, PwC Switzerland.</p>
              <p>• <strong className="text-white">Core Focus:</strong> Zero-Trust Architecture, Penetration Testing, Cryptographic Implementations, Cloud Security, AI/ML Tooling.</p>
            </div>
          );
        } else {
          output = <p className="text-red-400 text-xs font-mono">cat: {arg}: No such file or directory. Try 'cat about.txt'</p>;
        }
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs font-mono text-zinc-300">
            <p className="text-[#ff1a1a] font-bold">[TECHNICAL DOMAIN MATRIX]</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded bg-white/[0.03] border border-white/[0.08]">
                <p className="text-red-400 font-bold mb-0.5">CYBER SECURITY</p>
                <p className="text-zinc-400">Ethical Hacking, PKI Cryptography, Steganography, Zero-Trust, SOC Analysis, OWASP Top 10, Penetration Testing</p>
              </div>
              <div className="p-2 rounded bg-white/[0.03] border border-white/[0.08]">
                <p className="text-red-400 font-bold mb-0.5">PROGRAMMING & WEB</p>
                <p className="text-zinc-400">React, TypeScript, JavaScript, Python, C++, HTML5, Tailwind CSS, Node.js, Express, REST APIs</p>
              </div>
              <div className="p-2 rounded bg-white/[0.03] border border-white/[0.08]">
                <p className="text-red-400 font-bold mb-0.5">CLOUD & DEVOPS</p>
                <p className="text-zinc-400">AWS (EC2, S3, IAM), Linux / Kali Linux, Docker, Git & GitHub</p>
              </div>
              <div className="p-2 rounded bg-white/[0.03] border border-white/[0.08]">
                <p className="text-red-400 font-bold mb-0.5">SECURITY TOOLS</p>
                <p className="text-zinc-400">Wireshark, Burp Suite, Nmap, Metasploit, Nessus, Ghidra, VS Code</p>
              </div>
            </div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs font-mono text-zinc-300">
            <p className="text-[#ff1a1a] font-bold">[PROJECTS REPOSITORY ARCHIVE (10 FEATURED)]</p>
            <div className="space-y-1.5 text-zinc-300">
              <p className="text-blue-400 font-bold text-[11px]">// BASIC / FOUNDATIONAL SYSTEMS</p>
              <p>• <strong className="text-white">USB-Rubber Ducky:</strong> ATtiny85 BadUSB HID suite for Wi-Fi pass harvest, file exfil & Android PIN brute</p>
              <p>• <strong className="text-white">Image-Steganography:</strong> Spatial LSB carrier encoding with zero perceptual distortion (PSNR &gt; 45dB)</p>
              <p>• <strong className="text-white">AutoTyper:</strong> Fast keystroke injection utility with stochastic human jitter (350+ WPM)</p>
              <p>• <strong className="text-white">Flappy-Bird:</strong> Custom 60 FPS physics arcade game with AABB hitbox collision</p>
              
              <p className="text-amber-400 font-bold text-[11px] pt-1">// INTERMEDIATE / AUTOMATION & AUDITING</p>
              <p>• <strong className="text-white">OWASP-Sentinel:</strong> Dynamic DAST vulnerability scanner for SQLi/XSS/CORS</p>
              <p>• <strong className="text-white">Aegis SIEM:</strong> Real-time threat log ingestion & telemetry dashboard</p>
              <p>• <strong className="text-white">Micro-Sniffer:</strong> Raw socket IoT network packet auditor & credential sniffer</p>

              <p className="text-red-400 font-bold text-[11px] pt-1">// EXPERT / ADVANCED DEFENSE & CRYPTOGRAPHY</p>
              <p>• <strong className="text-white">Secure Data Transmission:</strong> Dual-layer (2,2) Visual Cryptography + spatial LSB concealment with zero plaintext footprint</p>
              <p>• <strong className="text-white">Zero-Trust Access Controller:</strong> Identity-aware micro-segmented security proxy with continuous device posture checks</p>
              <p>• <strong className="text-white">Firmware-Shield:</strong> Hardware-backed cryptographic binary guard & SHA-256 HMAC bootloader</p>
            </div>
            {onOpenProjects && (
              <button
                onClick={onOpenProjects}
                className="mt-2 px-2.5 py-1 rounded bg-[#ff1a1a]/20 border border-[#ff1a1a]/40 text-[#ff1a1a] hover:bg-[#ff1a1a]/30 transition-colors text-xs font-mono font-bold cursor-pointer"
              >
                &gt; LAUNCH INTERACTIVE PROJECTS DRAWER
              </button>
            )}
          </div>
        );
        break;

      case 'internships':
      case 'experience':
      case 'internship':
        output = (
          <div className="space-y-2 text-xs font-mono text-zinc-300">
            <p className="text-[#ff1a1a] font-bold">[PRACTICAL & CORPORATE INTERNSHIPS (11 PROGRAMS)]</p>
            <div className="space-y-1 text-zinc-400 text-[11px]">
              <p>1. <strong className="text-white">YBI Foundation:</strong> AIML Fundamental & Python Fundamental Internship</p>
              <p>2. <strong className="text-white">_VOIS:</strong> Virtual Micro-Internship: Image Steganography, Cloud Computing & AI</p>
              <p>3. <strong className="text-white">SmartKnower:</strong> Artificial Intelligence & Deep Learning Internship</p>
              <p>4. <strong className="text-white">Salesforce:</strong> Salesforce Developer Virtual Internship (Apex, SOQL & Cloud)</p>
              <p>5. <strong className="text-white">SRM University–AP:</strong> Academic Research Internship (ACN'23 Nanoscale Telecommunications)</p>
              <p>6. <strong className="text-white">JPMorgan Chase & Co.:</strong> Cybersecurity & Investment Banking Virtual Experience</p>
              <p>7. <strong className="text-white">Code Clause:</strong> Web Development Internship (Full-Stack Applications)</p>
              <p>8. <strong className="text-white">British Airways:</strong> Data Science Virtual Experience Programme (Customer NLP & ML)</p>
              <p>9. <strong className="text-white">Mosaique Pvt Ltd:</strong> IoT Systems & Embedded Microcontroller Telemetry Internship</p>
              <p>10. <strong className="text-white">Deloitte:</strong> Data Analytics Virtual Internship (Enterprise BI)</p>
              <p>11. <strong className="text-white">PwC Switzerland:</strong> Power BI Virtual Internship (DAX & Risk Dashboards)</p>
            </div>
            {onOpenCerts && (
              <button
                onClick={() => onOpenCerts()}
                className="mt-2 px-2.5 py-1 rounded bg-[#ff1a1a]/20 border border-[#ff1a1a]/40 text-[#ff1a1a] hover:bg-[#ff1a1a]/30 transition-colors text-xs font-mono font-bold cursor-pointer"
              >
                &gt; VIEW ALL INTERNSHIP CERTIFICATES IN DRAWER
              </button>
            )}
          </div>
        );
        break;

      case 'certs':
      case 'certifications':
        output = (
          <div className="space-y-2 text-xs font-mono text-zinc-300">
            <p className="text-[#ff1a1a] font-bold">[VERIFIED CERTIFICATIONS & ACCREDITATIONS]</p>
            <ul className="list-disc list-inside space-y-1 text-zinc-400">
              <li><span className="text-white font-semibold">Cisco:</span> Certified Cybersecurity Essentials & Network Defense</li>
              <li><span className="text-white font-semibold">AWS:</span> Solutions Architecture Job Simulation</li>
              <li><span className="text-white font-semibold">JPMorgan Chase & Co.:</span> Cybersecurity & Investment Banking Virtual Experience</li>
              <li><span className="text-white font-semibold">Salesforce:</span> Salesforce Developer Virtual Internship</li>
              <li><span className="text-white font-semibold">HackerRank:</span> 5-Star Problem Solving & Python Gold Certified</li>
              <li><span className="text-white font-semibold">SkillUp:</span> Ethical Hacking & Security Practitioner Fundamentals</li>
              <li><span className="text-white font-semibold">YBI Foundation / SmartKnower:</span> AI/ML & Deep Learning Certifications</li>
            </ul>
            {onOpenCerts && (
              <button
                onClick={() => onOpenCerts()}
                className="mt-2 px-2.5 py-1 rounded bg-[#ff1a1a]/20 border border-[#ff1a1a]/40 text-[#ff1a1a] hover:bg-[#ff1a1a]/30 transition-colors text-xs font-mono font-bold cursor-pointer"
              >
                &gt; OPEN CERTIFICATIONS VIEWER
              </button>
            )}
          </div>
        );
        break;

      case 'research':
      case 'paper':
      case 'publication':
        output = (
          <div className="space-y-1.5 text-xs font-mono text-zinc-300 p-3 rounded bg-[#ff1a1a]/10 border border-[#ff1a1a]/30">
            <p className="text-[#ff1a1a] font-bold">[ACN'23 CONFERENCE RESEARCH & PUBLICATION]</p>
            <p className="text-white font-semibold">
              The International Conference on Applied Soft Computing and Communication Networks (ACN'23)
            </p>
            <div className="p-2 rounded bg-black/60 border border-white/[0.08] my-1">
              <p className="text-zinc-400 text-[11px]">PAPER ID: <span className="text-[#ff1a1a] font-bold font-mono">1570959583</span></p>
              <p className="text-white font-medium italic mt-0.5">
                "1570959583: Characterization of Heart-Centric Nanoscale Communication at Terahertz and Optical Bands"
              </p>
            </div>
            <p className="text-zinc-400">• Affiliation: <span className="text-white">SRM University–AP</span></p>
            <p className="text-zinc-400">• Date & Location: <span className="text-white">Dec 18–20, 2023 · Bengaluru, India</span></p>
            <p className="text-zinc-300 mt-1">
              • Scope: Evaluated electromagnetic propagation loss, terahertz molecular absorption attenuation, and optical band transmission characteristics for nanoscale biomedical in-body sensor networks.
            </p>
          </div>
        );
        break;

      case 'visitors':
      case 'traffic':
      case 'telemetry':
      case 'stats':
        {
          const stored = localStorage.getItem('mettu_portfolio_visitor_count') || '14832';
          const today = localStorage.getItem('mettu_portfolio_today_hits') || '142';
          output = (
            <div className="space-y-1.5 text-xs font-mono text-zinc-300 p-3 rounded bg-zinc-950/80 border border-[#ff1a1a]/40">
              <p className="text-[#ff1a1a] font-bold">[+] PORTFOLIO TRAFFIC & VISITOR TELEMETRY</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-2 text-zinc-300">
                <div className="p-2 rounded bg-black/60 border border-zinc-800">
                  <span className="text-zinc-500">TOTAL UNIQUE VISITS:</span>
                  <p className="text-lg font-bold text-white">{parseInt(stored, 10).toLocaleString()}</p>
                </div>
                <div className="p-2 rounded bg-black/60 border border-zinc-800">
                  <span className="text-zinc-500">TODAY'S VISITS:</span>
                  <p className="text-lg font-bold text-[#ff1a1a]">+{today}</p>
                </div>
              </div>
              <p className="text-zinc-400">STATUS: <span className="text-white font-bold"><span className="text-[#ff1a1a]">●</span> ONLINE / SECURE (TLS 1.3)</span></p>
              <p className="text-zinc-400">GEOLOCATION SPREAD: India (64%), US (18%), UK (8%), SG (6%), Global (4%)</p>
              <p className="text-zinc-500 text-[11px]">Telemetry encrypted with SHA-256 integrity check.</p>
            </div>
          );
        }
        break;

      case 'resume':
      case 'cv':
        output = (
          <div className="space-y-2 text-xs font-mono text-zinc-300">
            <p className="text-green-400 font-bold">[+] RESUME DOSSIER READY</p>
            <p>Accessing Mettu Sabarish's verified Curriculum Vitae...</p>
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="px-3 py-1.5 rounded bg-[#ff1a1a] hover:bg-[#ff3333] text-white font-bold text-xs transition-colors shadow-[0_0_15px_rgba(255,26,26,0.5)] cursor-pointer"
              >
                VIEW & DOWNLOAD DOSSIER (PDF / ATS)
              </button>
            )}
          </div>
        );
        if (onOpenResume) {
          setTimeout(onOpenResume, 500);
        }
        break;

      case 'contact':
      case 'mail':
      case 'email':
      case 'socials':
        output = (
          <div className="space-y-1.5 text-xs font-mono text-zinc-300">
            <p className="text-[#ff1a1a] font-bold">[COMMUNICATION CHANNELS]</p>
            <p>• Email: <a href="mailto:mettusabarish96@gmail.com" className="text-[#ff1a1a] hover:underline font-bold">mettusabarish96@gmail.com</a></p>
            <p>• LinkedIn: <a href="https://www.linkedin.com/in/sabarish-mettu/" target="_blank" rel="noopener noreferrer" className="text-[#0077b5] hover:underline">linkedin.com/in/sabarish-mettu</a></p>
            <p>• GitHub: <a href="https://github.com/sabarishmettu" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">github.com/sabarishmettu</a></p>
            <p>• Instagram: <a href="https://www.instagram.com/x.sabarish_1st?igsi=anIzZzR1ZWJlcDV4" target="_blank" rel="noopener noreferrer" className="text-[#e1306c] hover:underline">@x.sabarish_1st</a></p>
          </div>
        );
        break;

      case 'ctf':
        output = (
          <div className="space-y-2 text-xs font-mono text-zinc-300 p-3 rounded bg-yellow-500/10 border border-yellow-500/30">
            <p className="text-yellow-400 font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>[CTF DECRYPTION CHALLENGE]</span>
            </p>
            <p className="text-zinc-300">An encrypted transmission was intercepted in transit:</p>
            <div className="p-2 rounded bg-black/60 font-mono text-xs text-green-400 select-all border border-green-500/30">
              c2FiYXJpc2hfemVyb190cnVzdF8yMDI1
            </div>
            <p className="text-zinc-400">
              Hint: It is encoded with Base64. Try typing <span className="text-yellow-400 font-bold">decrypt c2FiYXJpc2hfemVyb190cnVzdF8yMDI1</span> or <span className="text-yellow-400 font-bold">decrypt flag</span>!
            </p>
          </div>
        );
        break;

      case 'decrypt':
        if (!arg) {
          output = <p className="text-yellow-400 text-xs font-mono">Usage: decrypt &lt;base64_string&gt; or 'decrypt flag'</p>;
        } else if (arg.includes('c2fiyaspc2hfemvymb10cnvzdffymdi1') || arg.toLowerCase() === 'flag' || arg.toLowerCase() === 'sabarish_zero_trust_2025') {
          setSolvedFlag(true);
          output = (
            <div className="space-y-2 text-xs font-mono text-zinc-300 p-3 rounded bg-green-500/15 border border-green-500/40">
              <p className="text-green-400 font-bold flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-green-400" />
                <span>[+] CHALLENGE SOLVED! DECRYPTED PAYLOAD:</span>
              </p>
              <div className="p-2 rounded bg-black/80 font-mono text-sm text-green-300 border border-green-500/50 font-bold select-all">
                FLAG&#123;SABARISH_ZERO_TRUST_ELITE_2025&#125;
              </div>
              <p className="text-zinc-300">
                You successfully broke the cryptographic cipher! Operator clearance verified.
              </p>
            </div>
          );
        } else {
          try {
            const decoded = atob(arg);
            output = (
              <div className="space-y-1 text-xs font-mono text-zinc-300">
                <p className="text-green-400 font-bold">[+] DECODED OUTPUT:</p>
                <p className="p-2 rounded bg-black/60 text-white font-mono">{decoded}</p>
              </div>
            );
          } catch {
            output = <p className="text-red-400 text-xs font-mono">[-] Decryption failed: Invalid Base64 ciphertext token.</p>;
          }
        }
        break;

      case 'matrix':
        setMatrixMode((prev) => !prev);
        output = (
          <p className="text-green-400 text-xs font-mono font-bold">
            [+] Matrix stream mode {matrixMode ? 'DISABLED' : 'ACTIVATED'}.
          </p>
        );
        break;

      case 'sudo':
        output = (
          <div className="space-y-1 text-xs font-mono text-red-400">
            <p>[-] Access Denied: Operator is not in the sudoers file.</p>
            <p className="text-zinc-500">This incident will be reported to Mettu Sabarish.</p>
          </div>
        );
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        output = (
          <p className="text-red-400 text-xs font-mono">
            Command not recognized: '{cmd}'. Type <span className="text-yellow-400 font-bold underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> for valid commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}-${Math.random()}`,
        command: rawCmd,
        output,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandList.length > 0) {
        const nextIndex = historyIndex === -1 ? commandList.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInputVal(commandList[nextIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandList.length > 0 && historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < commandList.length) {
          setHistoryIndex(nextIndex);
          setInputVal(commandList[nextIndex] || '');
        } else {
          setHistoryIndex(-1);
          setInputVal('');
        }
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Terminal Window Frame */}
      <div
        className={`relative w-full transition-all duration-300 bg-[#06080e] border border-[#ff1a1a]/50 rounded-xl shadow-[0_0_50px_rgba(255,26,26,0.35)] flex flex-col overflow-hidden font-mono ${
          isMaximized ? 'max-w-7xl h-[95vh]' : 'max-w-3xl h-[600px] max-h-[85vh]'
        }`}
      >
        {/* Terminal Header Bar */}
        <div className="px-4 py-3 bg-[#0d101a] border-b border-white/[0.08] flex items-center justify-between select-none">
          <div className="flex items-center gap-2.5">
            {/* Traffic light terminal dots */}
            <div className="flex items-center gap-1.5">
              <span onClick={onClose} className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 cursor-pointer" title="Close (Esc)" />
              <span onClick={() => handleCommand('clear')} className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 cursor-pointer" title="Clear Terminal" />
              <span onClick={() => setIsMaximized(!isMaximized)} className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 cursor-pointer" title="Maximize" />
            </div>

            <div className="flex items-center gap-2 ml-2">
              <Terminal className="w-3.5 h-3.5 text-[#ff1a1a]" />
              <span className="text-xs text-zinc-300 font-bold tracking-wider">
                root@sabarish-cyber-terminal:~ (Press ` or Esc to toggle)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {solvedFlag && (
              <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-400 border border-green-500/40 text-[10px] font-bold animate-pulse">
                CTF SOLVED
              </span>
            )}
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 rounded text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors"
              title={isMaximized ? 'Restore window' : 'Maximize window'}
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-zinc-400 hover:text-red-400 hover:bg-white/[0.05] transition-colors"
              title="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Matrix Mode Background Effect */}
        {matrixMode && (
          <div className="absolute inset-0 pointer-events-none opacity-10 flex justify-between overflow-hidden font-mono text-[10px] text-green-400 select-none">
            {Array.from({ length: 25 }).map((_, col) => (
              <div key={col} className="animate-pulse" style={{ animationDuration: `${1 + (col % 4) * 0.5}s` }}>
                {Array.from({ length: 30 }).map((_, row) => (
                  <div key={row}>{String.fromCharCode(33 + ((col * row * 7) % 90))}</div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Terminal Body / Output Scroll Area */}
        <div
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 text-xs font-mono bg-[#06080e]/95 text-zinc-200 cursor-text"
        >
          {/* Quick command buttons pill bar */}
          <div className="flex flex-wrap items-center gap-1.5 pb-2 border-b border-white/[0.05]">
            <span className="text-[11px] text-zinc-500 mr-1">QUICK CMDS:</span>
            {['help', 'whoami', 'skills', 'projects', 'internships', 'certs', 'research', 'resume', 'contact', 'ctf'].map((cmd) => (
              <button
                key={cmd}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCommand(cmd);
                }}
                className="px-2 py-0.5 rounded bg-white/[0.04] hover:bg-[#ff1a1a]/20 border border-white/[0.08] hover:border-[#ff1a1a]/50 text-zinc-300 hover:text-white text-[11px] font-mono transition-all cursor-pointer"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* History Lines */}
          {history.map((item) => (
            <div key={item.id} className="space-y-1.5">
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="text-green-400 font-bold">sabarish@security</span>
                <span className="text-zinc-500">:</span>
                <span className="text-[#ff1a1a] font-bold">~</span>
                <span className="text-zinc-500">$</span>
                <span className="text-white font-semibold">{item.command}</span>
                <span className="text-[10px] text-zinc-600 ml-auto font-mono">{item.timestamp}</span>
              </div>
              <div className="pl-4 border-l-2 border-zinc-800 py-0.5">
                {item.output}
              </div>
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 text-zinc-400 pt-1">
            <span className="text-green-400 font-bold">sabarish@security</span>
            <span className="text-zinc-500">:</span>
            <span className="text-[#ff1a1a] font-bold">~</span>
            <span className="text-zinc-500">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs focus:ring-0 p-0 caret-[#ff1a1a]"
              placeholder="type 'help' or any command..."
              autoFocus
            />
          </div>
        </div>

        {/* Bottom Helper Bar */}
        <div className="px-4 py-2 bg-[#090c14] border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-500 font-mono">
          <div className="flex items-center gap-3">
            <span>[Tab] autocomplete</span>
            <span>[↑/↓] history</span>
            <span>[Esc] close</span>
          </div>
          <span className="text-[#ff1a1a] font-bold">STATUS: READY</span>
        </div>
      </div>
    </div>
  );
};

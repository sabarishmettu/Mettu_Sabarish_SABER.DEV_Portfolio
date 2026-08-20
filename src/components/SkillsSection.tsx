import React, { useState, useMemo } from 'react';
import { Sparkles, Terminal } from 'lucide-react';

interface TechTool {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Cloud/DevOps';
  renderLogo: () => React.ReactNode;
}

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const tools: TechTool[] = [
    // ----------------- FRONTEND -----------------
    {
      id: 'nextjs',
      name: 'NEXT.js',
      category: 'Frontend',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 120 40">
          <text x="6" y="25" fontFamily="'Orbitron', sans-serif" fontWeight="900" fontSize="18" fill="currentColor" letterSpacing="1px">
            N<tspan letterSpacing="-0.5px">EXT</tspan><tspan fontSize="12" fontWeight="700" fontFamily="system-ui">.JS</tspan>
          </text>
        </svg>
      ),
    },
    {
      id: 'react',
      name: 'React',
      category: 'Frontend',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 115 40">
          <ellipse cx="14" cy="19" rx="10" ry="3.8" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(30 14 19)" />
          <ellipse cx="14" cy="19" rx="10" ry="3.8" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(90 14 19)" />
          <ellipse cx="14" cy="19" rx="10" ry="3.8" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(150 14 19)" />
          <circle cx="14" cy="19" r="1.8" fill="currentColor" />
          <text x="32" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="18" fill="currentColor" letterSpacing="0.2px">
            React
          </text>
        </svg>
      ),
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      category: 'Frontend',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 145 40">
          <rect x="4" y="8" width="22" height="22" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <text x="8" y="24" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="13" fill="currentColor">
            TS
          </text>
          <text x="34" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="17" fill="currentColor" letterSpacing="0.2px">
            TypeScript
          </text>
        </svg>
      ),
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      category: 'Frontend',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 155 40">
          <path d="M10 18 C11 14 14 13 17 14 C19 15 20 17 22 17 C23.5 17 24.5 16 25 14 C24 18 21 19 18 18 C16 17 15 15 13 15 C11.5 15 10.5 16 10 18 Z" fill="currentColor" />
          <path d="M4 24 C5 20 8 19 11 20 C13 21 14 23 16 23 C17.5 23 18.5 22 19 20 C18 24 15 25 12 24 C10 23 9 21 7 21 C5.5 21 4.5 22 4 24 Z" fill="currentColor" />
          <text x="32" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="16" fill="currentColor" letterSpacing="0px">
            Tailwind <tspan fontWeight="400" fill="#a1a1aa" fontSize="14">CSS</tspan>
          </text>
        </svg>
      ),
    },
    {
      id: 'vuejs',
      name: 'Vue.js',
      category: 'Frontend',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 115 40">
          <polygon points="14,6 23,22 19,22 14,13 9,22 5,22" fill="currentColor" />
          <polygon points="14,14 19,22 16,22 14,18 12,22 9,22" fill="#030308" />
          <text x="32" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="17" fill="currentColor" letterSpacing="0.2px">
            Vue.js
          </text>
        </svg>
      ),
    },
    {
      id: 'vite',
      name: 'Vite',
      category: 'Frontend',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 100 40">
          <polygon points="14,6 23,10 19,28 14,23 9,28 5,10" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <polygon points="14,8 18,17 13,17 15,24 10,15 15,15" fill="currentColor" />
          <text x="30" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="18" fill="currentColor" letterSpacing="0.5px">
            Vite
          </text>
        </svg>
      ),
    },
    {
      id: 'svelte',
      name: 'Svelte',
      category: 'Frontend',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 120 40">
          <path d="M16 10 C18 8 22 9 22 12 C22 15 19 16 17 17 C13 19 8 20 8 24 C8 28 13 30 17 29 C20 28 22 26 23 23" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 28 C10 30 6 29 6 26 C6 23 9 22 11 21 C15 19 20 18 20 14 C20 10 15 8 11 9 C8 10 6 12 5 15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <text x="32" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="17" fill="currentColor" letterSpacing="0.2px">
            Svelte
          </text>
        </svg>
      ),
    },
    {
      id: 'figma',
      name: 'Figma',
      category: 'Frontend',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 110 40">
          <circle cx="8" cy="11" r="3.5" fill="currentColor" opacity="0.9" />
          <circle cx="15" cy="11" r="3.5" fill="currentColor" opacity="0.9" />
          <circle cx="8" cy="18" r="3.5" fill="currentColor" opacity="0.75" />
          <circle cx="15" cy="18" r="3.5" fill="currentColor" opacity="0.75" />
          <circle cx="8" cy="25" r="3.5" fill="currentColor" opacity="0.6" />
          <text x="28" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="17" fill="currentColor" letterSpacing="0.2px">
            Figma
          </text>
        </svg>
      ),
    },

    // ----------------- BACKEND -----------------
    {
      id: 'nodejs',
      name: 'node.js',
      category: 'Backend',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 120 40">
          <path d="M14 6 L24 12 L24 24 L14 30 L4 24 L4 12 Z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M14 12 L19 15 L19 21 L14 24 L9 21 L9 15 Z" fill="currentColor" opacity="0.35" />
          <text x="32" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="17" fill="currentColor" letterSpacing="-0.5px">
            node<tspan fill="#ffffff" fontWeight="500" fontSize="15">.js</tspan>
          </text>
        </svg>
      ),
    },
    {
      id: 'graphql',
      name: 'GraphQL',
      category: 'Backend',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 135 40">
          <polygon points="14,6 23,12 23,24 14,30 5,24 5,12" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <polygon points="14,10 20,23 8,23" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="14" cy="6" r="2" fill="currentColor" />
          <circle cx="23" cy="12" r="2" fill="currentColor" />
          <circle cx="23" cy="24" r="2" fill="currentColor" />
          <circle cx="14" cy="30" r="2" fill="currentColor" />
          <circle cx="5" cy="24" r="2" fill="currentColor" />
          <circle cx="5" cy="12" r="2" fill="currentColor" />
          <text x="32" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="17" fill="currentColor" letterSpacing="0.2px">
            GraphQL
          </text>
        </svg>
      ),
    },
    {
      id: 'python',
      name: 'Python',
      category: 'Backend',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 120 40">
          <path d="M13 7 C8 7 8 10 8 10 L8 13 L14 13 L14 14 L5 14 C5 14 2 14 2 19 C2 24 4.5 24 4.5 24 L7 24 L7 21 C7 17.5 10 17.5 10 17.5 L16 17.5 C19 17.5 19 14.5 19 14.5 L19 10 C19 10 19 7 13 7 Z" fill="currentColor" opacity="0.9" />
          <circle cx="10" cy="10" r="1" fill="#030308" />
          <path d="M15 29 C20 29 20 26 20 26 L20 23 L14 23 L14 22 L23 22 C23 22 26 22 26 17 C26 12 23.5 12 23.5 12 L21 12 L21 15 C21 18.5 18 18.5 18 18.5 L12 18.5 C9 18.5 9 21.5 9 21.5 L9 26 C9 26 9 29 15 29 Z" fill="currentColor" opacity="0.6" />
          <circle cx="18" cy="26" r="1" fill="#030308" />
          <text x="32" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="17" fill="currentColor" letterSpacing="0.2px">
            Python
          </text>
        </svg>
      ),
    },
    {
      id: 'golang',
      name: 'Go',
      category: 'Backend',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 95 40">
          <path d="M4 18 L16 18 M6 22 L14 22 M8 26 L12 26" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <text x="22" y="25" fontFamily="'Orbitron', system-ui, sans-serif" fontWeight="900" fontSize="21" fill="currentColor" letterSpacing="-1px">
            GO
          </text>
        </svg>
      ),
    },
    {
      id: 'rust',
      name: 'Rust',
      category: 'Backend',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 100 40">
          <circle cx="14" cy="18" r="9" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" />
          <text x="10" y="22" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="12" fill="currentColor">
            R
          </text>
          <text x="30" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="18" fill="currentColor" letterSpacing="0.5px">
            Rust
          </text>
        </svg>
      ),
    },
    {
      id: 'fastapi',
      name: 'FastAPI',
      category: 'Backend',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 125 40">
          <circle cx="14" cy="18" r="10" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M15 9 L9 19 L14 19 L13 27 L19 17 L14 17 Z" fill="currentColor" />
          <text x="32" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="17" fill="currentColor" letterSpacing="0px">
            FastAPI
          </text>
        </svg>
      ),
    },
    {
      id: 'nestjs',
      name: 'NestJS',
      category: 'Backend',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 125 40">
          {/* Cat/Griffin wing outline */}
          <path d="M7 26 C5 19 9 10 17 6 C17 12 21 16 25 18 C22 24 16 28 7 26 Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 16 C15 15 18 18 19 22" stroke="currentColor" strokeWidth="1.4" />
          <text x="32" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="17" fill="currentColor" letterSpacing="0.2px">
            NestJS
          </text>
        </svg>
      ),
    },
    {
      id: 'kafka',
      name: 'Apache Kafka',
      category: 'Backend',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 160 40">
          <circle cx="8" cy="12" r="3" fill="currentColor" />
          <circle cx="8" cy="24" r="3" fill="currentColor" />
          <circle cx="18" cy="18" r="4" fill="currentColor" />
          <line x1="8" y1="12" x2="18" y2="18" stroke="currentColor" strokeWidth="1.8" />
          <line x1="8" y1="24" x2="18" y2="18" stroke="currentColor" strokeWidth="1.8" />
          <text x="32" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="16" fill="currentColor" letterSpacing="0.2px">
            Apache Kafka
          </text>
        </svg>
      ),
    },

    // ----------------- DATABASE -----------------
    {
      id: 'postgresql',
      name: 'PostgreSQL',
      category: 'Database',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 150 40">
          <path d="M6 14 C6 10 10 7 16 7 C21 7 24 10 24 15 C24 20 22 23 18 24 L18 29 L15 29 L15 24 C10 24 6 20 6 14 Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M11 15 C11 17 13 19 16 19 C18 19 20 17 20 15" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <text x="32" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="17" fill="currentColor" letterSpacing="-0.2px">
            PostgreSQL
          </text>
        </svg>
      ),
    },
    {
      id: 'redis',
      name: 'redis',
      category: 'Database',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 110 40">
          <path d="M14 8 L24 13 L14 18 L4 13 Z" fill="currentColor" opacity="0.9" />
          <path d="M4 14.5 L14 19.5 L14 22.5 L4 17.5 Z" fill="currentColor" opacity="0.6" />
          <path d="M24 14.5 L14 19.5 L14 22.5 L24 17.5 Z" fill="currentColor" opacity="0.75" />
          <path d="M4 19 L14 24 L14 27 L4 22 Z" fill="currentColor" opacity="0.4" />
          <path d="M24 19 L14 24 L14 27 L24 22 Z" fill="currentColor" opacity="0.55" />
          <text x="32" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="18" fill="currentColor" letterSpacing="0.2px">
            redis
          </text>
        </svg>
      ),
    },
    {
      id: 'supabase',
      name: 'Supabase',
      category: 'Database',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 135 40">
          <path d="M16 6 L5 19 L13 19 L10 30 L22 17 L14 17 Z" fill="currentColor" />
          <text x="30" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="17" fill="currentColor" letterSpacing="0.2px">
            Supabase
          </text>
        </svg>
      ),
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      category: 'Database',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 135 40">
          <path d="M14 6 C14 6 7 13 7 19 C7 24 10 28 14 30 C18 28 21 24 21 19 C21 13 14 6 14 6 Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M14 6 L14 30" stroke="currentColor" strokeWidth="1.4" />
          <text x="30" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="17" fill="currentColor" letterSpacing="0px">
            MongoDB
          </text>
        </svg>
      ),
    },
    {
      id: 'prisma',
      name: 'Prisma',
      category: 'Database',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 120 40">
          <polygon points="14,6 23,28 5,28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="14,6 17,28 5,28" fill="currentColor" opacity="0.4" />
          <text x="32" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="17" fill="currentColor" letterSpacing="0.4px">
            Prisma
          </text>
        </svg>
      ),
    },
    {
      id: 'mysql',
      name: 'MySQL',
      category: 'Database',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 125 40">
          {/* Dolphin silhouette */}
          <path d="M5 22 C9 14 18 11 25 14 C20 18 17 24 15 28 C13 24 10 23 5 22 Z" fill="currentColor" opacity="0.8" />
          <text x="30" y="24" fontFamily="'Orbitron', sans-serif" fontWeight="800" fontSize="16" fill="currentColor" letterSpacing="0.5px">
            MySQL
          </text>
        </svg>
      ),
    },
    {
      id: 'firebase',
      name: 'Firebase',
      category: 'Database',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 135 40">
          {/* Flame icon */}
          <path d="M5 24 L11 12 L14 17 L23 7 L25 24 C24 28 17 30 14 30 C10 30 5 27 5 24 Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <text x="32" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="17" fill="currentColor" letterSpacing="0.2px">
            Firebase
          </text>
        </svg>
      ),
    },

    // ----------------- CLOUD / DEVOPS -----------------
    {
      id: 'aws',
      name: 'aws',
      category: 'Cloud/DevOps',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 90 40">
          <text x="14" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="18" fill="currentColor" letterSpacing="-0.5px">
            aws
          </text>
          <path d="M12 26 Q 28 33 46 25" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M43 23 L47 25.5 L43.5 28.5 Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 'kubernetes',
      name: 'Kubernetes',
      category: 'Cloud/DevOps',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 155 40">
          <polygon points="14,6 23,10 25,20 19,28 9,28 3,20 5,10" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="14" cy="18" r="3" fill="currentColor" />
          <path d="M14 6 L14 15 M23 10 L16 16 M25 20 L17 19 M19 28 L15 21 M9 28 L13 21 M3 20 L11 19 M5 10 L12 16" stroke="currentColor" strokeWidth="1.3" />
          <text x="34" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="17" fill="currentColor" letterSpacing="0.2px">
            Kubernetes
          </text>
        </svg>
      ),
    },
    {
      id: 'docker',
      name: 'Docker',
      category: 'Cloud/DevOps',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 120 40">
          <rect x="5" y="14" width="3" height="3" fill="currentColor" />
          <rect x="9" y="14" width="3" height="3" fill="currentColor" />
          <rect x="13" y="14" width="3" height="3" fill="currentColor" />
          <rect x="9" y="10" width="3" height="3" fill="currentColor" />
          <rect x="13" y="10" width="3" height="3" fill="currentColor" />
          <rect x="17" y="14" width="3" height="3" fill="currentColor" />
          <path d="M4 19 C5 24 10 26 17 26 C22 26 25 23 27 19 C25 18 20 18 18 19 C15 19 8 19 4 19 Z" fill="currentColor" opacity="0.85" />
          <text x="34" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="17" fill="currentColor" letterSpacing="0.2px">
            docker
          </text>
        </svg>
      ),
    },
    {
      id: 'git',
      name: 'Git',
      category: 'Cloud/DevOps',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 90 40">
          <rect x="5" y="7" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" transform="rotate(45 14 16)" />
          <circle cx="10" cy="16" r="2" fill="currentColor" />
          <circle cx="18" cy="11" r="2" fill="currentColor" />
          <circle cx="18" cy="21" r="2" fill="currentColor" />
          <path d="M10 16 L18 11 M10 16 L18 21" stroke="currentColor" strokeWidth="1.4" />
          <text x="32" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="18" fill="currentColor" letterSpacing="0.5px">
            git
          </text>
        </svg>
      ),
    },
    {
      id: 'linux',
      name: 'Linux',
      category: 'Cloud/DevOps',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 110 40">
          <path d="M14 6 C11 6 9 9 9 13 C9 15 8 18 6 22 C5 25 6 28 9 28 C12 28 13 26 14 26 C15 26 16 28 19 28 C22 28 23 25 22 22 C20 18 19 15 19 13 C19 9 17 6 14 6 Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <ellipse cx="14" cy="18" rx="4" ry="5" fill="currentColor" opacity="0.3" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
          <circle cx="16" cy="12" r="1" fill="currentColor" />
          <text x="30" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="17" fill="currentColor" letterSpacing="0.2px">
            Linux
          </text>
        </svg>
      ),
    },
    {
      id: 'terraform',
      name: 'Terraform',
      category: 'Cloud/DevOps',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 145 40">
          {/* Isometric prisms */}
          <polygon points="5,8 11,12 11,20 5,16" fill="currentColor" opacity="0.6" />
          <polygon points="12,13 18,17 18,25 12,21" fill="currentColor" opacity="0.8" />
          <polygon points="19,8 25,12 25,20 19,16" fill="currentColor" opacity="0.9" />
          <text x="32" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="16" fill="currentColor" letterSpacing="0.2px">
            Terraform
          </text>
        </svg>
      ),
    },
    {
      id: 'githubactions',
      name: 'CI / CD',
      category: 'Cloud/DevOps',
      renderLogo: () => (
        <svg className="h-6 sm:h-7 w-auto fill-white" viewBox="0 0 120 40">
          <circle cx="10" cy="18" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="22" cy="12" r="3" fill="currentColor" />
          <circle cx="22" cy="24" r="3" fill="currentColor" />
          <path d="M14 18 L19 12 M14 18 L19 24" stroke="currentColor" strokeWidth="1.6" />
          <text x="32" y="24" fontFamily="'Orbitron', sans-serif" fontWeight="800" fontSize="15" fill="currentColor" letterSpacing="0.5px">
            CI/CD
          </text>
        </svg>
      ),
    },
  ];

  const categories = ['ALL', 'Frontend', 'Backend', 'Database', 'Cloud/DevOps'];

  const filteredTools = useMemo(() => {
    return selectedCategory === 'ALL'
      ? tools
      : tools.filter((t) => t.category === selectedCategory);
  }, [selectedCategory]);

  // Ensure minimum 16 items per track so short categories fill wide screens seamlessly
  const displayItems = useMemo(() => {
    let list = [...filteredTools];
    while (list.length < 16) {
      list = [...list, ...filteredTools];
    }
    return list;
  }, [filteredTools]);

  // Constant speed calculation: exactly 1.6s per item across ALL categories!
  // This guarantees the pixel speed is strictly identical for All, Frontend, Backend, Database, Cloud/DevOps
  const marqueeDuration = useMemo(() => {
    return `${displayItems.length * 1.6}s`;
  }, [displayItems]);

  return (
    <section id="skills" className="w-full max-w-[1720px] 2xl:max-w-[1900px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14 relative z-20">
      {/* Container with no border/outline */}
      <div 
        id="skills-hud-frame"
        className="relative p-2 sm:p-4 overflow-hidden"
      >
        {/* Header Section: Eyebrow, Title & Category Filter Badges */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          {/* Eyebrow & Title */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-[#ff1a1a] font-bold text-sm tracking-wider">—</span>
              <span className="text-[#ff1a1a] text-xs sm:text-[13px] font-chakra font-bold tracking-[0.25em] uppercase drop-shadow-[0_0_8px_rgba(255,26,26,0.8)]">
                TECH ARSENAL &amp; TOOLS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-orbitron font-extrabold text-white tracking-wider uppercase flex items-center gap-3">
              <span>SKILLS</span>
              <Sparkles className="w-6 h-6 text-[#ff1a1a] animate-pulse" />
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-chakra font-bold tracking-wider uppercase transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#ff1a1a] text-white shadow-[0_0_18px_rgba(255,26,26,0.7)]'
                    : 'bg-[#111218]/80 text-zinc-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Marquee Scroller Rail (Continuous 100% Seamless Infinite Loop with Sibling Tracks) */}
        <div className="relative w-full py-6 sm:py-8 my-2 overflow-hidden flex select-none group">
          {/* Left & Right Gradient Fade Masks for seamless vanishing effect */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-[#030308] via-[#030308]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-[#030308] via-[#030308]/80 to-transparent z-10 pointer-events-none" />

          {/* Sibling Track 1 */}
          <div 
            key={`track-1-${selectedCategory}`}
            className="animate-marquee-track flex items-center gap-12 sm:gap-16 lg:gap-20 pr-12 sm:pr-16 lg:pr-20 shrink-0"
            style={{ '--marquee-duration': marqueeDuration } as React.CSSProperties}
          >
            {displayItems.map((tool, index) => (
              <div
                key={`t1-${tool.id}-${index}`}
                className="flex items-center gap-3 shrink-0 text-white/75 hover:text-white transition-all duration-300 cursor-pointer group/item hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
                title={`${tool.name} (${tool.category})`}
              >
                <div className="transition-transform duration-300">
                  {tool.renderLogo()}
                </div>
              </div>
            ))}
          </div>

          {/* Sibling Track 2 (Exact mirror clone that follows Track 1 for 0-gap, 0-stutter seamless continuity) */}
          <div 
            key={`track-2-${selectedCategory}`}
            aria-hidden="true"
            className="animate-marquee-track flex items-center gap-12 sm:gap-16 lg:gap-20 pr-12 sm:pr-16 lg:pr-20 shrink-0"
            style={{ '--marquee-duration': marqueeDuration } as React.CSSProperties}
          >
            {displayItems.map((tool, index) => (
              <div
                key={`t2-${tool.id}-${index}`}
                className="flex items-center gap-3 shrink-0 text-white/75 hover:text-white transition-all duration-300 cursor-pointer group/item hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
                title={`${tool.name} (${tool.category})`}
              >
                <div className="transition-transform duration-300">
                  {tool.renderLogo()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Information Row */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-space">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#ff1a1a]" />
            <span className="font-chakra tracking-wider uppercase text-zinc-400 font-bold">
              {filteredTools.length} TECHNOLOGIES LOADED
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
            <span>HOVER TO PAUSE TRACK</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff1a1a] animate-ping" />
          </div>
        </div>
      </div>
    </section>
  );
};

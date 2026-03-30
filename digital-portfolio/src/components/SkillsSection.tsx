"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { Server, Cloud, Code, Database, Terminal, Cpu } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
  glow: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <Code className="w-6 h-6 text-cyan-400" />,
    skills: ["C++", "Java", "Python", "JavaScript"],
    color: "from-cyan-500/20 to-cyan-400/5",
    glow: "rgba(34, 211, 238, 0.5)"
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6 text-orange-400" />,
    skills: ["AWS", "Azure", "Docker", "Kubernetes"],
    color: "from-orange-500/20 to-orange-400/5",
    glow: "rgba(251, 146, 60, 0.5)"
  },
  {
    title: "Backend & Databases",
    icon: <Database className="w-6 h-6 text-purple-400" />,
    skills: ["Spring Boot", "Node.js", "PostgreSQL", "Firebase"],
    color: "from-purple-500/20 to-purple-400/5",
    glow: "rgba(192, 132, 252, 0.5)"
  },
  {
    title: "Tools & OS",
    icon: <Terminal className="w-6 h-6 text-emerald-400" />,
    skills: ["Git", "Linux", "Cisco Packet Tracer", "CI/CD"],
    color: "from-emerald-500/20 to-emerald-400/5",
    glow: "rgba(52, 211, 153, 0.5)"
  },
  {
    title: "Foundations",
    icon: <Cpu className="w-6 h-6 text-rose-400" />,
    skills: ["DSA", "Operating Systems", "Networking"],
    color: "from-rose-500/20 to-rose-400/5",
    glow: "rgba(251, 113, 133, 0.5)"
  },
  {
    title: "Frontend Tech",
    icon: <Server className="w-6 h-6 text-indigo-400" />,
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    color: "from-indigo-500/20 to-indigo-400/5",
    glow: "rgba(129, 140, 248, 0.5)"
  }
];

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-12deg", "12deg"]);

  const background = useMotionTemplate`
    radial-gradient(
      500 px circle at ${useTransform(mouseX, [-0.5, 0.5], ["100%", "0%"])} ${useTransform(mouseY, [-0.5, 0.5], ["100%", "0%"])},
      ${category.glow} 0%,
      transparent 85%
    )
  `;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set((x / rect.width) - 0.5);
    mouseY.set((y / rect.height) - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
      className="relative group h-full"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`h-full p-8 rounded-[24px] border border-white/10 bg-black/40 backdrop-blur-2xl relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-500 shadow-2xl`}
      >
        {/* Animated Cyber Border */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute top-0 left-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent to-cyan-500 animate-[borderX_2s_linear_infinite]" />
            <div className="absolute bottom-0 right-0 w-1/2 h-[1px] bg-gradient-to-l from-transparent to-cyan-500 animate-[borderX_2s_linear_infinite_reverse]" />
            <div className="absolute right-0 top-0 h-1/2 w-[1px] bg-gradient-to-b from-transparent to-cyan-500 animate-[borderY_2s_linear_infinite]" />
            <div className="absolute left-0 bottom-0 h-1/2 w-[1px] bg-gradient-to-t from-transparent to-cyan-500 animate-[borderY_2s_linear_infinite_reverse]" />
        </div>

        {/* Dynamic Spotlight Glow */}
        <motion.div className="absolute inset-0 pointer-events-none z-0" style={{ background }} />

        {/* Content with 3D depth */}
        <div className="relative z-10" style={{ transform: "translateZ(60px)" }}>
          <div className="flex items-center space-x-4 mb-8">
            <div className={`p-4 rounded-xl bg-black/60 border border-white/10 group-hover:border-cyan-500/50 transition-all duration-300`}>
              {category.icon}
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">{category.title}</h3>
          </div>
          
          <div className="flex flex-wrap gap-2.5">
            {category.skills.map((skill: string) => (
              <span 
                key={skill}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-cyan-400 text-sm font-medium hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-500/40 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Corner Scanline Decor */}
        <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-20 border-t-2 border-r-2 border-cyan-500 rounded-tr-lg" />
        <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none opacity-20 border-b-2 border-l-2 border-cyan-500 rounded-bl-lg" />
      </motion.div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-black">
      {/* Background scanline effect */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-5">
        <div className="w-full h-1 bg-cyan-500/20 blur-sm animate-[scanLine_8s_linear_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-start text-left mb-24 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 mb-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-widest uppercase"
          >
            Capabilities
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-8"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600">Skills</span>
          </motion.h2>
          
          <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-cyan-500/30 pl-6">
            A comprehensive set of tools and technologies I use to build scalable cloud architectures and modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes scanLine {
          from { transform: translateY(-100%); }
          to { transform: translateY(1000%); }
        }
        @keyframes borderX {
          from { transform: translateX(-100%); }
          to { transform: translateX(200%); }
        }
        @keyframes borderY {
          from { transform: translateY(-100%); }
          to { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}

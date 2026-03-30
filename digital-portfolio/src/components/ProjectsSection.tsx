"use client";

import { motion, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  demo?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Online Menu & Ordering System",
    description: "A front-end web application that provides a smooth, interactive food ordering experience. Users can browse menu items with prices, manage a cart, and get a dynamically calculated bill — all without page reloads.",
    tech: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    features: ["Add / remove items from cart", "Real-time total bill calculation", "Multi-page layout (Menu, Cart, Kitchen, History)", "Responsive & interactive UI"],
    github: "https://github.com/TsheringBhutia/Online-Menu-and-ordering-system",
    demo: "https://github.com/TsheringBhutia/Online-Menu-and-ordering-system"
  },
  {
    title: "Library Management System",
    description: "An interactive console-based Library Management System built in Java. Uses Object-Oriented Programming with dedicated Book and Library classes to manage a collection of books efficiently.",
    tech: ["Java", "OOP", "LinkedList"],
    features: ["Add books with ID, title & author", "Borrow & return books with status tracking", "Display all available books", "Menu-driven console interface"],
    github: "https://github.com/TsheringBhutia/LIbrary-managment-system"
  },
  {
    title: "Car Rental Service",
    description: "A fully front-end car rental web application where users can browse available cars, fill out a booking form, and manage their account via login and signup pages — all without a backend.",
    tech: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    features: ["Browse available cars with details", "Instant car booking form", "User login & signup pages", "Responsive multi-page layout (Home, Cars, Book, Login, Signup)"],
    github: "https://github.com/TsheringBhutia/car-rental-service",
    demo: "https://github.com/TsheringBhutia/car-rental-service"
  }
];

function TiltCard({ project, index }: { project: Project; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const glareX = useTransform(mouseX, [-0.5, 0.5], ["100%", "0%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["100%", "0%"]);
  const background = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.15) 0%, transparent 60%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    mouseX.set((mouseXPos / width) - 0.5);
    mouseY.set((mouseYPos / height) - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      style={{ perspective: 1000 }}
      className="relative z-10 w-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full glass rounded-2xl relative shadow-xl overflow-hidden group cursor-pointer border border-white/5 bg-white/[0.02]"
      >
        <motion.div className="absolute inset-0 pointer-events-none z-20" style={{ background }} />

        <div className="p-8 h-full flex flex-col justify-between relative z-10" style={{ transform: "translateZ(50px)" }}>
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-400 inline-flex">
                <Code className="w-6 h-6" />
              </div>
              <div className="flex space-x-3">
                {project.github && (
                  <a href={project.github} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noreferrer">
                    <FaGithub className="w-5 h-5" />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noreferrer">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase text-indigo-300 tracking-wider mb-2">Key Features</h4>
              <ul className="text-sm text-gray-500 list-disc pl-5 space-y-1">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t, i) => (
              <span key={i} className="text-xs font-medium px-2 py-1 rounded bg-white/10 text-gray-300">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center space-x-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Featured Projects
            </h2>
            <div className="h-[2px] w-full max-w-xs bg-gradient-to-r from-indigo-500/50 to-transparent hidden md:block" />
          </div>
          <p className="text-gray-400 text-lg">Hover over each card for an interactive 3D effect.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <TiltCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("./canvas/Hero3D"), { ssr: false });

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      <Hero3D />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 inline-block rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sm text-indigo-300"
        >
          Cloud & Software Engineering Student
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          Hi, I&apos;m <span className="gradient-text text-transparent bg-clip-text">Tshering Bhutia</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10"
        >
          Building scalable, high-performance web applications and cloud architectures.
          Turning complex problems into elegant, efficient solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg flex items-center space-x-2 transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)]"
          >
            <span>View Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="group px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg flex items-center space-x-2 transition-all glass"
          >
            <Mail className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            <span>Contact Me</span>
          </a>

          <a
            href="resume.pdf"
            download="resume.pdf"
            className="group px-8 py-3 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 rounded-lg flex items-center space-x-2 transition-all glass"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:scale-110 transition-transform"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            <span>Download Resume</span>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce text-gray-500">
        <span className="text-sm mb-2">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
}

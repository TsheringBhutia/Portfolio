"use client";

import { motion } from "framer-motion";
import { GraduationCap, ChevronRight } from "lucide-react";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-circuit z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              About Me
            </h2>
            <div className="glass p-8 rounded-2xl border border-white/5 relative shadow-lg shadow-indigo-500/5">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                I am a passionate Cloud & Software Engineering Student dedicated to building secure, scalable, and highly available web applications and architectures.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                My career goal is to innovate at the intersection of performance and reliability, specializing in AWS/Azure infrastructure, backend modernization, and creating impactful user experiences. I thrive on solving complex technical challenges and continuous learning.
              </p>
            </div>
          </motion.div>

          {/* Timeline Grid */}
          <div className="max-w-3xl mx-auto">
            {/* Education */}
            <motion.div variants={itemVariants} className="relative">
              <div className="flex items-center space-x-3 mb-8">
                <GraduationCap className="text-indigo-400 w-8 h-8 drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                <h3 className="text-2xl font-semibold text-white">Education</h3>
              </div>

              <div className="space-y-8 pl-4 border-l-2 border-indigo-500/30">
                {/* BTech */}
                <div className="relative">
                  <div className="absolute -left-[23px] top-1 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_15px_#6366f1] ring-2 ring-indigo-500/20" />
                  <div className="glass p-6 rounded-xl hover:-translate-y-1 transition-transform">
                    <span className="text-indigo-300 text-sm font-semibold tracking-wider uppercase">2023 - Present</span>
                    <h4 className="text-xl font-bold text-white mt-1">BTech in Computer Science and Engineering</h4>
                    <p className="text-gray-400 mt-2">Lovely Professional University , Punjab</p>
                    <ul className="mt-3 space-y-1 text-sm text-gray-500">
                      <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-1 text-indigo-400" /> Specialized in Cloud Architectures</li>
                      <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-1 text-indigo-400" /> Data Structures & Algorithms</li>
                    </ul>
                  </div>
                </div>

                {/* 12th */}
                <div className="relative">
                  <div className="absolute -left-[23px] top-1 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_#a855f7] ring-2 ring-purple-500/20" />
                  <div className="glass p-6 rounded-xl hover:-translate-y-1 transition-transform">
                    <span className="text-purple-300 text-sm font-semibold tracking-wider uppercase">2021 - 2022</span>
                    <h4 className="text-xl font-bold text-white mt-1">Intermediate </h4>
                    <p className="text-gray-400 mt-2">St Robert's H.S School , Darjeeling West Bengal</p>
                    <ul className="mt-3 space-y-1 text-sm text-gray-500">
                      <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-1 text-purple-400" ></ChevronRight></li>
                    </ul>
                  </div>
                </div>

                {/* 10th */}
                <div className="relative">
                  <div className="absolute -left-[23px] top-1 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_#3b82f6] ring-2 ring-blue-500/20" />
                  <div className="glass p-6 rounded-xl hover:-translate-y-1 transition-transform">
                    <span className="text-blue-300 text-sm font-semibold tracking-wider uppercase">2019 - 2020</span>
                    <h4 className="text-xl font-bold text-white mt-1">Matriculation </h4>
                    <p className="text-gray-400 mt-2">St Robert's H.S School , Darjeeling West Bengal</p>
                    <ul className="mt-3 space-y-1 text-sm text-gray-500">
                      <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-1 text-blue-400"></ChevronRight></li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

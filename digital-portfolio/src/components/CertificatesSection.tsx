"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Data Structure and Algorithms using JAVA ",
    issuer: "Cipherschool",
    date: "Jul 2025",
    link: "https://drive.google.com/file/d/1nDzHN2JYa5-mu8-bOMMfLcWFAXyQ1ffr/view?usp=sharing",
  },
  {
    title: "Computer Communication",
    issuer: "Coursera",
    date: "Nov 2024",
    link: "https://drive.google.com/file/d/1kvaEFX21WwQqU309sDmpNfUTxfEzEZxY/view?usp=sharing",
  },
  {
    title: "AWS Academy Graduate - Cloud Architecting",
    issuer: "AWS Academy",
    date: "Jan 2026",
    link: "https://drive.google.com/file/d/1ej02BS4nRRveYgS6mhe4zgt2DwD9PmlQ/view?usp=sharing",
  },
  {
    title: "Computational Theory: Language Principle & Finite Automata",
    issuer: "Infosys Springboard",
    date: "Aug 2025",
    link: "https://drive.google.com/file/d/1KeGwHHGBzOzDOoMiDRPZ7OgVj5GRtGCd/view?usp=sharing",
  },
];

export default function CertificatesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4"
          >
            Certificates
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Verified credentials highlighting continuous learning and expertise in industry standards.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto flex items-center justify-center min-h-[400px]">
          <button
            onClick={handlePrev}
            className="absolute left-0 z-20 p-3 rounded-full glass hover:bg-white/10 text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-2xl mx-16 p-8 rounded-3xl glass border border-white/10 shadow-2xl relative"
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            >
              <div className="flex flex-col items-center text-center h-full justify-center">
                <Award className="w-16 h-16 text-yellow-400 mb-6 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
                <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
                  {certificates[currentIndex].title}
                </h3>
                <p className="text-xl text-indigo-300 mb-6">{certificates[currentIndex].issuer}</p>
                <div className="bg-white/5 px-4 py-2 rounded-full border border-white/10 mb-8 inline-block">
                  <span className="text-gray-300 font-medium">Issued: {certificates[currentIndex].date}</span>
                </div>

                <a
                  href={certificates[currentIndex].link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 text-indigo-400 hover:text-white px-6 py-3 rounded-xl bg-indigo-500/10 hover:bg-indigo-500 border border-indigo-500 transition-all font-semibold"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handleNext}
            className="absolute right-0 z-20 p-3 rounded-full glass hover:bg-white/10 text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {certificates.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? "bg-indigo-500 w-8" : "bg-white/20"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

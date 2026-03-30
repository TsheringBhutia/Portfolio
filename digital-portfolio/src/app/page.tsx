import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cloud & Software Engineering Portfolio",
  description: "Digital portfolio showcasing projects, skills, and experience in cloud computing and software engineering.",
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent flex flex-col">
      <Navbar />
      <div className="w-full flex flex-col overflow-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}

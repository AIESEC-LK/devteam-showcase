import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import GallerySection from "../components/GallerySection";
import TeamModal from "../components/TeamModal";
import Footer from "../components/Footer";

const Index = () => {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onTeamClick={() => setIsTeamModalOpen(true)} />
      <main>
        <HeroSection />
        <AboutSection onTeamClick={() => setIsTeamModalOpen(true)} />
        <ProjectsSection />
        <GallerySection />
      </main>
      <Footer />
      <TeamModal isOpen={isTeamModalOpen} onClose={() => setIsTeamModalOpen(false)} />
    </div>
  );
};

export default Index;

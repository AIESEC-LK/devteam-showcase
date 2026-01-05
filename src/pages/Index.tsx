import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import ProjectsSection from "../components/ProjectsSection";
import GallerySection from "../components/GallerySection";
import Footer from "../components/Footer";

const Index = () => {
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
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <ProjectsSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

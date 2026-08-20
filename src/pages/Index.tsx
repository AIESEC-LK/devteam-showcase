import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ImpactStats from "../components/ImpactStats";
import ProjectsSection from "../components/ProjectsSection";
import TechStack from "../components/TechStack";
import TeamSection from "../components/TeamSection";
import NextTerm from "../components/NextTerm";
import GitHubSection from "../components/GitHubSection";
import GallerySection from "../components/GallerySection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ImpactStats />
        <ProjectsSection />
        <TechStack />
        <TeamSection />
        <NextTerm />
        <GitHubSection />
        <GallerySection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

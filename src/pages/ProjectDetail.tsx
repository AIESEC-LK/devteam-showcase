import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const projectIndex = parseInt(id || "0");
  const project = projects[projectIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <>
        <Navbar />
        <section className="pt-24 pb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <button onClick={() => navigate("/")} className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Go Home
            </button>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <button onClick={() => navigate(-1)} className="mb-8 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <img src={project.image} alt={project.title} className="w-full h-64 md:h-96 object-cover rounded-xl mb-8" />
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-lg text-muted-foreground mb-8">{project.description}</p>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="text-muted-foreground">{project.introduction}</p>
              </div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Team Members</h2>
                <ul className="list-disc list-inside text-muted-foreground">
                  {project.team.map((member, i) => (
                    <li key={i}>{member}</li>
                  ))}
                </ul>
              </div>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  Visit Live Site
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectDetail;
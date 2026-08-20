import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const projectIndex = parseInt(id || "0");
  const project = projects[projectIndex];

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Go Home
            </button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="rounded-3xl overflow-hidden border border-border mb-10 card-surface">
                <img src={project.image} alt={project.title} className="w-full h-64 md:h-96 object-cover" />
              </div>

              <span className="section-label mb-4">Project</span>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl">{project.description}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-sky rounded-3xl p-6">
                  <h2 className="text-xs font-semibold uppercase tracking-wide text-sky-foreground/70 mb-3">
                    Introduction
                  </h2>
                  <p className="text-sky-foreground">{project.introduction}</p>
                </div>
                <div className="bg-mint rounded-3xl p-6">
                  <h2 className="text-xs font-semibold uppercase tracking-wide text-mint-foreground/70 mb-3">
                    Team
                  </h2>
                  <ul className="space-y-1.5 text-mint-foreground">
                    {project.team.map((member) => (
                      <li key={member}>{member}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-medium bg-muted rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-primary/90 hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.6)] transition-all duration-200"
                >
                  Visit Live Site
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectDetail;

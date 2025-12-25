import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Sincerely Sri Lankan",
    description: "An immersive platform showcasing authentic Sri Lankan experiences for international volunteers. Features an interactive map, destination guides, testimonials, and comprehensive FAQ sections to help visitors discover the pearl of the Indian Ocean.",
    image: "https://images.unsplash.com/photo-1586523969104-46e1b57529eb?w=800&auto=format&fit=crop&q=60",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://sincerely.aiesec.lk/",
  },
  {
    title: "AIESEC Sri Lanka Website",
    description: "The official website of AIESEC in Sri Lanka celebrating 30 years of youth leadership development. Showcases local chapters across 22+ universities, opportunities for exchanges, and the organization's impact on thousands of young Sri Lankans.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60",
    tags: ["Next.js", "TypeScript", "Modern UI/UX"],
    liveUrl: "https://aiesec.lk/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-mono text-primary text-sm mb-4">// our_projects</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What We've <span className="text-gradient">Built</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore the digital products we've crafted for AIESEC Sri Lanka — 
            each project designed to inspire and empower youth across the nation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>

        {/* Code comment decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 font-mono text-sm text-muted-foreground"
        >
          <span className="text-code-green">{"/* More projects coming soon... */"}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

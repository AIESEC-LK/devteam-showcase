import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import { projects } from "@/data/projects";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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
            each project designed to inspire and empower youth across the world.
          </p>
        </motion.div>

        <Carousel opts={{ loop: true }} className="max-w-8xl mx-auto">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <ProjectCard {...project} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Code comment decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 font-mono text-sm text-muted-foreground"
        >
          <span className="text-code-green">{"/* More interesting projects brewing in the kitchen */"}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

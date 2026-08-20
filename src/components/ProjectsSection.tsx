import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <span className="section-label mb-4">What We Build</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Products, not portfolios.
            </h2>
            <p className="text-muted-foreground text-lg">
              Digital products we've crafted for AIESEC Sri Lanka — each one built to inspire
              and empower youth leadership.
            </p>
          </div>
        </motion.div>

        <Carousel opts={{ align: "start", loop: true }} className="max-w-7xl mx-auto">
          <CarouselContent className="-ml-4 md:-ml-6">
            {projects.map((project, index) => (
              <CarouselItem
                key={project.title}
                className="pl-4 md:pl-6 basis-[85%] sm:basis-[60%] lg:basis-[38%]"
              >
                <ProjectCard {...project} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center gap-3 mt-8">
            <CarouselPrevious className="static translate-y-0 rounded-full border-border" />
            <CarouselNext className="static translate-y-0 rounded-full border-border" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsSection;

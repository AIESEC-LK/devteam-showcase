import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  index: number;
}

const tints = ["bg-sky", "bg-mint", "bg-pink", "bg-peach"];

const ProjectCard = ({ title, description, image, tags, liveUrl, index }: ProjectCardProps) => {
  const number = String(index + 1).padStart(2, "0");

  const content = (
    <>
      <div className={`relative h-56 md:h-64 overflow-hidden ${tints[index % tints.length]}`}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute top-4 left-4 font-display text-sm font-bold text-foreground bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full">
          {number}
        </span>
      </div>

      <div className="p-6 md:p-7">
        <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-full transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {liveUrl ? (
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            View Project
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        ) : (
          <span className="text-sm text-muted-foreground">Coming Soon</span>
        )}
      </div>
    </>
  );

  const sharedClassName =
    "group block bg-card border border-border rounded-3xl overflow-hidden h-full card-surface hover:-translate-y-1";

  const motionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5 },
  };

  if (liveUrl) {
    return (
      <motion.a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClassName}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div className={sharedClassName} {...motionProps}>
      {content}
    </motion.div>
  );
};

export default ProjectCard;

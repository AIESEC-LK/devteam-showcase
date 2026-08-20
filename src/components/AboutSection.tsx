import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Hammer, Lightbulb, GraduationCap, Sparkles } from "lucide-react";

const principles = [
  {
    icon: Hammer,
    title: "Build",
    description: "We turn ideas into reliable digital products.",
    tint: "bg-mint text-mint-foreground",
  },
  {
    icon: Lightbulb,
    title: "Solve",
    description: "We use technology to solve real organizational problems.",
    tint: "bg-sky text-sky-foreground",
  },
  {
    icon: GraduationCap,
    title: "Learn",
    description: "We continuously develop our technical and leadership capabilities.",
    tint: "bg-pink text-pink-foreground",
  },
  {
    icon: Sparkles,
    title: "Impact",
    description: "We build systems that create value beyond the code.",
    tint: "bg-peach text-peach-foreground",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 lg:col-span-2 lg:row-span-2 bg-card border border-border rounded-3xl p-8 md:p-10 flex flex-col justify-center card-surface"
          >
            <span className="section-label mb-4 w-fit">About Us</span>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
              We build more than software.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              The Development Team creates and maintains the technology that helps AIESEC in
              Sri Lanka operate, communicate, and deliver experiences more effectively.
            </p>
          </motion.div>

          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="bg-card border border-border rounded-3xl p-6 card-surface"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${principle.tint}`}>
                <principle.icon className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1.5">{principle.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

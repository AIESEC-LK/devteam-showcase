import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { techStack } from "@/data/techStack";
import { techIcons } from "@/data/techIcons";

const tints = ["bg-sky text-sky-foreground", "bg-mint text-mint-foreground", "bg-peach text-peach-foreground", "bg-pink text-pink-foreground", "bg-secondary text-secondary-foreground"];

const allItems = Array.from(new Set(techStack.flatMap((g) => g.items)));

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech-stack" className="py-24 md:py-32 border-t border-border overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="section-label mb-4">Our Toolbox</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            The tools we reach for.
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies our team uses to design, build, and ship reliable systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {techStack.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-card border border-border rounded-3xl p-6 md:p-7 card-surface"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${tints[index % tints.length]}`}>
                  <group.icon className="w-4 h-4" strokeWidth={2} />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const Icon = techIcons[item];
                  return (
                    <span
                      key={item}
                      tabIndex={0}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-muted-foreground bg-muted rounded-full hover:text-primary hover:bg-primary/10 focus-visible:text-primary transition-colors duration-200"
                    >
                      {Icon && <Icon className="w-3.5 h-3.5" />}
                      {item}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scrolling technology strip */}
      <div className="relative border-y border-border py-6">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10" aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10" aria-hidden="true" />
        <div className="flex w-max animate-marquee" aria-hidden="true">
          {[...allItems, ...allItems].map((item, i) => {
            const Icon = techIcons[item];
            return (
              <span
                key={`${item}-${i}`}
                className="inline-flex items-center gap-2 px-6 text-muted-foreground text-sm font-medium whitespace-nowrap"
              >
                {Icon && <Icon className="w-4 h-4" />}
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

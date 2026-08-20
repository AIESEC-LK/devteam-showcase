import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { stats } from "@/data/stats";

const tints = ["bg-mint text-mint-foreground", "bg-sky text-sky-foreground", "bg-pink text-pink-foreground", "bg-peach text-peach-foreground"];

const ImpactStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`rounded-3xl px-5 py-7 md:py-8 text-center ${tints[index % tints.length]}`}
            >
              <div className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-1.5">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-medium opacity-80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;

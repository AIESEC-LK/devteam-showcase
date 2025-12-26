import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Target, Rocket, Heart } from "lucide-react";
import DevLogo from "./DevLogo";

interface AboutSectionProps {
  onTeamClick?: () => void;
}

const features = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To create innovative digital solutions that empower AIESEC Sri Lanka's mission of developing leadership in youth.",
  },
  {
    icon: Users,
    title: "The Team",
    description: "A passionate group of developers, designers, and innovators working together to build impactful projects.",
    isTeamLink: true,
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "We leverage cutting-edge technologies to build scalable, user-friendly applications that make a difference.",
  },
  {
    icon: Heart,
    title: "Passion Driven",
    description: "Every line of code we write is driven by our passion for technology and our commitment to AIESEC's values.",
  },
];

const AboutSection = ({ onTeamClick }: AboutSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-mono text-primary text-sm mb-4">// about_us</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What is <DevLogo size="lg" animated={false} className="inline" />?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We are the development team of AIESEC in Sri Lanka — a group of passionate developers 
            dedicated to building digital products that support youth leadership development across the nation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => feature.isTeamLink && onTeamClick?.()}
              className={`bg-card border border-border rounded-xl p-6 card-glow group ${
                feature.isTeamLink ? "cursor-pointer hover:border-primary transition-colors" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Terminal-style quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm">
            <div className="flex items-center gap-2 text-muted-foreground mb-3">
              <span className="text-terminal-green">$</span>
              <span>cat philosophy.txt</span>
            </div>
            <div className="text-foreground pl-4 border-l-2 border-primary">
              "We don't just write code; we craft experiences that inspire the next generation of leaders."
              <span className="text-muted-foreground block mt-2">— </span>
              <span className="text-primary">&lt;/Dev.Team&gt;</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

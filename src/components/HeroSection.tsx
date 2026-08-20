import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiReact, SiNodedotjs, SiPython, SiDocker, SiFigma, SiTypescript } from "react-icons/si";

const floatingCards = [
  { Icon: SiReact, label: "React", tint: "bg-sky text-sky-foreground", top: "22%", left: "6%", duration: 7 },
  { Icon: SiNodedotjs, label: "Node.js", tint: "bg-mint text-mint-foreground", top: "66%", left: "5%", duration: 8 },
  { Icon: SiTypescript, label: "TypeScript", tint: "bg-secondary text-secondary-foreground", top: "18%", right: "6%", duration: 6.5 },
  { Icon: SiDocker, label: "Docker", tint: "bg-peach text-peach-foreground", top: "68%", right: "6%", duration: 9 },
  { Icon: SiFigma, label: "Figma", tint: "bg-pink text-pink-foreground", top: "44%", right: "3%", duration: 7.5 },
  { Icon: SiPython, label: "Python", tint: "bg-mint text-mint-foreground", top: "42%", left: "3%", duration: 6 },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20 md:pt-36"
    >
      {/* Soft pastel wash background */}
      <div className="absolute inset-0 dot-pattern opacity-50" aria-hidden="true" />
      <div
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/15 rounded-full blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-10%] right-[10%] w-[400px] h-[300px] bg-sky/60 rounded-full blur-[120px]"
        aria-hidden="true"
      />

      {/* Floating tech cards — desktop only, purely decorative */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none" aria-hidden="true">
        {floatingCards.map(({ Icon, label, tint, top, left, right, duration }) => (
          <motion.div
            key={label}
            className={`absolute flex items-center gap-2 px-3.5 py-2.5 rounded-2xl border border-border shadow-[0_12px_30px_-14px_hsl(258_50%_40%/0.35)] ${tint}`}
            style={{ top, left, right }}
            animate={{ y: [0, -14, 0], rotate: [0, 1.5, 0] }}
            transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon className="w-4 h-4" />
            <span className="text-xs font-semibold whitespace-nowrap">{label}</span>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.1] mb-6"
          >
            Building technology.
            <br />
            Solving problems.
            <br />
            Creating <span className="text-primary">impact.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto mb-10"
          >
            We design, build, and maintain digital experiences that create real impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-primary/90 hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.6)] transition-all duration-200"
            >
              Explore Our Work
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#team"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#team")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-card border border-border rounded-full text-sm font-semibold text-foreground hover:border-primary transition-colors duration-200"
            >
              Meet The Team
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

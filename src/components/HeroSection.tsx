import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Code2, Terminal, Zap } from "lucide-react";
import DevLogo from "./DevLogo";

const codeLines = [
  { text: "const devTeam = {", delay: 0 },
  { text: '  name: "AIESEC Dev.Team",', delay: 0.2 },
  { text: '  location: "Sri Lanka",', delay: 0.4 },
  { text: "  passion: Infinity,", delay: 0.6 },
  { text: "  building: () => Future", delay: 0.8 },
  { text: "};", delay: 1 },
];

const HeroSection = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Glowing Orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-mono">AIESEC in Sri Lanka</span>
          </motion.div>

          {/* Main Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <DevLogo size="xl" className="glow-text inline-block" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Building the digital future of AIESEC Sri Lanka, one line of code at a time.
          </motion.p>

          {/* Code Block Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-card/80 backdrop-blur-xl border border-border rounded-lg p-6 max-w-lg mx-auto mb-12 text-left"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-xs text-muted-foreground font-mono">devteam.ts</span>
            </div>
            <div className="font-mono text-sm">
              {codeLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + line.delay }}
                  className="flex"
                >
                  <span className="text-muted-foreground w-8 select-none">{index + 1}</span>
                  <span className="text-code-green">{line.text}</span>
                </motion.div>
              ))}
              <div className="flex">
                <span className="text-muted-foreground w-8 select-none">7</span>
                <span className={`w-2 h-5 bg-primary ${showCursor ? "opacity-100" : "opacity-0"}`} />
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12"
          >
            {[
              { icon: Code2, label: "Projects Built", value: "2+" },
              { icon: Terminal, label: "Lines of Code", value: "10K+" },
              { icon: Zap, label: "Passion Level", value: "∞" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

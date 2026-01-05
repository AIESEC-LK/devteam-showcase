import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowLeft, Users, Code2, Rocket, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const benefits = [
  {
    icon: Code2,
    title: "Learn & Grow",
    description: "Work on real projects and enhance your development skills with hands-on experience.",
  },
  {
    icon: Users,
    title: "Amazing Team",
    description: "Collaborate with passionate developers who share your enthusiasm for technology.",
  },
  {
    icon: Rocket,
    title: "Build Impact",
    description: "Create digital solutions that make a real difference in youth leadership development.",
  },
  {
    icon: Heart,
    title: "Be Part of Something",
    description: "Join a community that values innovation, creativity, and continuous learning.",
  },
];

const JoinUs = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 relative z-10" ref={ref}>
            {/* Back Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-mono text-sm">back_to_home</span>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block font-mono text-primary text-sm mb-4">
                // join_the_team
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Ready to <span className="text-gradient">Build</span> With Us?
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Join the Dev.Team and be part of a passionate community creating 
                innovative digital solutions for AIESEC Sri Lanka.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 card-glow group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Application Form Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <span className="inline-block font-mono text-primary text-sm mb-4">
                  // application_form
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                  Apply <span className="text-gradient">Now</span>
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below to start your journey with Dev.Team
                </p>
              </div>

              {/* Google Form Embed */}
              <div className="bg-card border border-border rounded-xl overflow-hidden card-glow">
                <div className="flex items-center gap-2 p-4 border-b border-border bg-card/80">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-xs text-muted-foreground font-mono">
                    application.form
                  </span>
                </div>
                <div className="p-2 md:p-4 bg-background/50">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdBtDfINXXm4J3wtR8vO7R5pgOppPQrqsc8iNgV-8ZwPKOl0Q/viewform?embedded=true"
                    width="100%"
                    height="800"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="w-full min-h-[800px] rounded-lg"
                    title="Dev.Team Application Form"
                  >
                    Loading…
                  </iframe>
                </div>
              </div>

              {/* Terminal decoration */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-center mt-12 font-mono text-sm text-muted-foreground"
              >
                <span className="text-terminal-green">$</span> await devTeam.
                <span className="text-primary">addMember</span>(you);
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JoinUs;

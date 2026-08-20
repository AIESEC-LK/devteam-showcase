import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-[85vh] flex items-center border-t border-border overflow-hidden"
    >
      <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[140px]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-label mb-6 justify-center"
          >
            Get in Touch
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.1] mb-6"
          >
            Have an idea?
            <br />
            Let's build it<span className="text-primary">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto mb-10"
          >
            Have a problem that technology can solve? Let's turn the idea into something real.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <a
              href="mailto:srilanka@aiesec.net"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-primary/90 hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.6)] transition-all duration-200"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-card border border-border rounded-full text-sm font-semibold text-foreground hover:border-primary transition-colors duration-200"
            >
              Explore Our Projects
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-xs text-muted-foreground"
          >
            <a href="mailto:devteam.srilanka@aiesec.net" className="inline-flex items-center gap-2 hover:text-primary transition-colors duration-200">
              <Mail className="w-3.5 h-3.5" />
              devteam.srilanka@aiesec.net
            </a>
            <a href="tel:+94112746190" className="inline-flex items-center gap-2 hover:text-primary transition-colors duration-200">
              <Phone className="w-3.5 h-3.5" />
              +94 11 274 6190
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              102/2 Nagahawatta Road, Maharagama
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

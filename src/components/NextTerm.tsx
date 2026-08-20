import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const incomingLeads = [
  {
    name: "Akesh Chandrasiri",
    role: "MCVP CXO & IM",
    image: "/memberPhotos/Akesh Chandrasiri Official Picture.jpg",
  },
  {
    name: "Lasal Rathnayake",
    role: "Lead",
    image: "/memberPhotos/Lasal_Lead.jpeg",
  },
];

const NextTerm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section className="py-24 md:py-32 border-t border-border relative overflow-hidden">
      <div
        className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[140px]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <span className="section-label mb-4 justify-center">Term 26.27</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Are you ready to be a part of Term 26.27?
          </h2>
          <p className="text-muted-foreground text-lg">
            Meet the incoming leadership taking the Dev.Team into its next term.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 sm:gap-8 mb-12">
          {incomingLeads.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group w-40 sm:w-56"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-muted mb-4 card-surface">
                <img
                  src={leader.image}
                  alt={leader.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-base font-semibold text-foreground">{leader.name}</h3>
              <p className="text-sm text-primary font-medium">{leader.role}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            onClick={() => navigate("/join-us")}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors duration-200"
          >
            Join Term 26.27
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default NextTerm;

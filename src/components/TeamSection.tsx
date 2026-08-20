import { motion } from "framer-motion";
import { teamMembers } from "@/data/teamMembers";
import TeamCard from "./TeamCard";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TeamSection = () => {
  const navigate = useNavigate();

  return (
    <section id="team" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <span className="section-label mb-4">The Team</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            The people behind the code 25.26.
          </h2>
          <p className="text-muted-foreground text-lg">
            A small, focused engineering team building the digital infrastructure of AIESEC
            Sri Lanka.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index % 10) * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-secondary rounded-3xl p-6 md:p-8"
        >
          <p className="text-secondary-foreground">
            Want to join our team? We're always looking for passionate developers and designers.
          </p>
          <button
            onClick={() => navigate("/join-us")}
            className="group inline-flex items-center gap-1.5 shrink-0 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors duration-200"
          >
            Join Us
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;

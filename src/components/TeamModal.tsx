import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { teamMembers, TeamMember } from "@/data/teamMembers";
import TeamCard from "./TeamCard";

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TeamModal = ({ isOpen, onClose }: TeamModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-background border border-border rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto max-w-5xl w-full">
              {/* Header */}
              <div className="sticky top-0 bg-background border-b border-border px-6 py-6 flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-foreground">Our Team</h2>
                  <p className="text-muted-foreground text-sm mt-1">Meet the talented people behind Dev Team</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-card rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 text-foreground" />
                </button>
              </div>

              {/* Team Members Grid */}
              <div className="px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <TeamCard member={member} />
                    </motion.div>
                  ))}
                </div>

                {/* Info Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-12 p-6 bg-card border border-border rounded-xl text-center"
                >
                  <p className="text-muted-foreground">
                    Want to join our team? We're always looking for passionate developers and designers!
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TeamModal;

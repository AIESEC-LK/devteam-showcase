import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Users,
  Code2,
  Rocket,
  CheckCircle2,
  Compass,
  Cpu,
  Boxes,
  HeartHandshake,
  ShieldCheck,
  Container,
  UsersRound,
  UserCog,
  Megaphone,
  LucideIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const APPLICATION_FORM_URL = "https://forms.gle/Qt7mTrAGquXZQExZ8";

interface RoleInfo {
  title: string;
  icon: LucideIcon;
  count?: string;
  description: string;
}

const roles: RoleInfo[] = [
  {
    title: "Dev Team Lead - Lasal Rathnayake",
    icon: Compass,
    description:
      "Sets the direction for everything our engineering function builds. Decides what we take on each term, keeps our systems and standards healthy, and makes sure the team is set up to deliver and to hand over a stronger foundation than they inherited. The bridge between the dev team and the rest of AIESEC in Sri Lanka.",
  },
  {
    title: "Tech Lead",
    icon: Cpu,
    count: "× 2",
    description:
      "The people the team turns to when a problem doesn't have an obvious answer. Own our technical standards and architecture across every product, guide the tough engineering calls, and lead the initiatives that move our stack forward working across every squad.",
  },
  {
    title: "Product Manager",
    icon: Boxes,
    count: "× 3",
    description:
      "Owns one of our products from idea to launch, together with the squad that builds it. Decides what we build and in what order, keeps delivery on schedule, and stays accountable for getting the product into users' hands.",
  },
  {
    title: "Operations Manager",
    icon: HeartHandshake,
    description:
      "Looks after the people side of the dev team — recruitment, onboarding, regular check-ins, team culture, and the outings that keep us a team rather than a group of contributors. Makes sure everyone here is supported, heard, and glad they joined.",
  },
  {
    title: "Cybersecurity Consultant",
    icon: ShieldCheck,
    description:
      "Makes sure everything we build can be trusted. Reviews our systems for risks, sets the standards for how we protect member data, and advises every squad on handling security properly.",
  },
  {
    title: "DevOps Specialist",
    icon: Container,
    description:
      "Builds the foundation everything else runs on — our containers, deployment pipelines, and environments. Makes shipping code fast, repeatable, and reliable, so every squad can move quickly without reinventing the setup each time.",
  },
  {
    title: "Software Engineering Team Leader",
    icon: UsersRound,
    count: "× 3",
    description:
      "Runs a squad. Breaks the work down, guides members through it, reviews what gets written, and keeps delivery moving all while writing code themselves. Often the first person a new member learns from.",
  },
  {
    title: "HR Member",
    icon: UserCog,
    description:
      "Keeps the team running behind the scenes — from recruitment and onboarding to tracking engagement and organising the events that bring us together. Often the first person a new member speaks to.",
  },
  {
    title: "Digital Marketing Member",
    icon: Megaphone,
    description:
      "How the rest of the world sees the dev team. Runs our social media, designs our posts and merchandise, promotes what we launch, and lends a hand on product design when a squad needs a good eye.",
  },
  {
    title: "Software Engineer",
    icon: Code2,
    count: "× 11",
    description:
      "The people building it all. Working in small squads, they take features from ticket to production, review each other's work, and grow their craft alongside people solving the same problems. Most of our leadership came up through exactly this seat.",
  },
];

const benefits = [
  {
    icon: Code2,
    title: "Learn & Grow",
    description: "Work on real projects and enhance your development skills with hands-on experience.",
    tint: "bg-mint text-mint-foreground",
  },
  {
    icon: Users,
    title: "Amazing Team",
    description: "Collaborate with passionate developers who share your enthusiasm for technology.",
    tint: "bg-sky text-sky-foreground",
  },
  {
    icon: Rocket,
    title: "Build Impact",
    description: "Create digital solutions that make a real difference in youth leadership development.",
    tint: "bg-pink text-pink-foreground",
  },
];

const roleTints = ["bg-sky text-sky-foreground", "bg-mint text-mint-foreground", "bg-pink text-pink-foreground", "bg-peach text-peach-foreground", "bg-secondary text-secondary-foreground"];

const JoinUs = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

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
              <span className="text-sm font-medium">Back to home</span>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="section-label mb-4 justify-center">Join the Team</span>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                Ready to <span className="text-primary">build</span> with us?
              </h1>
              <div className="mb-6 inline-flex flex-col sm:flex-row items-center gap-1 sm:gap-2 px-6 py-3 bg-card border border-border rounded-full text-center">
                <span className="text-primary font-semibold text-sm whitespace-nowrap">Applications open:</span>
                <span className="text-foreground text-sm whitespace-nowrap">Term 26.27</span>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
                Join the Dev.Team for Term 26.27 and be part of a passionate community creating
                innovative digital solutions for AIESEC Sri Lanka.
              </p>
              <a
                href={APPLICATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-primary/90 hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.6)] transition-all duration-200"
              >
                Apply to Join the Team
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-3xl p-6 card-surface group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${benefit.tint}`}>
                    <benefit.icon className="w-6 h-6" />
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

            {/* Open Roles Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-6xl mx-auto mb-20"
            >
              <div className="text-center mb-12">
                <span className="section-label mb-4">Open Roles</span>
                <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
                  Roles open for <span className="text-primary">Term 26.27</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  From leading the team to shipping the code here's every seat we're recruiting
                  for.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {roles.map((role, index) => (
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.05 * index }}
                    className="group relative bg-card border border-border rounded-3xl p-6 card-surface hover:-translate-y-1"
                  >
                    <span className="absolute top-6 right-6 font-mono text-xs text-muted-foreground/30 group-hover:text-primary/60 transition-colors duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 ${roleTints[index % roleTints.length]}`}>
                        <role.icon className="w-6 h-6" strokeWidth={1.75} />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {role.title}
                        </h3>
                        {role.count && (
                          <span className="text-xs font-medium text-muted-foreground">{role.count}</span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {role.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CV Upload Guide Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mx-auto mb-20"
            >
              <div className="text-center mb-8">
                <span className="section-label mb-4">CV Guidelines</span>
                <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
                  Guide for uploading your <span className="text-primary">CV</span>
                </h2>
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full flex-col lg:flex-row">
                  <span className="text-secondary-foreground font-semibold text-sm">Important:</span>
                  <span className="text-secondary-foreground text-sm"> Please ensure your CV includes the following items based on your position</span>
                </div>
                <p className="text-muted-foreground mt-5">
                 CV should be maximum 2 pages
                </p>
              </div>

              <div className="bg-card border border-border rounded-3xl p-6 md:p-8 card-surface">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 flex-shrink-0 h-10 rounded-xl bg-primary flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      What to include
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-medium">Educational Qualifications</p>
                      <p className="text-sm text-muted-foreground">
                        Details about your degree program and other educational qualifications (ongoing/completed)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-medium">AIESEC Experiences</p>
                      <p className="text-sm text-muted-foreground">
                        Role, Team, Duration, Description about completed tasks
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-medium">Your Projects</p>
                      <p className="text-sm text-muted-foreground">
                        Individual/group projects - Add Github links and other relevant links, explain briefly about the project and tasks you completed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-medium">Other Relevant Experiences</p>
                      <p className="text-sm text-muted-foreground">
                        Internships, etc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Apply Section */}
            <motion.div
              id="application-form"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <span className="section-label mb-4">Apply</span>
                <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
                  Applications <span className="text-primary">open</span>
                </h2>
                <p className="text-muted-foreground">
                  Ready to join Dev.Team for Term 26.27? One application, every role.
                </p>
              </div>

              <div className="bg-card border border-border rounded-3xl overflow-hidden card-surface">
                <div className="flex items-center gap-2 p-4 border-b border-border">
                  <div className="w-2.5 h-2.5 rounded-full bg-pink" />
                  <div className="w-2.5 h-2.5 rounded-full bg-peach" />
                  <div className="w-2.5 h-2.5 rounded-full bg-mint" />
                  <span className="ml-3 inline-flex items-center gap-1.5 text-xs text-primary font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    applications.open.term_26_27
                  </span>
                </div>
                <div className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-primary flex items-center justify-center mb-4">
                      <Rocket className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Term 26.27 applications open
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      We're recruiting for every role on the team — from Lead to Software Engineer.
                      Apply once and tell us which seat fits you.
                    </p>
                  </div>

                  <a
                    href={APPLICATION_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.6)] transition-all duration-200 text-lg"
                  >
                    Apply to Join the Team
                    <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JoinUs;

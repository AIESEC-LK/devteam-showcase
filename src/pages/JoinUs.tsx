import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  ArrowLeft, 
  Users, 
  Code2, 
  Rocket, 
  Heart, 
  Monitor, 
  Server, 
  Shield, 
  Wrench,
  ChevronRight,
  Calendar,
  Clock,
  CheckCircle2,
  Star,
  Briefcase,
  Settings
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import { ScrollArea } from "../components/ui/scroll-area";

// Role data based on Dev.Team Term 25.26 Lead Application Booklet
interface Role {
  id: string;
  title: string;
  shortDescription: string;
  jobDescription: string[];
  workingConditions: string[];
  requirements: string[];
  skillsAndQualities: string[];
  kpis: string[];
  isLead?: boolean;
  applyLink?: string;
}

const roles: Role[] = [
  {
    id: "lead",
    title: "Lead - Dev.Team",
    shortDescription: "Lead the entire Dev.Team and drive strategic initiatives across all technical domains.",
    jobDescription: [
      "Provide overall leadership and strategic direction for the Dev.Team",
      "Coordinate with MCVP IM and other stakeholders on strategic initiatives",
      "Oversee all technical projects and ensure alignment with organizational goals",
      "Mentor and guide all team members across different roles",
      "Drive innovation and adoption of new technologies and methodologies",
      "Represent Dev.Team in MC and other high-level meetings",
      "Establish and maintain Dev.Team culture and standards",
      "Make critical decisions regarding project priorities and resource allocation"
    ],
    workingConditions: [
      "15+ hours per week (flexible)",
      "Total duration of 6 months (extendable upon completion)",
      "Leadership responsibilities",
      "Direct reporting to MCVP IM"
    ],
    requirements: [
      "Extensive experience in software development and technical leadership",
      "Previous leadership experience in AIESEC or similar organizations",
      "Strong understanding of full-stack development and modern technologies",
      "Excellent communication and stakeholder management skills",
      "Experience with team management and project coordination",
      "Strategic thinking and vision for technical innovation"
    ],
    skillsAndQualities: [
      "Technical Leadership",
      "Strategic Planning",
      "Team Management",
      "Stakeholder Management",
      "Innovation & Vision",
      "Decision Making",
      "Communication",
      "Mentorship"
    ],
    kpis: [
      "Overall team performance and delivery",
      "Successful completion of strategic initiatives",
      "Team member satisfaction and development",
      "Stakeholder satisfaction",
      "Innovation adoption and implementation",
      "Organizational impact and contribution"
    ],
    isLead: true,
    applyLink: "https://docs.google.com/presentation/d/1MC7CiXKcFJxeMMoQ_ME-yzfpRWtmMKCWspAqbJLQJtY/edit?usp=sharing"
  },
  {
    id: "product-manager",
    title: "Product Manager",
    shortDescription: "Manage the team and resources for on-time completion of projects and tasks.",
    jobDescription: [
      "Manage the team and resources for on time completion of projects/tasks",
      "Assist the tech leads in designing the systems architecture based on the requirements",
      "Create action plans and guide the developers according to the plan",
      "Monitor the progress and provide updates to Dev Team Lead",
      "Take necessary steps to increase the progress of the team if and when the progress is lower than expected",
      "Participate to sprint meetings, physical meetups and workspaces, and bootcamps",
      "Manage project management tools and trackers used"
    ],
    workingConditions: [
      "12 hours per week (max)",
      "Total duration of 6 months (extendable upon completion)",
      "Flexible schedule",
      "Bi-weekly sprint planning meetings"
    ],
    requirements: [
      "Experience in Git and Github or similar platform",
      "Experience in working with project management tools (Trello, Jira, Github projects) is an added advantage",
      "Knowledge on software development and Data Science full stack applications is a value addition",
      "Executive Board experience preferred"
    ],
    skillsAndQualities: [
      "Project Management",
      "Agility",
      "Responsive",
      "Stakeholder management",
      "Team Management",
      "Punctuality"
    ],
    kpis: [
      "# of projects completed",
      "% of developer tasks completed",
      "# of support initiatives",
      "# of tasks completed on time",
      "Participation in sprint meetings and other gatherings"
    ]
  },
  {
    id: "tech-lead",
    title: "Tech Lead",
    shortDescription: "Design systems architecture and provide technical guidance to the team.",
    jobDescription: [
      "Design the systems architecture according to the requirements and assist project managers to create action plans",
      "Brief and project team about the overall project",
      "Knowledge downscaling to developers and conduct sessions in bootcamps",
      "Audit the projects under developments and provide insights for improvements",
      "Provide guidance to developers and managers in critical tasks and when needed (implementing new algorithms and technologies, deployments, bug fixing, etc.)",
      "Version control management & deployment management"
    ],
    workingConditions: [
      "12 hours per week (max)",
      "Total duration of 6 months (extendable upon completion)",
      "Flexible schedule",
      "Bi-weekly sprint planning meetings"
    ],
    requirements: [
      "Experience in Git and Github or similar platform",
      "Knowledge on software development concepts (OOP, Normalization, Denormalization, State management, etc.) and knowledge in Data Science full stack applications is a value addition",
      "Previous technical experience is preferred"
    ],
    skillsAndQualities: [
      "Software Engineering",
      "Data Science/Engineering",
      "Responsive",
      "Stakeholder management",
      "Technical Consultation",
      "Punctuality"
    ],
    kpis: [
      "# of projects completed",
      "% of developer tasks completed",
      "# of support initiatives",
      "# of tasks completed on time",
      "Participation in sprint meetings and other gatherings"
    ]
  },
  {
    id: "cyber-security-consultant",
    title: "Cyber Security Consultant",
    shortDescription: "Prepare cybersecurity strategies and conduct security assessments.",
    jobDescription: [
      "Prepare national cybersecurity strategies and direction along with MCVP IM",
      "Conduct routine security assessments for current and future projects",
      "Downscaling cybersecurity guidelines and knowledge to Dev.Team and AIESEC in Sri Lanka membership",
      "Prepare an incident management and response plan",
      "Audit the projects under developments and provide insights for improvements",
      "Participate in sprint meetings, physical meetups and workspaces, and bootcamps",
      "Oversee Dev.Team internal projects"
    ],
    workingConditions: [
      "12 hours per week (max)",
      "Total duration of 6 months (extendable upon completion)",
      "Flexible schedule",
      "Bi-weekly sprint planning meetings"
    ],
    requirements: [
      "Following an academic program related to cybersecurity",
      "Knowledge of cybersecurity simulation, testing and monitoring tools",
      "Basic knowledge of software development and project management",
      "Knowledge on GDPR and SLPDPA legal frameworks",
      "Executive Board experience preferred"
    ],
    skillsAndQualities: [
      "Cybersecurity",
      "Stakeholder management",
      "Technical Consultation",
      "Responsive",
      "Punctuality"
    ],
    kpis: [
      "# of initiatives conducted",
      "# of audits conducted",
      "# of support initiatives",
      "# of tasks completed on time",
      "Participation in sprint meetings and other gatherings"
    ]
  },
  {
    id: "software-engineer-tl",
    title: "Software Engineer (TL)",
    shortDescription: "Lead development teams and provide guidance to software engineers.",
    jobDescription: [
      "Assist the project manager to plan and distribute the tasks and design the systems architecture",
      "Develop Software Engineering/Data Science applications",
      "Provide guidance to software engineers to complete their tasks",
      "Take necessary steps to increase the progress of the team when and if the progress is lower than expected",
      "Participate in sprint meetings, physical meetups and workspaces, and bootcamps",
      "Update any project management tools and tracker in timely manner",
      "Provide updates to project managers"
    ],
    workingConditions: [
      "10 hours per week (max)",
      "Total duration of 6 months (extendable upon completion)",
      "Flexible schedule",
      "Bi-weekly sprint planning meetings"
    ],
    requirements: [
      "Experience in Git and Github or similar platform",
      "Knowledge on software development concepts (OOP, Normalization, Denormalization, State management, etc.) and knowledge in Data Science full stack applications is a value addition",
      "Previous technical experience is preferred"
    ],
    skillsAndQualities: [
      "Software Engineering",
      "Data Science/Engineering",
      "Responsive",
      "Stakeholder management",
      "Team Management",
      "Punctuality"
    ],
    kpis: [
      "# of projects completed",
      "% of developer tasks completed",
      "# of support initiatives",
      "# of tasks completed on time",
      "Participation in sprint meetings and other gatherings"
    ]
  },
  {
    id: "software-engineer",
    title: "Software Engineer / Data Engineer",
    shortDescription: "Develop software and data applications for Dev.Team projects.",
    jobDescription: [
      "Develop Software/Data applications",
      "Complete the assigned tasks on or before deadline",
      "Update any project management tools and tracker in timely manner",
      "Participate in sprint meetings, physical meetups and workspaces, and bootcamps",
      "Provide updates to Team leaders/project managers when requested"
    ],
    workingConditions: [
      "10 hours per week (max)",
      "Total duration of 6 months (extendable upon completion)",
      "Flexible schedule",
      "Bi-weekly sprint planning meetings"
    ],
    requirements: [
      "Experience in Git and Github or similar platform",
      "Knowledge on software development concepts (OOP, Normalization, Denormalization, State management, etc.) and knowledge in Data Science full stack applications is a value addition"
    ],
    skillsAndQualities: [
      "Software Engineering",
      "Data Science/Engineering",
      "Responsive",
      "Stakeholder management",
      "Team Management",
      "Punctuality"
    ],
    kpis: [
      "# of projects completed",
      "% of developer tasks completed",
      "# of support initiatives",
      "# of tasks completed on time",
      "Participation in sprint meetings and other gatherings"
    ]
  },
  {
    id: "tech-support",
    title: "Tech Support",
    shortDescription: "Fix bugs, conduct routine checks, and assist members with technical issues.",
    jobDescription: [
      "Fix bugs, errors in assigned projects",
      "Conduct routine checks on the products",
      "Audit current projects and document routine maintenance points",
      "Assist members to solve their problems related to the expa and other platforms",
      "Provide updates to project managers when requested"
    ],
    workingConditions: [
      "10 hours per week (max)",
      "Duration - 6 Months",
      "Reports to - Tech Lead"
    ],
    requirements: [
      "Ability to read and understand codes",
      "Quick problem solving ability",
      "Previous technical experience preferred",
      "Experience in Git and Github platforms"
    ],
    skillsAndQualities: [
      "Problem Solving",
      "Stakeholder management",
      "Responsive",
      "Proactive and Reactive"
    ],
    kpis: [
      "# of projects audited",
      "# of issues fixed",
      "# of tasks completed on time",
      "Participation in sprint meetings and other gatherings"
    ]
  },
  {
    id: "operations-manager",
    title: "Operations Manager",
    shortDescription: "Manage non-technical projects and HR related tasks in Dev.Team.",
    jobDescription: [
      "Managing non-technical projects of the Dev.Team (Educational projects, bootcamps) and internal operational tasks",
      "Implementing general SOPs and monitoring",
      "Participate sprint meetings, physical meetups and workspaces, and bootcamps",
      "Update any project management tools and tracker in timely manner",
      "Managing HR related tasks in the Dev.Team (Recruitments, RnRs, Member management related tasks, etc)",
      "Implementing HR related SOPs and monitoring"
    ],
    workingConditions: [
      "8 hours per week (max)",
      "Total duration of 6 months (extendable upon completion)",
      "Flexible schedule",
      "Bi-weekly sprint planning meetings",
      "Reports to - MCVP IM, Lead"
    ],
    requirements: [
      "Experience in project/event management",
      "Experience in working with Google Apps",
      "Experience in working with project management tools (Trello, Jira, Github projects) is an added advantage",
      "Following/completed a degree in Management/HR (or any other academic background - diplomas, CIMA) is an added advantage",
      "Executive Board experience preferred with previous experience in working in PM teams, Recruitment OCs"
    ],
    skillsAndQualities: [
      "Stakeholder management",
      "Team management",
      "Project management",
      "Communicational skills"
    ],
    kpis: [
      "# of tasks/projects completed",
      "# of support initiatives",
      "# of tasks completed on time",
      "# of operational SOPs introduced/implemented",
      "Participation in sprint meetings and other gatherings"
    ]
  }
];

// Contact info
const contactInfo = {
  lead: {
    name: "Chamod Wanigasekara",
    role: "Lead - Dev.Team 25.26",
    org: "AIESEC in Sri Lanka",
    phone: "+94 70 366 0915",
    email: "chamodwanigasekara@aiesec.net"
  },
  mcvp: {
    name: "Dinuka Avinash",
    role: "MCVP Information Management",
    org: "AIESEC in Sri Lanka",
    phone: "+94 77 548 6820",
    email: "dinuka.avinash@aiesec.net"
  }
};

// Timeline data - Round 2
const applicationTimeline = [
  { phase: "Round 2 Applications Open", date: "4th February 2026 - 14th February 2026", status: "active" },
  { phase: "Application Review", date: "15th February 2026 - 17th February 2026", status: "upcoming" },
  { phase: "Interviews", date: "18th February 2026 - 25th February 2026", status: "upcoming" },
  { phase: "Results Announcement", date: "Last Week of February 2026", status: "upcoming" },
  { phase: "Onboarding", date: "First Week of March 2026", status: "upcoming" },
];

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

];

const JoinUs = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleRoleClick = (role: Role) => {
    setSelectedRole(role);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden mt-5">
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
              <div className="mb-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/10 to-primary/10 border border-green-500/20 rounded-lg">
                <span className="text-green-500 font-bold text-sm">🚀 ROUND 2 NOW OPEN:</span>
                <span className="text-foreground text-sm">Applications reopened !</span>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Join the Dev.Team Round 2 and be part of a passionate community creating 
                innovative digital solutions for AIESEC Sri Lanka. Now with Lead positions available!
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
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

            {/* Open Positions Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-6xl mx-auto mb-20"
            >
              <div className="text-center mb-12">
                <span className="inline-block font-mono text-primary text-sm mb-4">
                  // positions_open_round_2
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                  <span className="text-gradient">Round 2</span> Positions for Term 25.26.2
                </h2>
                
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We're reopening applications for Round 2 with exciting new opportunities including Lead position. 
                  Join us in building the future of ASL Dev.Team !
                </p>
              </div>

              {/* Roles Grid */}
              <div className="space-y-6">
                {/* Lead Position - Special Highlight */}
                {roles.filter(role => role.isLead).map((role, index) => (
                  <motion.div
                    key={role.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="group cursor-pointer"
                  >
                    <div className="relative bg-gradient-to-br from-primary/5 to-orange-500/5 border-2 border-gradient-to-r from-primary to-orange-500 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 overflow-hidden">

             
                      
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center">
                              <Star className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-foreground mb-1">
                                {role.title}
                              </h3>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-6 text-lg">
                            {role.shortDescription}
                          </p>
                          
                          <div className="flex flex-col sm:flex-row gap-3">
                            <button
                              onClick={() => handleRoleClick(role)}
                              className="inline-flex items-center gap-2 px-6 py-3 bg-muted border border-border rounded-lg hover:bg-muted/80 transition-colors"
                            >
                              <span>View Details</span>
                              <ChevronRight className="w-4 h-4" />
                            </button>
                            <a
                              href={role.applyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all transform hover:-translate-y-0.5"
                            >
                              <Star className="w-4 h-4" />
                              <span>Apply for Lead</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Other Positions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {roles.filter(role => !role.isLead).map((role, index) => (
                    <motion.div
                      key={role.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
                      className="group cursor-pointer"
                    >
                      <div className="relative bg-card border border-border rounded-xl p-6 h-full transition-all duration-300 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 overflow-hidden">
                        {/* Gradient background on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                        
                        <div className="relative z-10">
                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-orange-500 transition-colors">
                            {role.title}
                          </h3>
                          
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {role.shortDescription}
                          </p>
                          
                          <div className="space-y-3">
                            <button
                              onClick={() => handleRoleClick(role)}
                              className="flex items-center text-primary text-sm font-medium w-full"
                            >
                              <span>View Details</span>
                              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <a
                              href="#application-form"
                              className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                            >
                              <Briefcase className="w-4 h-4" />
                              <span>Apply Now</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Application Timeline - ROUND 2 ACTIVE */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mx-auto mb-20"
            >
              <div className="text-center mb-12">
                <span className="inline-block font-mono text-primary text-sm mb-4">
                  // round_2_timeline
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                  Round 2 <span className="text-gradient">Timeline</span>
                </h2>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden md:block" />
                
                <div className="space-y-8 md:space-y-0">
                  {applicationTimeline.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className={`relative md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:mb-8`}
                    >
                      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                        <div className={`bg-card border rounded-xl p-4 ${item.status === 'active' ? 'border-primary shadow-lg shadow-primary/20' : 'border-border'}`}>
                          <div className="flex items-center gap-2 mb-1">
                            {item.status === 'active' ? (
                              <Calendar className="w-4 h-4 text-primary" />
                            ) : (
                              <Clock className="w-4 h-4 text-muted-foreground" />
                            )}
                            <span className={`text-sm font-mono ${item.status === 'active' ? 'text-primary' : 'text-muted-foreground'}`}>
                              {item.date}
                            </span>
                          </div>
                          <h3 className={`font-semibold ${item.status === 'active' ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {item.phase}
                          </h3>
                          {item.status === 'active' && (
                            <span className="inline-flex items-center gap-1 text-xs text-primary mt-2 font-mono">
                              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                              Currently Active
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 hidden md:block ${item.status === 'active' ? 'bg-primary border-background' : 'bg-muted border-background'}`} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div> */}

            {/* CV Upload Guide Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mx-auto mb-20"
            >
              <div className="text-center mb-8">
                <span className="inline-block font-mono text-primary text-sm mb-4">
                  // cv_guidelines
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                  Guide for Uploading Your <span className="text-gradient">CV</span>
                </h2>
                       <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-lg flex-col lg:flex-row">
                  <span className="text-orange-500 font-semibold text-sm">⚠️ Important:</span>
                  <span className="text-foreground text-sm"> Please ensure your CV includes the following items based on your position</span>
                </div>
                <p className="text-muted-foreground mt-5">
                 CV should be maximum 2 pages
                </p>
         
              </div>

              <div className="space-y-6">
                {/* Technical Positions */}
                <div className="bg-card border border-border rounded-xl p-6 card-glow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 flex-shrink-0 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <Code2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        Technical Positions
                      </h3>
                     
                    </div>
                  </div>

                  <div className="space-y-3 ml-13">
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

                {/* Operations Manager */}
                <div className="bg-card border border-border rounded-xl p-6 card-glow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        Operations Manager Position
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3 ml-13">
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
                        <p className="text-foreground font-medium">Other Relevant Experiences</p>
                        <p className="text-sm text-muted-foreground">
                          Internships, etc.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Application Form Section */}
            <motion.div
              id="application-form"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <span className="inline-block font-mono text-primary text-sm mb-4">
                  // round_2_applications_open
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                  Round 2 Applications <span className="text-gradient">Open</span>
                </h2>
                <p className="text-muted-foreground">
                  Ready to join Dev.Team? Apply now for Round 2 positions including the Lead role!
                </p>
              </div>

              {/* Applications Open Card */}
              <div className="bg-card border border-green-500/20 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 p-4 border-b border-green-500/20 bg-green-500/5">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-xs text-green-500 font-mono">
                    applications.open.round2
                  </span>
                </div>
                <div className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-green-500 to-primary flex items-center justify-center mb-4">
                      <span className="text-2xl text-white">🚀</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Round 2 Applications Open
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      We're excited to announce Round 2 applications for Dev.Team Term 25.26.2. Apply now for regular positions or the prestigious Lead role!
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <a
                      href="https://docs.google.com/presentation/d/1MC7CiXKcFJxeMMoQ_ME-yzfpRWtmMKCWspAqbJLQJtY/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-orange-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all transform hover:-translate-y-0.5 text-lg"
                    >
                      <Star className="w-5 h-5" />
                      <span>Apply for the Lead Position</span>
                    </a>
                    
                    <div className="text-muted-foreground text-sm">or</div>
                    
                    <a
                      href="https://forms.google.com/your-regular-application-form"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Briefcase className="w-5 h-5" />
                      <span>Apply for Other Positions</span>
                    </a>
                  </div>
                  
                  {/* <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                    <p className="text-xs text-muted-foreground">
                      Application Deadline: <strong className="text-foreground">14th February 2026</strong>
                    </p>
                  </div> */}
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
                <span className="text-green-500">// Round 2 Active!</span>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Role Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] p-0 overflow-hidden">
          {selectedRole && (
            <>
              {/* Header */}
              <div className="bg-card border-b border-border p-6">
                <div>
                  <DialogTitle className="text-2xl font-bold text-foreground">
                    {selectedRole.title}
                  </DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    Dev.Team Term 25.26
                  </DialogDescription>
                </div>
              </div>

              <ScrollArea className="max-h-[60vh] p-6">
                <div className="space-y-6">
                  {/* Working Conditions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedRole.workingConditions.map((condition, index) => (
                      <div key={`condition-${index}`} className="bg-muted/50 rounded-lg p-3">
                        <div className="flex items-center gap-2 text-foreground text-sm">
                          <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{condition}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Job Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-1 h-5 bg-primary rounded-full" />
                      Job Description
                    </h3>
                    <ul className="space-y-2">
                      {selectedRole.jobDescription.map((item, index) => (
                        <li key={`job-${index}`} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-1 h-5 bg-primary rounded-full" />
                      Requirements
                    </h3>
                    <ul className="space-y-2">
                      {selectedRole.requirements.map((item, index) => (
                        <li key={`req-${index}`} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills & Qualities */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-1 h-5 bg-primary rounded-full" />
                      Skills & Qualities
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedRole.skillsAndQualities.map((skill, index) => (
                        <span
                          key={`skill-${index}`}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          <Star className="w-3 h-3" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* KPIs/MoS */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-1 h-5 bg-primary rounded-full" />
                      KPIs / Measures of Success
                    </h3>
                    <ul className="space-y-2">
                      {selectedRole.kpis.map((kpi, index) => (
                        <li key={`kpi-${index}`} className="flex items-start gap-2 text-muted-foreground">
                          <Rocket className="w-4 h-4 text-violet-500 mt-1 flex-shrink-0" />
                          <span>{kpi}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Apply CTA */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-center text-muted-foreground mb-4">
                      Ready to join us? Round 2 applications are now open!
                    </p>
                    <div className="space-y-3">
                      {selectedRole && selectedRole.isLead ? (
                        <a
                          href={selectedRole.applyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3 px-6 bg-gradient-to-r from-primary to-orange-500 text-white font-bold rounded-lg text-center inline-flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-all transform hover:-translate-y-0.5"
                        >
                          <Star className="w-4 h-4" />
                          <span>Apply for Lead Position</span>
                        </a>
                      ) : (
                        <a
                          href="https://forms.google.com/your-regular-application-form"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3 px-6 bg-primary text-white font-semibold rounded-lg text-center inline-flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                        >
                          <Briefcase className="w-4 h-4" />
                          <span>Apply Now</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default JoinUs;

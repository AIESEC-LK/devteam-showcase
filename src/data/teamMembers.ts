export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  description?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Doe",
    position: "Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "Full-stack developer with 5+ years of experience",
  },
  {
    id: 2,
    name: "Sarah Smith",
    position: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    description: "Creative designer focused on user experience",
  },
  {
    id: 3,
    name: "Mike Johnson",
    position: "Backend Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    description: "Specializes in scalable server architecture",
  },
  {
    id: 4,
    name: "Emma Wilson",
    position: "Project Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "Ensures projects stay on track and deliver value",
  },
  {
    id: 5,
    name: "David Brown",
    position: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "Expert in React and modern web technologies",
  },
  {
    id: 6,
    name: "Lisa Chen",
    position: "QA Engineer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    description: "Ensures quality and reliability of our products",
  },
];

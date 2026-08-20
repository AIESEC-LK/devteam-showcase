import { Code2, Server, Database, Cloud, BrainCircuit, LucideIcon } from "lucide-react";

export interface TechGroup {
  category: string;
  icon: LucideIcon;
  items: string[];
}

export const techStack: TechGroup[] = [
  {
    category: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Python", "Java", "Spring Boot"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    category: "Infrastructure",
    icon: Cloud,
    items: ["Docker", "GitHub Actions", "Vercel", "AWS"],
  },
  {
    category: "AI / Data",
    icon: BrainCircuit,
    items: ["Python", "TensorFlow", "Machine Learning"],
  },
];

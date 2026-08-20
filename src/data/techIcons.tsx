import { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGithubactions,
  SiVercel,
  SiTensorflow,
} from "react-icons/si";
import { Coffee, Cloud, BrainCircuit } from "lucide-react";

// Maps a tech item name (as used in techStack.ts) to its brand icon.
// A couple of entries (Java, AWS, Machine Learning) fall back to a generic
// lucide icon since Simple Icons doesn't ship a mark for them.
export const techIcons: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  Python: SiPython,
  Java: Coffee,
  "Spring Boot": SiSpringboot,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Docker: SiDocker,
  "GitHub Actions": SiGithubactions,
  Vercel: SiVercel,
  AWS: Cloud,
  TensorFlow: SiTensorflow,
  "Machine Learning": BrainCircuit,
};

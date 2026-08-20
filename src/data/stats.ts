import { projects } from "./projects";
import { teamMembers } from "./teamMembers";

const uniqueTechnologies = new Set(
  projects.flatMap((project) => [...project.tags, ...project.technologies])
);

export interface Stat {
  value: string;
  label: string;
}

// Values are derived directly from the data sources above —
// update projects.ts / teamMembers.ts and these numbers follow.
export const stats: Stat[] = [
  { value: `${teamMembers.length}+`, label: "Team Members" },
  { value: `${projects.length}+`, label: "Digital Products" },
  { value: `${uniqueTechnologies.size}+`, label: "Technologies Used" },
  { value: "22+", label: "Local Committees Reached" },
];

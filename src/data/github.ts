import { projects } from "./projects";

// Structured so a real GitHub API response (`/orgs/{org}/repos`) can be
// mapped into this shape later without touching the component.
export interface RepoCard {
  name: string;
  description: string;
  language: string;
  topics: string[];
  url?: string;
}

export const githubOrg = {
  handle: "AIESEC-LK",
  url: "https://github.com/AIESEC-LK",
};

export const repos: RepoCard[] = projects.map((project) => ({
  name: project.title,
  description: project.description,
  language: project.tags[0] ?? project.technologies[0],
  topics: project.tags,
  url: project.liveUrl,
}));

// Deterministic placeholder contribution grid — purely illustrative until
// the GitHub API is wired in. 5 rows (weeks) x 12 columns, level 0-3.
export const activityGrid: number[][] = Array.from({ length: 12 }, (_, col) =>
  Array.from({ length: 7 }, (_, row) => (col * 7 + row * 3) % 4)
);

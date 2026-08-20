import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { githubOrg, repos, activityGrid } from "@/data/github";

const levelColor = ["bg-muted", "bg-mint/60", "bg-mint", "bg-primary"];

const GitHubSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-4 mb-16"
        >
          <div className="max-w-2xl">
            <span className="section-label mb-4">Open Source</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Built in public.
            </h2>
            <p className="text-muted-foreground text-lg">
              A look at the repositories and systems the team ships and maintains.
            </p>
          </div>
          <a
            href={githubOrg.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary bg-card border border-border hover:border-primary/50 rounded-full px-4 py-2.5 transition-colors duration-200"
          >
            <SiGithub className="w-4 h-4" />
            github.com/{githubOrg.handle}
          </a>
        </motion.div>

        <div className="bg-card border border-border rounded-3xl overflow-hidden card-surface">
          <div className="flex items-center gap-2 px-5 py-4 border-b border-border">
            <div className="w-2.5 h-2.5 rounded-full bg-pink" />
            <div className="w-2.5 h-2.5 rounded-full bg-peach" />
            <div className="w-2.5 h-2.5 rounded-full bg-mint" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">devteam / repositories</span>
          </div>

          <div className="grid lg:grid-cols-[1.6fr_1fr]">
            <div className="divide-y divide-border">
              {repos.map((repo, index) => {
                const Tag = repo.url ? motion.a : motion.div;
                return (
                  <Tag
                    key={repo.name}
                    {...(repo.url ? { href: repo.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className={`group flex items-start justify-between gap-4 p-5 hover:bg-muted/60 transition-colors duration-200 ${
                      repo.url ? "cursor-pointer" : "cursor-default"
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors duration-200 truncate">
                          {repo.name}
                        </h3>
                        {repo.url && (
                          <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                        {repo.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-muted rounded-full px-2.5 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {repo.language}
                      </span>
                    </div>
                  </Tag>
                );
              })}
            </div>

            <div className="p-5 md:p-6 border-t lg:border-t-0 lg:border-l border-border">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Activity
              </span>
              <div className="flex gap-1 mt-4 mb-3">
                {activityGrid.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1">
                    {week.map((level, dayIndex) => (
                      <div
                        key={dayIndex}
                        className={`w-2.5 h-2.5 rounded-sm ${levelColor[level]}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground/80 leading-relaxed">
                Illustrative activity graph — connect the GitHub API for live data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;

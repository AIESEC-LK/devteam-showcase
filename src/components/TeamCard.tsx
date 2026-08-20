import { Linkedin } from "lucide-react";
import { TeamMember } from "@/data/teamMembers";

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <div className="group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-muted mb-4 card-surface">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />
      </div>

      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
        {member.name}
      </h3>
      <p className="text-sm text-muted-foreground mb-2">{member.position}</p>

      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors duration-200 w-fit"
          aria-label={`${member.name} on LinkedIn`}
        >
          <Linkedin className="w-3.5 h-3.5" />
          LinkedIn
        </a>
      )}
    </div>
  );
};

export default TeamCard;


import { TeamMember } from "@/data/teamMembers";

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <div
   
      className="group h-full"
    >
      <div className="bg-card border border-border  rounded-xl overflow-hidden h-full card-glow transition-all duration-300">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-muted h-64">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 z-10 hover:scale-110 transition-transform duration-200"
              aria-label={`${member.name}'s LinkedIn profile`}
            >
              <img
                src="/linkedin.png"
                alt="LinkedIn"
                className="w-8 h-8"
              />
            </a>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {member.name}
          </h3>
          <p className="text-sm font-medium text-primary mb-3">{member.position}</p>
          {/* {member.description && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {member.description}
            </p>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

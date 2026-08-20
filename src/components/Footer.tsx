import { Instagram, ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DevLogo from "./DevLogo";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Team", href: "#team" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Moments", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: SiGithub, href: "https://github.com/AIESEC-LK", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com/aiesecsrilanka", label: "Instagram" },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-14">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 mb-10">
          <div>
            <DevLogo size="sm" animated={false} />
            <p className="text-muted-foreground text-sm mt-3 max-w-xs">
              AIESEC in Sri Lanka<br />Development Team
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-8 gap-y-3">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <Link
            to="/join-us"
            className="group inline-flex items-center justify-center gap-1.5 shrink-0 text-sm font-semibold bg-primary text-primary-foreground rounded-full px-5 py-2.5 hover:bg-primary/90 transition-colors duration-200 h-fit"
          >
            Join Us
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>&copy; 2026 AIESEC in Sri Lanka Dev.Team</span>
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-mint-foreground animate-pulse" aria-hidden="true" />
            All systems operational
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

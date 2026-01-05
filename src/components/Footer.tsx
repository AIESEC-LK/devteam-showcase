import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, Twitter, Mail, Phone, MapPin, Heart } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import DevLogo from "./DevLogo";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/aiesecsrilanka", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/aiesecsrilanka", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com/@aiesecsrilanka", label: "YouTube" },
  { icon: Twitter, href: "https://twitter.com/aiesecsrilanka", label: "X (Twitter)" },
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
    <footer id="contact" className="relative bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <div className="text-lg font-semibold text-foreground mb-2">Powered by</div>
              {/* <img 
                src="https://aiesec.lk/_next/image?url=%2Fimages%2Flogo%2FAIESEC%20Logo.png&w=256&q=75" 
                alt="AIESEC Logo" 
                className="h-8 invert brightness-0 mb-4"
              /> */}
              <p className="text-muted-foreground">AIESEC in Sri Lanka</p>
            </div>
            <p className="text-muted-foreground text-sm">
              Authentic Sri Lankan experiences through the eyes of youth leadership.
              Your adventure starts here.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <a 
                  href="mailto:srilanka@aiesec.net" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  srilanka@aiesec.net
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <a 
                  href="tel:+94112746190" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +94 11 274 6190
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">
                  102/2 Nagahawatta Road, Maharagama, 10280
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center">
            <span className="text-muted-foreground text-sm">
              Made with <Heart className="w-4 h-4 inline-block text-primary mx-1" fill="currentColor" /> by
            </span>
            <DevLogo size="sm" animated={false} />
            <span className="text-muted-foreground text-sm">
              of AIESEC in Sri Lanka
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

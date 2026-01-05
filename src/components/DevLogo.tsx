import { motion } from "framer-motion";

interface DevLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  className?: string;
  navbar?: boolean;
}

const sizeClasses = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-4xl",
  xl: "text-6xl md:text-7xl",
};

const DevLogo = ({  animated = true, className = "" , navbar = true }: DevLogoProps) => {
  const Component = animated ? motion.span : "span";
  
  return (
    <Component
      className={`font-mono font-bold tracking-tight ${navbar ? "lg:text-2xl" : "text-4xl xl:text-7xl"} ${className}`}
      {...(animated && {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
      })}
    >
      <span className="text-muted-foreground">&lt;/</span>
      <span className="text-gradient">Dev</span>
      <span className="text-foreground">.</span>
      <span className="text-primary">Team</span>
      <span className="text-muted-foreground">&gt;</span>
    </Component>
  );
};

export default DevLogo;

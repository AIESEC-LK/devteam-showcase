import { motion } from "framer-motion";

interface DevLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  className?: string;
  navbar?: boolean;
}

const heights: Record<NonNullable<DevLogoProps["size"]>, string> = {
  sm: "h-7",
  md: "h-9",
  lg: "h-14",
  xl: "h-20",
};

const DevLogo = ({ animated = true, className = "", navbar = true, size }: DevLogoProps) => {
  const Component = animated ? motion.img : "img";
  const height = heights[size ?? (navbar ? "sm" : "lg")];

  return (
    <Component
      src="/dev-team-logo.png"
      alt="Dev.Team — AIESEC in Sri Lanka"
      className={`${height} w-auto ${className}`}
      {...(animated && {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
      })}
    />
  );
};

export default DevLogo;

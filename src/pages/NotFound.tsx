import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background dot-pattern">
      <div className="text-center px-4">
        <span className="section-label mb-4 justify-center">Error 404</span>
        <h1 className="font-display text-6xl md:text-7xl font-bold text-foreground mb-4">404</h1>
        <p className="mb-8 text-lg text-muted-foreground">This page doesn't exist.</p>
        <Link
          to="/"
          className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

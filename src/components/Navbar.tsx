import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-gray-100 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-serif font-bold text-xl text-brand-dark">
          <div className="w-8 h-8 bg-brand-gold text-white rounded-lg flex items-center justify-center">
            <Home className="w-5 h-5" />
          </div>
          <span>GDN<span className="hidden sm:inline"> Ingatlanhálózat</span></span>
        </div>

        {/* CTA */}
        <Button 
          size="sm" 
          className={cn(
            "font-bold uppercase tracking-wide shadow-md transition-all",
            isScrolled ? "bg-brand-accent text-white hover:bg-brand-accent/90" : "bg-brand-dark text-white hover:bg-brand-dark/90"
          )}
        >
          Kérem a visszahívást
        </Button>
      </div>
    </nav>
  );
}

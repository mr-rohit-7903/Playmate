import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 
      bg-[linear-gradient(90deg,rgba(0,123,255,0.45)_0%,rgba(10,15,44,0.45)_97%)]
      backdrop-blur-2xl"
    >

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-white">
            <img src="/logo-w.png" alt="playmate" className="h-8 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white hover:text-white/80 transition-colors">Home</Link>
            <Link to="/venues" className="text-white hover:text-white/80 transition-colors">Venues</Link>
            <Link to="/tournaments" className="text-white hover:text-white/80 transition-colors">Tournaments</Link>
            <Link to="/community" className="text-white hover:text-white/80 transition-colors">Community</Link>
            <Link to="/careers" className="text-white hover:text-white/80 transition-colors">Careers</Link>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Login
            </Button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            <Menu size={24} />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link to="/" className="block text-white hover:text-white/80 transition-colors">Home</Link>
            <Link to="/venues" className="block text-white hover:text-white/80 transition-colors">Venues</Link>
            <Link to="/tournaments" className="block text-white hover:text-white/80 transition-colors">Tournaments</Link>
            <Link to="/community" className="block text-white hover:text-white/80 transition-colors">Community</Link>
            <Link to="/careers" className="block text-white hover:text-white/80 transition-colors">Careers</Link>
            <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
              Login
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

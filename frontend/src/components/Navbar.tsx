import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth(); // 👈 from your auth hook
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const goToProfile = () => navigate("/profile");

  const isProfilePage = location.pathname === "/profile";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 
      bg-[linear-gradient(90deg,rgba(0,123,255,0.45)_0%,rgba(10,15,44,0.45)_97%)]
      backdrop-blur-2xl"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">
            <img src="/logo-w.png" alt="playmate" className="h-8 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white hover:text-white/80 transition-colors">Home</Link>
            <Link to="/venues" className="text-white hover:text-white/80 transition-colors">Venues</Link>
            <Link to="/tournaments" className="text-white hover:text-white/80 transition-colors">Tournaments</Link>
            <Link to="/community" className="text-white hover:text-white/80 transition-colors">Community</Link>
            <Link to="/careers" className="text-white hover:text-white/80 transition-colors">Careers</Link>

            {/* Button area changes based on auth */}
            {!user ? (
              <Button
                asChild
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Link to="/login">Login</Link>
              </Button>
            ) : (
              <>
                {isProfilePage ? (
                  <Button
                    variant="outline"
                    className="bg-red-500/20 border-red-500/40 text-red-300 hover:bg-red-500/30"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                ) : (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="rounded-full bg-white/20 p-2 border border-white/30 text-white hover:bg-white/30 transition">
                        <User className="h-5 w-5" />
                      </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-44">
                      <DropdownMenuItem onClick={goToProfile}>
                        Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={handleLogout}>
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link to="/" className="block text-white hover:text-white/80 transition-colors">Home</Link>
            <Link to="/venues" className="block text-white hover:text-white/80 transition-colors">Venues</Link>
            <Link to="/tournaments" className="block text-white hover:text-white/80 transition-colors">Tournaments</Link>
            <Link to="/community" className="block text-white hover:text-white/80 transition-colors">Community</Link>
            <Link to="/careers" className="block text-white hover:text-white/80 transition-colors">Careers</Link>

            {!user ? (
              <Button
                className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20"
                asChild
              >
                <Link to="/login">Login</Link>
              </Button>
            ) : (
              <div className="space-y-2">
                <Button onClick={goToProfile} className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Profile
                </Button>
                <Button onClick={handleLogout} className="w-full bg-red-500/20 border-red-500/40 text-red-300 hover:bg-red-500/30">
                  Logout
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

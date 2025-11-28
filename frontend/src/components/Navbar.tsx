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
import { toast } from "sonner";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const isProfilePage = location.pathname === "/profile";
  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully 👋");
      navigate("/login");
    } catch (err) {
      toast.error("Logout failed. Please try again.");
    }
  };

  const goToProfile = () => navigate("/profile");

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

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white hover:text-white/80 transition-colors">Home</Link>
            <Link to="/venues" className="text-white hover:text-white/80 transition-colors">Venues</Link>
            <Link to="/tournaments" className="text-white hover:text-white/80 transition-colors">Tournaments</Link>
            <Link to="/community" className="text-white hover:text-white/80 transition-colors">Community</Link>
            <Link to="/careers" className="text-white hover:text-white/80 transition-colors">Careers</Link>

            {/* Auth Buttons */}
            {!user ? (
              <Button
                asChild
                className="bg-white text-primary font-semibold px-6 rounded-full hover:bg-white/90 transition shadow"
              >
                {isLoginPage ? (
                  <Link to="/signup">Register</Link>
                ) : isSignupPage ? (
                  <Link to="/login">Login</Link>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </Button>
            ) : (
              <>
                {isProfilePage ? (
                  <Button
                    className="bg-red-500 text-white font-semibold px-6 rounded-full hover:bg-red-600 transition shadow"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                ) : (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="rounded-full bg-white text-primary font-bold p-2 border-2 border-white hover:bg-white/90 transition shadow">
                        <User className="h-5 w-5" />
                      </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-44">
                      <DropdownMenuItem onClick={goToProfile}>Profile</DropdownMenuItem>
                      <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link to="/" onClick={() => setIsOpen(false)} className="block text-white hover:text-white/80">Home</Link>
            <Link to="/venues" onClick={() => setIsOpen(false)} className="block text-white hover:text-white/80">Venues</Link>
            <Link to="/tournaments" onClick={() => setIsOpen(false)} className="block text-white hover:text-white/80">Tournaments</Link>
            <Link to="/community" onClick={() => setIsOpen(false)} className="block text-white hover:text-white/80">Community</Link>
            <Link to="/careers" onClick={() => setIsOpen(false)} className="block text-white hover:text-white/80">Careers</Link>

            {!user ? (
              <Button
                asChild
                className="w-full bg-white text-primary font-semibold rounded-full hover:bg-white/90 shadow"
              >
                {isLoginPage ? (
                  <Link to="/signup" onClick={() => setIsOpen(false)}>Register</Link>
                ) : isSignupPage ? (
                  <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
                ) : (
                  <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
                )}
              </Button>
            ) : (
              <div className="space-y-2">
                <Button
                  onClick={() => {
                    goToProfile();
                    setIsOpen(false);
                  }}
                  className="w-full bg-primary text-white font-semibold rounded-full hover:bg-primary/90 shadow"
                >
                  Profile
                </Button>
                <Button
                  onClick={handleLogout}
                  className="w-full bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 shadow"
                >
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

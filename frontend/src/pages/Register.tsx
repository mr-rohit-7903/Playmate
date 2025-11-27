import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import { Mail, Lock, User } from "lucide-react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase"; // 👈 adjust path if needed

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: name });
      }

  console.log("Registered:", userCredential.user);
  navigate("/");
    } catch (err: any) {
      console.error(err);
      // Optional: map Firebase error codes to nicer messages
      setError(err.message || "Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-sports-pattern bg-cover bg-center">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left side – copy */}
            <div className="space-y-6 text-left">
              <p className="text-sm tracking-widest uppercase text-primary">
                Create your
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight flex items-center gap-3">
                <img src="/logo-b.png" alt="PlayMate" className="h-12 w-auto" />
                Account
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Join the community of athletes, book venues instantly, compete in tournaments,
                build teams, and climb the leaderboards. Your journey starts today.
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="px-3 py-1 rounded-full border border-border bg-background/60 backdrop-blur">
                  • Organize Matches
                </span>
                <span className="px-3 py-1 rounded-full border border-border bg-background/60 backdrop-blur">
                  • Track Stats
                </span>
                <span className="px-3 py-1 rounded-full border border-border bg-background/60 backdrop-blur">
                  • Meet Athletes
                </span>
              </div>
            </div>

            {/* Right side – card */}
            <Card className="w-full max-w-md mx-auto bg-background/90 backdrop-blur shadow-xl border border-border">
              <CardHeader className="space-y-2">
                <h2 className="text-2xl font-bold">Register</h2>
                <p className="text-sm text-muted-foreground">
                  Fill in your details to create your PlayMate account.
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <form className="space-y-4" onSubmit={handleRegister}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Full name"
                        className="pl-9"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="pl-9"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-9"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-9"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {error && (
                    <p className="text-sm text-red-500">
                      {error}
                    </p>
                  )}

                  <Button
                    size="lg"
                    className="w-full rounded-full mt-2"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Creating account..." : "Register"}
                  </Button>
                </form>
              </CardContent>

              <CardFooter className="flex flex-col gap-4">
                <p className="text-sm text-center text-muted-foreground">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="text-primary font-medium hover:underline"
                  >
                    Log In
                  </a>
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;

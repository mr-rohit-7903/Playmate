import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import { Mail, Lock } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase"; // 👈 make sure this path matches your file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
  console.log("Logged in:", userCredential.user);
  navigate("/");
    } catch (err: any) {
      console.error(err);
      setError("Invalid email or password. Please try again.");
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
            {/* Left side – brand / copy */}
            <div className="space-y-6 text-left">
              <p className="text-sm tracking-widest uppercase text-primary">
                Welcome back to
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight flex items-center gap-3">
                <img src="/logo-b.png" alt="PlayMate" className="h-12 w-auto" />
                Login
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Pick up where you left off. Track your matches, join tournaments,
                manage your team, and keep your game day plans in one place.
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="px-3 py-1 rounded-full border border-border bg-background/60 backdrop-blur">
                  • Book Venues Faster
                </span>
                <span className="px-3 py-1 rounded-full border border-border bg-background/60 backdrop-blur">
                  • Join Local Tournaments
                </span>
                <span className="px-3 py-1 rounded-full border border-border bg-background/60 backdrop-blur">
                  • Track Your Progress
                </span>
              </div>
            </div>

            {/* Right side – login card */}
            <Card className="w-full max-w-md mx-auto bg-background/90 backdrop-blur shadow-xl border border-border">
              <CardHeader className="space-y-2">
                <h2 className="text-2xl font-bold">Log In</h2>
                <p className="text-sm text-muted-foreground">
                  Enter your details to access your PlayMate account.
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <form className="space-y-4" onSubmit={handleLogin}>
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

                  <div className="flex items-center justify-between text-sm">
                    <button
                      type="button"
                      className="text-primary hover:underline"
                      // onClick={...} // optional: add reset password logic later
                    >
                      Forgot password?
                    </button>
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
                    {loading ? "Logging in..." : "Log In"}
                  </Button>
                </form>
              </CardContent>

              <CardFooter className="flex flex-col gap-4">
                <p className="text-sm text-center text-muted-foreground">
                  New to <span className="italic">PlayMate</span>?{" "}
                  <a
                    href="/signup"
                    className="text-primary font-medium hover:underline"
                  >
                    Create an account
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

export default Login;

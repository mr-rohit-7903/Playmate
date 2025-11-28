import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Sparkles,
  Trophy,
  ArrowRight,
} from "lucide-react";

const roles = [
  {
    title: "Frontend Engineer",
    type: "Full-time",
    location: "Remote / Bangalore",
    description:
      "Build fast, delightful experiences for athletes using React, TypeScript, and Tailwind. You’ll work closely with design and product to ship features end-to-end.",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Product Designer",
    type: "Full-time",
    location: "Remote / Mumbai",
    description:
      "Design smooth booking flows, community features, and mobile-first experiences that keep players coming back.",
    tags: ["UI/UX", "Figma", "Design Systems"],
  },
  {
    title: "Backend Engineer",
    type: "Full-time",
    location: "Hybrid • Bangalore",
    description:
      "Own our core APIs, authentication, and match-making logic. Experience with Node, Firebase, or serverless is a plus.",
    tags: ["Node.js", "APIs", "Databases"],
  },
];

const highlights = [
  {
    icon: Users,
    title: "Built for players, by players",
    desc: "We’re a small, mission-driven team that actually plays the sports we’re building for.",
  },
  {
    icon: Trophy,
    title: "Real-world impact",
    desc: "Every feature shipped turns into more people playing together offline—not just more screen time.",
  },
  {
    icon: Sparkles,
    title: "Room to own & grow",
    desc: "You’ll own projects end-to-end, ship fast, and grow with the product from an early stage.",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-16 bg-sports-pattern bg-cover bg-center">
        <div className="min-h-[320px] md:min-h-[380px] bg-gradient-to-r from-background/95 via-background/85 to-background/40 flex items-center">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Help people{" "}
                <span className="italic text-primary">play more</span>, not just
                scroll more.
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                We’re building the home for athletes, weekend hoopers, and
                turf-regulars. Join us if you want to ship real products, move
                fast, and see your work show up in real matches.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full">
                  View Open Roles
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary/30"
                >
                  Send us your CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why PlayMate */}
      <section className="py-12 bg-muted/30 border-b">
        <div className="container mx-auto px-4 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Why join{" "}
            <span className="italic text-primary">PlayMate</span>?
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <Card
                key={item.title}
                className="bg-background/80 border-border/70 h-full"
              >
                <CardHeader className="space-y-3">
                  <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles + Application */}
      <section className="py-14">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-[1.6fr,1.4fr]">
          {/* Open roles */}
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Open Roles
              </h2>
              <span className="text-xs text-muted-foreground">
                {roles.length} positions open
              </span>
            </div>

            <div className="space-y-4">
              {roles.map((role) => (
                <Card
                  key={role.title}
                  className="bg-background/90 border-border/70 hover:bg-muted/40 transition-colors"
                >
                  <CardHeader className="space-y-2">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold">{role.title}</h3>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {role.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {role.location}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {role.description}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {role.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border px-2 py-0.5 text-muted-foreground bg-muted/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <p className="text-xs text-muted-foreground">
                      Ideal start: <span className="font-medium">ASAP</span>
                    </p>
                    <Button size="sm" className="rounded-full text-xs">
                      View details
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}

              {roles.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  No active openings right now, but we’d still love to hear
                  from you.
                </p>
              )}
            </div>
          </div>

          {/* Simple application / general CV drop */}
          <div className="space-y-4">
            <Card className="bg-muted/40 border-border/70">
              <CardHeader className="space-y-2">
                <h2 className="text-xl font-bold">
                  Didn’t find the right role?
                </h2>
                <p className="text-sm text-muted-foreground">
                  Tell us about yourself and how you’d like to contribute. We’ll
                  reach out when there’s a match.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="role">Preferred Role</Label>
                    <Input
                      id="role"
                      placeholder="e.g. Frontend Engineer, Product, Operations"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="message">Why PlayMate?</Label>
                    <Textarea
                      id="message"
                      className="min-h-[90px]"
                      placeholder="Share a quick note about your experience and why you’d like to work with us."
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="link">
                      Portfolio / LinkedIn / GitHub (optional)
                    </Label>
                    <Input
                      id="link"
                      placeholder="Paste a link"
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="rounded-full" size="sm" type="submit">
                  Submit Application
                </Button>
              </CardFooter>
            </Card>

            <p className="text-xs text-muted-foreground">
              We review every application. Even if we don’t have the perfect
              role right now, we might reach out when something opens up.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;

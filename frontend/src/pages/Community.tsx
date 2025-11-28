import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import {
  Users,
  Trophy,
  MapPin,
  MessageCircle,
  Calendar,
  Star,
} from "lucide-react";

const Community = () => {
  const stats = [
    { label: "Active Players", value: "3.2K+" },
    { label: "Teams & Squads", value: "480+" },
    { label: "Matches This Week", value: "120+" },
  ];

  const highlightBlocks = [
    {
      icon: Users,
      title: "Find Players Near You",
      description:
        "Search by sport, skill level, and location to find your next teammate, training partner, or rival.",
      badge: "Player Discovery",
    },
    {
      icon: Trophy,
      title: "Join Leagues & Squads",
      description:
        "Browse open teams and leagues looking for players. Apply in a tap and start playing regularly.",
      badge: "Team Up",
    },
    {
      icon: MessageCircle,
      title: "Chat, Plan & Organize",
      description:
        "Create group chats, lock in timings, share scores, and keep your squad on the same page.",
      badge: "Stay Connected",
    },
  ];

  const featuredTeams = [
    {
      name: "Kolkata Strikers FC",
      sport: "Football • Intermediate",
      location: "Salt Lake • Kolkata",
      stat: "24 matches played",
    },
    {
      name: "Baseline Smashers",
      sport: "Badminton • Advanced",
      location: "New Town • Kolkata",
      stat: "Top 10 on leaderboard",
    },
    {
      name: "Night Owls 5v5",
      sport: "Basketball • Casual",
      location: "Park Street • Kolkata",
      stat: "Plays every Friday night",
    },
  ];

  const communityFeed = [
    {
      title: "Looking for 2 players for 7v7 football",
      text: "Saturday, 7 PM at TurfSide Arena. Intermediate level, friendly but competitive. Need a winger and a defender.",
      meta: "Posted 2h ago • 7 replies",
    },
    {
      title: "Weekly badminton ladder matches",
      text: "We run a ladder for singles and doubles. Win and move up, lose and defend your spot next week.",
      meta: "Posted 5h ago • 12 players joined",
    },
    {
      title: "Cricket nets session – open invite",
      text: "Sunday morning nets for batters and bowlers. Great for practice before local tournaments.",
      meta: "Posted 1d ago • 4 spots left",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-sports-pattern bg-cover bg-center">
        <div className="min-h-[320px] md:min-h-[380px] bg-gradient-to-r from-background/95 via-background/80 to-background/40 flex items-center">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <div className="max-w-3xl space-y-6">
              <p className="text-sm tracking-[0.25em] uppercase text-primary">
                Community
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Play with{" "}
                <span className="italic text-primary">people</span>, not just
                apps.
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Discover players, build squads, and keep your sports circle
                active. From casual pick-up games to competitive leagues,
                <span className="italic"> PlayMate</span> keeps your community
                one tap away.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full">
                  Start a New Match
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary/30"
                >
                  Browse Players & Teams
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center space-y-1 rounded-2xl bg-background/80 backdrop-blur border border-border px-6 py-5"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-14">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-[2fr,1.5fr]">
          {/* Left column – feature blocks + feed */}
          <div className="space-y-10">
            {/* Highlight blocks */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                Make your{" "}
                <span className="italic text-primary">play circle</span> bigger.
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {highlightBlocks.map((block) => (
                  <Card
                    key={block.title}
                    className="h-full bg-muted/40 border-border/70"
                  >
                    <CardHeader className="space-y-3">
                      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        <block.icon className="h-3 w-3" />
                        {block.badge}
                      </div>
                      <h3 className="text-base font-semibold">
                        {block.title}
                      </h3>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {block.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Community feed preview */}
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Community Feed
                </h2>
                <Button variant="outline" size="sm" className="rounded-full">
                  View All Posts
                </Button>
              </div>

              <div className="space-y-4">
                {communityFeed.map((post, idx) => (
                  <Card
                    key={idx}
                    className="bg-muted/30 border-border/70 hover:bg-muted/50 transition-colors"
                  >
                    <CardHeader className="space-y-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-sm md:text-base font-semibold">
                          {post.title}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {post.meta}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {post.text}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right column – featured teams / players */}
          <div className="space-y-6">
            {/* Featured teams */}
            <Card className="bg-muted/40 border-border/70">
              <CardHeader className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  <Star className="h-4 w-4" />
                  Featured Squads
                </div>
                <h2 className="text-xl font-bold">Teams you can join</h2>
                <p className="text-sm text-muted-foreground">
                  Squads that are actively recruiting players this week.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {featuredTeams.map((team) => (
                  <div
                    key={team.name}
                    className="flex flex-col gap-2 rounded-xl border border-border/70 bg-background/60 px-4 py-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="text-sm font-semibold">{team.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {team.sport}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {team.location}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs text-muted-foreground">
                        {team.stat}
                      </p>
                      <Button size="sm" className="rounded-full text-xs px-3">
                        Request to Join
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" size="sm" className="rounded-full">
                  View All Teams
                </Button>
              </CardFooter>
            </Card>

            {/* CTA card */}
            <Card className="bg-primary/10 border-primary/40">
              <CardHeader className="space-y-2">
                <h2 className="text-lg font-bold">
                  Host your own challenge or league
                </h2>
                <p className="text-sm text-muted-foreground">
                  Set the rules, choose the venue, invite players, and let{" "}
                  <span className="italic">PlayMate</span> handle the rest—
                  fixtures, reminders, and leaderboards.
                </p>
              </CardHeader>
              <CardFooter className="flex gap-3">
                <Button size="sm" className="rounded-full">
                  Create a Challenge
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-full border-primary/40"
                >
                  Explore Existing Leagues
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;

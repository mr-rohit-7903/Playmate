import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  User,
  MapPin,
  Trophy,
  Activity,
  Calendar,
  Settings,
  Star,
  MessageCircle,
} from "lucide-react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

const Profile = () => {
  // Simple editable fields
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState("Rohit Bej");
  const [tagline, setTagline] = useState("Always ready for a late-night 5v5.");
  const [location, setLocation] = useState("Kolkata, India");
  const [primarySport, setPrimarySport] = useState("Football");

  const stats = [
    { label: "Matches Played", value: "48" },
    { label: "Win Rate", value: "62%" },
    { label: "Streak", value: "W3" },
    { label: "Tournaments", value: "9" },
  ];

  const recentMatches = [
    {
      title: "5v5 Football – TurfSide Arena",
      result: "Won 6–4",
      time: "Yesterday • 9:30 PM",
      note: "Scored 2 goals • POTM",
    },
    {
      title: "Badminton Doubles – Ladder",
      result: "Lost 1–2",
      time: "3 days ago • 7:00 PM",
      note: "Close game, went to decider",
    },
  ];

  const communityActivity = [
    {
      title: "Started a thread: ‘Looking for keeper for Friday night’",
      time: "2h ago",
    },
    {
      title: "Joined team: Kolkata Strikers FC",
      time: "2 days ago",
    },
    {
      title: "Commented on: ‘Weekly badminton ladder – New Town’",
      time: "4 days ago",
    },
  ];

  const achievements = [
    "MVP in 3 local tournaments",
    "Top 10 in city leaderboard (Football)",
    "Hosted 15+ community matches",
  ];

  const handleSave = () => {
    // Later: push to Firestore / backend
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header / banner */}
      <section className="bg-sports-pattern bg-cover bg-center">
        <div className="min-h-[220px] bg-gradient-to-r from-background/95 via-background/85 to-background/40 flex items-end">
          <div className="container mx-auto px-4 py-10 md:py-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              {/* Left: Avatar + basic info */}
              <div className="flex items-center gap-5">
                <div className="h-20 w-20 rounded-full bg-primary/10 border border-primary/50 flex items-center justify-center">
                  <User className="h-10 w-10 text-primary" />
                </div>
                <div className="space-y-1">
                  {isEditing ? (
                    <Input
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="text-xl md:text-2xl font-bold h-9"
                    />
                  ) : (
                    <h1 className="text-2xl md:text-3xl font-extrabold">
                      {fullName}
                    </h1>
                  )}

                  <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {isEditing ? (
                        <Input
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="h-7 w-[160px] text-xs"
                        />
                      ) : (
                        location
                      )}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      {isEditing ? (
                        <Input
                          value={primarySport}
                          onChange={(e) => setPrimarySport(e.target.value)}
                          className="h-7 w-[110px] text-xs"
                        />
                      ) : (
                        `${primarySport} • Player`
                      )}
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-muted-foreground">
                    {isEditing ? (
                      <Input
                        value={tagline}
                        onChange={(e) => setTagline(e.target.value)}
                        className="h-7 text-xs md:text-sm"
                      />
                    ) : (
                      tagline
                    )}
                  </p>
                </div>
              </div>

              {/* Right: actions */}
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-primary/40"
                >
                  <Trophy className="h-4 w-4 mr-1" />
                  View Leaderboard
                </Button>
                <Button
                  size="sm"
                  className="rounded-full"
                  onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
                >
                  <Settings className="h-4 w-4 mr-1" />
                  {isEditing ? "Save Profile" : "Edit Profile"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main layout */}
      <section className="py-8 md:py-10">
        <div className="container mx-auto px-4 grid gap-8 lg:grid-cols-[1.1fr,2fr]">
          {/* LEFT: Snapshot, achievements */}
          <div className="space-y-6">
            {/* Snapshot */}
            <Card className="bg-background/95 border-border/70">
              <CardHeader className="space-y-2">
                <h2 className="text-sm font-semibold flex items-center gap-2">
                  <Activity className="h-4 w-4 text-primary" />
                  Player Snapshot
                </h2>
                <p className="text-xs text-muted-foreground">
                  Quick view of your current form and milestones.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-border/60 bg-muted/30 px-3 py-2"
                    >
                      <div className="text-lg font-extrabold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-muted/40 border-border/70">
              <CardHeader className="space-y-2">
                <h2 className="text-sm font-semibold flex items-center gap-2">
                  <Star className="h-4 w-4 text-primary" />
                  Highlights & Achievements
                </h2>
                <p className="text-xs text-muted-foreground">
                  What makes your PlayMate profile stand out.
                </p>
              </CardHeader>
              <CardContent className="space-y-2">
                {achievements.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* RIGHT: Tabs – overview, matches, community */}
          <div className="space-y-4">
            <Tabs defaultValue="overview">
              <TabsList className="mb-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="matches">Matches</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
              </TabsList>

              {/* OVERVIEW TAB */}
              <TabsContent value="overview">
                <Card className="bg-background/95 border-border/70">
                  <CardHeader className="space-y-2">
                    <h2 className="text-sm font-semibold flex items-center gap-2">
                      <User className="h-4 w-4 text-primary" />
                      Overview
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      A summary of your recent activity across matches and
                      community.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Quick metrics row */}
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="rounded-xl border border-border/60 bg-muted/30 px-3 py-2">
                        <div className="text-sm font-bold">Player Tier</div>
                        <div className="text-xs text-muted-foreground">
                          Competitive
                        </div>
                      </div>
                      <div className="rounded-xl border border-border/60 bg-muted/30 px-3 py-2">
                        <div className="text-sm font-bold">Preferred Role</div>
                        <div className="text-xs text-muted-foreground">
                          Left Winger
                        </div>
                      </div>
                      <div className="rounded-xl border border-border/60 bg-muted/30 px-3 py-2">
                        <div className="text-sm font-bold">Availability</div>
                        <div className="text-xs text-muted-foreground">
                          Evenings & Weekends
                        </div>
                      </div>
                    </div>

                    {/* Recent match summary */}
                    <div className="space-y-2">
                      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em]">
                        Last Match
                      </h3>
                      <div className="rounded-xl border border-border/60 bg-muted/30 px-3 py-3">
                        <p className="text-sm font-semibold">
                          5v5 Football – TurfSide Arena
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Won 6–4 • 2 goals • POTM
                        </p>
                        <p className="text-[11px] text-muted-foreground mt-1">
                          Yesterday • 9:30 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* MATCHES TAB */}
              <TabsContent value="matches">
                <Card className="bg-background/95 border-border/70">
                  <CardHeader className="space-y-2">
                    <h2 className="text-sm font-semibold flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      Recent Matches
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      A rundown of how your last few games went.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {recentMatches.map((match) => (
                      <div
                        key={match.title}
                        className="rounded-xl border border-border/60 bg-muted/30 px-4 py-3"
                      >
                        <p className="text-sm font-semibold">{match.title}</p>
                        <p className="text-xs text-primary font-medium mt-1">
                          {match.result}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {match.time}
                        </p>
                        <p className="text-[11px] text-muted-foreground mt-1">
                          {match.note}
                        </p>
                      </div>
                    ))}

                    {recentMatches.length === 0 && (
                      <p className="text-sm text-muted-foreground">
                        No matches recorded yet. Join or host a game to see it
                        show up here.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* COMMUNITY TAB */}
              <TabsContent value="community">
                <Card className="bg-background/95 border-border/70">
                  <CardHeader className="space-y-2">
                    <h2 className="text-sm font-semibold flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-primary" />
                      Community Activity
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      Threads you’ve created, teams you’ve joined, and posts
                      you’ve engaged with.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {communityActivity.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-xl border border-border/60 bg-muted/30 px-4 py-3"
                      >
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.time}
                        </p>
                      </div>
                    ))}

                    {communityActivity.length === 0 && (
                      <p className="text-sm text-muted-foreground">
                        You haven’t posted or joined anything yet. Jump into the{" "}
                        <span className="italic">Community</span> tab to get
                        started.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;

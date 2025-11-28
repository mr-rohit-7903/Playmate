import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Users, Trophy, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const stats = [
    { label: "Venues Listed", value: "500+" },
    { label: "Athletes Reached", value: "10K+" },
    { label: "Cities Covered", value: "50+" },
  ];

  const secondaryStats = [
    { label: "Tournaments Hosted", value: "200+" },
    { label: "Challenges Created", value: "1K+" },
    { label: "Matches Played", value: "5K+" },
  ];

  const features = [
    {
      title: "From Gyms to Grounds - Book Your Game Spot",
      description:
        "Discover and book top-rated fitness studios, sports courts, and open fields near you. Whether you're training solo or playing with friends, find the perfect space in seconds. Filter by sport, time, or price — and join thousands powering their play every day.",
      buttonText: "Go to Venues Section",
      buttonLink: "/venues",
      url: "home/venue.jpg",
    },
    {
      title: "Find Nearby Tournaments",
      description:
        "From local leagues to major city tournaments, find all the top competitions near you. Get live updates, entry info, and register in seconds. Whether you're here to win or just play hard, your next big game is just a search away.",
      buttonText: "Go to Tournaments Section",
      buttonLink: "/tournaments",
      url: "home/tournament.jpg",
    },
  ];

  const communityFeatures = [
    {
      icon: Users,
      title: "Connect with Fellow Athletes",
      description:
        "Meet like-minded players from your area who share your passion for the game. Whether you're into football, tennis, cricket, or fitness training, Playmate helps you build real sports connections that go beyond the screen.",
    },
    {
      icon: Trophy,
      title: "Challenge Your Friends",
      description:
        "Bring out the competitive spirit! Challenge your friends to a match, set up friendly rivalries, or organize mini-tournaments. Whether it's a 1v1 showdown or a full team faceoff, Playmate makes it easy to set the stage and settle the score.",
    },
    {
      icon: Calendar,
      title: "Climb the Leaderboards",
      description:
        "Track your performance, earn bragging rights, and see where you stand in your sport. Playmate's dynamic leaderboards rank players based on match wins, participation, and achievements. Whether you're rising fast or defending your top spot, every game counts.",
    },
    {
      icon: Users,
      title: "Build Your Dream Team",
      description:
        "Whether you're forming a casual 5-a-side group or a competitive tournament squad, find players, assemble your team, and manage them from one place. The community isn't just about playing—it's about growing together.",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Wrap all content in main and push it below fixed navbar */}
      <main className="pt-16">

        {/* Hero Section */}
        <section className="w-full">
          <div className="w-full h-[35vh] sm:h-[50vh] md:h-[70vh] lg:h-[100vh]">
            <img
              src="home/hero.png"
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        {/* Impact Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
              <img src="/logo-b.png" alt="PlayMate" className="h-10 w-auto" />{" "}
              Impact
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {secondaryStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlight Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3">
              <img src="/logo-b.png" alt="PlayMate" className="h-10 w-auto" />{" "}
              Features
            </h2>

            <div className="space-y-24">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-12 items-center`}
                >
                  <div className="flex-1 w-full">
                    <img
                      src={feature.url}
                      alt={feature.title}
                      className="w-full aspect-square object-cover rounded-2xl"
                    />
                  </div>
                  <div className="flex-1 space-y-6">
                    <h3 className="text-3xl font-bold">{feature.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    <Link to={feature.buttonLink}>
                      <Button size="lg" className="mt-4 rounded-full">
                        {feature.buttonText}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              {communityFeatures.map((feature, index) => (
                <div key={index} className="mb-12">
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {feature.description}
                  </p>
                </div>
              ))}

              <Link to="/community">
                <Button size="lg" className="rounded-full">
                  Go to Community Section
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

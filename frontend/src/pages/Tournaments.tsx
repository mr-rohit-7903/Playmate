import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Grid, List } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface Tournament {
  id: number;
  name: string;
  sport: string;
  prize: string;
  fee: string;
  status: "Live" | "Ongoing" | "Expired";
}

const Tournaments = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [location, setLocation] = useState("Kharghar");
  const [selectedSport, setSelectedSport] = useState<"all" | "Cricket" | "Football">("all");
  const [searchName, setSearchName] = useState("");

  const tournaments: Tournament[] = [
    { id: 1, name: "Kharghar Premier League", sport: "Cricket", prize: "INR 30,000", fee: "INR 500", status: "Live" },
    { id: 2, name: "Kharghar Football Clash", sport: "Football", prize: "INR 10,000", fee: "INR 100", status: "Expired" },
    { id: 3, name: "All Star Cricket League", sport: "Cricket", prize: "INR 50,000", fee: "Free", status: "Ongoing" },
    { id: 4, name: "All Star Football League", sport: "Football", prize: "INR 60,000", fee: "Free", status: "Expired" },
    { id: 5, name: "College Football Tournament", sport: "Football", prize: "INR 30,000", fee: "INR 200", status: "Expired" },
    { id: 6, name: "Indian Cricket League", sport: "Cricket", prize: "INR 50,000", fee: "INR 400", status: "Ongoing" },
    { id: 7, name: "United Football League", sport: "Football", prize: "INR 60,000", fee: "INR 100", status: "Expired" },
  ];

  // Filtering + pagination
  const pageSize = 5; // items per page
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTournaments = tournaments.filter((t) => {
    const matchesSport =
      selectedSport === "all" ? true : t.sport === selectedSport;

    const matchesName = searchName
      ? t.name.toLowerCase().includes(searchName.toLowerCase())
      : true;

    return matchesSport && matchesName;
  });

  const totalPages = Math.max(1, Math.ceil(filteredTournaments.length / pageSize));
  const paginatedTournaments = filteredTournaments.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const getStatusColor = (status: Tournament["status"]) => {
    switch (status) {
      case "Live":
        return "bg-red-500/10 text-red-700";
      case "Ongoing":
        return "bg-success/10 text-success";
      case "Expired":
        return "bg-muted text-muted-foreground";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-hero-gradient">
        <div className="container mx-auto px-4 pt-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Compete. Connect. Conquer.
            </h1>
            <p className="text-xl text-white/90">
              Find nearby Tournaments, tailored to your sports
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-warning rounded-full flex items-center justify-center">
              <span className="text-2xl">🏆</span>
            </div>
            <h2 className="text-3xl font-bold text-primary">
              Find Competitive Tournaments{" "}
              <span className="text-foreground">near you</span>
            </h2>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            From local leagues to major city tournaments, find all the top
            competitions near you. Get live updates, entry info, and register in
            seconds. Whether you're here to win or just play hard, your next big
            game is just a search away.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <Input
              placeholder="Search by tournament name"
              className="md:col-span-1"
              value={searchName}
              onChange={(e) => {
                setSearchName(e.target.value);
                setCurrentPage(1); // reset to first page on search
              }}
            />
            <Select
              value={selectedSport}
              onValueChange={(val: "all" | "Cricket" | "Football") => {
                setSelectedSport(val);
                setCurrentPage(1); // reset to first page on filter change
              }}
            >
              <SelectTrigger className="md:col-span-2">
                <SelectValue placeholder="Select Sport" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sports</SelectItem>
                <SelectItem value="Cricket">Cricket</SelectItem>
                <SelectItem value="Football">Football</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-primary">
              Click entry to know more and apply in the tournament
            </p>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* List / Grid View */}
          {viewMode === "list" ? (
            <div className="bg-card rounded-lg border overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Sr. No.</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Tournament Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Sport</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Prize Money</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Registration fee</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedTournaments.map((tournament, index) => (
                    <tr
                      key={tournament.id}
                      className={`border-t hover:bg-muted/50 cursor-pointer ${
                        tournament.status === "Ongoing" ? "bg-success/5" : ""
                      }`}
                    >
                      <td className="px-6 py-4">
                        {(currentPage - 1) * pageSize + index + 1}
                      </td>
                      <td className="px-6 py-4 font-medium">{tournament.name}</td>
                      <td className="px-6 py-4">{tournament.sport}</td>
                      <td className="px-6 py-4">{tournament.prize}</td>
                      <td className="px-6 py-4">{tournament.fee}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                            tournament.status
                          )}`}
                        >
                          {tournament.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {paginatedTournaments.map((tournament, index) => (
                <div
                  key={tournament.id}
                  className={`bg-card rounded-lg border p-4 hover:bg-muted/50 cursor-pointer ${
                    tournament.status === "Ongoing" ? "bg-success/5" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">
                      #{(currentPage - 1) * pageSize + index + 1}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        tournament.status
                      )}`}
                    >
                      {tournament.status}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{tournament.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Sport: {tournament.sport}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Prize:</span> {tournament.prize}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Registration:</span> {tournament.fee}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              ← Previous
            </Button>

            {Array.from({ length: totalPages }).map((_, i) => {
              const page = i + 1;
              return (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              );
            })}

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next →
            </Button>
          </div>
        </div>
      </section>

      {/* List Tournament Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                List your Tournament
                <br />
                <span className="text-white/90">on PlayMate Platform</span>
              </h2>
              <p className="text-lg text-white/80 mb-6">
                List your tournament on Playmate and reach thousands of
                passionate players looking to compete. Whether it's a friendly
                local league or a high-stakes city championship, we'll help you
                fill up slots fast. Share event details, manage registrations,
                and keep participants updated, all in one place.
              </p>
              <p className="text-white/90 italic">
                Fill out the form, so that our team can reach you requirements.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 space-y-4">
              <Input
                placeholder="Enter the name of your Tournament."
                className="bg-white/90 text-foreground placeholder:text-muted-foreground"
              />
              <Input
                type="email"
                placeholder="Enter your Email ID."
                className="bg-white/90 text-foreground placeholder:text-muted-foreground"
              />
              <Input
                placeholder="Enter your Mobile Number."
                className="bg-white/90 text-foreground placeholder:text-muted-foreground"
              />
              <Textarea
                placeholder="Enter the basic details of the tournament. Eg, Format, Venue, Prize Money, Registration Fees, etc."
                className="bg-white/90 text-foreground placeholder:text-muted-foreground min-h-32"
              />
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tournaments;

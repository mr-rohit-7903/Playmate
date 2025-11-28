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
import { Card } from "@/components/ui/card";
import { Search, MapPin, Star, Clock } from "lucide-react";

interface Venue {
  id: number;
  name: string;
  location: string;
  city: string;
  rating: number;
  sports: string[];
  image: string;
}

const Venues = () => {
  const venues: Venue[] = [
    {
      id: 1,
      name: "Ramsheth Thakur Ground",
      location: "Kharghar",
      city: "Navi Mumbai",
      rating: 5,
      sports: ["Cricket", "Football"],
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "KPC Vidyalaya Ground",
      location: "Kharghar",
      city: "Navi Mumbai",
      rating: 4,
      sports: ["Cricket", "Football"],
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Nerul Gymkhana Turf",
      location: "Nerul",
      city: "Navi Mumbai",
      rating: 5,
      sports: ["Cricket", "Football"],
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Vibgyor High School Turf",
      location: "Kharghar",
      city: "Navi Mumbai",
      rating: 4.5,
      sports: ["Cricket", "Football"],
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-hero-gradient">
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

      {/* Venues Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            From Gyms to Grounds - Book Your Game Spot
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            Discover and book top-rated fitness studios, sports courts, and open
            fields near you. Whether you're training solo or playing with friends,
            find the perfect space in seconds. Filter by sport, time, or price —
            and join thousands powering their play every day.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Input placeholder="Enter Location" className="md:col-span-1" />
            <Select>
              <SelectTrigger className="md:col-span-2">
                <SelectValue placeholder="Select Facility" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cricket">Cricket</SelectItem>
                <SelectItem value="football">Football</SelectItem>
                <SelectItem value="both">All Sports</SelectItem>
              </SelectContent>
            </Select>
            <Button className="md:col-span-1">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm text-muted-foreground">
              Location: <strong>Kharghar</strong>
            </span>
            <span className="text-sm text-muted-foreground">
              Facility: <strong>Cricket</strong>
            </span>
            <Button variant="link" size="sm" className="text-primary">
              Apply Filter
            </Button>
          </div>

          {/* Venue Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {venues.map((venue) => (
              <Card
                key={venue.id}
                className="overflow-hidden border-2 border-primary/20 hover:border-primary transition-colors group"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    🏟️
                  </div>
                  <div className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold">
                    ISI
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {venue.name}
                  </h3>

                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>
                      {venue.location}, {venue.city}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(venue.rating)
                            ? "fill-warning text-warning"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    {venue.sports.map((sport) => (
                      <div key={sport} className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                        <span className="text-lg">
                          {sport === "Cricket" ? "🏏" : "⚽"}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full">
                    <Clock className="mr-2 h-4 w-4" />
                    Check Prices
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Venues;

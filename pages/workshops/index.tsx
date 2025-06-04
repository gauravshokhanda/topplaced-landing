import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { CalendarClock, Users, Clock, MapPin, Search } from "lucide-react";
import api from "@/utils/api";

export default function Workshops() {
  const [workshops, setWorkshops] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/workshops")
      .then((res) => {
        const transformed = res.data.map((w: any) => ({
          id: w._id,
          title: w.workshopName,
          description:
            w.whatYoullLearn?.[0] || "Learn and grow with our experts.",
          image:
            w.coverImage && w.coverImage !== ""
              ? w.coverImage
              : "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          date: new Date(w.dateTime).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          time: new Date(w.dateTime).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          location: "Online (Zoom)", // static for now
          instructor: "TopPlaced Instructor", // if not in API
          seats: 50,
          remainingSeats: Math.max(0, 50 - w.totalRegistered),
          price: `$${w.price}`,
          featured: false, // or set to true manually for a few
          slug: w.workshopLink.split("/workshops/")[1], // used for link
        }));
        setWorkshops(transformed);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching workshops:", err);
        setLoading(false);
      });
  }, []);

  const featuredWorkshops = workshops.filter((workshop) => workshop.featured);
  const upcomingWorkshops = workshops.filter((workshop) => !workshop.featured);

  return (
    <Layout>
      <Head>
        <title>Workshops | TopPlaced</title>
        <meta
          name="description"
          content="Join our expert-led workshops to enhance your interview skills and job readiness."
        />
      </Head>

      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-12 gap-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">Workshops & Training</h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Join our expert-led workshops to build specific skills and
                prepare thoroughly for your job search journey.
              </p>
            </div>
            <div className="relative">
              <div className="flex h-10 items-center rounded-md border border-input bg-white pl-3 text-sm ring-offset-background">
                <Search className="h-4 w-4 text-muted-foreground mr-2" />
                <input
                  placeholder="Search workshops..."
                  className="flex-1 border-none bg-transparent focus:outline-none focus:ring-0 focus:border-0"
                />
                <Button className="rounded-l-none bg-[#0f6861] hover:bg-[#0a524c] h-full">
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Workshops */}
          {featuredWorkshops.map((workshop) => (
            <div className="mb-16" key={workshop.id}>
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="h-6 w-2 bg-[#0f6861] rounded-full mr-3"></span>
                Featured Workshops
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <WorkshopCard workshop={workshop} />
              </div>
            </div>
          ))}
          {/* Upcoming Workshops */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="h-6 w-2 bg-[#0f6861] rounded-full mr-3"></span>
              Upcoming Workshops
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingWorkshops.map((workshop) => (
                <WorkshopCard key={workshop.id} workshop={workshop} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
interface Workshop {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  location: string;
  instructor: string;
  seats: number;
  remainingSeats: number;
  price: string;
  featured: boolean;
  slug: string;
}

interface WorkshopCardProps {
  workshop: Workshop;
}

const WorkshopCard: React.FC<WorkshopCardProps> = ({ workshop }) => {
  const isLowSeats = workshop.remainingSeats <= 5;

  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:border-[#0f6861]/20">
      <div className="relative h-48 w-full">
        <Image
          src={workshop.image}
          alt={workshop.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-white text-[#0f6861] px-3 py-1 rounded-full text-sm font-medium">
          {workshop.price}
        </div>
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold line-clamp-2 mb-2">
          {workshop.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-2">
          {workshop.description}
        </p>

        <div className="space-y-3 mb-5">
          <div className="flex items-center text-sm">
            <CalendarClock className="h-4 w-4 mr-2 text-[#0f6861]" />
            <span>{workshop.date}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-2 text-[#0f6861]" />
            <span>{workshop.time}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-[#0f6861]" />
            <span>{workshop.location}</span>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-sm">
            <Users className="h-4 w-4 mr-2" />
            <span className={isLowSeats ? "text-red-500 font-medium" : ""}>
              {isLowSeats ? "Only " : ""}
              {workshop.remainingSeats} seats left
            </span>
          </div>
        </div>

        <Link href={`/workshops/${workshop.id}`}>
          <Button className="w-full bg-[#0f6861] hover:bg-[#0a524c]">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

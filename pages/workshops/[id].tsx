import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "@/utils/api";
import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import {
  CalendarClock,
  Clock,
  MapPin,
  Users,
  User,
  Mail,
  Phone,
  CheckCircle,
  AlertCircle,
  Info,
  Presentation,
  Award,
} from "lucide-react";
import Link from "next/link";

export default function WorkshopDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [workshop, setWorkshop] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (!id) return;

    api
      .get(`/workshops/${id}`)
      .then((res) => {
        const data = res.data;
        console.log(data, "data");

        setWorkshop({
          ...data,
          title: data.workshopName,
          description: data.whatYoullLearn?.[0] || "Enhance your skills.",
          longDescription: (data.whatYoullLearn || []).join("\n\n"),
          image:
            data.coverImage && data.coverImage !== ""
              ? data.coverImage
              : "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
          date: new Date(data.dateTime).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          time: new Date(data.dateTime).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          location: "Online (Zoom)",
          instructor: "TopPlaced Expert",
          instructorTitle: "Certified Instructor",
          instructorImage:
            "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
          seats: 50,
          remainingSeats: 50 - (data.totalRegistered || 0),
          price: `$${data.price}`,
          whatYouWillLearn: data.whatYoullLearn || [],
          prerequisites: ["Basic internet access", "Enthusiasm to learn"],
        });

        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load workshop", err);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration submitted:", {
      name,
      email,
      phone,
      workshopId: id,
    });
    toast.success("Registration successful! Check your email for details.");
    setName("");
    setEmail("");
    setPhone("");
  };

  if (loading) {
    return (
      <Layout>
        <div className="pt-32 pb-20 min-h-[60vh] flex items-center justify-center">
          <p className="text-xl text-muted-foreground">Loading workshop...</p>
        </div>
      </Layout>
    );
  }

  if (!workshop) {
    return (
      <Layout>
        <div className="pt-32 pb-20 min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Workshop not found</h1>
            <Button onClick={() => router.push("/workshops")}>
              Back to Workshops
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{workshop.title} | TopPlaced Workshops</title>
        <meta name="description" content={workshop.description} />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Button
                variant="outline"
                size="sm"
                className="mb-6 text-[#0f6861]"
                onClick={() => router.push("/workshops")}
              >
                ← Back to Workshops
              </Button>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {workshop.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {workshop.description}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CalendarClock className="h-5 w-5 mr-3 text-[#0f6861]" />
                  <span>{workshop.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-[#0f6861]" />
                  <span>{workshop.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-[#0f6861]" />
                  <span>{workshop.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-3 text-[#0f6861]" />
                  <span
                    className={
                      workshop.remainingSeats <= 5
                        ? "text-red-500 font-medium"
                        : ""
                    }
                  >
                    {workshop.remainingSeats <= 5 ? "Only " : ""}
                    {workshop.remainingSeats} seats remaining
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={workshop.instructorImage}
                    alt={workshop.instructor}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{workshop.instructor}</p>
                  <p className="text-sm text-muted-foreground">
                    {workshop.instructorTitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-2xl font-bold">{workshop.price}</div>
                <Button
                  size="lg"
                  className="bg-[#0f6861] hover:bg-[#0a524c]"
                  onClick={() =>
                    document
                      .getElementById("register")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Register Now
                </Button>
              </div>
            </div>

            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={workshop.image}
                alt={workshop.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details Tabs */}
      <section className="py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <Tabs defaultValue="overview">
            <TabsList className="mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">
                What You&apos;ll Learn
              </TabsTrigger>
              <TabsTrigger value="prerequisites">Prerequisites</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="prose max-w-none">
                {workshop.longDescription
                  .split("\n\n")
                  .map((p: string, idx: number) => (
                    <p key={idx}>{p}</p>
                  ))}
              </div>
              <div className="bg-[#0f6861]/5 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Info className="h-5 w-5 mr-2 text-[#0f6861]" />
                  Workshop Details
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 mr-3 text-[#0f6861]" />
                    <span>Duration: {workshop.time}</span>
                  </li>
                  <li className="flex items-center">
                    <Presentation className="h-4 w-4 mr-3 text-[#0f6861]" />
                    <span>Format: Live online workshop with Q&A</span>
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 mr-3 text-[#0f6861]" />
                    <span>Certificate of completion included</span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="curriculum">
              <h3 className="text-xl font-semibold mb-6">
                What You&apos;ll Learn
              </h3>
              <ul className="space-y-4">
                {workshop.whatYouWillLearn.map(
                  (item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 mt-0.5 text-[#0f6861]" />
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </TabsContent>

            <TabsContent value="prerequisites">
              <h3 className="text-xl font-semibold mb-6">Prerequisites</h3>
              <ul className="space-y-4">
                {workshop.prerequisites.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 mt-0.5 text-amber-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Registration */}
      <section id="register" className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Register for this Workshop
              </h2>
              <p className="text-muted-foreground mb-8">
                Complete the form below to secure your spot.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Workshop:</span>
                    <span className="font-medium">{workshop.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date:</span>
                    <span className="font-medium">{workshop.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time:</span>
                    <span className="font-medium">{workshop.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="font-bold">{workshop.price}</span>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="(555) 123-4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#0f6861] hover:bg-[#0a524c]"
                  >
                    Complete Registration
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    By registering, you agree to our{" "}
                    <Link
                      href="/terms"
                      className="underline hover:text-[#0f6861]"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="underline hover:text-[#0f6861]"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}

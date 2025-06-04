import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import FeatureCard from "@/components/FeatureCard";
import BenefitItem from "@/components/BenefitItem";
import MentorCard from "@/components/MentorCard";
import JobCardVisual from "@/components/JobCardVisual";
import { ArrowRight, Calendar, Users, Award, TrendingUp } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Home() {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Schedule",
      description:
        "Book your mock interview with industry experts at your convenience.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Interview",
      description:
        "Experience a real interview scenario with personalized feedback.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Get Job Card",
      description:
        "Receive a comprehensive evaluation of your performance and skills.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Improve",
      description: "Work on your weak areas and track your progress over time.",
    },
  ];

  const benefits = [
    {
      title: "Build Confidence",
      description:
        "Practice in a safe environment to gain confidence for real interviews.",
      icon: "👊",
    },
    {
      title: "Real Mentorship",
      description:
        "Get guidance from professionals who've been on both sides of the table.",
      icon: "🧠",
    },
    {
      title: "Measurable Growth",
      description:
        "Track your progress with quantifiable metrics and personalized insights.",
      icon: "📈",
    },
  ];

  const mentors = [
    {
      name: "Sarah Chen",
      role: "Senior Engineering Manager",
      company: "Google",
      companyLogo: "/logos/google.png",
      image:
        "https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg",
    },
    {
      name: "Raj Patel",
      role: "Tech Lead",
      company: "Meta",
      companyLogo: "/logos/meta.png",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Director",
      company: "Microsoft",
      companyLogo: "/logos/microsoft.png",
      image:
        "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg",
    },
  ];

  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
  });
  return (
    <Layout>
      <Head>
        <title>TopPlaced | Ace Your Interviews, Get Placed</title>
        <meta
          name="description"
          content="TopPlaced helps students ace their interviews and get job-ready with mock interviews, personalized job cards, and mentorship from industry leaders."
        />
      </Head>

      {/* Hero Section */}
      <section className="py-20 overflow-hidden  bg-[#e6f4f3]">
        <div className="container px-4 md:px-6 mx-auto mt-12 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Ace Your Interviews,
                <br />
                <span className="text-[#0f6861]">Get Placed</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Get free mock interviews with industry experts and receive
                personalized feedback to stand out in your job search.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#0f6861] hover:bg-[#0a524c]">
                  Schedule Interview
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#0f6861] text-[#0f6861] hover:bg-[#e6f0ef]"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden h-[400px] shadow-lg">
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Professional interview"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* How TopPlaced Works Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How TopPlaced Works
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Our simple process helps you prepare for interviews and land your
              dream job.
            </p>
          </div>

          {/* Connection Line for large screens */}
          <div className="relative mt-10">
            <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0f6861] to-transparent"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {[
                {
                  icon: <Calendar size={32} />,
                  title: "Schedule",
                  description:
                    "Book your mock interview with industry experts at your convenience.",
                },
                {
                  icon: <Users size={32} />,
                  title: "Interview",
                  description:
                    "Experience a real interview scenario with personalized feedback.",
                },
                {
                  icon: <Award size={32} />,
                  title: "Get Job Card",
                  description:
                    "Receive a comprehensive evaluation of your performance and skills.",
                },
                {
                  icon: <TrendingUp size={32} />,
                  title: "Improve",
                  description:
                    "Work on your weak areas and track your progress over time.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#0f6861] flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-[#0f6861] font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose TopPlaced Section */}
      <section
        id="why-topplaced"
        className="py-20 bg-[#f8f9fa] relative overflow-hidden"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text & Features */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose TopPlaced
              </h2>
              <p className="text-muted-foreground mb-6">
                We help students build confidence and job-readiness through real
                feedback and mentorship.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white shadow hover:shadow-md transition-shadow duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#0f6861]/10 text-[#0f6861] text-xl">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Grid */}
            <div className="relative grid grid-cols-2 gap-4">
              {["5905856", "5384445", "8199562", "5212345"].map((id, idx) => (
                <img
                  key={idx}
                  src={`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                  alt={`Visual ${idx + 1}`}
                  className={`w-full h-48 md:h-64 object-cover rounded-lg ${
                    idx % 2 === 1 ? "mt-8" : ""
                  }`}
                  data-aos="zoom-in"
                  data-aos-delay={idx * 100}
                />
              ))}

              {/* Decorative Blur */}
              <div className="absolute -z-10 w-full h-full bg-[#0f6861]/20 rounded-full blur-3xl opacity-30 -bottom-10 -right-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Personal Job Card Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                How Job Cards Help You Grow
              </h2>
              <p className="text-muted-foreground text-base">
                Our unique Job Card system provides you with a comprehensive
                evaluation of your interview performance and skills.
              </p>

              <div className="space-y-4">
                {/* Strengths */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow border border-gray-100">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-green-100 text-green-600 text-xl">
                    ✅
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900">
                      Identify Your Strengths
                    </h4>
                    <p className="text-sm text-gray-600">
                      Discover what you&apos;re already doing well so you can
                      leverage these skills in real interviews.
                    </p>
                  </div>
                </div>

                {/* Areas to Improve */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow border border-gray-100">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-yellow-100 text-yellow-600 text-xl">
                    ⚠️
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900">
                      Highlight Areas to Improve
                    </h4>
                    <p className="text-sm text-gray-600">
                      Get specific feedback on areas that need attention, with
                      actionable advice for improvement.
                    </p>
                  </div>
                </div>

                {/* Track Progress */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow border border-gray-100">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 text-xl">
                    📊
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900">
                      Track Your Progress
                    </h4>
                    <p className="text-sm text-gray-600">
                      See how your skills develop over time with comparative
                      scores from multiple interviews.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <JobCardVisual />
          </div>
        </div>
      </section>

      {/* Learn from Industry Leaders Section */}
      <section className="py-20 bg-white">
        <div ref={sliderRef} className="keen-slider">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="keen-slider__slide rounded-2xl overflow-hidden shadow-md bg-white"
            >
              <div className="relative h-64">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
                  <h3 className="text-white text-lg font-semibold">
                    {mentor.name}
                  </h3>
                  <p className="text-white/80 text-sm">{mentor.role}</p>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Mentoring from
                </span>
                <img
                  src={mentor.companyLogo}
                  alt={mentor.company}
                  className="h-6 w-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 bg-[#0f6861] text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Join the TopPlaced Community
              </h2>
              <p className="mt-2 text-white/80">
                Get started with free mock interviews today.
              </p>
            </div>
            <Button size="lg" variant="secondary">
              Schedule Your First Interview
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

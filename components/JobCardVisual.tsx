import React from "react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

const JobCardVisual = () => {
  const skills = [
    { name: "Technical Knowledge", value: 78 },
    { name: "Communication", value: 85 },
    { name: "Problem Solving", value: 72 },
    { name: "Coding Skills", value: 65 },
    { name: "System Design", value: 58 },
  ];

  return (
    <div
      className="relative bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden transition-transform duration-300 hover:scale-[1.015] hover:shadow-xl"
      data-aos="fade-left"
      data-aos-delay="100"
    >
      {/* Stamp on bottom right */}
      <img
        src="/images/topplacedstamp.png"
        alt="TopPlaced Certified"
        className="absolute bottom-4 right-4 w-46 h-44 opacity-44 rotate-12 pointer-events-none"
      />

      {/* Card Content */}
      <div className="bg-[#0f6861] text-white p-6 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">Job Readiness Card</h3>
          <p className="text-white/80 text-sm mt-1">
            Last updated: June 15, 2025
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=100"
            alt="Candidate"
            className="w-12 h-12 rounded-full border-2 border-white object-cover mb-2"
          />
          <div className="bg-white text-[#0f6861] font-bold text-sm px-3 py-1 rounded-full">
            Grade: B+
          </div>
        </div>
      </div>

      <div className="p-4 md:p-6 space-y-6 relative z-10">
        <div className="space-y-4">
          <h4 className="font-medium text-lg">Skills Assessment</h4>
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-sm font-medium">{skill.value}%</span>
              </div>
              <Progress
                value={skill.value}
                className="h-2"
                indicatorClassName={
                  skill.value > 75
                    ? "bg-green-500"
                    : skill.value > 50
                    ? "bg-orange-500"
                    : "bg-red-500"
                }
              />
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h4 className="font-medium text-lg mb-3">Areas for Improvement</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 mt-0.5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs">
                !
              </div>
              <span className="text-sm">
                Work on system design fundamentals
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 mt-0.5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs">
                !
              </div>
              <span className="text-sm">Practice coding on whiteboard</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobCardVisual;

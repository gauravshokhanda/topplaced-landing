// components/MentorCard.tsx

import React from "react";

interface MentorCardProps {
  name: string;
  role: string;
  image: string;
  company: string;
  companyLogo: string;
}

const MentorCard: React.FC<MentorCardProps> = ({
  name,
  role,
  image,
  company,
  companyLogo,
}) => {
  return (
    <div className="keen-slider__slide rounded-2xl overflow-hidden shadow-md bg-white">
      <div className="relative h-64">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
          <h3 className="text-white text-lg font-semibold">{name}</h3>
          <p className="text-white/80 text-sm">{role}</p>
        </div>
      </div>
      <div className="p-4 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Mentoring from</span>
        <img src={companyLogo} alt={company} className="h-6 w-auto" />
      </div>
    </div>
  );
};

export default MentorCard;

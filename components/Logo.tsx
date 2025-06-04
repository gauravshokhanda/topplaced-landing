import React from 'react';
import { GraduationCap } from 'lucide-react';

interface LogoProps {
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-gray-900';

  return (
    <div className="flex items-center gap-2">
      <div className="bg-[#0f6861] p-1.5 rounded-md text-white">
        <GraduationCap size={24} />
      </div>
      <span className={`text-xl font-bold ${textColor}`}>TopPlaced</span>
    </div>
  );
};

export default Logo;
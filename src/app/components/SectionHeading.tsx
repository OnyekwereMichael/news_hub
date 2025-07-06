import React from 'react';

interface SectionHeadingProps {
  color?: string; // Tailwind color class or hex
  label: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ color = '#7B61FF', label, className = '' }) => (
  <div className={`flex items-center gap-2 mb-4 mt-3 ${className}`}>
    <span className="w-1 h-5 rounded-sm inline-block" style={{ backgroundColor: color }} />
    <span className="uppercase text-[#282828] font-bold text-[28px] tracking-wide">{label}</span>
    <span className="text-[#282828]  text-3xl">&#8250;</span>
  </div>
);

export default SectionHeading; 
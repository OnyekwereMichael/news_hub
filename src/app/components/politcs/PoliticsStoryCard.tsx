import React from 'react';
import Image from 'next/image';

interface PoliticsStoryCardProps {
  image: any;
  title: string;
  date: string;
  description: string;
  category: string;
}

const PoliticsStoryCard: React.FC<PoliticsStoryCardProps> = ({ image, title, date, description, category }) => (
  <div className="flex bg-white rounded-lg shadow-sm mb-6 max-sm:flex-col">
    <div className="w-80 h-60 flex-shrink-0 rounded-l-lg overflow-hidden max-sm:w-full ">
      <Image
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        width={400}
        height={300}
        unoptimized={typeof image === 'string' && image.startsWith('http')}
      />
    </div>
    <div className="flex-1 flex flex-col justify-between p-4">
      <div>
        <h3 className="text-lg font-semibold text-[#282828] mb-1">{title}</h3>
        <p className="text-xs text-gray-500 mb-2">Posted {date}</p>
        <p className="text-sm text-[#464646] line-clamp-2">{description}</p>
      </div>
      <div className="flex items-center gap-2">
       
        <button className=" border border-[#999999] text-[#5A5A5A] text-xs px-3 py-2 rounded-full hover:bg-[#5a5a5ac4] hover:text-white transition">Continue reading</button>
      </div>
    </div>
  </div>
);

export default PoliticsStoryCard; 
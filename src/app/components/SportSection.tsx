import React from 'react';
import Dispenser from '../../../public/PolImg.png'; 
import SportImg from '../../../public/sport.png'
import Image from 'next/image';
import SectionHeading from './SectionHeading';

const sideStories = Array(5).fill({
  title: 'Foden Sparkles As Man City Crush Spineless Man United',
  img: Dispenser,
});

const SportSection = () => (
  <section className="w-full py-8 mx-auto pt-14 px-6 bg-white">
    <div className="max-w-7xl mx-auto border-t-2 border-b-2">
      {/* Heading  */}
      <SectionHeading label='Sport'/>
      {/* Main content: flex row on desktop, column on mobile */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left/Main story */}
        <div className="flex-1 min-w-0">
          <div className="rounded-t-lg overflow-hidden">
            <Image src={SportImg} alt="Politics main" className="w-full h-[340px] object-cover" />
          </div>
          <div className="rounded-b-lg p-6">
            <h2 className="text-[#282828] text-2xl font-bold mb-2">Mbappe &apos;collision&apos; hampers deal with obstacle preventing &apos;agreement&apos; with next club
            </h2>
            <p className="text-[#888] text-base mb-6">Human rights lawyer Femi Falana (SAN) wants the Federal Government to review the fuel subsidy removal policy owing to claims that Nigeria is still paying for it.  </p>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1 text-[#F52A32] font-semibold"><span className="w-2 h-2 bg-[#F52A32] rounded-full inline-block"></span>Ogechi Joseph</span>
              <span className="flex items-center gap-1 text-[#888] font-medium"><span className="w-2 h-2 bg-[#F52A32]  rounded-full inline-block"></span>Posted 13 mins ago</span>
            </div>
          </div>
        </div>
        {/* Right/Side stories */}
        <div className="w-full md:w-[400px] flex-shrink-0 flex flex-col gap-6 md:border-l-2 md:border-gray-200 md:pl-8">
          {sideStories.map((story, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <span className="w-3 h-3 bg-red-600 rounded-sm inline-block flex-shrink-0" />
              <span className="font-medium text-[#282828] text-base flex-1">{story.title}</span>
              <div className="w-24 h-16 rounded overflow-hidden flex-shrink-0">
                <Image src={story.img} alt="story thumb" className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SportSection; 
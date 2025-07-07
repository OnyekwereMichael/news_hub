import React from 'react';
import PoliticsMainImg from '../../../public/PolImg.png'; // Use a placeholder or existing image
import Image from 'next/image';
import SectionHeading from './SectionHeading';

const sideStories = Array(5).fill({
  title: 'Foden Sparkles As Man City Crush Spineless Man United',
  img: PoliticsMainImg,
});

const PoliticsSection = () => (
  <section className="w-full py-6 sm:py-8 mx-auto px-2 sm:px-4 md:px-6 bg-white">
    <div className="max-w-7xl mx-auto border-t-2 border-b-2">
      {/* Heading  */}
      <SectionHeading label='Politics'/>
      {/* Main content: flex row on desktop, column on mobile */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        {/* Left/Main story */}
        <div className="flex-1 min-w-0">
          <div className="rounded-t-lg overflow-hidden">
            <Image src={PoliticsMainImg} alt="Politics main" className="w-full h-[180px] xs:h-[220px] sm:h-[260px] md:h-[340px] object-cover" />
          </div>
          <div className="rounded-b-lg p-3 sm:p-4 md:p-6">
            <h2 className="text-[#282828] text-lg xs:text-xl sm:text-2xl font-bold mb-2">Falana Asks FG To Review Fuel Subsidy Removal</h2>
            <p className="text-[#888] text-sm sm:text-base mb-4 sm:mb-6">Human rights lawyer Femi Falana (SAN) wants the Federal Government to review the fuel subsidy removal policy owing to claims that Nigeria is still paying for it.</p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs">
              <span className="flex items-center gap-1 text-[#F52A32] font-semibold"><span className="w-2 h-2 bg-[#F52A32] rounded-full inline-block"></span>Ogechi Joseph</span>
              <span className="flex items-center gap-1 text-[#888] font-medium"><span className="w-2 h-2 bg-[#888] rounded-full inline-block"></span>Posted 13 mins ago</span>
            </div>
          </div>
        </div>
        {/* Right/Side stories */}
        <div className="w-full md:w-[400px] flex-shrink-0 flex flex-col gap-4 sm:gap-6 mt-4 md:mt-0">
          {sideStories.map((story, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 p-2 sm:p-0">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-600 rounded-sm inline-block flex-shrink-0" />
                <span className="font-medium text-[#282828] text-sm sm:text-base flex-1">{story.title}</span>
              </div>
              <div className="w-full sm:w-24 h-16 rounded overflow-hidden flex-shrink-0 mt-2 sm:mt-0">
                <Image src={story.img} alt="story thumb" className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PoliticsSection; 
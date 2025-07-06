import React from 'react';
import TopStoriesImage1 from '../../../public/Topstory1.png'
import TopStoriesImage2 from '../../../public/Topstory2.png'
import TopStoriesImage3 from '../../../public/Topstory3.png'
// import TopStoriesImage4 from '../../../public/Topstory4.png'

import Image from 'next/image';
import ImageOverlay from './ImageOverlay';

const TopStories = () => {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6 text-black">TOP STORIES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Main story (Image 1) */}
          <div className="h-full">
            <ImageOverlay
              src={TopStoriesImage1}
              alt="Main story"
              className="w-full h-full min-h-[400px] max-h-[600px]"
              overlayClassName="p-6"
            >
              <h3 className="text-white font-bold text-xl mb-2">
                Over £2million given to world-class trans centre
              </h3>
            </ImageOverlay>
          </div>
          {/* Right: Stack 3 images vertically */}
          <div className="flex flex-col ">
            <div className='grid grid-cols-2 gap-5 h-full'>
            <ImageOverlay
              src={TopStoriesImage3}
              alt="Story 2"
              className="w-full h-[100%] min-h-[120px] max-h-[200px]"
              overlayClassName="p-4"
            >
              <h3 className="text-white font-bold text-lg mb-1">
                Second story headline here
              </h3>
            </ImageOverlay>
            <ImageOverlay
              src={TopStoriesImage3}
              alt="Story 3"
              className="w-full h-[100%] min-h-[120px] max-h-[200px]"
              overlayClassName="p-4"
            >
              <h3 className="text-white font-bold text-lg mb-1">
                Third story headline here
              </h3>
            </ImageOverlay>
            </div>
            
            <ImageOverlay
              src={TopStoriesImage2}
              alt="Story 4"
              className="w-full h-[100%] min-h-[120px] mt-5"
              overlayClassName="p-4"
            >
              <h3 className="text-white font-bold text-lg mb-1">
                Fourth story headline here
              </h3>
            </ImageOverlay>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopStories;

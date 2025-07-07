'use client'
import React from 'react';
import NewsInPicture from '../../../public/NewsInPicture.png'

import TopStoriesImage3 from '../../../public/Topstory3.png'

import ImageOverlay from './ImageOverlay';
import SectionHeading from './SectionHeading';

const NewInPictures = () => {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto px-6">
        <div className='flex justify-between items-center'>        
            <SectionHeading label='News in picture'/>
            <p className='text-[#282828] text-[18px]'>View more</p> 
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Main story (Image 1) */}
          <div className="h-full">
            <ImageOverlay
              src={NewsInPicture}
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
            <div className='grid grid-cols-2 gap-6 h-full'>
            <ImageOverlay
              src={TopStoriesImage3}
              alt="Story 2"
              className="w-full h-[100%] min-h-[120px] max-h-[200px]"
              overlayClassName="p-4"
            >
              <h3 className="text-white font-bold text-lg mb-1">
              Tinubu Mourns Actors, John Okafor and Quadri Oyebamiji
              </h3>
            </ImageOverlay>
            <ImageOverlay
              src={TopStoriesImage3}
              alt="Story 3"
              className="w-full h-[100%] min-h-[120px] max-h-[200px]"
              overlayClassName="p-4"
            >
              <h3 className="text-white font-bold text-lg mb-1">
              Tinubu Mourns Actors, John Okafor and Quadri Oyebamiji
              </h3>
            </ImageOverlay>
            </div>
            <div className='grid grid-cols-2 gap-6 h-full mt-5'>
            <ImageOverlay
              src={TopStoriesImage3}
              alt="Story 4"
              className="w-full h-[100%] min-h-[120px]"
              overlayClassName="p-4"
            >
              <h3 className="text-white font-bold text-lg mb-1">
              Tinubu Mourns Actors, John Okafor and Quadri Oyebamiji
              </h3>
            </ImageOverlay>
            <ImageOverlay
              src={TopStoriesImage3}
              alt="Story 4"
              className="w-full h-[100%] min-h-[120px]"
              overlayClassName="p-4"
            >
              <h3 className="text-white font-bold text-lg mb-1">
              Tinubu Mourns Actors, John Okafor and Quadri Oyebamiji
              </h3>
            </ImageOverlay>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewInPictures;

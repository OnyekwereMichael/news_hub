"use client";
import React from 'react'
import ImageOverlay from './ImageOverlay'
import TopStoriesImage2 from '../../../public/Topstory2.png'
import Latest from '../../../public/latest1.png'
import Latest2 from '../../../public/Latest2.png'
import Ads2 from '../../../public/ads2.png'
import Ads3 from '../../../public/ads3.png'
import Image from 'next/image'
import MoreStories from './MoreStories'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SectionHeading from './SectionHeading';

const slides = [
  [
    { src: Latest, title: 'Tinubu Mourns Actors, John Okafor and Quadri Oyebamiji' },
    { src: Latest2, title: 'Over £2million given to world-class trans centre' },
    { src: Latest, title: 'Over £2million given to world-class trans centre' },
    { src: Latest, title: 'Over £2million given to world-class trans centre' },
  ],
];

const LatestNew = () => {
  return (
    <div className="bg-gray-50 py-8 mx-auto px-6">
      <SectionHeading label='Latest News'/>
      {/* Swiper navigation buttons */}
      <div className="flex justify-end mb-4">
        <div className="swiper-button-prev-latest cursor-pointer mr-2 bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
          <span className="text-xl">&#8592;</span>
        </div>
        <div className="swiper-button-next-latest cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
          <span className="text-xl">&#8594;</span>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next-latest',
          prevEl: '.swiper-button-prev-latest',
        }}
        spaceBetween={20}
        slidesPerView={1}
        className="w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-3'>
              {slide.map((item, i) => (
                <div className="h-full" key={i}>
                  <ImageOverlay
                    src={item.src}
                    alt="Main story"
                    className="w-full h-full min-h-[400px] max-h-[600px] rounded-[10px]"
                    overlayClassName="p-6 rounded-[10px]"
                  >
                    <h3 className="text-white font-bold text-xl mb-2">
                      {item.title}
                    </h3>
                  </ImageOverlay>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Ads */}
      <div className='flex justify-center items-center gap-5 mt-20 flex-wrap'>
        <Image src={Ads2} alt='Ads2' />
        <Image src={Ads3} alt='Ads2' />
      </div>
      {/* More stories  */}
      <div className="flex flex-col md:flex-row gap-8 h-full mt-20">
        <div className="flex-1">
          <ImageOverlay
            src={Latest2}
            alt="Main story"
            className="w-full h-full min-h-[400px] max-h-[600px]"
            overlayClassName="p-6"
          >
            <h1 className="text-white font-bold text-xl mb-2">
              Dangote Refinery's second crude oil shipment leaves US for Nigeria
            </h1>
            <h3 className="text-white font-bold text-xl mb-2">First cargo to arrive next week</h3>
            <div className='flex gap-2 items-center'>
              <p className='w-3 h-3 bg-[#F52A32] rounded-full'></p>
              <h3>Ogechi Joseph</h3>
            </div>
          </ImageOverlay>
        </div>
        <div className="w-full md:w-[350px] flex-shrink-0">
          <MoreStories />
        </div>
      </div>
    </div>
  )
}

export default LatestNew
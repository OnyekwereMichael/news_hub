"use client";
import React from 'react'
import ImageOverlay from './ImageOverlay'
import Ads2 from '../../../public/ads2.png'
import Ads3 from '../../../public/ads3.png'
import Image from 'next/image'
import MoreStories from './MoreStories'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SectionHeading from './SectionHeading';
import { useFetchLatestNews } from '../hooks/query';
import SkeletonCard from './SkeletonCard';

const LatestNew = () => {
  const { data, isLoading, isError } = useFetchLatestNews();

  return (
    <div className="bg-gray-50 py-8 mx-auto px-6">
      <SectionHeading label='Latest News'/>
      {/* Swiper navigation buttons */}
      <div className="flex justify-end mb-4">
        <div className="swiper-button-prev-latest cursor-pointer mr-2 bg-gray-200 text-black hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
          <span className="text-xl">&#8592;</span>
        </div>
        <div className="swiper-button-next-latest cursor-pointer bg-gray-200 text-black hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
          <span className="text-xl">&#8594;</span>
        </div>
      </div>
      {isLoading ? (
        <>
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next-latest',
              prevEl: '.swiper-button-prev-latest',
            }}
            spaceBetween={14}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="w-full"
          >
            {[...Array(4)].map((_, idx) => (
              <SwiperSlide key={idx}>
                <SkeletonCard className="min-h-[400px] max-h-[600px]" />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Detailed story skeleton */}
          <div className="flex flex-col md:flex-row gap-8 h-full mt-20">
            <div className="flex-1">
              <SkeletonCard className="min-h-[400px] max-h-[600px]" />
            </div>
            <div className="w-full md:w-[350px] flex-shrink-0">
              <SkeletonCard className="min-h-[400px] max-h-[600px]" />
            </div>
          </div>
        </>
      ) : isError || !data ? (
        <div className="py-8 text-center text-red-500">Failed to load latest news.</div>
      ) : (
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next-latest',
            prevEl: '.swiper-button-prev-latest',
          }}
          spaceBetween={14}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {data.map((item: any) => (
            <SwiperSlide key={item.id}>
              <div className=''>
                <div className="h-full w-full">
                  <ImageOverlay
                    src={item.banner_image}
                    alt={item.title}
                    className="w-full h-full min-h-[400px] max-h-[600px] rounded-[10px]"
                    overlayClassName="p-6 rounded-[10px]"
                    unoptimized
                    storyId={item.id}
                  >
                    <h3 className="text-white font-bold text-md mb-2">
                      {item.title}
                    </h3>
                  </ImageOverlay>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {/* Ads */}
      <div className='flex justify-center items-center gap-5 mt-20 flex-wrap'>
        <Image src={Ads2} alt='Ads2' />
        <Image src={Ads3} alt='Ads2' />
      </div>
      {/* More stories  */}
      <div className="flex flex-col md:flex-row gap-8 h-full mt-20">
        <div className="flex-1">
          {/* Optionally show the first story in detail, or keep as is */}
          {data && data[0] && (
            <ImageOverlay
              src={data[0].banner_image}
              alt={data[0].title}
              className="w-full h-full min-h-[400px] max-h-[600px]"
              overlayClassName="p-6"
              unoptimized
              storyId={data[0].id}
            >
              <h1 className="text-white font-bold text-xl mb-2">
                {data[0].title}
              </h1>
              <h3 className="text-white font-bold text-xl mb-2">{data[0].subtitle}</h3>
              <div className='flex gap-2 items-center'>
                <p className='w-3 h-3 bg-[#F52A32] rounded-full'></p>
                <h3>{data[0].author}</h3>
              </div>
            </ImageOverlay>
          )}
        </div>
        <div className="w-full md:w-[350px] flex-shrink-0">
          <MoreStories />
        </div>
      </div>
    </div>
  )
}

export default LatestNew
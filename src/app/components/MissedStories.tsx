'use client'
import React from 'react'
import SectionHeading from './SectionHeading'
import Ads5 from '../../../public/Ads5.png'
import email from '../../../public/email.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image'

const missedStories = [
  {
    label: "Binance: Nigeria orders cryptocurrency firm to pay $10bn",
    date: "Feb 29, 2024",
    category: "Finance"
  },
  {
    label: "Rivers Community Protests Alleged Killing Of Indigenes By Militia",
    date: "Feb 28, 2024",
    category: "Politics"
  },
  {
    label: "Former NGX Group Chairman Abimbola Ogunbanjo Laid To Rest",
    date: "Feb 27, 2024",
    category: "Business"
  },
  {
    label: "Foden Sparkles As Man City Crush Spineless Man United ",
    date: "Feb 26, 2024",
    category: "Sports"
  },
  {
    label: "Zamfara Verifies 3,079 Retirees, Settles N2.3bn Gratuity Backlog",
    date: "Feb 25, 2024",
    category: "Economy"
  },
  {
    label: "New Tech Hubs Emerge Across Africa",
    date: "Feb 24, 2024",
    category: "Technology"
  },
]

const MissedStories = () => {
  return (
    <div className='px-6 py-8 mx-auto bg-white'>
       <SectionHeading label='STORIES YOU MAY HAVE MISSED'/>
       <div className='mt-3 relative'>
         {/* Custom navigation buttons at top right */}
         <div className="absolute right-0 -top-10 flex gap-2 z-10">
           <button className="swiper-button-prev-missed bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow transition">
             <span className="text-xl">&#8592;</span>
           </button>
           <button className="swiper-button-next-missed bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow transition">
             <span className="text-xl">&#8594;</span>
           </button>
         </div>
         <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: '.swiper-button-next-missed',
            prevEl: '.swiper-button-prev-missed',
          }}
          pagination={{
            el: '.swiper-pagination-missed',
            clickable: true,
            bulletClass: 'inline-block w-2 h-2 mx-1 rounded-full bg-gray-300',
            bulletActiveClass: '!bg-[#F52A32] !w-3 !h-3',
          }}
          spaceBetween={2}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full"
        >
           {missedStories.map((story, i) => (
             <SwiperSlide key={i}>
               <div className="flex flex-col gap-1 mb-6">
                 <div className="flex items-start gap-2">
                   <span className="w-3 h-3 bg-[#282828] rounded-sm mt-1 flex-shrink-0"></span>
                   <span className="text-[#282828] font-medium text-[20px] leading-8">{story.label}</span>
                 </div>
                 <div className="flex items-center gap-4 ml-5 mt-1 text-xs">
                   <span className="flex items-center gap-1 text-[#F52A32] font-semibold">
                     <span className="w-2 h-2 bg-[#F52A32] rounded-full inline-block"></span>
                     {story.date}
                   </span>
                   <span className="flex items-center gap-1 text-[#F52A32] font-semibold">
                     <span className="w-2 h-2 bg-[#F52A32] rounded-full inline-block"></span>
                     {story.category}
                   </span>
                 </div>
               </div>
             </SwiperSlide>
           ))}
         </Swiper>
         {/* Custom pagination dots below the Swiper */}
         <div className="swiper-pagination-missed flex justify-center mt-4"></div>
         </div>

<section className='flex items-center justify-between flex-wrap'>
         <div className="text-center px-4 py-8">
<div className='flex gap-2 items-center'>
    <Image src={email} alt='email'/>
  <p className="text-[#464646] text-[18px] md:text-[20px] font-medium leading-8">
    Get the latest news and stories from <br />
    around Africa directly into your inbox daily.
  </p>
  </div>

  
  <div className="max-w-md  my-3">
    <input
      type="email"
      placeholder="Enter your email address"
      className="w-full bg-[#D9D9D9] text-[#2D2D2D] placeholder-[#5A5A5A] rounded-md py-3 px-4 outline-none"
    />
  </div>


  <div className="max-w-md my-3">
    <button
      className="w-full bg-[#D22779] hover:bg-[#b31e66] text-white font-medium rounded-md py-3 transition"
    >
      Get Me In
    </button>
  </div>
</div>

<Image src={Ads5} alt='ads5'/>
</section>

       </div>
  )
}

export default MissedStories

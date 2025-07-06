import React from 'react'
import SectionHeading from './SectionHeading'
import NewInVid from '../../../public/NewInVideo1.png'
import Image from 'next/image'

const NewsInVideo = () => {
    const NewInVideo = [
        {
         img: NewInVid,
         label: "US storm: Massive blizzard hits California and Nevada"
        },
        {
         img: NewInVid,
          label: "US storm: Massive blizzard hits California and Nevada"
        },
        {
         img: NewInVid,
          label: "US storm: Massive blizzard hits California and Nevada"
        },
        {
         img: NewInVid,
         label: "US storm: Massive blizzard hits California and Nevada"
        },
        {
         img: NewInVid,
          label: "US storm: Massive blizzard hits California and Nevada"
        },
        {
         img: NewInVid,
          label: "US storm: Massive blizzard hits California and Nevada"
        },
    ]
  return (
    <div className='bg-white px-6 mx-auto py-8'>
       <SectionHeading label='NEWS IN VIDEOS'/>

       <div className='grid grid-cols-3 gap-6  '>
           {NewInVideo.map((news, index) => (
               <div key={index} className="relative">
                   {/* World News button */}
                   <div className="absolute top-3 left-3 z-10 px-4 py-1 rounded-full border border-white/40 bg-white/30 backdrop-blur text-white text-sm font-medium shadow">
                       World News
                   </div>
                   <Image 
                       src={news.img} 
                       alt="News in video thumbnail"
                       width={400}
                       height={300}
                       className="w-full h-auto"
                   />
                   {/* Play button overlay */}
                   <div className="absolute inset-0 flex items-center justify-center">
                       <div className="bg-black bg-opacity-50 rounded-full p-4 cursor-pointer hover:bg-opacity-70 transition-all">
                           <svg 
                               width="24" 
                               height="24" 
                               viewBox="0 0 24 24" 
                               fill="white" 
                               className="w-8 h-8"
                           >
                               <path d="M8 5v14l11-7z"/>
                           </svg>
                       </div>
                   </div>

                   <p className='font-bold text-[20px] text-[#282828] mt-2'>{news.label}</p>
               </div>
           ))}
       </div>
    </div>
  )
}

export default NewsInVideo

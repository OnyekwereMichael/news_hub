import React from 'react'
import SectionHeading from './SectionHeading'
import Story1 from '../../../public/stories1.png'
import Image from 'next/image'
import Ads4 from '../../../public/Ads4.png'
import SkeletonCard from './SkeletonCard';

const Stories = ({ isLoading = false }) => {
    const details = [
        {
            label: "Binance: Nigeria orders cryptocurrency firm to pay $10bn"
        },
        {
            label: "Rivers Community Protests Alleged Killing Of Indigenes By Militia"
        },
        {
            label: "Former NGX Group Chairman Abimbola Ogunbanjo Laid To Rest"
        },
        {
            label: "Foden Sparkles As Man City Crush Spineless Man United "
        },
        {
            label: "Zamfara Verifies 3,079 Retirees, Settles N2.3bn Gratuity Backlog"
        },
    ]
  return (
    <div className='w-full py-8 mx-auto px-6 bg-white'>
       <SectionHeading label="FEATURED STORIES" color="#7B61FF" />

<section className='grid grid-cols-3 gap-6 max-sm:grid-cols-1'>
       {isLoading ? (
         <>
           <SkeletonCard className="min-h-[400px] max-h-[600px]" />
           <SkeletonCard className="min-h-[400px] max-h-[600px]" />
           <SkeletonCard className="min-h-[400px] max-h-[600px]" />
         </>
       ) : (
         <>
       <div>
         <Image src={Story1} alt=''/>
         <div className="rounded-b-lg p-6">
            <h2 className="text-[#282828] text-2xl font-bold mb-2">Any red line for the falling naira? | The Nigeria News - Nigeria and...</h2>
            <p className="text-[#888] text-base mb-6 ">Human rights lawyer Femi Falana (SAN) wants the Federal Government to review the fuel subsidy removal policy owing to claims that Nigeria is still paying for it. </p>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1 text-[#F52A32] font-semibold"><span className="w-2 h-2 bg-[#F52A32] rounded-full inline-block"></span>Ogechi Joseph</span>
              <span className="flex items-center gap-1 text-[#888] font-medium"><span className="w-2 h-2 bg-[#F52A32]  rounded-full inline-block"></span>Posted 13 mins ago</span>
            </div>
          </div>

          <div>
            {details.map((det, i) => (
                <div key={i}>
                    <p className='text-[18px] text-[#282828] mt-3'>{det.label}</p>
                </div>
            ))}
          </div>
       </div>

       {/* sec 2 */}
       <div>
         <Image src={Story1} alt=''/>
         <div className="rounded-b-lg p-6">
            <h2 className="text-[#282828] text-2xl font-bold mb-2">Any red line for the falling naira? | The Nigeria News - Nigeria and...</h2>
            <p className="text-[#888] text-base mb-6 ">Human rights lawyer Femi Falana (SAN) wants the Federal Government to review the fuel subsidy removal policy owing to claims that Nigeria is still paying for it. </p>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1 text-[#F52A32] font-semibold"><span className="w-2 h-2 bg-[#F52A32] rounded-full inline-block"></span>Ogechi Joseph</span>
              <span className="flex items-center gap-1 text-[#888] font-medium"><span className="w-2 h-2 bg-[#F52A32]  rounded-full inline-block"></span>Posted 13 mins ago</span>
            </div>
          </div>

          <div>
            {details.map((det, i) => (
                <div key={i}>
                    <p className='text-[18px] text-[#282828] mt-3'>{det.label}</p>
                </div>
            ))}
          </div>
       </div>

       {/* sec 3 (ads img) */}

       <Image src={Ads4} alt='ads4'/>
         </>
       )}
       </section>
    </div>
  )
}

export default Stories

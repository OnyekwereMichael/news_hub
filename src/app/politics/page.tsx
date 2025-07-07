'use client'
import React, { useState } from 'react';
import MainLayout from '../components/MainLayout';
import SectionHeading from '../components/SectionHeading';
import PoliticsPagination from '../components/politcs/PoliticsPagination';
import Image from 'next/image';
import PolImg from '../../../public/PolImg.png';
import Flakes from '../../../public/Politics/flakes.png'
import Socca from '../../../public/Politics/Socca.png'
import V from '../../../public/Politics/V.png'
import Ads5 from '../../../public/Ads5.png';
import ImageOverlay from '../components/ImageOverlay';
import TopStoriesImage1 from '../../../public/Topstory1.png'
import TopStoriesImage2 from '../../../public/Topstory2.png'
import TopStoriesImage3 from '../../../public/Topstory3.png'
import PoliticsStoryCard from '../components/politcs/PoliticsStoryCard';

const mainStory = {
    image: PolImg,
    title: 'Putin promises grains, debt write-off as Russia seeks Africa allies',
    date: 'LATEST TODAY',
    description: '',
    category: 'Africa allies',
};

const sideStories = [
    {
        image: Flakes,
        title: 'Tinubu Mourns Actors, John Okafor and Quadri Oyebamiji',
        date: 'NEWS',
        description: '',
        category: '',
    },
    {
        image: PolImg,
        title: 'Tinubu Mourns Actors, John Okafor and Quadri Oyebamiji',
        date: 'NEWS',
        description: '',
        category: '',
    },
    {
        image: PolImg,
        title: 'Tinubu Mourns Actors, John Okafor and Quadri Oyebamiji',
        date: 'NEWS TODAY',
        description: '',
        category: '',
    },
];

const otherStories = Array(5).fill({
    image: PolImg,
    title: 'Dozens of Russian tourists were recently allowed to visit North Korea. Heres what they saw',
    date: '1:32 AM, Sun March 10, 2024',
    description: 'Former President John Dramani Mahama has emphasized the importance of education to the countrys development, noting that the sector consistently receives a significant portion of budgetary allocations from every government...',
    category: 'World News',
});

const PoliticsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 8;

    return (
        <MainLayout>
            <div className=" mx-auto px-4 py-8">
                <SectionHeading label="Latest in politics" />
                <div className="">
                    {/* Main story */}
                    <div className="">
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
                </div>

                {/* Other stories in politics */}
                <div className='mt-20'>
                <SectionHeading label="Other stories in politics" className="mb-2" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                    <div className="md:col-span-2">
                        {otherStories.map((story, idx) => (
                            <PoliticsStoryCard key={idx} {...story} />
                        ))}

                        <PoliticsPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                    </div>
                    {/* Ad banners */}
                    <div className="flex flex-col gap-6 w-full">
                        <Image src={Flakes} alt="ad2" className="w-full object-contain h-auto " />
                        <Image src={V} alt="ad3" className="w-full object-contain h-[100%]  " />
                        <Image src={Socca} alt="ads5" className="w-full object-contain h-auto max-h-48" />
                    </div>
                </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default PoliticsPage; 
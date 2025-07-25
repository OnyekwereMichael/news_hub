'use client'
import React from 'react';
import ImageOverlay from './ImageOverlay';

import SkeletonCard from './SkeletonCard';
import { TopStory } from '../types';

interface TopStoriesProps {
  stories?: TopStory[];
  isLoading?: boolean;
  isError?: boolean;
}

const TopStories: React.FC<TopStoriesProps> = ({ stories, isLoading = false, isError = false }) => {
  // If stories is provided, use it; otherwise, fallback to empty array
  const data: TopStory[] = stories || [];

  if (isLoading) {
    return (
      <section className="bg-white py-8">
        <div className="mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-black">TOP STORIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkeletonCard className="min-h-[400px] max-h-[600px]" />
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-5">
                <SkeletonCard className="min-h-[120px] max-h-[200px]" />
                <SkeletonCard className="min-h-[120px] max-h-[200px]" />
              </div>
              <SkeletonCard className="min-h-[120px] mt-5" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (isError || !data.length) {
    return <div className="py-8 text-center text-red-500">Failed to load top stories.</div>;
  }

  // Main story is the first, next two are side by side, last is below
  const mainStory = data[0]?.story;
  const sideStories = data.slice(1, 3).map((s: TopStory) => s.story);
  const lastStory = data[3]?.story;

  return (
    <section className="bg-white py-8">
      <div className="mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6 text-black">TOP STORIES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Main story */}
          <div className="h-full">
            {mainStory && (
              <ImageOverlay
                src={mainStory.banner_image}
                alt={mainStory.title}
                className="w-full h-full min-h-[400px] max-h-[600px]"
                overlayClassName="p-6"
                unoptimized
                storyId={mainStory.id}
              >
                <h3 className="text-white font-bold text-xl mb-2">{mainStory.title}</h3>
              </ImageOverlay>
            )}
          </div>
          {/* Right: Stack 3 images vertically */}
          <div className="flex flex-col ">
            <div className='grid grid-cols-2 gap-5 h-full max-sm:grid-cols-1'>
              {sideStories.map((story: any, idx: number) => (
                <ImageOverlay
                  key={story.id}
                  src={story.banner_image}
                  alt={story.title}
                  className="w-full h-[100%] min-h-[120px] max-h-[200px] max-sm:min-h-[350px]"
                  overlayClassName="p-4"
                  unoptimized
                  storyId={story.id}
                >
                  <h3 className="text-white font-bold text-lg mb-1">{story.title}</h3>
                </ImageOverlay>
              ))}
            </div>
            {lastStory && (
              <ImageOverlay
                src={lastStory.banner_image}
                alt={lastStory.title}
                className="w-full h-[100%] min-h-[120px] mt-5"
                overlayClassName="p-4"
                unoptimized
                storyId={lastStory.id}
              >
                <h3 className="text-white font-bold text-lg mb-1">{lastStory.title}</h3>
              </ImageOverlay>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopStories;

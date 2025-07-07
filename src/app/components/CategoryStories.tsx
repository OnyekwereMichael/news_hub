'use client';
import React from 'react';
import { useAppSelector } from '../store';
import { useCategoryStories } from '../hooks/query';
import ImageOverlay from './ImageOverlay';
import LoadingSpinner from './LoadingSpinner';

const CategoryStories = () => {
  const selectedCategory = useAppSelector(state => state.selectedCategory);
  const { data, isLoading, isError } = useCategoryStories(selectedCategory);

  if (!selectedCategory) return null;
  if (isLoading) return  <LoadingSpinner />;

  if (isError || !data) return <div className="py-8 text-center text-red-500">Failed to load stories.</div>;

  return (
    <section className="py-8 mx-auto px-6">
      <h2 className="text-2xl font-bold mb-6 text-black">Stories in Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((story: any) => (
          <ImageOverlay
            key={story.id}
            src={story.banner_image}
            alt={story.title}
            className="w-full h-[300px] rounded-lg"
            overlayClassName="p-4"
            unoptimized
          >
            <h3 className="text-white font-bold text-lg mb-1">{story.title}</h3>
            <p className="text-white text-xs">{story.author}</p>
          </ImageOverlay>
        ))}
      </div>
    </section>
  );
};

export default CategoryStories; 
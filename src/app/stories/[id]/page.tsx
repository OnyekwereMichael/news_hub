"use client";

import MainLayout from '../../components/MainLayout';
import SectionHeading from '../../components/SectionHeading';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const fetchStory = async (id: string) => {
  const res = await fetch(`https://api.agcnewsnet.com/api/general/stories/${id}`);
  if (!res.ok) throw new Error('Failed to fetch story');
  return res.json();
};

const topStories = [
  'Binance: Nigeria orders cryptocurrency firm to pay $10bn',
  'Rivers Community Protests Alleged Killing Of Indigenes By Militia',
  'Foden Sparkles As Man City Crush Spineless Man United',
  'Zamfara Verifies 3,079 Retirees, Settles N2.3bn Gratuity Backlog',
];

const relatedStories = [
  {
    title: 'Tinubu Mourns Actors, John Okafor and Quadri Oyebamiji',
    image: '/Topstory1.png',
    tag: 'World News',
  },
  {
    title: 'Gunfire near Haiti airport disrupts flights for second day',
    image: '/TopStory2.png',
    tag: 'World News',
  },
  {
    title: 'The worst wildfire in Texas history could get even more dangerous',
    image: '/TopStory3.png',
    tag: 'World News',
  },
  {
    title: 'Moses Bliss ties the knot with Marie Wiseborn in classy wedding',
    image: '/stories1.png',
    tag: 'Entertainment',
  },
];

const missedStories = [
  'Binance: Nigeria orders cryptocurrency firm to pay $10bn',
  'Rivers Community Protests Alleged Killing Of Indigenes By Militia',
  'Former NGX Group Chairman Abimbola Ogunbanjo Laid To Rest',
  'Foden Sparkles As Man City Crush Spineless Man United',
];

const StoryPage = () => {
  const params = useParams();
  const storyId = Array.isArray(params.id) ? params.id[0] : params.id;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['story', storyId],
    queryFn: () => fetchStory(storyId!),
    enabled: !!storyId,
  });

  // The actual story data is in data?.data
  const story = data?.data;

  return (
    <MainLayout>
      {/* Top banner ad */}
      <div className="w-full bg-white flex justify-center py-2 border-b">
        <div className="max-w-5xl w-full flex justify-center">
          <Image src="/ads3.png" alt="Top Banner Ad" width={728} height={90} className="object-contain" />
        </div>
      </div>
      {/* Main content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4 py-8">
        {/* Article section */}
        <article className="flex-1 min-w-0">
          {isLoading ? (
            <div className="text-center py-20 text-gray-400">Loading story...</div>
          ) : isError || !story ? (
            <div className="text-center py-20 text-red-500">Failed to load story.</div>
          ) : (
            <>
              <div className="mb-4">
                <span className="inline-block bg-gray-200 text-xs px-3 py-1 rounded-full mr-2">{story.category?.category_name || 'World News'}</span>
                <button className="inline-block text-xs text-blue-600 border border-blue-600 px-2 py-1 rounded-full">Share</button>
              </div>
              <h1 className="text-3xl font-bold mb-2 text-black">{story.title}</h1>
              {story.subtitle && <h2 className="text-lg text-gray-600 mb-2">{story.subtitle}</h2>}
              <div className="text-gray-500 text-sm mb-2">{story.created_at ? `Posted ${new Date(story.created_at).toLocaleString()}` : ''} • {story.read_time || '4 minute read'}</div>
              <div className="text-gray-700 text-sm mb-4">By {story.author || 'Unknown'}</div>
              <div className="w-full h-72 relative mb-4 rounded-lg overflow-hidden">
                <Image src={story.banner_image || '/NewsInPicture.png'} alt="banner" fill className="object-cover" />
              </div>
              {story.image_caption && <div className="text-xs text-gray-400 mb-4">{story.image_caption}</div>}
              <div className="prose max-w-none text-gray-800 mb-6">
                {story.content ? (
                  <div dangerouslySetInnerHTML={{ __html: story.content }} />
                ) : (
                  <p>No content available.</p>
                )}
              </div>
              {/* Social icons */}
              <div className="flex gap-4 mb-8">
                <span className="text-gray-500">X</span>
                <span className="text-gray-500">F</span>
                <span className="text-gray-500">P</span>
                <span className="text-gray-500">L</span>
                <span className="text-gray-500">in</span>
                <span className="text-gray-500">🔗</span>
              </div>
              {/* People are also reading */}
              <SectionHeading label="People Are Also Reading" color="#D22779" />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {relatedStories.map((story, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden bg-white shadow">
                    <div className="h-32 w-full relative">
                      <Image src={story.image} alt={story.title} fill className="object-cover" />
                    </div>
                    <div className="p-3">
                      <span className="text-xs text-pink-600 font-semibold">{story.tag}</span>
                      <h3 className="text-sm font-bold mt-1 mb-2">{story.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
              {/* Stories you may have missed */}
              <SectionHeading label="Stories You May Have Missed" color="#D22779" />
              <div className="flex flex-wrap gap-6 mb-8">
                {missedStories.map((title, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 bg-gray-100 px-4 py-2 rounded-full">
                    <span className="w-2 h-2 bg-pink-600 rounded-full inline-block"></span>
                    {title}
                  </div>
                ))}
              </div>
            </>
          )}
        </article>
        {/* Sidebar */}
        <aside className="w-full md:w-80 flex-shrink-0 flex flex-col gap-6">
          {/* Top Stories */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-bold mb-4 text-black">Top Stories</h2>
            <ul className="space-y-3">
              {topStories.map((story, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <span className="w-2 h-2 bg-pink-600 rounded-full mt-2"></span>
                  <span className='text-black'>{story}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Advertisement */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-xs text-gray-400 mb-2">ADVERTISEMENT</span>
            <Image src="/ads2.png" alt="Ad" width={250} height={250} className="object-contain" />
          </div>
          {/* Another Advertisement */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-xs text-gray-400 mb-2">ADVERTISEMENT</span>
            <Image src="/Ads5.png" alt="Ad" width={250} height={250} className="object-contain" />
          </div>
        </aside>
      </div>
    </MainLayout>
  );
};

export default StoryPage; 
'use client'
import MainLayout from './components/MainLayout';
import TopStories from './components/TopStories';
import LatestNew from './components/LatestNew';
import PoliticsSection from './components/PoliticsSection';
import BusinessSection from "./components/BusinessSection";
import SportSection from "./components/SportSection";
import Stories from "./components/Stories";
import NewsInVideo from "./components/NewsInVideo";
import NewsInPicture from "./components/NewsInPicture";
import MissedStories from "./components/MissedStories";

import CategoriesNav from './components/CategoriesNav';
import CategoryStories from './components/CategoryStories';
import Bookmarks from './components/Bookmarks';
import { useAppSelector } from './store';
import { useTopStories } from './hooks/query';
import { useState } from 'react';


export default function HomePage() {
  const selectedCategory = useAppSelector(state => state.selectedCategory);
  const { data: topStoriesData, isLoading: isTopStoriesLoading, isError: isTopStoriesError } = useTopStories();
  const [search, setSearch] = useState('');

  // Only filter if not loading/error and not in a category
  const filteredTopStories = !selectedCategory && topStoriesData
    ? topStoriesData.filter(s => s.story.title.toLowerCase().includes(search.toLowerCase()))
    : [];

  return (
    <MainLayout>
      <CategoriesNav />
      {/* Global Search Bar */}
      {!selectedCategory && (
        <div className="max-w-2xl mx-auto px-4 mt-6 mb-4">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search top stories by title..."
            className="w-full px-4 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 text-black focus:ring-blue-400"
          />
        </div>
      )}
      {selectedCategory ? <CategoryStories /> : <TopStories stories={filteredTopStories.length || search ? filteredTopStories : topStoriesData} isLoading={isTopStoriesLoading} isError={isTopStoriesError} />}
      <LatestNew />
      <PoliticsSection />
      <BusinessSection />
      <SportSection />
      <Stories />
      <NewsInVideo />
      <NewsInPicture />
      <MissedStories />
      <Bookmarks />
    </MainLayout>
  );
}

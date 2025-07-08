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


export default function HomePage() {
  const selectedCategory = useAppSelector(state => state.selectedCategory);
  return (
    <MainLayout>
      <CategoriesNav />
      {selectedCategory ? <CategoryStories /> : <TopStories />}
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

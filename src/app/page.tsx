import Image from "next/image";
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
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <MainLayout>
      <TopStories />
      <LatestNew />
      <PoliticsSection />
      <BusinessSection />
      <SportSection />
      <Stories />
      <NewsInVideo />
      <NewsInPicture />
      <MissedStories />
      <Footer />
    </MainLayout>
  );
}

'use client';
import React from 'react';
import { useAppSelector, useAppDispatch } from '../store';
import { removeBookmark } from '../store';
import ImageOverlay from './ImageOverlay';
import axios from 'axios';

const fetchStory = async (id: number) => {
  const { data } = await axios.get(`https://api.agcnewsnet.com/api/general/stories/${id}`);
  return data?.data || null;
};

const Bookmarks = () => {
  const bookmarks = useAppSelector(state => state.bookmarks);
  const dispatch = useAppDispatch();
  const [stories, setStories] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!bookmarks.length) {
      setStories([]);
      return;
    }
    setLoading(true);
    setError(null);
    Promise.all(bookmarks.map(id => fetchStory(id)))
      .then(results => setStories(results.filter(Boolean)))
      .catch(() => setError('Failed to load bookmarked stories.'))
      .finally(() => setLoading(false));
  }, [bookmarks]);

  if (loading) return <div className="py-8 text-center text-black">Loading bookmarks...</div>;
  if (error) return <div className="py-8 text-center text-red-500">{error}</div>;
  if (!stories.length) return <div className="py-8 text-center">No bookmarks yet.</div>;

  return (
    <section className="py-8 px-6 mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-black">Bookmarked Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stories.map(story => (
          <div key={story.id} className="relative">
            <ImageOverlay
              src={story.banner_image}
              alt={story.title}
              className="w-full h-[300px] rounded-lg"
              overlayClassName="p-4"
              unoptimized
              storyId={story.id}
            >
              <h3 className="text-white font-bold text-lg mb-1">{story.title}</h3>
              <p className="text-white text-xs">{story.author}</p>
            </ImageOverlay>
            <button
              onClick={() => dispatch(removeBookmark(story.id))}
              className="absolute top-2 right-2 bg-white text-[#F52A32] rounded-full px-3 py-1 text-xs font-bold shadow hover:bg-[#F52A32] hover:text-white transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bookmarks; 
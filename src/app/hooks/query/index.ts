'use client'
import { LatestNews, MissedStory, TopStory } from '@/app/types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';



export const useTopStories = () =>
    useQuery<TopStory[]>({
        queryKey: ['topStories'],
        queryFn: async () => {
            const { data } = await axios.get('https://api.agcnewsnet.com/api/general/top-stories');
            // The array is at data.data.data
            return Array.isArray(data?.data?.data) ? data.data.data : [];
        },
    });


//   export interface FeaturedStory {
//     id: number;
//     title: string;
//     subtitle: string;
//     description: string;
//     status: string;
//     type: string;
//     author: string;
//     content: string;
//     featured: string;
//     views: number;
//     editors_pick: any;
//     top_story: any;
//     category: {
//       category_id: number;
//       category_name: string;
//       total_stories: number | null;
//       created_at: string;
//       updated_at: string;
//     };
//     banner_image: string;
//     created_at: string;
//     updated_at: string;
//   }

//   export const useFeaturedStories = () =>
//     useQuery<FeaturedStory[]>({
//       queryKey: ['featuredStories'],
//       queryFn: async () => {
//         const { data } = await axios.get('https://api.agcnewsnet.com/api/general/stories/featured-stories?page=1&per_page=15');
//         return Array.isArray(data?.data?.data) ? data.data.data : [];
//       },
//     }); 





export const useFetchLatestNews = () =>
    useQuery<LatestNews[]>({
        queryKey: ['featuredStories'],
        queryFn: async () => {
            const { data } = await axios.get('https://api.agcnewsnet.com/api/general/stories/latest-stories?page=1&per_page=7');
            return Array.isArray(data?.data?.data) ? data.data.data : [];
        },
    });



export const useMissedStories = () =>
    useQuery<MissedStory[]>({
        queryKey: ['missedStories'],
        queryFn: async () => {
            const { data } = await axios.get('https://api.agcnewsnet.com/api/general/stories/missed-stories?page=1&per_page=5');
            return Array.isArray(data?.data?.data) ? data.data.data : [];
        },
    }); 


    export const useEditorsPicks = () =>
        useQuery({
          queryKey: ['editorsPicks'],
          queryFn: async () => {
            const { data } = await axios.get('https://api.agcnewsnet.com/api/general/editor-picks?page=1&per_page=15');
            return Array.isArray(data?.data?.data)
              ? data.data.data.filter((item: any) => item.story)
              : [];
          },
        });
      
      export const useCategories = () =>
        useQuery({
          queryKey: ['categories'],
          queryFn: async () => {
            const { data } = await axios.get('https://api.agcnewsnet.com/api/general/categories');
            return Array.isArray(data?.data?.data) ? data.data.data : [];
          },
        });
      
      export const useCategoryStories = (categoryId: number | null) =>
        useQuery({
          queryKey: ['categoryStories', categoryId],
          queryFn: async () => {
            if (!categoryId) return [];
            const { data } = await axios.get(`https://api.agcnewsnet.com/api/general/categories/${categoryId}/stories?page=1&per_page=15`);
            return Array.isArray(data?.data?.data) ? data.data.data : [];
          },
          enabled: !!categoryId,
        }); 
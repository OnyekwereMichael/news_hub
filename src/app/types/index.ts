
export interface MissedStory {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    status: string;
    type: string;
    author: string;
    content: string;
    featured: string;
    views: number;
    editors_pick: any;
    top_story: any;
    category: {
      category_id: number;
      category_name: string;
      total_stories: number | null;
      created_at: string;
      updated_at: string;
    };
    banner_image: string;
    created_at: string;
    updated_at: string;
  }
  
  
  export interface LatestNews {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    status: string;
    type: string;
    author: string;
    content: string;
    featured: string;
    views: number;
    editors_pick: any;
    top_story: any;
    category: {
      category_id: number;
      category_name: string;
      total_stories: number | null;
      created_at: string;
      updated_at: string;
    };
    banner_image: string;
    created_at: string;
    updated_at: string;
  }

  export interface TopStory {
    id: number;
    story: {
      id: number;
      title: string;
      subtitle: string;
      description: string;
      status: string;
      type: string;
      author: string;
      content: string;
      featured: string;
      views: number;
      editors_pick: any;
      top_story: any;
      category: {
        category_id: number;
        category_name: string;
        total_stories: number | null;
        created_at: string;
        updated_at: string;
      };
      banner_image: string;
      created_at: string;
      updated_at: string;
    };
    created_at: string;
    updated_at: string;
  }
# News Hub

A modern news platform built with Next.js, Tailwind CSS, TypeScript, React Query, and Redux Toolkit. This project was developed as a frontend internship assessment and demonstrates scalable UI, state management, and API integration.

## Features

- **Landing Page:**
  - Top Stories, Editor’s Picks, Featured, Latest, and Missed Stories sections
  - Horizontal scrollable categories navigation
  - Responsive design for desktop and mobile
- **Dynamic Story Page:**
  - Click any story to view full details at `/stories/[id]`
  - Fetches and displays story data from the API
  - Displays title, subtitle, author, date, image, and full content
- **Bookmarking:**
  - Bookmark stories from any list or detail page
  - Bookmarks are stored in Redux and persist via localStorage
- **Search:**
  - Filter stories by title (client-side)
- **Loading & Error States:**
  - Skeleton loaders and error messages for all data fetching
- **Bonus:**
  - Pagination/infinite scroll for long lists (if implemented)

## Tech Stack

- [Next.js (App Router)](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Query](https://tanstack.com/query/latest)
- [Redux Toolkit](https://redux-toolkit.js.org/)

## API Endpoints

- **Categories:** `https://api.agcnewsnet.com/api/general/categories`
- **Top Stories:** `https://api.agcnewsnet.com/api/general/top-stories`
- **Editor's Picks:** `https://api.agcnewsnet.com/api/general/editor-picks?page=1&per_page=15`
- **Featured Stories:** `https://api.agcnewsnet.com/api/general/stories/featured-stories?page=1&per_page=15`
- **Latest Stories:** `https://api.agcnewsnet.com/api/general/stories/latest-stories?page=1&per_page=7`
- **Missed Stories:** `https://api.agcnewsnet.com/api/general/stories/missed-stories?page=1&per_page=5`
- **Category Stories:** `https://api.agcnewsnet.com/api/general/categories/{categoryId}/stories?page=1&per_page=15`
- **Single Story:** `https://api.agcnewsnet.com/api/general/stories/{storyId}`

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
$ git clone <repo-url>
$ cd news_hub

# Install dependencies
$ npm install
# or
yarn install
```

### Running Locally
```bash
# Start the development server
$ npm run dev
# or
yarn dev

# Visit http://localhost:3000
```

### Project Structure
- `src/app/` — Main app directory (pages, components, hooks, store, etc.)
- `src/app/components/` — Reusable UI components
- `src/app/stories/[id]/page.tsx` — Dynamic story page (fetches and displays single story)
- `src/app/store.ts` — Redux store (bookmarks, selected category, etc.)

### Customization
- Update API endpoints in hooks or components as needed
- Add new sections or features by extending the modular component structure

## Assessment Requirements
- [x] Landing page with top stories, categories, and sections
- [x] Dynamic story page at `/stories/[id]`
- [x] Bookmark feature with Redux and localStorage
- [x] Search functionality
- [x] Responsive, modular, and type-safe code
- [x] React Query for all API fetching
- [x] Loading and error states

## License

This project is for educational and assessment purposes.

import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

// --- Bookmarks Slice ---
const initialBookmarks: number[] =
  typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('bookmarks') || '[]')
    : [];

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState: initialBookmarks,
  reducers: {
    addBookmark: (state, action: PayloadAction<number>) => {
      if (!state.includes(action.payload)) state.push(action.payload);
      if (typeof window !== 'undefined') {
        localStorage.setItem('bookmarks', JSON.stringify(state));
      }
    },
    removeBookmark: (state, action: PayloadAction<number>) => {
      const newState = state.filter(id => id !== action.payload);
      if (typeof window !== 'undefined') {
        localStorage.setItem('bookmarks', JSON.stringify(newState));
      }
      return newState;
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;

// --- Selected Category Slice (as before) ---
const selectedCategorySlice = createSlice({
  name: 'selectedCategory',
  initialState: null as number | null,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<number | null>) => action.payload,
  },
});

export const { setSelectedCategory } = selectedCategorySlice.actions;

export const store = configureStore({
  reducer: {
    bookmarks: bookmarksSlice.reducer,
    selectedCategory: selectedCategorySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; 
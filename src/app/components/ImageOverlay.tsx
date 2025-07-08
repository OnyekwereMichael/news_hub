'use client';

import React, { ReactNode } from 'react';
import Image from 'next/image';
import {
  useAppDispatch,
  useAppSelector,
  addBookmark,
  removeBookmark,
} from '../store';
import Link from 'next/link';

interface ImageOverlayProps {
  src: any;
  alt: string;
  children: ReactNode;
  className?: string;
  overlayClassName?: string;
  unoptimized?: boolean;
  storyId?: number;
}

const ImageOverlay = ({
  src,
  alt,
  children,
  className = '',
  overlayClassName = '',
  unoptimized = false,
  storyId,
}: ImageOverlayProps) => {
  const dispatch = useAppDispatch();
  const bookmarks = useAppSelector((state) => state.bookmarks) || [];
  const isBookmarked = storyId ? bookmarks.includes(storyId) : false;

  const handleBookmarkToggle = () => {
    if (dispatch && storyId !== undefined) {
      if (isBookmarked) {
        dispatch(removeBookmark(storyId));
      } else {
        dispatch(addBookmark(storyId));
      }
    }
  };

 // ... existing code ...
return (
  <div className={`relative ${className}`}>
    {storyId !== undefined ? (
      <Link href={`/stories/${storyId}`} className="block group" prefetch={false}>
        <Image
          src={src}
          alt={alt}
          className="w-full h-full object-cover cursor-pointer"
          fill
          unoptimized={unoptimized}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleBookmarkToggle();
          }}
          className={`absolute top-2 left-2 z-10 p-1 rounded-full bg-white/80 hover:bg-[#F52A32] transition-colors ${
            isBookmarked ? 'text-[#F52A32]' : 'text-gray-400'
          }`}
          title={isBookmarked ? 'Remove Bookmark' : 'Add Bookmark'}
        >
          {isBookmarked ? '★' : '☆'}
        </button>
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent ${overlayClassName}`}
        >
          {children}
        </div>
      </Link>
    ) : (
      <>
        <Image
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          fill
          unoptimized={unoptimized}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent ${overlayClassName}`}
        >
          {children}
        </div>
      </>
    )}
  </div>
);
};

export default ImageOverlay;

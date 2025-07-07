'use client';
import React from 'react';
import { useCategories } from '../hooks/query';
import { useAppDispatch, useAppSelector } from '../store';
import { setSelectedCategory } from '../store';

const CategoriesNav = () => {
  const { data, isLoading, isError } = useCategories();
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(state => state.selectedCategory);

  if (isLoading) return <div className="py-4 text-center">Loading categories...</div>;
  if (isError || !data) return <div className="py-4 text-center text-red-500">Failed to load categories.</div>;

  return (
    <nav className="overflow-x-auto whitespace-nowrap py-4 mb-4 border-b mx-auto px-6">
      <div className="flex gap-4">
        {data.map((cat: any) => (
          <button
            key={cat.category_id}
            className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${
              selectedCategory === cat.category_id
                ? 'bg-[#F52A32] text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => dispatch(setSelectedCategory(cat.category_id))}
          >
            {cat.category_name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoriesNav; 
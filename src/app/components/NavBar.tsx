'use client'
import Ads from '../../../public/Ad.png'
import Image from 'next/image'
import { FiSearch } from "react-icons/fi";
import Logo from '../../../public/Logo.png'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCategories } from '../hooks/query';
import { useAppDispatch, useAppSelector, setSelectedCategory } from '../store';
import React, { useState } from 'react';

const mainCategories = ['Politics', 'Business', 'Sports', 'Entertainment', 'Health', 'Tech', 'Opinion'];

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(state => state.selectedCategory);
  const { data: categories } = useCategories();
  const [menuOpen, setMenuOpen] = useState(false);
  const [secondaryOpen, setSecondaryOpen] = useState(false);

  const handleCategoryClick = (categoryName: string) => {
    const cat = categories?.find((c: any) => c.category_name.toLowerCase() === categoryName.toLowerCase());
    if (cat) {
      dispatch(setSelectedCategory(cat.category_id));
      if (categoryName.toLowerCase() === 'politics') {
        router.push('/politics');
      }
    }
    setMenuOpen(false); // close menu on mobile after click
  };

  return (
    <nav className="bg-black text-white">
      <div className='flex justify-center items-center mt-6'>
        <Image src={Ads} alt="Ad" className='max-sm:p-3'/>
      </div>
      <div className="flex items-center justify-between py-4 px-4">
        <div className="flex items-center space-x-4">
          <Image src={Logo} alt="Logo" />
          {/* Hamburger for mobile */}
          <button className="md:hidden ml-2 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Main nav links */}
          <nav className="hidden md:flex gap-3 space-x-6 text-sm">
            <Link href="/" className={`hover:text-gray-300 ${pathname === '/' ? 'border-b-2 border-[#F52A32] text-white font-bold' : ''}`}>Home</Link>
            {mainCategories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`hover:text-gray-300 focus:outline-none ${
                  categories && selectedCategory && categories.find((c: any) => c.category_id === selectedCategory)?.category_name.toLowerCase() === cat.toLowerCase()
                    ? 'border-b-2 border-[#F52A32] text-white font-bold cursor-pointer' : 'font-semibold cursor-pointer'
                }`}
                style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
        {/* Secondary nav (Photos, Videos, etc.) */}
        <div className="hidden md:flex space-x-6 text-sm items-center">
          <a href="#" className="hover:text-gray-300">Photos</a>
          <a href="#" className="hover:text-gray-300">Videos</a>
          <a href="#" className="hover:text-gray-300">Audios</a>
          <FiSearch className="text-gray-600 text-xl" />
          <a href="#" className="hover:text-gray-300">Login</a>
          <a href="#" className="hover:text-gray-300">Sign Up</a>
        </div>
        {/* Hamburger for secondary nav on mobile */}
        <button className="md:hidden ml-2 p-2" onClick={() => setSecondaryOpen(!secondaryOpen)} aria-label="Toggle secondary menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8M8 16h8M8 8h8" />
          </svg>
        </button>
      </div>
      {/* Mobile menu for main nav */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-2 px-4 pb-2 animate-fade-in">
          <Link href="/" className={`hover:text-gray-300 ${pathname === '/' ? 'border-b-2 border-[#F52A32] text-white font-bold' : ''}`}>Home</Link>
          {mainCategories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`hover:text-gray-300 focus:outline-none text-left w-full ${
                categories && selectedCategory && categories.find((c: any) => c.category_id === selectedCategory)?.category_name.toLowerCase() === cat.toLowerCase()
                  ? 'border-b-2 border-[#F52A32] text-white font-bold cursor-pointer' : 'font-semibold cursor-pointer'
              }`}
              style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}
            >
              {cat}
            </button>
          ))}
        </div>
      )}
      {/* Mobile menu for secondary nav */}
      {secondaryOpen && (
        <div className="md:hidden flex flex-col space-y-2 px-4 pb-2 animate-fade-in">
          <a href="#" className="hover:text-gray-300">Photos</a>
          <a href="#" className="hover:text-gray-300">Videos</a>
          <a href="#" className="hover:text-gray-300">Audios</a>
          <FiSearch className="text-gray-600 text-xl" />
          <a href="#" className="hover:text-gray-300">Login</a>
          <a href="#" className="hover:text-gray-300">Sign Up</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar; 
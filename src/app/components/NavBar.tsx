'use client'
import Ads from '../../../public/Ad.png'
import Image from 'next/image'
import { FiSearch } from "react-icons/fi";
import Logo from '../../../public/Logo.png'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCategories } from '../hooks/query';
import { useAppDispatch, useAppSelector, setSelectedCategory } from '../store';

const mainCategories = ['Politics', 'Business', 'Sports', 'Entertainment', 'Health', 'Tech', 'Opinion'];

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(state => state.selectedCategory);
  const { data: categories } = useCategories();

  const handleCategoryClick = (categoryName: string) => {
    const cat = categories?.find((c: any) => c.category_name.toLowerCase() === categoryName.toLowerCase());
    if (cat) {
      dispatch(setSelectedCategory(cat.category_id));
      if (categoryName.toLowerCase() === 'politics') {
        router.push('/politics');
      }
    }
  };

  return (
    <nav className="bg-black text-white">
      <div className='flex justify-center items-center mt-6'>
        <Image src={Ads} alt="Ad" />
      </div>
     
      <div className="flex items-center justify-between py-4 px-4">
        <div className="flex items-center space-x-8">
          <Image src={Logo} alt="Logo" />
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
        <div className="border-t border-gray-700 py-3">
          <nav className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-gray-300">Photos</a>
            <a href="#" className="hover:text-gray-300">Videos</a>
            <a href="#" className="hover:text-gray-300">Audios</a>
            <FiSearch className="text-gray-600 text-xl" />
            <a href="#" className="hover:text-gray-300">Login</a>
            <a href="#" className="hover:text-gray-300">Sign Up</a>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 
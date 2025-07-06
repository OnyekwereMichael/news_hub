import Ads from '../../../public/Ad.png'
import Image from 'next/image'
import { FiSearch } from "react-icons/fi";
import Logo from '../../../public/Logo.png'
const NavBar = () => (
  <nav className="bg-black text-white">
    <div className='flex justify-center items-center mt-6'>
        <Image src={Ads} alt="Ad" />
    </div>
    <div className="flex items-center justify-between py-4 px-4">
          <div className="flex items-center space-x-8">
            <Image src={Logo} alt="Logo" />
            <nav className="hidden md:flex space-x-6 text-sm">
              <a href="#" className="hover:text-gray-300">Home</a>
              <a href="#" className="hover:text-gray-300">News</a>
              <a href="#" className=" text-white font-medium">Sport</a>
              <a href="#" className="hover:text-gray-300">Weather</a>
              <a href="#" className="hover:text-gray-300">iPlayer</a>
              <a href="#" className="hover:text-gray-300">Sounds</a>
              <a href="#" className="hover:text-gray-300">Bitesize</a>
              <a href="#" className="hover:text-gray-300">CBeebies</a>
              <a href="#" className="hover:text-gray-300">CBBC</a>
              <a href="#" className="hover:text-gray-300">Food</a>
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

export default NavBar; 
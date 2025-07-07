import Image from 'next/image'
import Logo from '../../../public/Logo.png'
import { FaSearch } from 'react-icons/fa'
import Instagram from '../../../public/SocialLinks/instagram.png'
import X from '../../../public/SocialLinks/x.png'
import Facebook from '../../../public/SocialLinks/facebook.png'
import linkedin from '../../../public/SocialLinks/linkedin.png'
import pin from '../../../public/SocialLinks/pin.png'

const Footer = () => {
  return (
    <footer className="bg-[#2a2626] text-white px-6 py-5">
    <div className="max-w-6xl  mx-auto">
    
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 my-6">
     
        <div>
          <Image src={Logo} alt="AGC Newsnet" className="w-24 h-auto" />
        </div>
  
       
  
     
        <div className="flex items-center gap-4">
          <Image src={Instagram} alt="Instagram" className="w-6 h-6" />
          <Image src={Facebook} alt="Facebook" className="w-6 h-6" />
          <Image src={X} alt="X" className="w-6 h-6" />
          <Image src={pin} alt="Heart" className="w-6 h-6" />
          <Image src={linkedin} alt="LinkedIn" className="w-6 h-6" />
        </div>
      </div>

      <div className="flex-1 mx-auto">
  <div className="relative">
    <input
      type="text"
      placeholder="Search AGC Newsnet"
      className="w-full py-3 pl-4 pr-10 rounded-md text-black placeholder-gray-500 bg-white"
    />
    <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-lg" />
  </div>
</div>
  
  
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-10 text-[16px] font-medium">
        <div className="space-y-3 font-medium text-[18px]">
          <p>Home</p>
          <p>Africa</p>
          <p>Politics</p>
        </div>
        <div className="space-y-3 font-medium text-[18px]">
          <p>Business</p>
          <p>Sport</p>
          <p>Health</p>
        </div>
        <div className="space-y-3 font-medium text-[18px]">
          <p className=''>Tech</p>
          <p>Opinion</p>
          <p>Videos</p>
        </div>
        <div className="space-y-3 font-medium text-[18px]">
          <p>Photos</p>
          <p>AGC Archive</p>
          <p>Privacy Policy</p>
        </div>
        <div className="space-y-3 font-medium text-[18px]">
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Advert Rate</p>
        </div>
      </div>
  
     
      <div className="mt-10  text-sm text-gray-400">
        © 2024 AGC Newsnet. All Rights Reserved.
      </div>
    </div>
  </footer>
  
  )
}

export default Footer

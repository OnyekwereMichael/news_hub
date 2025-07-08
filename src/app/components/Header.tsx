// import Link from 'next/link'
// import React from 'react'
// import Instagram from '../../../public/SocialLinks/instagram.png'
// import X from '../../../public/SocialLinks/x.png'
// import Facebook from '../../../public/SocialLinks/facebook.png'
// import linkedin from '../../../public/SocialLinks/linkedin.png'
// import pin from '../../../public/SocialLinks/pin.png'
// import Image from 'next/image'

// const Header = () => {
//   const HeaderLink = [
//     {
//       label: "About us",
//       link: "#"
//     },
//     {
//       label: "Contact Us",
//       link: "#"
//     },
//     {
//       label: "AGC Archive",
//       link: "#"
//     },
//     {
//       label: "Advert Rate",
//       link: "#"
//     },
//     {
//       label: "Privacy Policy",
//       link: "#"
//     },
//   ]
//   return (
//     <header>
//    <div className="bg-[#D32C89] text-white px-4 py-3 ">
//       <div className="max-w-7xl text-[12px] mx-auto flex items-center justify-between">
//         <div className="flex items-center space-x-4">
//         {HeaderLink.map((Header, i) => (
//           <div className='' key={i}>
//               <Link href={Header.link} className='text-[14px]'>{Header.label}</Link>
//           </div>
//         ))}
//         </div>
//         <div className="flex items-center space-x-6 text-sm">
//           <span>Sunday, March 3, 2024</span>
//           <div className="flex items-center gap-4">
//           <Image src={Instagram} alt="Instagram" className="w-5 h-5" />
//           <Image src={Facebook} alt="Facebook" className="w-5 h-5" />
//           <Image src={X} alt="X" className="w-5 h-5" />
//           <Image src={pin} alt="Heart" className="w-5 h-5" />
//           <Image src={linkedin} alt="LinkedIn" className="w-5 h-5" />
//         </div>
//         </div>
//       </div>
//     </div>
//   </header>
//   )
// }

// export default Header


import Link from 'next/link'
import React, { useState } from 'react'
import Instagram from '../../../public/SocialLinks/instagram.png'
import X from '../../../public/SocialLinks/x.png'
import Facebook from '../../../public/SocialLinks/facebook.png'
import linkedin from '../../../public/SocialLinks/linkedin.png'
import pin from '../../../public/SocialLinks/pin.png'
import Image from 'next/image'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const HeaderLink = [
    { label: "About us", link: "#" },
    { label: "Contact Us", link: "#" },
    { label: "AGC Archive", link: "#" },
    { label: "Advert Rate", link: "#" },
    { label: "Privacy Policy", link: "#" },
  ];
  return (
    <header>
      <div className="bg-[#D32C89] text-white px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between text-[12px]">
          {/* Top row: links (collapsible on mobile) */}
          <div className="flex items-center justify-between md:justify-start w-full">
            <div className="flex items-center space-x-4 max-md:hidden">
              {HeaderLink.map((Header, i) => (
                <div key={i}>
                  <Link href={Header.link} className='text-[14px]'>{Header.label}</Link>
                </div>
              ))}
            </div>
            {/* Hamburger for mobile */}
            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Mobile menu */}
          {menuOpen && (
            <div className="flex flex-col space-y-2 mt-2 md:hidden animate-fade-in">
              {HeaderLink.map((Header, i) => (
                <Link key={i} href={Header.link} className='text-[14px] block'>{Header.label}</Link>
              ))}
            </div>
          )}
          {/* Bottom row: date and socials */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mt-2 md:mt-0 w-full md:w-[28rem] justify-between">
            <span className="mb-2 md:mb-0">Sunday, March 3, 2024</span>
            <div className="flex items-center gap-4">
              <Image src={Instagram} alt="Instagram" className="w-5 h-5" />
              <Image src={Facebook} alt="Facebook" className="w-5 h-5" />
              <Image src={X} alt="X" className="w-5 h-5" />
              <Image src={pin} alt="Heart" className="w-5 h-5" />
              <Image src={linkedin} alt="LinkedIn" className="w-5 h-5" />
              
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

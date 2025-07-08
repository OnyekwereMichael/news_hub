import Link from 'next/link'
import React from 'react'
import Instagram from '../../../public/SocialLinks/instagram.png'
import X from '../../../public/SocialLinks/x.png'
import Facebook from '../../../public/SocialLinks/facebook.png'
import linkedin from '../../../public/SocialLinks/linkedin.png'
import pin from '../../../public/SocialLinks/pin.png'
import Image from 'next/image'

const Header = () => {
  const HeaderLink = [
    {
      label: "About us",
      link: "#"
    },
    {
      label: "Contact Us",
      link: "#"
    },
    {
      label: "AGC Archive",
      link: "#"
    },
    {
      label: "Advert Rate",
      link: "#"
    },
    {
      label: "Privacy Policy",
      link: "#"
    },
  ]
  return (
    <header>
   <div className="bg-[#D32C89] text-white px-4 py-3 ">
      <div className="max-w-7xl text-[12px] mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
        {HeaderLink.map((Header, i) => (
          <div className='' key={i}>
              <Link href={Header.link} className='text-[14px]'>{Header.label}</Link>
          </div>
        ))}
        </div>
        <div className="flex items-center space-x-6 text-sm">
          <span>Sunday, March 3, 2024</span>
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

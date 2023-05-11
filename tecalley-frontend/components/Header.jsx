'use client';

import { useEffect, useState } from 'react';
import { Wrapper } from './';
import Link from 'next/link';
import Menu from './Menu';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsCart } from 'react-icons/bs';
import { BiMenuAltRight } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [show, setShow] = useState('translate-y-0');
  const [lastScrolly, setLastScrolly] = useState(false);

  const controlNavbar = () => {
    if(window.scrollY > 200) {
      if(window.scrollY > lastScrolly && !mobileMenu) {
        setShow('-translate-y-[80px]');
      } else {
        setShow('shadow-sm');
      }
    } else {
      setShow('translate-y-0');
    }
    setLastScrolly(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrolly]);

  return (
    <header className={`w-full h[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
      <Wrapper className="h-[60px] flex justify-between items-center">

        <Link href="/">
          <img src="/assets/logo.png" className="w-[150px] md:w-[180px]"/>
        </Link>

        <Menu showCategoryMenu={showCategoryMenu} setShowCategoryMenu={setShowCategoryMenu} />
        {mobileMenu &&  <MobileMenu showCategoryMenu={showCategoryMenu} setShowCategoryMenu={setShowCategoryMenu} setMobileMenu={setMobileMenu} />}

        <div className="flex items-center justify-between gap-2 text-black">
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-indigo-500 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                51
            </div>
          </div>

          <Link href="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart className="text-[15px] md:text-[20px]" />
              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-indigo-500 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              2
              </div>
            </div>
          </Link>

          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose size={16} onClick={() => setMobileMenu(false)}/>
            ): (
              <BiMenuAltRight size={20} onClick={() => setMobileMenu(true)}/>
            )}
          </div>

        </div>
      </Wrapper>
    </header>
  )
}

export default Header

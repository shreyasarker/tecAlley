'use client';

import { useState } from "react";
import { Wrapper } from "./";
import Link from "next/link";
import Menu from "./Menu";
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsCart } from 'react-icons/bs';
import { BiMenuAltRight } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [show, setShow] = useState('translate-y-0');
  const [lastScrolly, setLastScrolly] = useState(false);

  return (
    <header className={`w-full h[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
      header
      <Wrapper className="h-[60px] flex justify-between items-center">

        <Link href="/">
          <img src="/assets/logo.png" className="w-[150px] md:w-[180px]"/>
        </Link>

        <Menu showCategoryMenu={showCategoryMenu} setShowCategoryMenu={setShowCategoryMenu} />

        <div className="flex items-center gap-2 text-black">
          <div className="w-8 md:w-12 h-8 md:12 rounded-full justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]"/>
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-indigo-500 absolute top-[-8px] left-2 md:left-3 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">56</div>
          </div>

          <div className="w-8 md:w-12 h-8 md:12 rounded-full justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <BsCart className="text-[15px] md:text-[20px]"/>
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-indigo-500 absolute top-[-8px] left-2 md:left-3 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">4</div>
          </div>

        </div>
      </Wrapper>
    </header>
  )
}

export default Header

import React from 'react';
import { menuData, subMenuData } from '@/utils/data';
import { BsChevronBarDown } from 'react-icons/bs';
import Link from 'next/link';

const MobileMenu = ({ showCategoryMenu, setShowCategoryMenu, setMobileMenu }) => {
  return (
    <ul className="w-full flex flex-col md:hidden font-bold absolute top-[50px] left-0 h-[calc(100vh-50px)] bg-white border-t text-black">
      {menuData.map((item) => (
        <React.Fragment key={item.id}>
          {!!item?.subMenu ? (
            <li onClick={() => setShowCategoryMenu(!showCategoryMenu)} className="cursor-pointer py-4 px-5 border-b flex flex-col relative">
              <div className="flex justify-between items-center">
                {item.name}
                <BsChevronBarDown size={14} />
              </div>
              {showCategoryMenu && (
                <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                  {subMenuData.map((subMenuItem) => (
                    <Link href="/" key={subMenuItem.id} onClick={() => {setShowCategoryMenu(false); setMobileMenu(false)}}>
                      <li className="py-4 px-8 border-t flex justify-between">
                        {subMenuItem.name}
                        <span className="opacity-50 text-sm">{subMenuItem.docCount}</span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li className="py-4 px-5 border-b">
              <Link href={item?.url} onClick={() => setMobileMenu(false)}>{item.name}</Link>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  )
}

export default MobileMenu

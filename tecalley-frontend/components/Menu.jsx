import React from 'react';
import { menuData, subMenuData } from '@/utils/data';
import { BsChevronBarDown } from 'react-icons/bs';
import Link from 'next/link';

const Menu = ({ categories, showCategoryMenu, setShowCategoryMenu }) => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {menuData.map((item) => (
        <React.Fragment key={item.id}>
          {!!item?.subMenu ? (
            <li onMouseEnter={() => setShowCategoryMenu(true)} onMouseLeave={() => setShowCategoryMenu(false)} className="cursor-pointer flex items-center gap-2 relative">
              {item.name}
              <BsChevronBarDown size={14} />
              {showCategoryMenu && (
                <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                  {categories?.data?.map((category) => (
                    <Link href="/" key={category.id} onClick={() => setShowCategoryMenu(false)}>
                      <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                        {category.attributes.name}
                        <span className="opacity-50 text-sm">{category.attributes?.products?.data?.length}</span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li className="cursor-pointer">
              <Link href={item?.url}>{item.name}</Link>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  )
}

export default Menu

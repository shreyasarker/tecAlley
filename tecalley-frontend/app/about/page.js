import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';

const MaintenancePage = () => {
  return (
    <div className="container flex justify-center items-center h-[400px]">
      <div className="p-5 md:p-20 mx-2">
        <div className="text-center">
          <h2 className="text-4xl tracking-tight leading-10 font-bold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              The page is<span className="text-indigo-500">&nbsp;Coming Soon</span>
          </h2>
          <p className="text-md md:text-xl mt-10">
            <Link href="/" className=" flex justify-center items-center gap-1 hover:underline">
              <AiOutlineHome /> 
              <span>Go to homepage</span>
            </Link>
          </p>
        </div>
      </div>
    </div>

  )
}

export default MaintenancePage

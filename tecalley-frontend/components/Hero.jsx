"use client";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BiArrowBack } from 'react-icons/bi';

const Hero = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360] max-auto">
      hero
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showArrows={false} showIndicators={false} showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div onClick={clickHandler} className="absolute right-[31px] md-right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90">
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}  
        renderArrowNext={(clickHandler, hasNext) => (
          <div onClick={clickHandler} className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90">
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </div>
        )}  
      >
        <div>
          <img src="/assets/sliders/slider1.jpg" className="aspect-[16/10] md:aspect-auto object-cover" />
          <div className="px-[15px] md:px-[20px] py-[10px] md:py-[20px] bg-indigo-300 absolute bottom-[25px] md:bottom-[75px] left-0 text-white text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>
        <div>
          <img src="/assets/sliders/slider2.jpg" className="aspect-[16/10] md:aspect-auto object-cover" />
          <div className="px-[15px] md:px-[20px] py-[10px] md:py-[20px] bg-indigo-300 absolute bottom-[25px] md:bottom-[75px] left-0 text-white text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>
        <div>
          <img src="/assets/sliders/slider3.jpg" className="aspect-[16/10] md:aspect-auto object-cover" />
          <div className="px-[15px] md:px-[20px] py-[10px] md:py-[20px] bg-indigo-300 absolute bottom-[25px] md:bottom-[75px] left-0 text-white text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div> 
    </Carousel>

    </div>
  )
}

export default Hero

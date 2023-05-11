'use client';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductCarousel = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel infiniteLoop={true} showIndicators={false} showStatus={false} thumbWidth={60} className="productCarousel">
        <img src="/assets/products/samsung-s23-ultra/S23U-V2-Configurator-DT-800x600.webp" alt="Product Thumb"/>
        <img src="/assets/products/samsung-s23-ultra/D3-Exclusive-Configurator-DT-800x600.webp" alt="Product Thumb"/>
        <img src="/assets/products/samsung-s23-ultra/01-DM3-Lavender-PDP-1600x1200.webp" alt="Product Thumb"/>
      </Carousel>
    </div>
  )
}

export default ProductCarousel

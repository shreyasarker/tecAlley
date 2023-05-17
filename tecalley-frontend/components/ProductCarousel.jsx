'use client';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductCarousel = ({ productThumbnail, productImages }) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel infiniteLoop={true} showIndicators={false} showStatus={false} thumbWidth={60} className="productCarousel">
        <img src={productThumbnail.data.attributes.url} alt={productThumbnail.data.attributes.name}/>
        {productImages?.data?.map((image) => (
          <img src={image.attributes.url} alt={image.attributes.name} key={image.id} />
        ) )}
      </Carousel>
    </div>
  )
}

export default ProductCarousel

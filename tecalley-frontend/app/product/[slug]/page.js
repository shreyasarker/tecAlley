import { IoMdHeartEmpty } from 'react-icons/io';

import { ProductCarousel, RelatedProducts, Wrapper } from '@/components';

const Product = ({ params }) => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductCarousel />
          </div>
          
          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2">
              Samsung S23 Ultra
            </div>
            <div className="text-lg font-semibold mb-5">
              128GB / 256GB / 1TB Variant
            </div>
            <div className="text-lg font-semibold">
              Price: $ 1439.99
            </div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Cart
            </button>

            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Wishlist <IoMdHeartEmpty />
            </button>

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-5">
                It includes a large high-resolution display, a powerful processor, an advanced camera system with multiple lenses and improved low-light performance, 5G connectivity, a large battery with fast charging, enhanced security with an in-display fingerprint scanner and facial recognition, and a sleek and elegant design with slim bezels. 
              </div>
              <div className="text-md mb-5">
                It includes a large high-resolution display, a powerful processor, an advanced camera system with multiple lenses and improved low-light performance, 5G connectivity, a large battery with fast charging, enhanced security with an in-display fingerprint scanner and facial recognition, and a sleek and elegant design with slim bezels. 
              </div>
            </div>

          </div>
        </div>
        <RelatedProducts />
      </Wrapper>
    </div>
  )
}

export default Product

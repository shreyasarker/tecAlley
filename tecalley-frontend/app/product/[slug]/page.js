import { IoMdHeartEmpty } from 'react-icons/io';

import { CartButton, ProductCarousel, RelatedProducts, Wrapper } from '@/components';
import { fetchDataFromApi } from '@/utils/api';
import { getDiscountPercentage } from '@/utils/helpers';
import ReactMarkdown from 'react-markdown';


const Product = async ({ params: { slug } }) => {
  const products = await fetchDataFromApi(`/products?populate=*&filters[slug][$eq]=${slug}`);
  const relatedProducts = await fetchDataFromApi(`/products?populate=*&filters[slug][$ne]=${slug}`);
  const product = products?.data[0];

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductCarousel productThumbnail={product?.attributes?.thumbnail} productImages={product?.attributes?.image} />
          </div>
          
          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2">
              {product.attributes.name}
            </div>
            <div className="text-lg font-semibold mb-5">
              {product.attributes.subtitle}
            </div>
            <div className="text-lg font-semibold">
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold">
                  Price : ${product.attributes.price}
                </p>
                {product.attributes.original_price && (
                  <>
                    <p className="text-base  font-medium line-through">
                      ${product.attributes.original_price}
                    </p>
                    <p className="ml-auto text-base font-medium text-green-500">
                      {getDiscountPercentage(
                        product.attributes.price,
                        product.attributes.original_price
                      )}
                      % off
                    </p>
                  </>
                  )}
              </div>
            </div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            <CartButton product={product} />

            <button type="button" className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Wishlist <IoMdHeartEmpty />
            </button>

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5">
                <ReactMarkdown>
                  {product.attributes.description}
                </ReactMarkdown>
              </div>
            </div>

          </div>
        </div>
        <RelatedProducts products={relatedProducts} />
      </Wrapper>
    </div>
  )
}

export default Product

import { getDiscountPercentage } from '@/utils/helpers';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product.attributes.slug}`} className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
      <img src={product.attributes.thumbnail.data.attributes.url} alt={product.attributes.name} className="w-[300px] h-[300px]" />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{product.attributes.name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">${product.attributes.price}</p>
          {product.attributes.original_price && <p className="text-base font-medium line-through">${product.attributes.original_price}</p>}
          <p className="ml-auto text-base font-medium text-green-500">{getDiscountPercentage(product.attributes.price, product.attributes.original_price)}% off</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard

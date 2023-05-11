import Link from 'next/link';

const Product = () => {
  return (
    <Link href="/" className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
      <img className="w-full" src="/assets/products/samsung-s23-ultra/S23U-V2-Configurator-DT-800x600.webp" alt="Product" />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">Samsung S23 Ultra</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">$1151.99</p>
          <p className="text-base font-medium line-through">$288</p>
          <p className="ml-auto text-base font-medium text-green-500">20% off</p>
        </div>
      </div>
    </Link>
  )
}

export default Product

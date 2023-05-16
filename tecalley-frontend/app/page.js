import { Hero, ProductCard, Wrapper } from '@/components';
import { fetchDataFromApi } from '@/utils/api';

const Home = async () => {
  const products = await fetchDataFromApi('/products?populate=*');

  return (
    <main>
      <Hero />
      <Wrapper>
        <div className="text-center max-w-[850px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Get the best Tech Gadgets from TecAlley
          </div>
          <div className="text-md md:text-xl">
            TecAlley offers a wide range of technology products and services for tech enthusiasts and professionals alike. At TecAlley, we are committed to providing our customers with high-quality, reliable, and cutting-edge technology products at affordable prices.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-4 px-5 md:px-0">
        {products?.data?.length && products?.data?.map((product, i) => (
          <ProductCard key={i} product={product}/>
          ))}
        </div>
      </Wrapper>
    </main>
  )
}

export default Home
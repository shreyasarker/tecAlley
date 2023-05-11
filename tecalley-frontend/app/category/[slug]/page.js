import { ProductCard, Wrapper } from '@/components';

const Category = ({ params }) => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[850px] mx-auto my-12 md:my-0">
          <div className="text-[28px] md:text-[34px] font-semibold leading-tight">
            Category: <span className="capitalize">{params.slug}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 px-5 md:px-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Wrapper>
    </div>
  )
}

export default Category

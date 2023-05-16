import { ProductCard, Wrapper } from '@/components';
import { PER_PAGE } from '@/config';
import { fetchDataFromApi } from '@/utils/api';
import Link from 'next/link';

const Category = async ({ params: { slug }, searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const categories = await fetchDataFromApi(`/categories?filters[slug][$eq]=${slug}`);
  const data = await fetchDataFromApi(`/products?populate=*&filters[categories][slug][$eq]=${slug}&pagination[page]=${page}&pagination[pageSize]=${PER_PAGE}`);

  const category = categories?.data[0];

  const totalPage = data?.meta?.pagination?.pageCount || 0;
  const totalData = data?.meta?.pagination?.total || 0;
  const pageSize = data?.meta?.pagination?.pageSize || 0;
  
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[850px] mx-auto my-12 md:my-0">
          <div className="text-[28px] md:text-[34px] font-semibold leading-tight">
            Category: <span className="capitalize">{category?.attributes?.name}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 px-5 md:px-0">
          {data?.data?.length && data?.data?.map((product, i) => (
            <ProductCard key={i} product={product}/>
          ))}
        </div>
       
        {pageSize < totalData && (
          <nav className="flex gap-3 items-center justify-center my-16 md:my-0">
            <ul className="list-style-none flex">
              <li>
                <Link href={`/category/${slug}?page=${page - 1}`} className={`relative block rounded bg-transparent px-3 py-1.5 text-sm transition-all duration-300 ${page - 1 >= 1 ? 'text-neutral-600 hover:bg-neutral-100' : 'pointer-events-none text-neutral-500'}`}>
                  Previous
                </Link>
              </li>
              { Array.from(Array(totalPage), (e, i) => (
                <li key={i}>
                  <Link href={`/category/${slug}?page=${ i + 1}`} className={`relative block rounded px-3 py-1.5 text-sm transition-all duration-300 ${page === i + 1 ? 'bg-neutral-800 font-medium text-neutral-50' : 'bg-transparent text-neutral-600 hover:bg-neutral-100'} `}>
                    { i + 1 }
                    { page === i + 1 && <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">(current)</span> }
                  </Link>
              </li>
              ))}
              <li>
                <Link href={`/category/${slug}?page=${page + 1}`} className={`relative block rounded bg-transparent px-3 py-1.5 text-sm transition-all duration-300 ${page + 1 <= totalPage ? 'text-neutral-600 hover:bg-neutral-100' : 'pointer-events-none text-neutral-500'}`}>
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </Wrapper>
    </div>
  )
}

export default Category

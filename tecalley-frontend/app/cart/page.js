'use client';

import { CartItem, Wrapper } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {cartItems?.length > 0 && (
          <>
            <div className="text-center max-w-[850px] mx-auto my-12 md:my-0">
              <div className="text-[28px] md:text-[34px] font-semibold leading-tight">
                Shopping Cart
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 py-10">
              <div className="flex-[2]">
                <div className="text-lg font-bold">Cart Items</div>
                {cartItems.map((cartItem, i) => (
                  <CartItem key={i} cartItem={cartItem} />
                ))}
              </div>

              <div className="flex-[1]">
                <div className="text-lg font-bold">Summary</div>
                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                  <div className="flex justify-between">
                    <div className="uppercase text-md md:text-lg font-medium text-black">Subtotal</div>
                    <div className="text-md md:text-lg font-medium text-black">$ 1439.99</div>
                  </div>
                  <div className="text-sm md:text-md py-5 border-t mt-5">
                    The subtotal reflects the total price of
                    your order, including duties and taxes,
                    before any applicable discounts. It does
                    not include delivery costs and
                    international transaction fees.
                  </div>

                </div>
                <button className="w-full py-4 rounded-full bg-indigo-500 text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
       
        {cartItems.length <= 0 && (
          <div className="flex-[2] flex flex-col items-center pb-[50px] sm:-mt-[14px]">
            <Image src="/assets/empty-cart.jpg" width={300} height={300} alt="Empty Cart" className="w-[300px] md:w-[400px]" />
            <span className="text-xl font-bold">Your cart is empty</span>
            <span className="text-center mt-4">
              Looks like you have not added anything in your cart.
              <br />
              Go ahead and explore top categories.
            </span>
            <Link href="/" className="py-4 px-8 rounded-full bg-indigo-500 text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8">
              Continue Shopping
            </Link>
          </div>
        )}  
      </Wrapper>
    </div>
  )
}

export default Cart

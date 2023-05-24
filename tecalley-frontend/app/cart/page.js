'use client';

import { useMemo, useState } from 'react';
import { CartItem, Wrapper } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { makePaymentRequest } from '@/utils/api';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const subTotal = useMemo(() => {
    return cartItems.reduce((total, value) => total + value.attributes.price, 0)
  }, [cartItems]);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const stripe = await stripePromise;
      const res = await makePaymentRequest('/orders', {
        products: cartItems
      });
      await stripe.redirectToCheckout({
        sessionId: res.stripeSession.id
      });

    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

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
                    <div className="text-md md:text-lg font-medium text-black">$ {subTotal }</div>
                  </div>
                  <div className="text-sm md:text-md py-5 border-t mt-5">
                    The subtotal reflects the total price of
                    your order, including duties and taxes,
                    before any applicable discounts. It does
                    not include delivery costs and
                    international transaction fees.
                  </div>

                </div>
                <button onClick={handleCheckout} className="w-full py-4 rounded-full bg-indigo-500 text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center">
                  {loading ? (
                    <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                    </svg>
                  ) : (
                    <span>Checkout</span>
                  )}
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

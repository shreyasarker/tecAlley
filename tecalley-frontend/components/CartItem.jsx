'use client';

import { store } from '@/store';
import { removeFromCart, updateCart } from '@/store/cart.slice';
import { RiDeleteBin6Line } from 'react-icons/ri';

const CartItem = ({ cartItem }) => {
  const updateCartItem = (quantity) => {
    const item = {
      id: cartItem.id,
      quantity: parseInt(quantity)
    }
    store.dispatch(updateCart(item));
  };

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img src={cartItem.attributes.thumbnail.data.attributes.url} alt={cartItem.attributes.name} className="w-[120px] h-[120px]" />
      </div>

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {cartItem.attributes.name}
          </div>

          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {cartItem.attributes.subtitle}
          </div>

          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            Price: ${cartItem.attributes.price}
          </div>

        </div>

        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          {cartItem.attributes.subtitle}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select className="hover:text-black" defaultValue={cartItem.quantity} onChange={(e) => updateCartItem(e.target.value)}>
                {Array.from({length: 10}, (_, i) => (
                  <option value={i + 1} key={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>

          </div>

          <RiDeleteBin6Line onClick={() => {store.dispatch(removeFromCart({id: cartItem.id}))}} className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]" />

        </div>
      </div>
    </div>
  )
}

export default CartItem

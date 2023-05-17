'use client';

import { store } from "@/store";
import { addToCart } from "@/store/cart.slice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartButton = ({ product }) => {
  
  const handleAddToCart = () => {
    store.dispatch(addToCart({...product, price: product.attributes.price}));

    toast('Items added to cart', {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  return (
    <>
      <ToastContainer />
      <button onClick={() => handleAddToCart()} type="button" className="w-full py-4 rounded-full bg-indigo-500 text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
        Add to Cart
      </button>
    </>
  )
}

export default CartButton

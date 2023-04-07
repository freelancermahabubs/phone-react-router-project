import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
const Cart = ({cart, children, handleClearCart}) => {

  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for(const phone of cart){
    totalPrice = totalPrice + phone.price * phone.quantity;
    totalShipping = totalShipping + phone.shipping;
    quantity = quantity + phone.quantity;
  };
  const tax = (totalPrice * 7 / 100);
  const grandTotal = (totalPrice + totalShipping + tax);

  return (
    <div>
      <div>
        <h2 className='text-center text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 p-2 to-pink-500 text-white font-bold'>Order Summary</h2>
        <p className='p-2 rounded-md w-[75%] my-5 mx-auto text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold'>Selected Items: {quantity} </p>

       <p className='p-2 rounded-md w-[75%] my-5 mx-auto text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold'>Total Price: {totalPrice}</p>

        <p className='p-2 rounded-md w-[75%] my-5 mx-auto text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold'>Total Shipping: {totalShipping} </p>

        <p className='p-2 rounded-md w-[75%] my-5 mx-auto text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold'>Tax: {tax.toFixed(2)}</p>

       <p className='p-2 rounded-md w-[75%]  mx-auto text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold'>Grand Total: {grandTotal.toFixed(2)}</p>
      </div>
      <button onClick={handleClearCart} className='flex justify-between  text-white w-[75%] mx-auto my-5 bg-red-500 rounded-md text-xl p-2 items-center'>
          <span className='text-xl font-semibold'>Clear Cart</span>
          <TrashIcon className="h-6 w-6 text-white" />
        </button>
        {children}
    </div>
  );
};

export default Cart;
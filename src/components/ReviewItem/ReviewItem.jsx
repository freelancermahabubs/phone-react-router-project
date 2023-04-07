import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
import './ReviewItem.css';

const ReviewItem = ({phone, handleRemoveFromCart}) => {
const {phone_name, price, quantity, image, id} = phone
  return (
    <div>
      <div className='border-solid flex items-center border-2 rounded-lg bg-slate-300'>
     <img src={image} alt="product Image" className='rounded-xl w-20 p-2'/>
     <div className='reviewDetails'>
     <p className='text-xl'>{phone_name}</p>
      <p>Price <span className='text-orange-600'>${price}</span></p>
      <p>Order Quantity: <span className='text-orange-600'>{quantity}</span></p>
     </div>
     <button onClick={()=>handleRemoveFromCart(id)} className='delete-btn text-red-500'> <TrashIcon className="w-8 mx-auto" /></button>
    </div>
    </div>
  );
};

export default ReviewItem;
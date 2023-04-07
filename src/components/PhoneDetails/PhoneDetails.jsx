import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
const PhoneDetails = (props) => {
  const {image, phone_name, price, ratings, quantity, shipping, stock, id, brand} = props.phone;
const handleAddToCart = props.handleAddToCart;
  return (
    <div>
    <div className="card w-full min-h-full bg-base-100 shadow-xl">
    <figure className='m-2'> <img className='object-cover w-full lg:h-full' src={image} alt="Phone Image" /></figure>
  <div className="card-body">
    <h2 className="text-2xl font-bold">{phone_name}</h2>
    <p className='text-xl font-semibold'>Brand: {brand}</p>
    <p className='text-xl font-semibold'>Price: {price}</p>
    <p className='text-xl font-semibold'>Ratings: {ratings} <span>Stars</span></p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleAddToCart(props.phone)} className="btn w-full btn-primary">Add to Cart <ShoppingCartIcon className="h-6 w-6 text-white" /></button>
    </div>
  </div>
</div>
    </div>
  );
};

export default PhoneDetails;
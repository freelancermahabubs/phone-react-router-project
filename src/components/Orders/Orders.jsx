import React, { useState } from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Cart from "../Cart/Cart";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Orders = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }
  const saveCart = useLoaderData();
  console.log(saveCart);
  const [cart, setCart] = useState(saveCart);

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((phone) => phone.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="grid lg:grid-cols-4 ">
      <div className="grid col-span-3 gap-4 lg:px-5 mx-auto lg:grid-cols-1 my-12 lg:w-[75%]">
        {cart.map((phone) => (
          <ReviewItem
            key={phone.id}
            phone={phone}
            handleRemoveFromCart={handleRemoveFromCart}
          ></ReviewItem>
        ))}
      </div>

      <div className="col-span-1 cart my-4 rounded">
        <Cart handleClearCart={handleClearCart} cart={cart}>
          <Link to="/checkout">
            <button className="flex justify-between font-semibold text-white w-[75%] mx-auto my-5 bg-yellow-800 rounded-md text-xl p-2 items-center">
              Proceed Checkout
              <ArrowRightIcon className="h-6 w-6 text-white" />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;

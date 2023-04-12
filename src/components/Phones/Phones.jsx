import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { toast } from "react-toastify";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import PhoneDetails from "../PhoneDetails/PhoneDetails";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { CreditCardIcon } from "@heroicons/react/24/solid";
import "./Phones.css";

const Phones = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }
  const phones = useLoaderData();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getShoppingCart();
    let savedCart = [];
    for (const id in storedCart) {
      const addedPhone = phones.find((ph) => ph.id === id);
      if (addedPhone) {
        const quantity = storedCart[id];
        addedPhone.quantity = quantity;
        savedCart.push(addedPhone);
      }
    }
    // step 5 set the cart
    setCart(savedCart);
  }, [phones]);

  const handleAddToCart = (phone) => {
    let newCart = [];
    const exist = cart.find((ph) => ph.id === phone.id);
    if (!exist) {
      phone.quantity = 1;
      newCart = [...cart, phone];
      toast.success("Add this Item Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter((ph) => ph.id !== phone.id);
      newCart = [...remaining, exist];
      toast.success("You Have Already Add this Item", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    setCart(newCart);
    addToDb(phone.id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="grid lg:grid-cols-4 ">
      <div className="grid col-span-3 gap-4 my-4 px-5 mx-auto lg:grid-cols-3">
        {phones.map((phone) => (
          <PhoneDetails
            key={phone.id}
            phone={phone}
            handleAddToCart={handleAddToCart}
          ></PhoneDetails>
        ))}
      </div>
      <div className="col-span-1 my-4 cart rounded">
        <Cart handleClearCart={handleClearCart} cart={cart}>
          <Link to="/orders">
            <button className="flex justify-between font-semibold text-white w-[75%] mx-auto my-5 bg-yellow-800 rounded-md text-xl p-2 items-center">
              Review Order
              <CreditCardIcon className="h-6 w-6 text-white" />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Phones;

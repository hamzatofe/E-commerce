import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import CartContents from "../cart/CartContents";
import { useNavigate } from "react-router-dom";

const CartDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navigate = useNavigate()
  const handleCheckout = () => { 
    toggleCartDrawer()
    navigate('/checkout')
   }
  return (
    <>
      <button
        onClick={toggleCartDrawer}
        className="scale-100 hover:scale-110 transition duration-200 text-lg text-gray-600 hover:text-gray-800"
      >
        <HiOutlineShoppingBag />
        <p className="absolute -top-[1px] -right-2 bg-gray-600  w-5 rounded text-xs text-white">
          3
        </p>
      </button>
      <div
        className={`fixed right-0 w-1/2 lg:w-1/4 md:w-1/4 h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 transform transition-transform duration-300  z-50 ${
          drawerOpen ? "translate-x-0 transform-transition duration-300" : " translate-x-full hidden"
        }`}
      >
        <div className="flex justify-end 0-4 ">
          <button onClick={toggleCartDrawer}>
            <IoMdClose className="h-6 w-6 mr-2 text-gray-600 hover:text-red-600 hover:rotate-180 transition duration-200" />
          </button>
        </div>
        <div className="felx-grow p-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4 text-white">Your Cart</h2>

          <CartContents />
        </div>

        <div className="p-4 bottom-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
          <button onClick={handleCheckout} className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-200 shadow-xl">
            Checkout
          </button>
          <p className="text-sm tracking-tighter text-gray-600 mt-2 text-center">
            shipping, taxes, and discount codes calculated at checkout.
          </p>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;

import { useState } from "react";
const CartSidebar = ({ cartItems, clearCart }) => {
  let totalPrice = cartItems.reduce((acc, curItem) => acc + curItem.Price, 0);
  return (
    <div className="bg-white rounded-lg shadow-lg h-[calc(100vh-140px)] sticky top-24 border border-gray-100 flex flex-col">
      <div className=" flex justify-between p-4 border-b border-gray-100">
        <h2 className="text-lg font-bold text-gray-800">Your Cart</h2>
        <button
          onClick={clearCart}
          className="text-black border p-1  rounded-lg hover:border-red-500 py-0 hover:text-red-500 bg-white cursor-pointer"
        >
          Clear Cart{" "}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center justify-center text-center">
        {cartItems.length === 0 ? (
          <>
            <div className="mb-4 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="h-24 w-24 fill-gray-300 mx-auto opacity-50"
              >
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
              <div className="absolute -bottom-2 -right-2 bg-red-100 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            <p className="text-gray-500 text-sm max-w-[200px]">
              Your cart is empty! Add some delicious food items and satisfy your
              cravings. 😋
            </p>
          </>
        ) : (
          <div className="w-full">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between py-2 border-b border-gray-50 text-sm"
              >
                <span>{item.ItemName}</span>
                <span className="font-semibold">Rs.{item.Price}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="p-4 border-t border-gray-100 bg-gray-50 rounded-b-lg">
        <div className="flex flex-col justify-between ">
          <div className="flex flex-row justify-between">
            <span className="font-semibold">Total Price : Rs.{totalPrice}</span>
          </div>
          <button className="mt-2 font-semibold border rounded-lg p-1 mb-2 hover:bg-black\90 bg-black text-white cursor-pointer">
            Proceed to Checkout
          </button>
        </div>
        <p className="text-center text-xs text-gray-400">
          Food Ordering System By{" "}
          <span className="font-bold text-[#009688]">FOOD CHOW</span>
        </p>
      </div>
    </div>
  );
};

export default CartSidebar;

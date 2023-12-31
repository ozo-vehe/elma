import PropTypes from "prop-types";
import Cart from "./Cart";
import { useState } from "react";

export default function CartList({ cart, remove }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <img
        className="icon"
        src="https://img.icons8.com/material-outlined/24/null/shopping-cart--v1.png"
        alt="shopping-cart"
        onClick={() => {
          setShow(!show);
        }}
      />
      {show && (
        <div className="productCart rounded-md flex flex-col absolute right-0 border w-400 pb-8">
          <h1 className="text-2xl relative font-bold underline mb-6">
            Cart
            <img
              className="w-4 h-4 absolute right-2 top-2"
              src="https://img.icons8.com/ios-glyphs/30/delete-sign.png"
              alt="delete-sign"
              onClick={() => {
                setShow(!show);
              }}
            />
          </h1>
          {cart.map((product) => (
            <Cart
              key={product.id}
              cart={product}
              remove={(id) => remove({ id: id })}
            />
          ))}

          <div className="mt-4">
            <p className="oswald text-xl font-bold m-2">
              Total Items: {cart.length}
            </p>
            <p className="oswald text-xl mb-4 font-bold">
              Total: ${cart.reduce((acc, curr) => acc + curr.price * curr.booked, 0)}.00
            </p>
            <button className="bg-custom-blue text-white rounded-full p-4 w-full">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

CartList.propTypes = {
  cart: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired,
};

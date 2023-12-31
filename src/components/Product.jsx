import PropTypes from "prop-types";
// import { addToCart } from "../utils/cart";

export default function Product({ product }) {
  const { name, image } = product;

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart === null) {
      cart = [];
      cart.push({ ...product, booked: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      if (cart.some((item) => item.id === product.id)) {
        const index = cart.findIndex((item) => item.id === product.id);
        cart[index].booked += 1;
        localStorage.setItem("cart", JSON.stringify(cart));
      } else {
        cart.push({ ...product, booked: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }
    console.log(cart);
  };

  return (
    <div className="group product w-250 mb-8">
      <div className="relative">
        <img className="w-full" src={image} alt={name} />
        <div className="z-50 flex items-center justify-center absolute bottom-0 bg-white/70 w-full h-24 translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute flex gap-x-4 z-10">
            <img
              className="icon p-3 w-10 h-10 bg-custom-blue/80 hover:bg-custom-blue duration-350 transition-all"
              src="https://img.icons8.com/material-outlined/24/ffffff/shopping-cart--v1.png"
              alt="shopping-cart"
              onClick={() => addToCart(product)}
            />
            <img
              className="icon p-3 w-10 h-10 bg-custom-blue/80 hover:bg-custom-blue duration-350 transition-all"
              src="https://img.icons8.com/ios/50/ffffff/hearts--v1.png"
              alt="favourite"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-4">
        <p className="capitalize text-custom-btn-gray">{product.category}</p>
        <h3 className="group-hover:text-custom-blue transition-all duration-350 capitalize font-bold my-2">
          <a href="#">{product.name}</a>
        </h3>
        <span className="capitalize text-custom-btn-gray">
          ${product.price}.00
        </span>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

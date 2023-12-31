import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import CartList from "./CartList";

export default function Navbar() {
  const [cart, setCart] = useState([]);
  const [searchText, setSearchText] = useState(null);

  const setSearch = () => {
    console.log(searchText);
  };
  
  const removeCart = (id) => {
    const {id: productId} = id;
    const cart = JSON.parse(localStorage.getItem("cart"));
    const newCart = cart.filter((product) => product.id !== productId);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  useEffect(() => {
    const setCartData = async () => {
      const cart = JSON.parse(localStorage.getItem("cart"));
      cart && setCart(cart);
    };
    setCartData();
  }, []);

  return (
    <nav className="flex items-center justify-between">
      <a className="w-32 flex items-center gap-2" href="#">
        <img className="" src={logo} alt="Logo" />
        <p className="text-3xl font-bold">Okrika</p>
      </a>
      <div
        className="text-black flex items-center justify-center"
        id="navbarSupportedContent"
      >
        <ul className="flex items-start justify-between w-full gap-x-10">
          <li className="hover:text-custom-blue">
            <a className="" href="#">
              Home
            </a>
          </li>
          <li className="">
            <a href="#" className="hover:text-custom-blue">
              Shop
            </a>
          </li>
          <li className="">
            <a href="#" className="hover:text-custom-blue">
              Blog
            </a>
          </li>
          <li className="">
            <a href="#" className="hover:text-custom-blue">
              Pages
            </a>
          </li>
          <li className="hover:text-custom-blue">
            <a className="" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center">
        <ul className="flex items-center justify-center gap-x-4">
          <li className="flex border rounded-md overflow-hidden pr-2 h-9 border-slate-400 w-300">
            <input
              type="text"
              className="border-none outline-none w-full h-full px-2"
              name="search"
              id="Seacrh"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button onClick={setSearch}>
              <img
                className="icon"
                src="https://img.icons8.com/ios/50/null/search--v1.png"
                alt="search"
              />
            </button>
          </li>
          <li className="cart relative">
            <button>
              <CartList cart={cart} remove={removeCart} />
              <span className="text-white text-xs rounded-full bg-custom-blue absolute top-0">
                {cart.length}
              </span>
            </button>{" "}
          </li>
        </ul>
      </div>

      <button className="border border-gray-100 hover:border-blue-500 rounded-3xl transition-all duration-500 px-8 py-2">
        {" "}
        Buy Now{" "}
      </button>
    </nav>
  );
}

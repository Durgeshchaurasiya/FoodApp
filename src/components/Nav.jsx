import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { dataContext } from "../context/userContext";
import { FoodItems } from "../FoodItems";
import { useSelector } from "react-redux";

function Nav() {
  let { input, setInput, cate, setcate, showCart, setShowCart } =
    useContext(dataContext);

  useEffect(() => {
    let newList = FoodItems.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setcate(newList);
  }, [input]);

  // cart function
  let items = useSelector((state) => state.cart);

  return (
    <div className="w-full h-[100px]  flex justify-between items-center px-5 md:px-8">
      {/* icon */}
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center text-[30px] text-green-600 rounded-[10px] shadow-xl">
        <MdFastfood />
      </div>
      {/* search bar */}
      <form
        className=" w-[40%] md:w-[70%]  flex justify-center items-center bg-white  gap-[10px] rounded-[10px] shadow-xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <FaSearch className=" text-[15px]" />
        <input
          type="text"
          placeholder="Search Items.."
          className="h-[40px] w-[90%]  outline-none "
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
      {/* cart */}
      <div
        className="w-[60px] h-[60px] bg-white flex justify-center items-center  rounded-[10px] shadow-xl relative cursor-pointer"
        onClick={() => {
          setShowCart(true);
        }}
      >
        <span className="absolute top-0 text-green-600 font-bold">
          {items.length}
        </span>
        <FaShoppingCart className="text-[30px] text-green-600 " />
      </div>
    </div>
  );
}

export default Nav;

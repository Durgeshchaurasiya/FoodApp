import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import categories from "../categories";
import Cards from "../components/Cards";
import { FoodItems } from "../FoodItems";
import { dataContext } from "../context/userContext";
import { RxCross2 } from "react-icons/rx";
import ItemAdded from "../components/ItemAdded";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Footer from "../components/Footer";

function Home() {
  let { cate, setcate, input, showCart, setShowCart } = useContext(dataContext);

  function filter(category) {
    if (category.toLowerCase() === "all") {
      setcate(FoodItems);
    } else {
      const newList = FoodItems.filter(
        (item) => item.food_category.toLowerCase() === category.toLowerCase()
      );
      setcate(newList);
    }
  }

  // adding food item to cart
  let items = useSelector((state) => state.cart);

  // calculating total price
  let subtotal = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  let deliveryCharge = 30;
  let taxes = (subtotal * 0.5) / 100;
  let total = Math.floor(subtotal + deliveryCharge + taxes);

  return (
    <div className="bg-slate-200 w-full min-h-[100vh]">
      <Nav />

      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-8 w-full">
          {categories.map((item) => (
            <div
              className="w-[150px] h-[150px] bg-white flex flex-col justify-center items-center font-semibold rounded-md shadow-xl hover:bg-green-200 cursor-pointer"
              onClick={() => filter(item.name)}
            >
              <div>{item.icon}</div>
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      ) : null}

      <div className="w-full flex flex-wrap gap-5 justify-center">
        {cate.length > 1 ? (
          cate.map((item) => (
            <Cards
              key={item.id}
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              id={item.id}
              type={item.food_type}
            />
          ))
        ) : (
          <div className="text-2xl text-center font-bold mt-10 text-green-600">
            No dish Found
          </div>
        )}
      </div>

      {/* sidebar */}
      <div
        className={`w-full md:w-[40%] h-[100%] bg-white fixed top-0 right-0 shadow-xl transition-all duration-600 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="w-full flex justify-between p-5 ">
          <span className="text-xl text-green-600 font-semibold">
            Order Items
          </span>
          <RxCross2
            className="text-2xl text-green-600 font-bold hover:text-red-600 cursor-pointer"
            onClick={() => {
              setShowCart(false);
            }}
          />
        </header>
        {/* adding food items to sidebar */}
        {items.length > 0 ? (
          <>
            <div className="w-full  flex flex-col gap-5">
              {items.map((item) => (
                <ItemAdded
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                  qty={item.qty}
                  className="mt-8"
                />
              ))}
            </div>

            {/* price calculation */}
            <div className="w-full border-t-2 border-b-2 border-gray-600 mt-8 flex flex-col gap-4 p-8">
              <div className="w-full flex justify-between items-center">
                <span className="text-xl font-semibold text-green-600">
                  Subtotal
                </span>
                <span className="text-xl font-semibold text-green-600">
                  Rs. {subtotal} /-
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-xl font-semibold text-green-600">
                  DeliveryCharges
                </span>
                <span className="text-xl font-semibold text-green-600">
                  Rs. {deliveryCharge} /-
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-xl font-semibold text-green-600">
                  Taxes
                </span>
                <span className="text-xl font-semibold text-green-600">
                  Rs. {taxes} /-
                </span>
              </div>
            </div>
            <div className="w-full flex justify-between items-center mt-4">
              <span className="text-xl font-semibold text-green-600 px-8">
                Total
              </span>
              <span className="text-xl font-semibold text-green-600 px-8">
                Rs. {total} /-
              </span>
            </div>
            <div className="text-[18px] mx-3">
              <button
                className="w-full h-[35px] bg-green-300 rounded-lg hover:bg-green-600 cursor-pointer mt-5"
                onClick={() => toast.success("Order Placed")}
              >
                Place Order
              </button>
            </div>
          </>
        ) : (
          <div className="text-2xl text-center font-bold mt-10 text-green-600">
            Empty Cart
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
}

export default Home;

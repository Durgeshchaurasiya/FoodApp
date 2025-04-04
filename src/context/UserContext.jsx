import React, { createContext, useState } from "react";
import { FoodItems } from "../FoodItems";

export const dataContext = createContext();
function UserContext({ children }) {
  let [cate, setcate] = useState(FoodItems);
  let [input, setInput] = useState("");
  let [showCart, setShowCart] = useState(false);
  let data = {
    input,
    setInput,
    cate,
    setcate,
    showCart,
    setShowCart,
  };
  return (
    <div>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </div>
  );
}

export default UserContext;

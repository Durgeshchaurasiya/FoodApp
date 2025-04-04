import React from "react";
import image1 from "../assets/images/image1.avif";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { decreaseQty, increaseQty, RemoveItem } from "../redux/cartSlice";
import { toast } from "react-toastify";
function ItemAdded({ name, id, price, image, qty }) {
  let dispatch = useDispatch();
  return (
    <div className="w-full h-[100px] p-2 shadow-lg flex justify-between">
      <div className="w-[60%] h-full flex gap-2">
        <div className="w-[60%] h-full overflow-hidden rounded-lg">
          <img src={image} alt="" className="object-cover" />
        </div>

        <div className="w-[40%] h-full flex flex-col gap-3 justify-center items-center">
          <div className="text-lg font-semibold">{name}</div>

          <div className="w-[100%] h-[40px] flex border-[2px] border-green-800 rounded-lg font-semibold">
            <button
              className="w-[30%] h-full flex justify-center items-center hover:bg-red-400 rounded"
              onClick={() => {
                qty > 1 ? dispatch(decreaseQty({ id: id })) : 1;
              }}
            >
              -
            </button>
            <span className="w-[40%] h-full flex justify-center items-center">
              {qty}
            </span>
            <button
              className="w-[30%] h-full flex justify-center items-center hover:bg-green-400 rounded"
              onClick={() => {
                dispatch(increaseQty({ id: id }));
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-6">
        <span className="text-xl text-green-400 font-semibold">{price}</span>
        <AiOutlineDelete
          className="w-[30px] h-[40px] text-red-400 cursor-pointer"
          onClick={() => {
            dispatch(RemoveItem(id));
            toast.error("Item Removed");
          }}
        />
      </div>
    </div>
  );
}

export default ItemAdded;

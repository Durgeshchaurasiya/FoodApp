import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";
import { toast } from "react-toastify";
function Cards({ name, image, id, price, type }) {
  let dispatch = useDispatch();
  return (
    <div className="w-[300px] h-[400px] bg-white p-[10px] rounded-lg my-[20px] flex flex-col gap-3 hover:border-2 border-green-400 ">
      <div className="w-[100%] h-[60%] overflow-hidden rounded-lg">
        <img src={image} alt="" className="w-full h-60" />
      </div>
      <div className="text-2xl font-semibold ">{name}</div>
      <div className="w-full flex justify-between items-center text-green-600 text-[17px] font-bold">
        <div>Rs. {price} /-</div>
        <div className="flex gap-2 items-center">
          {type === "non_veg" ? <GiChickenOven /> : <LuLeafyGreen />}
          <span>{type}</span>
        </div>
      </div>
      <div className="text-[18px]">
        <button
          className="w-full h-[35px] bg-green-300 rounded-lg hover:bg-green-600 cursor-pointer"
          onClick={() => {
            dispatch(
              AddItem({
                id: id,
                name: name,
                price: price,
                image: image,
                qty: 1,
              })
            );
            toast.success("Item Added");
          }}
        >
          Add to dish
        </button>
      </div>
    </div>
  );
}

export default Cards;

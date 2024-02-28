import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/CartSlice";

const FoodLists = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    localStorage.setItem(item.card.info.id, JSON.stringify(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="details border-gray-400 border-b-[1px]"
        >
          <div className="w-2/3">
            <div className="flex flex-col mb-2 font-semibold">
              <span>{item?.card?.info?.name}</span>
              <span>Rs{item?.card?.info?.price / 100}</span>
            </div>
            <div className="mb-3 font-light">
              <p>{item?.card?.info?.description}</p>
            </div>
          </div>
          <div className="w-[150px] py-1">
            <div className=" absolute ">
              <button
                className="bg-black text-white px-2 py-1 mx-12  rounded-lg"
                
                onClick={()=>{handleAddItem(item)}}
                
              >
                Add +
              </button>
            </div>

            <img className="w-fit" src={CDN_URL + item?.card?.info?.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodLists;

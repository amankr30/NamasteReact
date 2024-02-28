import { clearCart, removeItem } from "../utils/CartSlice";
import FoodLists from "./FoodLists";
import { useDispatch, useSelector } from "react-redux";


const Cart = () => {
  const CartItems = useSelector((store) => store.Cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="heading text-center font-bold  text-2xl">
        <div className="my-3">Cart</div>
        <button
          className="bg-black text-white text-lg px-2 py-1 mb-3 w-fit rounded-xl text-center cursor-pointer "
          onClick={() => handleRemoveItem()}
        >
          Clear Cart
        </button>
      </div>
      <div className=" w-1/2 m-auto">
        <div>
          <FoodLists items={CartItems} />
        </div>
      </div>
    </>
  );
};

export default Cart;

import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginbtn, setLogInBtn] = useState("Log In");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //suscribing to the store using selector hook
  const CartItems = useSelector((store) => store.Cart.items);
  console.log(CartItems);

  return (
    <div className="header bg-[#ffd9d9] flex justify-between items-center px-5 mb-3 shadow-lg">
      <div className="logo w-[10%] cursor-pointer">
        <img src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul className="list-items flex gap-5 text-lg cursor-pointer ">
          <li>{onlineStatus ? "Online:🟢" : "Offline:🔴"};</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Countact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <button
              className="login hover:bg-pink-300  bg-[#ffd9d9] text-black rounded-xl px-2"
              onClick={() => {
                loginbtn === "Log In"
                  ? setLogInBtn("Log Out")
                  : setLogInBtn("Log In");
              }}
            >
              {loginbtn}
            </button>
          </li>
          <li>
            <Link to="/cart">CART ({CartItems.length} items)</Link>
          </li>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

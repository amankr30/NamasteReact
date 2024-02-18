import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginbtn, setLogInBtn] = useState("Log In");
  const onlineStatus=useOnlineStatus();

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul className="list-item">
          <li>
            {onlineStatus ? "Online:🟢" : "Offline:🔴"};
          </li>
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
              className="login"
              onClick={() => {
                loginbtn === "Log In"
                  ? setLogInBtn("Log Out")
                  : setLogInBtn("Log In");
              }}
            >
              {loginbtn}
            </button>
          </li>
          <li>CART</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

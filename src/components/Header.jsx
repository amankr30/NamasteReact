import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loginbtn, setLogInBtn] = useState("Log In");

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul className="list-item">
          <li>Home</li>
          <li>About Us</li>
          <li>Countact Us</li>
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

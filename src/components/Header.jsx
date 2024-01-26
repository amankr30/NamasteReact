import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
            <li>CART</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
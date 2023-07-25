import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  //let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");

  console.log("header render");

  // if no dependecy array => useEffect is called on every render.
  // if dependecy array is empty = [] => useEffect is called initial render(just once).
  // if dependency array is [btnNameReact] => called every time btnNameReact is updated.
  useEffect(() => {
    console.log("useEffect is called");
  }, [btnNameReact]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              //console.log(btnNameReact);
              // btnName = "Logout";
              // console.log(btnName);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;

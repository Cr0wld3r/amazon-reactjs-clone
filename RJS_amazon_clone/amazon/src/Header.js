import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import { useNavigate } from "react-router-dom";

function Header() {
  let authToken = sessionStorage.getItem("Auth Token");
  let user = firebase.auth().currentUser;
  const navigate = useNavigate();
  const handleSignOut = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };

  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_option_lineOne">{user?.email}</span>
          <Link to="/login">
            <div onClick={handleSignOut}>
              <span className="header_option_lineTwo">
                {authToken ? "Sign out" : "Sign in"}
              </span>
            </div>
          </Link>
        </div>
        <div className="header_option">
          <span className="header_option_lineOne">Returns</span>
          <span className="header_option_lineTwo">& Order</span>
        </div>
        <div className="header_option">
          <span className="header_option_lineOne">Your</span>
          <span className="header_option_lineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_basketOption">
            <ShoppingBasketIcon />
            <span className="header_option_lineTwo header_basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
  return (
    <div className="footer">
      <div className="backToTopButton" onClick={scrollToTop}>
        <span>Back To Top</span>
      </div>

      <div className="detail">
        <div className="detail-table">
          <div>
            <div className="t-head">Get to know us</div>
            <ul>
              <li>Careers</li>
              <li>Blogs</li>
              <li>About us</li>
              <li>Investors Relations</li>
              <li>Amazon Advices</li>
              <li>Amazon Science</li>
            </ul>
          </div>

          <div>
            <div className="t-head">Make Money with Us</div>
            <ul>
              <li>Sell products on Amazon</li>
              <li>Sell on Amazon Business</li>
              <li>Sell apps on Amazon</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Products</li>
              <li>Self-Publish with Us</li>
              <li>Host an Amazon Hub</li>
              <li>›See More Make Money with Us</li>
            </ul>
          </div>

          <div>
            <div className="t-head">Amazon Payment Products</div>
            <ul>
              <li>Amazon Business Card</li>
              <li>Shop with Points</li>
              <li>Reload Your Balance</li>
              <li>Amazon Currency Converter</li>
            </ul>
          </div>

          <div>
            <div className="t-head">Let Us Help You</div>
            <ul>
              <li>Amazon and COVID-19</li>
              <li>Your Account</li>
              <li>Your Orders</li>
              <li>Shipping Rates & Policies</li>
              <li>Returns & Replacements</li>
              <li>Manage Your Content and Devices</li>
              <li>Amazon Assistant</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="copyRight">
        <span>&copy; Inspired by many sources</span>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Total from "./Total.js";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  let user = firebase.auth().currentUser;

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_left_ad"
          src="https://m.media-amazon.com/images/G/01/img18/home/registry/SavileRow_Registry_D._CB1198675309_.jpg"
        />
        <h3>Hello {user?.email}!</h3>
        <h2 className="checkout_left_title">This Is Your Shopping Cart</h2>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>

      <div className="checkout_right">
        <Total />
      </div>
    </div>
  );
}

export default Checkout;

import React from "react";
import "./Product.css";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useStateValue } from "./StateProvider";

function Product({ id, name, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const hanldeAddToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        name: name,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{name}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_starRating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} />
      <button onClick={hanldeAddToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;

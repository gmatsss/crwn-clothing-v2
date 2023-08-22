import { useContext } from "react";

import "./checkout-item.styles.scss";
import { Cartcontext } from "../../context/cartcontext";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { addtocart, removeFromCart, clearItemFromCart } =
    useContext(Cartcontext);
  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addtocart(cartItem);
  const removeItemHandler = () => removeFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

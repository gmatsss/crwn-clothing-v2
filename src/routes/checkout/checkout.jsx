import "./checkout.scss";
import { useContext } from "react";

import { Cartcontext } from "../../context/cartcontext";
import CheckoutItem from "../../components/checkout-item/checkout-item";

const Checkout = () => {
  const { CartItems, cartTotal } = useContext(Cartcontext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {CartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: {cartTotal}</div>
    </div>
  );
};

export default Checkout;

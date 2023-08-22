import Button from "../button/button";
import CartItem from "../cart-item/cart-item";

import { Cartcontext } from "../../context/cartcontext";
import "./cart-dropdown.scss";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const navigate = useNavigate();

  const CheckoutHandler = () => {
    navigate("/checkout");
  };
  const { CartItems } = useContext(Cartcontext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {CartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>

      <Button onClick={CheckoutHandler}>Check out</Button>
    </div>
  );
};

export default CartDropdown;

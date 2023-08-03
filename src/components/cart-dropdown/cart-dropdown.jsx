import Button from "../button/button";
import CartItem from "../cart-item/cart-item";

import { Cartcontext } from "../../context/cartcontext";
import "./cart-dropdown.scss";
import { useContext } from "react";

const CartDropdown = () => {
  const { CartItems } = useContext(Cartcontext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {CartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>

      <Button>Go to Check out</Button>
    </div>
  );
};

export default CartDropdown;

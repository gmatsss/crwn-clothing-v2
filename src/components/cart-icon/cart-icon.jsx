import { useContext } from "react";

import { ReactComponent as Shopicon } from "../../assets/shopping-bag.svg";

import { Cartcontext } from "../../context/cartcontext";

import "./cart-icon.scss";

const CartIcon = () => {
  const { CartOpen, setCartOpen, cartCount } = useContext(Cartcontext);

  const togglecart = () => setCartOpen(!CartOpen);
  return (
    <div className="cart-icon-container" onClick={togglecart}>
      <Shopicon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;

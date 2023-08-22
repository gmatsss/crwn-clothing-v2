import { createContext, useEffect, useState } from "react";

const addCartItem = (thisCartItem, thisProductAdd) => {
  //find the product that is already exist in the card
  const existingProduct = thisCartItem.find(
    (cartItem) => cartItem.id === thisProductAdd.id
  );

  // if exist product it will only add the quantity
  if (existingProduct) {
    return thisCartItem.map((cartItem) =>
      cartItem.id === thisProductAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //return new array of cartitem and
  // with new product that is have quantity 1
  return [...thisCartItem, { ...thisProductAdd, quantity: 1 }];
};

export const Cartcontext = createContext({
  //functions of the context
  CartOpen: false,
  setCartOpen: () => {},

  CartItems: [],
  addItemtoCart: () => {},

  cartCount: 0,
});

export const Cartprovider = ({ children }) => {
  const [cartTotal, setCartTotal] = useState(0);

  //cart function open and close
  const [CartOpen, setCartOpen] = useState(false);

  //cart items product holder state
  const [CartItems, setCartItems] = useState([]);

  //trigger event to add product to cart items
  const addtocart = (productadd) => {
    setCartItems(addCartItem(CartItems, productadd));
  };

  // cart count
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCount = CartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCount);
  }, [CartItems]);

  useEffect(() => {
    const total = CartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(total);
  }, [CartItems]);

  const removeFromCart = (productRemove) => {
    const existingProduct = CartItems.find(
      (cartItem) => cartItem.id === productRemove.id
    );

    if (existingProduct && existingProduct.quantity > 1) {
      return setCartItems(
        CartItems.map((cartItem) =>
          cartItem.id === productRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    } else if (existingProduct && existingProduct.quantity === 1) {
      return setCartItems(
        CartItems.filter((cartItem) => cartItem.id !== productRemove.id)
      );
    }
  };

  const clearItemFromCart = (productToRemove) => {
    setCartItems(
      CartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
    );
  };

  const value = {
    CartOpen,
    setCartOpen,
    addtocart,
    removeFromCart,
    CartItems,
    cartCount,
    clearItemFromCart, // Add this line
    cartTotal, // Add this line
  };
  return <Cartcontext.Provider value={value}>{children}</Cartcontext.Provider>;
};

import { createContext, useState } from "react";

export const Cartcontext = createContext({
  CartOpen: false,
  setCartOpen: () => {},
});

export const Cartprovider = ({ children }) => {
  const [CartOpen, setCartOpen] = useState(false);
  const value = { CartOpen, setCartOpen };
  return <Cartcontext.Provider value={value}>{children}</Cartcontext.Provider>;
};

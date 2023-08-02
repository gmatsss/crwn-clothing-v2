import { createContext, useState } from "react";

import Product_DATA from "../shopdata.json";

export const Productcontext = createContext({
  products: [],
});

export const Productprovider = ({ children }) => {
  const [product, setProduct] = useState(Product_DATA);
  const value = { product };
  return (
    <Productcontext.Provider value={value}>{children}</Productcontext.Provider>
  );
};

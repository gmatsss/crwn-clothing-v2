import { useContext } from "react";

import { Productcontext } from "../../context/productscontext";
import ProcuctCard from "../../components/product-card/product-card";

import "./shop.scss";

const Shop = () => {
  const { product } = useContext(Productcontext);
  return (
    <div className="products-container">
      {product.map((product) => (
        //can be a return method
        <ProcuctCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;

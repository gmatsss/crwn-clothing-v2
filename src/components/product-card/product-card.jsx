import "./product-card.scss";
import Button from "../button/button";
import { Cartcontext } from "../../context/cartcontext";
import { useContext } from "react";

const ProcuctCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addtocart } = useContext(Cartcontext);
  const addproducttocart = () => addtocart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <Button buttontype={"inverted"} onClick={addproducttocart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProcuctCard;

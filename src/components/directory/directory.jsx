import CategoryItem from "../../components/category-item/category-item.jsx";
import "./directory.scss";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;

import ProductsItem from "../productsItem/ProductsItem";
import style from "./Products.module.css";
import { productsData } from "../../services";
import { useEffect, useState } from "react";
import ProductModal from "../modals/productModal/ProductModal";

const Products = ({ data }) => {
  const [products, setProducts] = useState([]);
  const [add, setAdd] = useState(false);
  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setProducts(
        productsData.filter((item) => {
          return (
            item.categoryId == data.categoryId &&
            item.subCategoryId == data.subCategoryId
          );
        })
      );
    }

  }, [data,add]);

  const isAdded = (data) => {
    setAdd(data);
    
  };
  return (
    <div className={style.ProductsBox}>
      {products.map((item) => {
        return <ProductsItem key={item.id} item={item} />;
      })}
      <ProductModal added={isAdded} />
    </div>
  );
};
export default Products;

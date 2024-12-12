import styles from "./ProductsItem.module.css";
let ProductsItem = ({ item }) => {
  return (
    <div className={styles.itemBox}>
      <img src={item.img} alt={item.title} />
      <div>
        <p>{item.artikul}</p>
        <p>{item.title}</p>
        <p>{item.price}</p>
      </div>
    </div>
  );
};
export default ProductsItem;

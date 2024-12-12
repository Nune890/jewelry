import styles from "./CategoryItem.module.css";
const CategoryItem = ({ item, selectedId, onselect, ...props }) => {

  return (
    <button
      {...props}
      className={styles.CategoryItem}
      onClick={() => onselect(item)}
      style={{
        border: selectedId == item.id ? "2px solid" : "none",
        borderColor: selectedId == item.id ? "blue" : "unset",
      }}
    >
      <img src={item.img} alt={item.title} />
      <p>{item.title}</p>
    </button>
  );
};
export default CategoryItem;

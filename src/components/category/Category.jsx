import styles from "./Category.module.css";
import { SlUserFemale } from "react-icons/sl";
import { SlUser } from "react-icons/sl";
import CategoryItem from "../categoryItem/CategoryItem";
import { categoriesData } from "../../services";
import { useEffect, useState } from "react";
import CategoryModal from "../modals/modalCategory/CategoryModal";
import SubCategory from "../subCategory/SubCategory";

const Category = ({ selectedData, isHide}) => {
  const [type, setType] = useState(1);
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);

  const addCategory = (category) => {
    setData((old) => [...old, category]);
    categoriesData.push(category);
    if (category.genderType == 1) {
      setType(1);
    } else {
      setType(0);
    }
  };

  useEffect(() => {
    let filtered = categoriesData.filter((el) => el.genderType == type);
    setData(filtered);
    setSelected(filtered[0]);
  }, [type]);

  const getSelectedItem = (item) => {
    setSelected(item);
  };
  const selectSubId = (id) => {
    selectedData({ categoryId: selected.id, subCategoryId: id });
  };

  return (
    <div>
      <div className={styles.category}>
        <div className={styles.personBox}>
          <button onClick={() => setType(1)}>
            <SlUserFemale style={{ color: type == 1 ? "blue" : "grey" }} />
          </button>
          <button onClick={() => setType(0)}>
            <SlUser style={{ color: type == 0 ? "blue" : "grey" }} />
          </button>
        </div>
        <div className={styles.categoryItemBox}>
          {data.map((item) => {
            return (
              <CategoryItem
                item={item}
                key={item.id}
                selectedId={selected.id}
                onselect={getSelectedItem}
              />
            );
          })}
        </div>
        {!isHide && <CategoryModal add={addCategory} />}
      </div>
      <div className={styles.subCategory}>
        <SubCategory
          data={selected ? selected.subCategory : []}
          selectedCategory={selected}
          selectedSubCategoryId={selectSubId}
          hidden={isHide}
        />
      </div>
    </div>
  );
};
export default Category;

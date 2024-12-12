import { categoriesData } from "../../services";
import ModalSubCategory from "../modals/modalSubCategory/ModalSubCategory";
import styles from "./SubCategory.module.css";
import { useEffect, useState } from "react";

const SubCategory = ({
  data,
  selectedCategory,
  selectedSubCategoryId,
  hidden,
}) => {
  const [select, setSelect] = useState({});
  const [subData, setSubData] = useState([]);
  const selectSubCategory = (el) => {
    setSelect(el);
    selectedSubCategoryId(el.id);
  };
  // const SelectedSubCategoryId= ()=>{
  //   return
  // }

  useEffect(() => {
    if (data.length > 0) {
      setSelect(data[0]);
      selectedSubCategoryId(data[0].id);

      setSubData(data);
    } else {
      setSubData([]);
    }
  }, [data]);

  const getSubCategory = (subCategory) => {
    setSubData((el) => [...el, subCategory]);
    categoriesData.map((el) => {
      if (el.id == selectedCategory.id) {
        el.subCategory.push(subCategory);
      }
    });
    if (subData.length == 0) {
      setSelect(subCategory);
      selectedSubCategoryId(subCategory.id);
    }
  };

  return (
    <div className={styles.subCategoryBox}>
      {subData.map((el) => {
        return (
          <button
            className={styles.subCategoryItemBox}
            onClick={() => selectSubCategory(el)}
            key={el?.id}
            style={{
              borderBottom:
                select?.id == el?.id
                  ? "5px solid blue"
                  : "5px solid rgb(255, 255, 255)",
            }}
          >
            {el?.title}
          </button>
        );
      })}
      {!hidden && (
        <ModalSubCategory
          category={selectedCategory}
          sendSubCategory={getSubCategory}
        />
      )}
    </div>
  );
};
export default SubCategory;

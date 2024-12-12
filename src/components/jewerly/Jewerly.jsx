import { IoSearchSharp } from "react-icons/io5";
import Category from "../category/Category";
import Products from "../products/Products";
import styles from "./Jewerly.module.css";
import { useState } from "react";

const Jewerly = () => {
  const [dataId, setDataId] = useState({});
  const getSelected = (data) => {
    setDataId(data);
  };

  return (
    <div className={styles.box}>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.boxSearch}>
            <input type="text" placeholder="Search" />
            <button className={styles.icon}>
              <IoSearchSharp />
            </button>
          </div>
        </div>
        <Category selectedData={getSelected} />
        <div className={styles.productMainBox}>
          <Products data={dataId} />
        </div>
      </div>
    </div>
  );
};

export default Jewerly;

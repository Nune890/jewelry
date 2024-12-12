import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Category from "../../category/Category";
import styles from "./ProductModal.module.css";
import downloadIcon from "../../../assets/icons/download.png";
import { productsData } from "../../../services";

const ProductModal = ({ added }) => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const [dataId, setDataId] = useState({});
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [artikul, setArtikul] = useState("");
  const [isAdded, setIsAdded] = useState(false);

  const onCloseModal = () => {
    setOpen(false);
    setImage(null);
    setTitle("");
    setPrice("");
    setArtikul("");
  };

  const getSelected = (data) => {
    setDataId(data);
  };
  const insertImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  const add = () => {
    let addedProduct = {
      id: Date.now(),
      categoryId: dataId.categoryId,
      subCategoryId: dataId.subCategoryId,
      title: title,
      artikul: artikul,
      price: +price,
      img: image,
    };
    if (price.trim() != "" && title.trim() != "" && artikul.trim() != "") {
      productsData.push(addedProduct);
      setIsAdded((prev) => !prev);
      setTitle("");
      setPrice("");
      setArtikul("");
      setOpen(false);
      setImage(null);
    }
  };

  useEffect(() => {
    added(isAdded);
  }, [isAdded]);

  

  return (
    <div className={styles.plus}>
      <button onClick={onOpenModal}>
        <FaPlus />
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <div className={styles.modalBox}>
          <Category selectedData={getSelected} isHide={true} />
          <div className={styles.addBox}>
            <div className={styles.imgBox}>
              <label
                htmlFor="file"
                className={styles.img}
                style={{
                  backgroundImage: image
                    ? `url(${image})`
                    : `url(${downloadIcon})`,
                }}
              ></label>
              <input type="file" id="file" onChange={insertImage} />
              {/* <img src="img" alt="img"/> */}
            </div>
            <div className={styles.inputBox}>
              <div className={styles.inputBoxItem}>
                <p>артикул</p>
                <input
                  type="text"
                  onChange={(e) => setArtikul(e.target.value)}
                />
              </div>
              <div className={styles.inputBoxItem}>
                <p>цена </p>
                <input
                  type="number"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className={styles.inputBoxItem}>
                <p>Имя</p>
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
              </div>
            </div>
          </div>
          <div className={styles.addBtnBox}>
            <button onClick={add}>добавить</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default ProductModal;

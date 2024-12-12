import { FaPlus } from "react-icons/fa6";
import styles from "./CategoryModal.module.css";
import { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { SlUser } from "react-icons/sl";
import { SlUserFemale } from "react-icons/sl";
import downloadIcon from "../../../assets/icons/download.png";

const CategoryModal = ({ add }) => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(1);
  const [value, setValue] = useState('');
  const [image, setImage] = useState(null);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setValue("");
    setImage(null);
    setOpen(false);
    setType(1);
  };

  const insertImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  const addCategory = () => {
    let category = {
      id: Date.now(),
      img: image,
      title: value,
      genderType: type,
      subCategory: [],
    };
    if (value.trim() !== "") {
      add(category);
      setValue("");
      setImage(null);
      setOpen(false);
      setType(1);
    }
  };

  return (
    <div className={styles.plus}>
      <button onClick={onOpenModal}>
        <FaPlus />
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <div className={styles.modalBox}>
          <h3>добавить категория</h3>
          <div className={styles.buttonBox}>
            <button onClick={() => setType(1)}>
              <SlUserFemale
                className={styles.icon}
                style={{ color: type == 1 ? "blue" : "grey" }}
              />{" "}
              женский
            </button>
            <button onClick={() => setType(0)}>
              <SlUser
                className={styles.icon}
                style={{ color: type == 0 ? "blue" : "grey" }}
              />{" "}
              мужской
            </button>
          </div>
          <div className={styles.inputBox}>
            <p>категория</p>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
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
            <input id="file" type="file" onChange={insertImage} />
          </div>
          <div className={styles.saveBox}>
            <button onClick={addCategory}>добавить</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default CategoryModal;

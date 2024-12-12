import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import styles from "./ModalSubCategory.module.css";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

const ModalSubCategory = ({ category, sendSubCategory }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const addSubCategory = () => {
    const subCategory = {
      id: Date.now(),
      title: value,
    };
    if(subCategory.title!=""){
      sendSubCategory(subCategory);
      setOpen(false)
      setValue("")
    }else{
      setOpen(false)
      setValue("")
    }
    
  };

  return (
    <div className={styles.plus}>
      <button onClick={onOpenModal}>
        <FaPlus />
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <div className={styles.modalBox}>
          <h3>{category?.title} : добавить подкатегория</h3>
          <div className={styles.inputBox}>
            <p>подкатегория</p>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
          </div>
          <div className={styles.buttonBox}>
            <button onClick={addSubCategory}>добавить</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default ModalSubCategory;

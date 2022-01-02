import React from "react";
import Card from "../../UI/Card";
import styles from "./ModalContent.module.css";

const ModalContent = () => {
  return (
    <Card className={styles.modalContent}>
      <h3>Warning</h3>
      <p>안녕하세요</p>
    </Card>
  );
};

export default ModalContent;

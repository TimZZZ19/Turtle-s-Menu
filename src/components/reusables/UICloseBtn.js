import React from "react";
import styles from "./UICloseBtn.module.css";

export default function UICloseBtn({ onClick }) {
  return (
    <div onClick={onClick} className={styles["close-btn"]}>
      <ion-icon name="close-outline"></ion-icon>
    </div>
  );
}

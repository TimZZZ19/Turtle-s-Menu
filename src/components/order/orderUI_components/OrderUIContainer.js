import React from "react";
import styles from "./OrderUIContainer.module.css";

export default function OrderUIContainer({ closeCart, children }) {
  return (
    <div className={styles["order-UI-container"]}>
      <div onClick={closeCart} className={styles["close-btn"]}>
        <ion-icon name="close-outline"></ion-icon>
      </div>
      {children}
    </div>
  );
}

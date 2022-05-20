import React from "react";
import styles from "./OrderUI.module.css";

export default function OrderUI({ closeCart }) {
  return (
    <div className={styles["order-UI-container"]}>
      <div onClick={closeCart} className={styles["close-btn"]}>
        <ion-icon name="close-outline"></ion-icon>
      </div>
    </div>
  );
}

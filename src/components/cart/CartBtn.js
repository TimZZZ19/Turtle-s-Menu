import React from "react";
import styles from "./CartBtn.module.css";

export default function CartBtn() {
  return (
    <button className={styles["cart-btn"]}>
      <div className={styles["cart-btn__content"]}>
        <span className={styles["cart-icon"]}>
          <ion-icon name="cart"></ion-icon>
        </span>
        <span className={styles["cart-number"]}>8</span>
      </div>
    </button>
  );
}

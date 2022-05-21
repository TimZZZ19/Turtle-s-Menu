import React from "react";
import styles from "./OrderControl.module.css";

export default function OrderControl() {
  return (
    <div className={styles["order-control"]}>
      <div className={styles["qty-control-and-price"]}>
        <div className={styles["qty-control"]}>
          <span className={styles["qty-text"]}>Qty</span>
          <span className={styles["qty-btns"]}>
            <ion-icon name="remove-circle-outline"></ion-icon>
          </span>
          <span className={styles["qty-number"]}>10</span>
          <span className={styles["qty-btns"]}>
            <ion-icon name="add-circle-outline"></ion-icon>
          </span>
        </div>
        <span className={styles.price}>$0.00</span>
      </div>
      <button className={`${styles["add-btn"]} ${styles["add-btn--inactive"]}`}>
        ADD TO CART
      </button>
    </div>
  );
}

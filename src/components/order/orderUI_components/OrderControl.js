import React from "react";
import styles from "./OrderControl.module.css";

export default function OrderControl({ qty, price, addQty, removeQty }) {
  const currentPrice = `$ ${(qty * price).toFixed(2)}`;

  const secondaryClass = qty === 0 ? styles["add-btn--inactive"] : "";

  return (
    <div className={styles["order-control"]}>
      <div className={styles["qty-control-and-price"]}>
        <div className={styles["qty-control"]}>
          <span className={styles["qty-text"]}>Qty :</span>
          <span className={styles["qty-btns"]} onClick={removeQty}>
            <ion-icon name="remove-circle-outline"></ion-icon>
          </span>
          <span className={styles["qty-number"]}>{qty}</span>
          <span className={styles["qty-btns"]} onClick={addQty}>
            <ion-icon name="add-circle-outline"></ion-icon>
          </span>
        </div>
        <span className={styles.price}>{currentPrice}</span>
      </div>
      <button className={`${styles["add-btn"]} ${secondaryClass}`}>
        ADD TO CART
      </button>
    </div>
  );
}

import React from "react";
import styles from "./OrderControl.module.css";

export default React.memo(function OrderControl({ qty, unitPrice, handleQty }) {
  const currentPrice =
    qty > 0 && unitPrice === 0
      ? "Please pick a size"
      : `$ ${(qty * unitPrice).toFixed(2)}`;

  const secondaryClass = qty === 0 ? styles["add-btn--inactive"] : "";

  return (
    <div className={styles["order-control"]}>
      <div className={styles["qty-control-and-price"]}>
        <div className={styles["qty-control"]}>
          <span className={styles["qty-text"]}>Qty :</span>
          <span className={styles["qty-btns"]} onClick={handleQty}>
            <ion-icon id="remove" name="remove-circle-outline"></ion-icon>
          </span>
          <span className={styles["qty-number"]}>{qty}</span>
          <span className={styles["qty-btns"]} onClick={handleQty}>
            <ion-icon id="add" name="add-circle-outline"></ion-icon>
          </span>
        </div>
        <span className={styles.price}>{currentPrice}</span>
      </div>
      <button className={`${styles["add-btn"]} ${secondaryClass}`}>
        ADD TO CART
      </button>
    </div>
  );
});

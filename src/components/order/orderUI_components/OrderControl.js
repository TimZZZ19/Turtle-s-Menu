import React, { useEffect, useState } from "react";
import styles from "./OrderControl.module.css";

export default React.memo(function OrderControl({
  qty,
  category,
  chozenDressing,
  chozenPasta,
  chozenToppings,
  unitPrice,
  handleQty,
}) {
  const [formIsValid, setFormIsValid] = useState(false);
  const currentPrice =
    qty > 0 && unitPrice === 0
      ? "Please pick a size"
      : `$ ${(qty * unitPrice).toFixed(2)}`;

  useEffect(() => {
    if (category === "APPETIZERS" || category === "SANDWICHES") {
      if (qty !== 0) {
        setFormIsValid(true);
      } else {
        setFormIsValid(false);
      }
    }

    if (category === "ENTRÉE SALADS") {
      if (qty !== 0 && chozenDressing !== "--- ---") {
        setFormIsValid(true);
      } else {
        setFormIsValid(false);
      }
    }

    if (category === "PASTA") {
      if (qty !== 0 && chozenPasta !== "--- ---") {
        setFormIsValid(true);
      } else {
        setFormIsValid(false);
      }
    }

    if (category === "PIZZA") {
      if (qty !== 0 && Object.keys(chozenToppings).length !== 0) {
        setFormIsValid(true);
      } else {
        setFormIsValid(false);
      }
    }
  }, [qty, category, chozenDressing, chozenPasta, chozenToppings]);

  const secondaryClass = formIsValid ? "" : styles["add-btn--inactive"];

  return (
    <div className={styles["order-control"]}>
      <div className={styles["qty-control-and-price"]}>
        <div className={styles["qty-control"]}>
          <span className={styles["qty-text"]}>Qty :</span>
          <span className={styles["qty-btns"]} onClick={handleQty}>
            <ion-icon id="remove" name="remove-circle-outline" />
          </span>
          <span className={styles["qty-number"]}>{qty}</span>
          <span className={styles["qty-btns"]} onClick={handleQty}>
            <ion-icon id="add" name="add-circle-outline" />
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

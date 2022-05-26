import React, { useEffect, useState } from "react";
import styles from "./OrderControl.module.css";

export default React.memo(function OrderControl({
  qty,
  formIsValid,
  qtyIsValid,
  addHasBeenClicked,
  changeAddClickStatus,
  addOrderToCart,
  unitPrice,
  handleQty,
}) {
  const [qtySecondaryClass, setQtySecondaryClass] = useState("");
  const [addBtnSecondaryClass, setAddBtnSecondaryClass] = useState(
    `${styles["add-btn--inactive"]}`
  );

  const orderSubtotal =
    qty > 0 && unitPrice === 0
      ? "Please pick a size"
      : `$ ${(qty * unitPrice).toFixed(2)}`;

  // Controls the active status of the add button
  useEffect(() => {
    formIsValid
      ? setAddBtnSecondaryClass("")
      : setAddBtnSecondaryClass(`${styles["add-btn--inactive"]}`);
  }, [formIsValid]);

  // This controls the qty item's validity
  useEffect(() => {
    if (addHasBeenClicked) {
      if (qtyIsValid) {
        setQtySecondaryClass("");
      } else {
        setQtySecondaryClass(`${styles["qty-invalid"]}`);
      }
    }
  }, [addHasBeenClicked, qtyIsValid]);

  // On submitting order to cart
  const onAddingToCart = () => {
    changeAddClickStatus();

    if (formIsValid) {
      console.log("Add to cart");
      addOrderToCart();
    } else {
      console.log("Make invalid inputs red");
    }
  };

  return (
    <div className={styles["order-control"]}>
      <div className={styles["qty-control-and-price"]}>
        <div className={styles["qty-control"]}>
          <span className={`${styles["qty-text"]} ${qtySecondaryClass}`}>
            Qty :
          </span>
          <span className={styles["qty-btns"]} onClick={handleQty}>
            <ion-icon id="remove" name="remove-circle-outline" />
          </span>
          <span className={`${styles["qty-number"]} `}>{qty}</span>
          <span className={styles["qty-btns"]} onClick={handleQty}>
            <ion-icon id="add" name="add-circle-outline" />
          </span>
        </div>
        <span className={styles.price}>{orderSubtotal}</span>
      </div>
      <button
        onClick={onAddingToCart}
        className={`${styles["add-btn"]} ${addBtnSecondaryClass}`}
      >
        ADD TO CART
      </button>
    </div>
  );
});

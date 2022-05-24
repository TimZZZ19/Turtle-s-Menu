import React, { useEffect, useState } from "react";
import styles from "./ToppingItem.module.css";

export default function ToppingItem({ topping, handleChozenToppings }) {
  const [qty, setQty] = useState(0);

  const handleQty = (e) => {
    const action = e.target.getAttribute("id");
    if (action === "add") {
      setQty((prevQty) => prevQty + 1);
    }

    if (action === "remove") {
      setQty((prevQty) => (prevQty > 0 ? prevQty - 1 : 0));
    }
  };

  useEffect(() => {
    handleChozenToppings(topping, qty);
  }, [qty]);

  return (
    <li className={styles["topping-item"]} key={Math.random()}>
      <span>{topping}</span>
      <span className={styles["topping-qty-control"]}>
        <span className={styles["qty-control-btns"]}>
          <ion-icon
            onClick={handleQty}
            id="remove"
            name="remove-circle-outline"
          />
        </span>
        <span className={styles["qty-text"]}>{qty}</span>
        <span className={styles["qty-control-btns"]}>
          <ion-icon onClick={handleQty} id="add" name="add-circle-outline" />
        </span>
      </span>
    </li>
  );
}

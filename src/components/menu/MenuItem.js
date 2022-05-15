import React from "react";
import styles from "./MenuItem.module.css";

export default function MenuItem({ item }) {
  const { name, description, price, prices } = item;

  let priceInfo = <p className={styles["item-price"]}>{price}</p>;
  if (prices) {
    const { small, large } = prices;
    priceInfo = (
      <p className={styles["item-price"]}>
        S{small}&nbsp;&nbsp;&nbsp;L{large}
      </p>
    );
  }

  return (
    <li className={styles["menu-item"]}>
      <h4 className={styles["item-name"]}>{name}</h4>
      {priceInfo}
      <p className={styles["item-description"]}>{description}</p>
    </li>
  );
}

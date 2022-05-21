import React from "react";
import styles from "./OrderUI.module.css";

export default function OrderUI({ closeCart, currentMenuItem }) {
  const { name, description, price, prices, substitutes, extras } =
    currentMenuItem;

  // Image attributes
  const imgSrc = `./images/${name.split(" ").join("")}.jpg`;
  const imgAlt = `image of ${name}`;

  return (
    <div className={styles["order-UI-container"]}>
      {/* Close Button */}
      <div onClick={closeCart} className={styles["close-btn"]}>
        <ion-icon name="close-outline"></ion-icon>
      </div>
      {/* Food Image */}
      <div className={styles["food-img"]}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      {/* Name and Description */}
      <div className={styles["name-and-description"]}>
        <h3 className={styles.name}>{name}</h3>
        <p>{description}</p>
      </div>
      {/* Order Control */}
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
        <button
          className={`${styles["add-btn"]} ${styles["add-btn--inactive"]}`}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <section className={styles.header}>
      <p className={styles["header-title"]}>Turtle's Menu</p>
      <button className={styles["cart-btn"]}>
        <div className={styles["cart-btn__content"]}>
          <span className={styles["cart-icon"]}>
            <ion-icon name="cart"></ion-icon>
          </span>
          <span className={styles["cart-number"]}>8</span>
        </div>
      </button>
    </section>
  );
}

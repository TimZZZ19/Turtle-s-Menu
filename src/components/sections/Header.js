import React, { useContext } from "react";
import styles from "./Header.module.css";
import Button from "../reusables/Button";
import MenuContext from "../../store/MenuContext";

export default function Header() {
  const menuContext = useContext(MenuContext);
  return (
    <section className={styles.header}>
      <p className={styles["header-title"]}>Turtle's Menu</p>
      <Button
        type="button"
        onClick={menuContext.openCartPage}
        privateClass={styles["cart-btn"]}
      >
        <div className={styles["cart-btn__content"]}>
          <span className={styles["cart-icon"]}>
            <ion-icon name="cart"></ion-icon>
          </span>
          <span className={styles["cart-number"]}>
            {menuContext.cartItems.length}
          </span>
        </div>
      </Button>
    </section>
  );
}

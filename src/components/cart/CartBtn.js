import React, { useContext } from "react";
import styles from "./CartBtn.module.css";
import MenuContext from "../../store/MenuContext";

export default function CartBtn() {
  const menuContext = useContext(MenuContext);

  return (
    <button onClick={menuContext.openCartPage} className={styles["cart-btn"]}>
      <div className={styles["cart-btn__content"]}>
        <span className={styles["cart-icon"]}>
          <ion-icon name="cart"></ion-icon>
        </span>
        <span className={styles["cart-number"]}>
          {menuContext.cartItems.length}
        </span>
      </div>
    </button>
  );
}

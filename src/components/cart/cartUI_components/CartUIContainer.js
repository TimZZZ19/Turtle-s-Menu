import React from "react";
import styles from "./CartUIContainer.module.css";
import UICloseBtn from "../../reusables/UICloseBtn";

export default function CartUIContainer({ closeCartPage, children }) {
  return (
    <div className={styles["cart-UI-container"]}>
      <UICloseBtn onClick={closeCartPage} />
      {children}
    </div>
  );
}

import React from "react";
import styles from "./OrderUIContainer.module.css";
import UICloseBtn from "../../reusables/UICloseBtn";

export default function OrderUIContainer({ closeOrderUI, children }) {
  return (
    <div className={styles["order-UI-container"]}>
      <UICloseBtn onClick={closeOrderUI} />
      {children}
    </div>
  );
}

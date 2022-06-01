import React from "react";
import styles from "./EmptyCart.module.css";
import TextBtn from "../reusables/TextBtn";

export default function EmptyCart({
  emptyMsgIsDisplayed,
  hideEmptyMsg,
  emptyCart,
}) {
  if (!emptyMsgIsDisplayed) return null;

  return (
    <div className={styles["blurred-overlay"]}>
      <div className={styles["empty-dialogue-box"]}>
        <p className={styles.text}>Empty Cart ?</p>
        <div className={styles["empty-control"]}>
          <TextBtn privateClass={styles.btns} onClick={hideEmptyMsg}>
            Forget it
          </TextBtn>
          <TextBtn privateClass={styles.btns} onClick={emptyCart}>
            Confirm
          </TextBtn>
        </div>
      </div>
    </div>
  );
}

import React, { useRef } from "react";
import OrderItemContainer from "../../reusables/OrderItemContainer";
import styles from "./SizeOptions.module.css";

export default React.memo(function SizeOptions({ availableSizes, handleSize }) {
  if (availableSizes.length === 0) return;

  const sizes = availableSizes.map((size) => (
    <span key={Math.random()} className={styles.size}>
      <input id={size} onClick={handleSize} type="radio" name="size" />
      <label>{size}</label>
    </span>
  ));

  return (
    <OrderItemContainer>
      <p>Choose your size : </p>
      <div className={styles.sizes}>{sizes}</div>
    </OrderItemContainer>
  );
});

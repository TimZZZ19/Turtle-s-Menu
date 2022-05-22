import React, { useRef } from "react";
import MenuItemContainer from "../../reusables/MenuItemContainer";
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
    <MenuItemContainer>
      <p>Choose your size : </p>
      <div className={styles.sizes}>{sizes}</div>
    </MenuItemContainer>
  );
});

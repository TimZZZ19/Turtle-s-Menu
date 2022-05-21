import React, { useRef } from "react";
import styles from "./SizeOptions.module.css";

export default React.memo(function SizeOptions({ availableSizes, handleSize }) {
  if (!availableSizes) return;

  console.log("run again");

  const sizes = availableSizes.map((size) => (
    <span key={Math.random()} className={styles.size}>
      <input id={size} onClick={handleSize} type="radio" name="size" />
      <label>{size}</label>
    </span>
  ));

  return (
    <div className={styles["size-options"]}>
      <p>Choose your size : </p>
      <div className={styles.sizes}>{sizes}</div>
    </div>
  );
});

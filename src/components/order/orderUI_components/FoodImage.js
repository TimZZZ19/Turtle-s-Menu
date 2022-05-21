import React from "react";
import styles from "./FoodImage.module.css";

export default React.memo(function FoodImage({ name }) {
  // Image attributes
  const imgSrc = `./images/${name.split(" ").join("")}.jpg`;
  const imgAlt = `image of ${name}`;
  return (
    <div className={styles["food-img"]}>
      <img src={imgSrc} alt={imgAlt} />
    </div>
  );
});

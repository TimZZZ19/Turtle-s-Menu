import React, { useEffect } from "react";
import styles from "./PrimaryIngredient.module.css";
import OrderItemContainer from "../../reusables/OrderItemContainer";

export default React.memo(function PrimaryIngredient({
  type,
  primaryIngredients,
  handleInputIngredient,
}) {
  if (!primaryIngredients) return;

  const optionList = primaryIngredients.map((ingredient) => (
    <option key={Math.random()}>{ingredient}</option>
  ));

  return (
    <OrderItemContainer>
      <div className={styles["container"]}>
        <label htmlFor="dressings">Choose your dressing :</label>
        <select
          className={styles["list"]}
          id={type}
          name={type}
          onClick={handleInputIngredient}
        >
          {optionList}
        </select>
      </div>
    </OrderItemContainer>
  );
});

import React, { useEffect, useState } from "react";
import styles from "./PrimaryIngredient.module.css";
import OrderItemContainer from "../../reusables/OrderItemContainer";

export default React.memo(function PrimaryIngredient({
  type,
  primaryIngredients,
  handleInputIngredient,
  chozenPrimaryIngredient,
  inputIsValid,
  addHasBeenClicked,
}) {
  const [invalidClass, setInvalidClass] = useState(" ");
  useEffect(() => {
    if (addHasBeenClicked) {
      if (inputIsValid) {
        setInvalidClass(" ");
      } else {
        setInvalidClass(`${styles["invalid"]}`);
      }
    }
  }, [addHasBeenClicked, inputIsValid]);

  if (!primaryIngredients) return;

  const optionList = primaryIngredients.map((ingredient) => (
    <option key={Math.random()}>{ingredient}</option>
  ));

  return (
    <OrderItemContainer>
      <div className={styles["container"]}>
        <label className={`${invalidClass}`}>{`Choose a ${type} :`}</label>
        <select
          className={`${styles["list"]} `}
          id={type}
          name={type}
          onChange={handleInputIngredient}
          value={chozenPrimaryIngredient}
        >
          {optionList}
        </select>
      </div>
    </OrderItemContainer>
  );
});

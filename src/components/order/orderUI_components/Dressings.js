import React, { useEffect } from "react";
import styles from "./Dressings.module.css";
import OrderItemContainer from "../../reusables/OrderItemContainer";

export default React.memo(function Dressings({ dressings, handleDressings }) {
  if (!dressings) return;

  const optionList = dressings.map((dressing) => (
    <option key={Math.random()}>{dressing}</option>
  ));

  return (
    <OrderItemContainer>
      <div className={styles["dressings-container"]}>
        <label htmlFor="dressings">Choose your dressing :</label>
        <select
          className={styles["dressings-list"]}
          id="dressings"
          name="dressings"
          onClick={handleDressings}
        >
          {optionList}
        </select>
      </div>
    </OrderItemContainer>
  );
});

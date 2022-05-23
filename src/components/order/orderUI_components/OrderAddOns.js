import React from "react";
import OrderItemContainer from "../../reusables/OrderItemContainer";
import styles from "./OrderAddOns.module.css";

export default React.memo(function OrderAddOns({
  headingText,
  addOns,
  handleAddOns,
}) {
  if (!Object.keys(addOns).length) return;

  const addOnNames = Object.keys(addOns);

  const concatenateName = (name) => name.split(" ").join("");

  const addOnContent = addOnNames.map((name) => (
    <div className={styles["addOn-item"]} key={Math.random()}>
      <span>
        <input
          onClick={handleAddOns}
          type="checkbox"
          className={styles["addOn-checkbox"]}
          id={concatenateName(name)}
          name={concatenateName(name)}
          identifier={name}
        />
        <label>{name}</label>
      </span>
      <span>{`+$ ${addOns[name].toFixed(2)}`}</span>
    </div>
  ));

  return (
    <OrderItemContainer>
      <p>{headingText} :</p>
      <div className={styles.addOns}>{addOnContent}</div>
    </OrderItemContainer>
  );
});

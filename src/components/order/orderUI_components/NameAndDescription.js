import React from "react";
import OrderItemContainer from "../../reusables/OrderItemContainer";
import styles from "./NameAndDescription.module.css";

export default React.memo(function NameAndDescription({ name, description }) {
  return (
    <OrderItemContainer>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
    </OrderItemContainer>
  );
});

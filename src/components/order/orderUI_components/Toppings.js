import React from "react";
import OrderItemContainer from "../../reusables/OrderItemContainer";
import ToppingItem from "./ToppingItem";
import styles from "./Toppings.module.css";

export default React.memo(function Toppings({
  toppings,
  handleChozenToppings,
}) {
  if (!toppings) return null;

  const toppingList = toppings.map((topping) => (
    <ToppingItem
      topping={topping}
      key={Math.random()}
      handleChozenToppings={handleChozenToppings}
    />
  ));

  return (
    <OrderItemContainer>
      <p>Chooze your topping(s) :</p>
      <ul className={styles["topping-list"]}>{toppingList}</ul>
    </OrderItemContainer>
  );
});

import React, { useCallback, useEffect, useState } from "react";
import OrderItemContainer from "../../reusables/OrderItemContainer";
import ToppingItem from "./ToppingItem";
import styles from "./Toppings.module.css";

export default React.memo(function Toppings({
  toppings,
  handleChozenToppings,
  toppingsAreValid,
  addHasBeenClicked,
}) {
  const [invalidClass, setInvalidClass] = useState("");

  useEffect(() => {
    if (addHasBeenClicked) {
      if (toppingsAreValid) {
        setInvalidClass("");
      } else {
        setInvalidClass(`${styles["invalid"]}`);
      }
    }
  }, [addHasBeenClicked, toppingsAreValid]);

  const toppingList = useCallback(
    toppings.map((topping) => (
      <ToppingItem
        topping={topping}
        key={Math.random()}
        handleChozenToppings={handleChozenToppings}
      />
    )),
    [toppings]
  );

  return (
    <OrderItemContainer>
      <p className={invalidClass}>Chooze your topping(s) :</p>
      <ul className={styles["topping-list"]}>{toppingList}</ul>
    </OrderItemContainer>
  );
});

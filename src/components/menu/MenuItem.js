import React, { useContext } from "react";
import styles from "./MenuItem.module.css";
import AddOns from "./AddOns";
import MenuContext from "../../store/MenuContext";
import Button from "../reusables/Button";

export default function MenuItem({ item }) {
  const { name, description, price, prices, substitutes, extras } = item;
  const menuContext = useContext(MenuContext);

  // Food item price
  let priceInfo = (
    <p className={styles["item-price"]}>{Number(price).toFixed(2)}</p>
  );

  if (prices) {
    const { small, large } = prices;
    priceInfo = (
      <p className={styles["item-price"]}>
        S {Number(small).toFixed(2)}&nbsp;&nbsp;&nbsp;L{" "}
        {Number(large).toFixed(2)}
      </p>
    );
  }

  // Food item add-ons, such as substitutes, extra chicken, etc.
  let addOns;
  let itemSecondaryClass;

  if (substitutes) {
    itemSecondaryClass = styles["menu-item--with-add-ons"];
    addOns = <AddOns verb="With" addOns={substitutes} />;
  }

  if (extras) {
    itemSecondaryClass = styles["menu-item--with-add-ons"];
    addOns = <AddOns verb="Add" addOns={extras} />;
  }

  // Open the order UI and also pass it the info that needs to be rendered on it
  const openOrderPage = () => {
    menuContext.openOrderPage(item);
  };

  return (
    <li className={`${styles["menu-item"]} ${itemSecondaryClass}`}>
      <h4 className={styles["item-name"]}>{name}</h4>
      {priceInfo}
      <p className={styles["item-description"]}>{description}</p>
      {addOns}
      <Button
        onClick={openOrderPage}
        width={"6rem"}
        height={"3rem"}
        alignSelf={"end"}
        justifySelf={"end"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        Add
      </Button>
    </li>
  );
}

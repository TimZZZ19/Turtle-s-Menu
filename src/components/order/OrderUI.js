import React from "react";
import FoodImage from "./orderUI_components/FoodImage";
import NameAndDescription from "./orderUI_components/NameAndDescription";
import styles from "./OrderUI.module.css";
import OrderUIContainer from "./orderUI_components/OrderUIContainer";
import OrderControl from "./orderUI_components/OrderControl";

export default function OrderUI({ closeCart, currentMenuItem }) {
  const { name, description, price, prices, substitutes, extras } =
    currentMenuItem;

  return (
    <OrderUIContainer closeCart={closeCart}>
      <FoodImage name={name} />
      <NameAndDescription name={name} description={description} />
      <OrderControl />
    </OrderUIContainer>
  );
}

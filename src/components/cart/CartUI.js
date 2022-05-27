import React from "react";
import CartUIContainer from "./cartUI_components/CartUIContainer";

export default function CartUI({ closeCartPage }) {
  return (
    <CartUIContainer closeCartPage={closeCartPage}>CartUI</CartUIContainer>
  );
}

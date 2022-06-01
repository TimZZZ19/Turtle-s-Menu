import React, { useContext } from "react";
import ReactDom from "react-dom";
import Overlay from "../reusables/Overlay";
import MenuContext from "../../store/MenuContext";
import CartUI from "./CartUI";

export default function CartPage({
  openEmptyMsg,
  cartIsCleared,
  resetEmptyMsg,
}) {
  const menuContext = useContext(MenuContext);
  const {
    closeCartPage,
    cartPageIsOpen,
    cartItems,
    deliveryFee,
    removeItemFromCart,
    increaseItemQty,
    decreaseItemQty,
  } = menuContext;

  return ReactDom.createPortal(
    <>
      {cartPageIsOpen && <Overlay closeOverlaypage={closeCartPage} />}
      <CartUI
        closeCartPage={closeCartPage}
        cartPageIsOpen={cartPageIsOpen}
        cartItems={cartItems}
        deliveryFee={deliveryFee}
        removeItemFromCart={removeItemFromCart}
        increaseItemQty={increaseItemQty}
        decreaseItemQty={decreaseItemQty}
        openEmptyMsg={openEmptyMsg}
        cartIsCleared={cartIsCleared}
        resetEmptyMsg={resetEmptyMsg}
      />
    </>,
    document.getElementById("portal")
  );
}

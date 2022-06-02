import React, { useContext, useState } from "react";
import ReactDom from "react-dom";
import Overlay from "../reusables/Overlay";
import MenuContext from "../../store/MenuContext";
import CartUI from "./CartUI";
import CartUIContainer from "./cartUI_components/CartUIContainer";

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
    removeItemFromCart,
    increaseItemQty,
    decreaseItemQty,
    deliveryInfo,
    makeDeliveryChoice,
    tip,
    handleTip,
  } = menuContext;

  return ReactDom.createPortal(
    <>
      {cartPageIsOpen && <Overlay closeOverlaypage={closeCartPage} />}
      <CartUIContainer
        // Container-related info
        closeCartPage={closeCartPage}
        cartPageIsOpen={cartPageIsOpen}
        // Cart-related info
        cartItems={cartItems}
        removeItemFromCart={removeItemFromCart}
        increaseItemQty={increaseItemQty}
        decreaseItemQty={decreaseItemQty}
        openEmptyMsg={openEmptyMsg}
        cartIsCleared={cartIsCleared}
        resetEmptyMsg={resetEmptyMsg}
        deliveryInfo={deliveryInfo}
        makeDeliveryChoice={makeDeliveryChoice}
        tip={tip}
        handleTip={handleTip}
        // Payment-related info
      />
    </>,
    document.getElementById("portal")
  );
}

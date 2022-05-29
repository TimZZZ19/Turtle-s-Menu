import React, { useContext } from "react";
import ReactDom from "react-dom";
import Overlay from "../reusables/Overlay";
import MenuContext from "../../store/MenuContext";
import CartUI from "./CartUI";

export default function CartPage() {
  const menuContext = useContext(MenuContext);
  const { closeCartPage, cartPageIsOpen, cartItems } = menuContext;

  return ReactDom.createPortal(
    <>
      {cartPageIsOpen && <Overlay closeOverlaypage={closeCartPage} />}
      <CartUI
        closeCartPage={closeCartPage}
        cartPageIsOpen={cartPageIsOpen}
        cartItems={cartItems}
      />
    </>,
    document.getElementById("portal")
  );
}

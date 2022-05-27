import React, { useContext } from "react";
import ReactDom from "react-dom";
import Overlay from "../reusables/Overlay";
import MenuContext from "../../store/MenuContext";
import CartUI from "./CartUI";

export default function CartPage() {
  const menuContext = useContext(MenuContext);
  if (!menuContext.cartPageIsOpen) return null;

  const { closeCartPage } = menuContext;

  return ReactDom.createPortal(
    <>
      <Overlay closeOverlaypage={closeCartPage} />
      <CartUI closeCartPage={closeCartPage} />
    </>,
    document.getElementById("portal")
  );
}

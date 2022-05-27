import React, { useContext } from "react";
import ReactDom from "react-dom";
import Overlay from "../reusables/Overlay";
import MenuContext from "../../store/MenuContext";

export default function CartPage() {
  const menuContext = useContext(MenuContext);
  if (!menuContext.cartPageIsOpen) return null;

  return ReactDom.createPortal(
    <>
      <Overlay closeOverlaypage={menuContext.closeCartPage} />
    </>,
    document.getElementById("portal")
  );
}

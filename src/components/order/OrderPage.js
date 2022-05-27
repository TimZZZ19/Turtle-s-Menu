import React, { useContext } from "react";
import ReactDom from "react-dom";
import Overlay from "../reusables/Overlay";
import MenuContext from "../../store/MenuContext";
import OrderUI from "./OrderUI";

export default function OrderPage({ displayAddedMsg, hideAddedMsg }) {
  const menuContext = useContext(MenuContext);
  if (!menuContext.orderPageIsOpen) return null;

  return ReactDom.createPortal(
    <>
      <Overlay closeOverlaypage={menuContext.closeOrderPage} />
      <OrderUI
        closeOrderUI={menuContext.closeOrderPage}
        currentMenuItem={menuContext.currentMenuItem}
        addItemToCart={menuContext.addItemToCart}
        displayAddedMsg={displayAddedMsg}
        hideAddedMsg={hideAddedMsg}
      />
    </>,
    document.getElementById("portal")
  );
}

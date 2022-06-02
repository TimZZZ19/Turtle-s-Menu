import React, { useState } from "react";
import styles from "./CartUIContainer.module.css";
import UICloseBtn from "../../reusables/UICloseBtn";
import { useTransition, animated } from "react-spring";
import CartUI from "../CartUI";
import PaymentUI from "../PaymentUI";

export default function CartUIContainer({
  // Container-related info
  closeCartPage,
  cartPageIsOpen,
  // Cart-related info
  cartItems,
  removeItemFromCart,
  increaseItemQty,
  decreaseItemQty,
  openEmptyMsg,
  cartIsCleared,
  resetEmptyMsg,
  deliveryInfo,
  makeDeliveryChoice,
  tip,
  handleTip,
}) {
  const [cartUIIsOpen, setCartUIIsOpen] = useState(true);
  const [paymentUIIsOpen, setPaymentUIIsOpen] = useState(false);
  const transition = useTransition(cartPageIsOpen, {
    from: { opacity: 0, x: 380 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 380 },
  });

  const openPaymentUI = () => {
    setCartUIIsOpen(false);
    setPaymentUIIsOpen(true);
  };

  const goBack = () => {
    setPaymentUIIsOpen(false);
    setCartUIIsOpen(true);
  };

  return (
    <>
      {transition((style, component) =>
        component ? (
          <animated.div style={style} className={styles["cart-UI-container"]}>
            <UICloseBtn onClick={closeCartPage} />
            {cartUIIsOpen && (
              <CartUI
                cartItems={cartItems}
                removeItemFromCart={removeItemFromCart}
                increaseItemQty={increaseItemQty}
                decreaseItemQty={decreaseItemQty}
                openEmptyMsg={openEmptyMsg}
                cartIsCleared={cartIsCleared}
                resetEmptyMsg={resetEmptyMsg}
                openPaymentUI={openPaymentUI}
                deliveryInfo={deliveryInfo}
                makeDeliveryChoice={makeDeliveryChoice}
                tip={tip}
                handleTip={handleTip}
              />
            )}
            {paymentUIIsOpen && <PaymentUI goBack={goBack} />}
          </animated.div>
        ) : (
          ""
        )
      )}
    </>
  );
}

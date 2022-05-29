import React from "react";
import styles from "./CartUIContainer.module.css";
import UICloseBtn from "../../reusables/UICloseBtn";
import { useTransition, animated } from "react-spring";

export default function CartUIContainer({
  closeCartPage,
  children,
  cartPageIsOpen,
}) {
  const transition = useTransition(cartPageIsOpen, {
    from: { opacity: 0, x: 380 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 380 },
  });

  return (
    <>
      {transition((style, component) =>
        component ? (
          <animated.div style={style} className={styles["cart-UI-container"]}>
            <UICloseBtn onClick={closeCartPage} />
            {children}
          </animated.div>
        ) : (
          ""
        )
      )}
    </>
  );
}

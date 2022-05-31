import React, { useState, useRef } from "react";
import styles from "./CartUI.module.css";
import CartUIContainer from "./cartUI_components/CartUIContainer";
import CartItem from "./cartUI_components/CartItem";
import Button from "../reusables/Button";

export default function CartUI({
  closeCartPage,
  cartPageIsOpen,
  cartItems,
  deliveryFee,
  removeItemFromCart,
  increaseItemQty,
  decreaseItemQty,
}) {
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [tip, setTip] = useState("0.00");

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(deliveryCharge);
  };

  const handleDeliveryInput = (e) => {
    const option = e.target.getAttribute("id");
    switch (option) {
      case "delivery":
        setDeliveryCharge(deliveryFee);
        break;
      case "pickup":
        setDeliveryCharge(0);
        break;
    }
  };

  const receivingMethods = (
    <div className={styles["receiving-methods"]}>
      <p>This is for :</p>
      <div>
        <span>
          <input
            type="radio"
            id="delivery"
            name="receiving-methods"
            onChange={handleDeliveryInput}
            required
          />
          <label htmlFor="delivery">Delivery</label>
        </span>
        <span>
          <input
            type="radio"
            id="pickup"
            name="receiving-methods"
            onChange={handleDeliveryInput}
            required
          />
          <label htmlFor="pickup">Pickup</label>
        </span>
      </div>
    </div>
  );

  const cartItemsList = (
    <ul className={styles["cart-items"]}>
      {cartItems.map((item) => (
        <CartItem
          key={Math.random()}
          item={item}
          removeItemFromCart={removeItemFromCart}
          increaseItemQty={increaseItemQty}
          decreaseItemQty={decreaseItemQty}
        />
      ))}
    </ul>
  );

  const subtotal = cartItems
    .reduce((accSum, item) => accSum + item.qty * item.unitPrice, 0)
    .toFixed(2);

  const handleTip = (e) => {
    console.log(e.target.value);
    setTip(e.target.value);
  };

  return (
    <CartUIContainer
      closeCartPage={closeCartPage}
      cartPageIsOpen={cartPageIsOpen}
    >
      <div className={styles["cart-heading"]}>
        <p>Cart</p>
      </div>
      <form onSubmit={handleSubmission}>
        {receivingMethods}
        {cartItemsList}
        <div className={styles["cart-control"]}>
          <div className={styles["cart-summary"]}>
            <div className={styles["summary-item"]}>
              <span>Subtotal</span>
              <span className={styles["subtotal-amount"]}>$ {subtotal}</span>
            </div>
            <div className={styles["summary-item"]}>
              <span>Tip</span>
              <span>
                <label htmlFor="tip-value">$&nbsp;</label>
                <input
                  id="tip-value"
                  type="text"
                  className={styles["tip-amount"]}
                  value={tip}
                  onChange={handleTip}
                />
              </span>
            </div>
            <div className={styles["summary-item"]}>
              <span>Tax & Fees</span>
              <span className={styles["tax-fees"]}>{`$ ${2.99}`}</span>
            </div>
            <div className={`${styles["summary-item"]} ${styles.total}`}>
              <span>Total</span>
              <span className={styles["total"]}>{`$ ${22.99}`}</span>
            </div>
          </div>
          <div className={styles["cart-btns-container"]}>
            <Button
              type="button"
              privateClass={`${styles["cart-btns"]} ${styles["empty-cart"]}`}
            >
              EMPTY CART
            </Button>
            <Button
              type="submit"
              privateClass={`${styles["cart-btns"]} ${styles["check-out"]}`}
            >
              CHECK OUT
            </Button>
          </div>
        </div>
      </form>
    </CartUIContainer>
  );
}

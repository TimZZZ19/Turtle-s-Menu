import React, { useEffect, useState } from "react";
import styles from "./CartUI.module.css";
import CartItem from "./cartUI_components/CartItem";
import Button from "../reusables/Button";

export default function CartUI({
  cartItems,
  removeItemFromCart,
  increaseItemQty,
  decreaseItemQty,
  openEmptyMsg,
  cartIsCleared,
  resetEmptyMsg,
  openPaymentUI,
  deliveryInfo,
  makeDeliveryChoice,
  tip,
  handleTip,
}) {
  const handleSubmission = (e) => {
    e.preventDefault();
    openPaymentUI();
  };

  const handleDeliveryInput = (e) => {
    const option = e.target.getAttribute("id");
    makeDeliveryChoice(option);
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
            checked={deliveryInfo.delivery}
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
            checked={deliveryInfo.pickup}
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

  const tipHandler = (e) => {
    handleTip(e.target.value);
  };

  const deliveryCharge = deliveryInfo.delivery
    ? deliveryInfo.deliveryFee
    : deliveryInfo.pickupFee;

  const total = (+subtotal + +tip + +deliveryCharge).toFixed(2);

  const emtpyCart = () => {
    openEmptyMsg();
  };

  useEffect(() => {
    if (cartIsCleared) {
      cartItems.forEach((item) => {
        removeItemFromCart(item.id);
      });
      resetEmptyMsg();
      handleTip("0.00");
      makeDeliveryChoice("reset");
    }
  }, [cartIsCleared]);

  return (
    <>
      {cartItems.length === 0 ? (
        <p className={styles["empty-msg"]}>Your cart is empty</p>
      ) : (
        <main>
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
                  <span className={styles["amount"]}>$ {subtotal}</span>
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
                      onChange={tipHandler}
                    />
                  </span>
                </div>
                <div className={styles["summary-item"]}>
                  <span>Delivery Fee</span>
                  <span className={styles["amount"]}>
                    $ {deliveryCharge.toFixed(2)}
                  </span>
                </div>
                <div className={`${styles["summary-item"]} ${styles.total}`}>
                  <span>Total</span>
                  <span className={`${styles["total"]} ${styles["amount"]}`}>
                    $ {total}
                  </span>
                </div>
              </div>
              <div className={styles["cart-btns-container"]}>
                <Button
                  type="button"
                  privateClass={`${styles["cart-btns"]} ${styles["empty-cart"]}`}
                  onClick={emtpyCart}
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
        </main>
      )}
    </>
  );
}

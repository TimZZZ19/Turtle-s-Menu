import React, { useEffect, useRef } from "react";
import styles from "./CartUI.module.css";
import CartUIContainer from "./cartUI_components/CartUIContainer";
import CartItem from "./cartUI_components/CartItem";
import Button from "../reusables/Button";

export default function CartUI({ closeCartPage, cartPageIsOpen, cartItems }) {
  const deliveryRef = useRef(null);
  const pickUpRef = useRef(null);

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(
      deliveryRef.current.getAttribute("id"),
      deliveryRef.current.checked
    );
    console.log(
      pickUpRef.current.getAttribute("id"),
      pickUpRef.current.checked
    );
  };

  const receivingMethods = (
    <div className={styles["receiving-methods"]}>
      <p>This is for :</p>
      <div>
        <span>
          <input
            ref={deliveryRef}
            type="radio"
            id="delivery"
            name="receiving-methods"
            required
          />
          <label htmlFor="delivery">Delivery</label>
        </span>
        <span>
          <input
            ref={pickUpRef}
            type="radio"
            id="pickup"
            name="receiving-methods"
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
        <CartItem key={Math.random()} item={item} />
      ))}
    </ul>
  );

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
              <span className={styles["subtotal-amount"]}>{`$ ${18.99}`}</span>
            </div>
            <div className={styles["summary-item"]}>
              <span>Tip</span>
              <span>
                <label htmlFor="tip-value">$&nbsp;</label>
                <input
                  id="tip-value"
                  type="number"
                  className={styles["tip-amount"]}
                  defaultValue="0.00"
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

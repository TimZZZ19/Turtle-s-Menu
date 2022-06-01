import React, { useState } from "react";
import TextBtn from "../../reusables/TextBtn";
import styles from "./CartItem.module.css";

export default function CartItem({
  item,
  removeItemFromCart,
  increaseItemQty,
  decreaseItemQty,
}) {
  const {
    id,
    name,
    qty,
    unitPrice,
    chozenDressing,
    chozenPasta,
    chozenExtras,
    chozenSubstitutes,
    chozenToppings,
  } = item;

  const itemAdditionalInfo = (
    <>
      {/* Chozen Dressing */}
      {chozenDressing && <div>{`dressing : ${chozenDressing}`}</div>}

      {/* Chozen Pasta */}
      {chozenPasta && <div>{`pasta : ${chozenPasta}`}</div>}

      {/* Chozen Extras */}
      {chozenExtras && (
        <div>
          {chozenExtras.map((item) => (
            <p key={Math.random()}>{`add ${item}`}</p>
          ))}
        </div>
      )}

      {/* Chozen Substitutes */}
      {chozenSubstitutes && (
        <div>
          {chozenSubstitutes.map((item) => (
            <p key={Math.random()}>{`with ${item}`}</p>
          ))}
        </div>
      )}

      {/* Chozen Toppings */}
      {chozenToppings && (
        <div className={styles.toppings} key={Math.random()}>
          {Object.keys(chozenToppings).map((topping) => (
            <div className={styles.topping} key={Math.random()}>
              <span>{topping}</span>
              <span>{`${chozenToppings[topping]}x`}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );

  const handleRemove = () => {
    removeItemFromCart(id);
  };

  const handleQty = (e) => {
    const action = e.target.getAttribute("name");

    switch (action) {
      case "add-circle-outline":
        increaseItemQty(id);
        break;
      case "remove-circle-outline":
        if (qty > 1) {
          decreaseItemQty(id);
        }
        break;
    }
  };

  const secondaryClass = qty > 1 ? "" : `${styles.inactive}`;

  return (
    <li className={styles["cart-item"]}>
      <div className={styles["left-column"]}>
        <span className={styles["qty"]}>{`${qty}x`}</span>
        <div className={styles["name-column"]}>
          <p className={styles["name"]}>{name}</p>
          <div className={styles["item-additional-info"]}>
            {itemAdditionalInfo}
          </div>
          <div className={styles["item-qty-control"]}>
            <TextBtn
              privateClass={`${styles["qty-btns"]} ${secondaryClass}`}
              onClick={handleQty}
            >
              <ion-icon name="remove-circle-outline"></ion-icon>
            </TextBtn>
            <TextBtn privateClass={styles["qty-btns"]} onClick={handleQty}>
              <ion-icon name="add-circle-outline"></ion-icon>
            </TextBtn>
            <span>|</span>
            <TextBtn privateClass={styles["remove-btn"]} onClick={handleRemove}>
              REMOVE
            </TextBtn>
          </div>
        </div>
      </div>
      <span className={styles["subtotal"]}>{`$ ${(qty * unitPrice).toFixed(
        2
      )}`}</span>
    </li>
  );
}

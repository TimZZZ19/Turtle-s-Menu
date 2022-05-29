import React from "react";
import styles from "./CartItem.module.css";

export default function CartItem({ item }) {
  const {
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

  return (
    <li className={styles["cart-item"]}>
      <div className={styles["left-column"]}>
        <span className={styles["qty"]}>{`${qty}x`}</span>
        <div className={styles["name-column"]}>
          <p className={styles["name"]}>{name}</p>
          <div className={styles["item-additional-info"]}>
            {itemAdditionalInfo}
          </div>
          <div className={styles["item-control"]}>
            <button className={styles["item-control"]} type="button">
              EDIT
            </button>
            <button className={styles["item-control"]} type="button">
              REMOVE
            </button>
          </div>
        </div>
      </div>
      <span className={styles["subtotal"]}>{`$ ${(qty * unitPrice).toFixed(
        2
      )}`}</span>
    </li>
  );
}

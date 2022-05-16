import React from "react";
import styles from "./AddOns.module.css";

export default function AddOns({ addOns }) {
  return (
    <>
      <div className={styles["item-add-ons"]}>
        {addOns.map((addOn) => (
          <div className={styles["item-add-on"]} key={Math.random()}>
            <span>Add {addOn.name} </span>
            <span>{Number(addOn.price).toFixed(2)}</span>
          </div>
        ))}
      </div>
    </>
  );
}

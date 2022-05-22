import React from "react";
import styles from "./AddOns.module.css";

export default function AddOns({ verb, addOns }) {
  const addOnNames = Object.keys(addOns);

  return (
    <>
      <div className={styles["item-add-ons"]}>
        {addOnNames.map((name) => (
          <div className={styles["item-add-on"]} key={Math.random()}>
            <span>
              {verb} {name}{" "}
            </span>
            <span>{addOns[name].toFixed(2)}</span>
          </div>
        ))}
      </div>
    </>
  );
}

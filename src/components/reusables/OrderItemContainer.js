import React from "react";
import styles from "./OrderItemContainer.module.css";

export default function OrderItemContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}

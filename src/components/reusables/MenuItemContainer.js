import React from "react";
import styles from "./MenuItemContainer.module.css";

export default function MenuItemContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}

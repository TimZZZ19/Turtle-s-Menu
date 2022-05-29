import React from "react";
import styles from "./Button.module.css";

export default function Button({ type, onClick, privateClass, children }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${privateClass}`}
    >
      {children}
    </button>
  );
}

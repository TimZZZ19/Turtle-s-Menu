import React from "react";
import styles from "./TextBtn.module.css";

export default function TextBtn({ privateClass, onClick, children }) {
  return (
    <button
      className={`${styles["text-btn"]} ${privateClass}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
